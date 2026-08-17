/**
 * ---------------------------------------------------------------------------
 *  GERMANY IPTV — ORDER LOGGER (Google Apps Script Web App)
 * ---------------------------------------------------------------------------
 *  Receives one order from the website checkout and appends it as a row to the
 *  spreadsheet, using the existing column layout:
 *
 *    A Date · B Nom · C Email · D Téléphone · E Formule
 *    F Prix (€) · G Connexions · H Paiement · I Statut
 *
 *  Deployment steps are in SETUP.md — read that first.
 * ---------------------------------------------------------------------------
 */

/* ===========================================================================
 *  CONFIGURATION
 * =========================================================================== */

/** Spreadsheet that receives the orders. */
var SHEET_ID = '1vbzgIHtUseOvOpwwPEYAfIWbQblzNmc3O-cJmux5ebY';

/** Tab name inside that spreadsheet. Created automatically if missing. */
var SHEET_NAME = 'Commandes';

/**
 * Optional shared secret. Leave '' to accept any request.
 * If you set it here, set the SAME value in ORDER_WEBHOOK_TOKEN
 * inside src/config/site.config.ts.
 */
var SHARED_SECRET = '';

/** Send yourself an e-mail for every new order. '' disables it. */
var NOTIFY_EMAIL = 'xyz905391@gmail.com';

/** Default value written into the "Statut" column. */
var DEFAULT_STATUS = 'Nouveau';

/** Timezone used to stamp the order date. */
var TIMEZONE = 'Europe/Berlin';

/* ===========================================================================
 *  WEB APP ENTRY POINTS
 * =========================================================================== */

/**
 * Health check — open the /exec URL in a browser and you should see
 * {"ok":true,"service":"germany-iptv-orders"}
 */
function doGet() {
  return json({ ok: true, service: 'germany-iptv-orders' });
}

/**
 * Order intake. The site posts JSON with Content-Type: text/plain so the
 * browser treats it as a simple request and skips the CORS preflight that
 * Apps Script web apps cannot answer.
 */
function doPost(e) {
  try {
    var data = parseBody(e);

    if (SHARED_SECRET && String(data.token || '') !== SHARED_SECRET) {
      return json({ ok: false, error: 'unauthorized' });
    }

    // Guard against accidental double submits (same e-mail + plan within 60s).
    if (isDuplicate(data)) {
      return json({ ok: true, duplicate: true });
    }

    var row = buildRow(data);
    var sheet = getSheet();
    sheet.appendRow(row);

    // Keep the freshly written row readable.
    var last = sheet.getLastRow();
    sheet.getRange(last, 1, 1, row.length).setVerticalAlignment('middle');

    notify(data, row);

    return json({ ok: true, row: last });
  } catch (err) {
    console.error(err);
    return json({ ok: false, error: String(err) });
  }
}

/* ===========================================================================
 *  HELPERS
 * =========================================================================== */

function parseBody(e) {
  if (!e) return {};
  if (e.postData && e.postData.contents) {
    try {
      return JSON.parse(e.postData.contents);
    } catch (err) {
      // Fall through to form-encoded parameters.
    }
  }
  return e.parameter || {};
}

/** Opens the target tab, creating it with a styled header row if needed. */
function getSheet() {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    var headers = [
      'Date',
      'Nom',
      'Email',
      'Téléphone',
      'Formule',
      'Prix (€)',
      'Connexions',
      'Paiement',
      'Statut',
    ];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight('bold');
    sheet.setFrozenRows(1);
    sheet.setColumnWidths(1, headers.length, 150);
  }

  return sheet;
}

/** Maps the JSON payload onto the spreadsheet columns, in order. */
function buildRow(data) {
  var when = data.date ? new Date(data.date) : new Date();
  var stamp = Utilities.formatDate(when, TIMEZONE, 'dd/MM/yyyy HH:mm');

  var formula = String(data.plan || '');
  if (data.duration) formula += ' — ' + data.duration;

  var price = data.price === '' || data.price === null || data.price === undefined
    ? ''
    : Number(data.price);

  return [
    stamp,
    String(data.name || ''),
    String(data.email || ''),
    String(data.phone || ''),
    formula,
    price,
    Number(data.connections || 1),
    String(data.payment || ''),
    String(data.status || DEFAULT_STATUS),
  ];
}

/** True when the same e-mail ordered the same plan less than a minute ago. */
function isDuplicate(data) {
  var email = String(data.email || '').toLowerCase();
  if (!email) return false;

  var cache = CacheService.getScriptCache();
  var key = 'order:' + email + ':' + String(data.plan || '') + ':' + String(data.connections || '');
  if (cache.get(key)) return true;
  cache.put(key, '1', 60);
  return false;
}

function notify(data, row) {
  if (!NOTIFY_EMAIL) return;
  try {
    var body =
      'Neue Bestellung / Yeni sipariş\n\n' +
      'Datum:       ' + row[0] + '\n' +
      'Name:        ' + row[1] + '\n' +
      'E-Mail:      ' + row[2] + '\n' +
      'Telefon:     ' + row[3] + '\n' +
      'Formule:     ' + row[4] + '\n' +
      'Preis:       ' + (data.priceLabel || row[5]) + '\n' +
      'Verbindungen:' + row[6] + '\n' +
      'Zahlung:     ' + row[7] + '\n' +
      'Gerät:       ' + (data.device || '—') + '\n' +
      'Sprache:     ' + (data.language || '—');
    MailApp.sendEmail(NOTIFY_EMAIL, 'Germany IPTV — neue Bestellung', body);
  } catch (err) {
    console.error('notify failed: ' + err);
  }
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

/* ===========================================================================
 *  TEST — run this once from the Apps Script editor to confirm the sheet
 *  connection works. It writes a single obviously-fake row you can delete.
 * =========================================================================== */

function testAppend() {
  var result = doPost({
    postData: {
      contents: JSON.stringify({
        token: SHARED_SECRET,
        date: new Date().toISOString(),
        name: 'TEST — bitte löschen',
        email: 'test@example.com',
        phone: '+49 000 0000000',
        plan: 'Gold',
        duration: '15 Monate · +3 Monate gratis',
        price: 49.99,
        priceLabel: '$49.99',
        connections: 2,
        payment: 'WhatsApp',
        device: 'Fire TV Stick',
        language: 'de',
        status: 'Test',
      }),
    },
  });
  console.log(result.getContent());
}
