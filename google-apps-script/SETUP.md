# Order logging → Google Sheets

Every checkout submission is appended as a row to your spreadsheet:

**`1vbzgIHtUseOvOpwwPEYAfIWbQblzNmc3O-cJmux5ebY`**

| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| Date | Nom | Email | Téléphone | Formule | Prix (€) | Connexions | Paiement | Statut |

---

## 1. Create the script

1. Open your spreadsheet.
2. **Extensions → Apps Script**.
3. Delete the sample `myFunction` code.
4. Paste the whole contents of **`Code.gs`**.
5. At the top of the file, check these values:

   ```js
   var SHEET_ID   = '1vbzgIHtUseOvOpwwPEYAfIWbQblzNmc3O-cJmux5ebY';
   var SHEET_NAME = 'Commandes';   // tab name — created automatically if missing
   var SHARED_SECRET = '';         // optional, see step 4
   var NOTIFY_EMAIL  = '';         // put your e-mail here to get an alert per order
   ```

   If your orders tab is already named something else (for example `Feuille 1`),
   change `SHEET_NAME` to match — otherwise the script creates a new `Commandes`
   tab with the header row.

6. Save (💾).

## 2. Test before deploying

In the editor, pick **`testAppend`** from the function dropdown and press **Run**.

- Google asks for authorisation the first time → **Review permissions** → choose
  your account → **Advanced** → **Go to … (unsafe)** → **Allow**. This warning is
  normal for personal scripts.
- A row named `TEST — bitte löschen` appears in the sheet. Delete it afterwards.

If that row appears, the sheet connection is correct.

## 3. Deploy as a Web App

1. **Deploy → New deployment**.
2. Gear icon → **Web app**.
3. Settings:
   - **Description:** `Germany IPTV orders`
   - **Execute as:** **Me** (your account)
   - **Who has access:** **Anyone**  ← required; the website is not logged in
4. **Deploy** → authorise if asked → copy the **Web app URL**. It looks like:

   ```
   https://script.google.com/macros/s/AKfy...long.../exec
   ```

5. Paste it into the site config:

   ```ts
   // src/config/site.config.ts
   export const ORDER_WEBHOOK_URL = "https://script.google.com/macros/s/AKfy.../exec";
   ```

6. Rebuild the site (`npm run build`).

> **Every time you edit `Code.gs`, you must run Deploy → Manage deployments →
> ✏️ Edit → Version: *New version* → Deploy.** Saving alone does not update the
> live `/exec` URL. This trips up almost everyone the first time.

## 4. Optional: shared secret

To stop strangers writing rows into your sheet, set the same random string in
both places:

```js
// Code.gs
var SHARED_SECRET = 'ein-langes-zufaelliges-wort';
```

```ts
// src/config/site.config.ts
export const ORDER_WEBHOOK_TOKEN = "ein-langes-zufaelliges-wort";
```

Note this token ships in the public JavaScript bundle, so it deters casual abuse
rather than a determined attacker. For real protection, put a small server-side
endpoint of your own in front of the script.

---

## How the site talks to the script

The checkout POSTs JSON with `Content-Type: text/plain;charset=utf-8`. That is
deliberate: it keeps the request "simple" in CORS terms, so the browser does not
send a preflight `OPTIONS` — which Apps Script web apps cannot answer. Do not
change it to `application/json` or the request will start failing in the browser
while still working in tools like curl.

Payload sent:

```json
{
  "token": "",
  "date": "2026-08-17T18:20:00.000Z",
  "name": "Max Mustermann",
  "email": "max@example.com",
  "phone": "+49 170 0000000",
  "plan": "Gold",
  "months": 18,
  "duration": "15 Monate · +3 Monate gratis",
  "price": 49.99,
  "priceLabel": "$49.99",
  "connections": 2,
  "payment": "WhatsApp",
  "device": "Fire TV Stick",
  "language": "de",
  "status": "Nouveau"
}
```

`Formule` in the sheet is written as `plan — duration`, e.g. `Gold — 15 Monate ·
+3 Monate gratis`. `Prix (€)` receives a real number so you can sum the column.

## Checkout behaviour

`ORDER_MODE` in `src/config/site.config.ts` decides what happens after the row is
written:

- `"whatsapp"` (current) — opens WhatsApp with a pre-filled order message to
  `WHATSAPP_NUMBER`. Set that number before going live, otherwise the link goes
  nowhere.
- `"payment"` — forwards to `PAYMENT_CHECKOUT_URL` instead and shows the payment
  method picker in the modal.

If `ORDER_WEBHOOK_URL` is left empty the checkout still works — it simply skips
the logging step and goes straight to the handover.

## Troubleshooting

| Symptom | Cause |
|---|---|
| Nothing arrives in the sheet | Deployment access is not **Anyone**, or you edited the script without deploying a **new version** |
| Rows land in the wrong tab | `SHEET_NAME` does not match your tab name |
| `unauthorized` in the response | `SHARED_SECRET` and `ORDER_WEBHOOK_TOKEN` differ |
| Works in curl, fails in the browser | The `Content-Type` was changed away from `text/plain` |
| Duplicate rows on double-click | Already handled — identical e-mail + plan within 60 s is ignored |
