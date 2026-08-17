import {
  PHONE_NUMBER,
  SUPPORT_EMAIL,
  WHATSAPP_NUMBER,
  mailtoLink,
  telLink,
  whatsappLink,
  type LocaleCode,
} from "@/config/site.config";
import { IconChat, IconMail, IconPhone } from "./Icons";

const COPY = {
  de: {
    email: { title: "E-Mail", body: "Ausführliche Fragen und alles, wozu Screenshots gehören." },
    whatsapp: { title: "WhatsApp", body: "Kurze Rückfragen während der Einrichtung." },
    phone: { title: "Telefon", body: "Wenn schreiben zu umständlich ist." },
    action: "Öffnen",
  },
  tr: {
    email: { title: "E-posta", body: "Ayrıntılı sorular ve ekran görüntüsü gerektiren konular." },
    whatsapp: { title: "WhatsApp", body: "Kurulum sırasındaki kısa sorular." },
    phone: { title: "Telefon", body: "Yazmanın zahmetli olduğu durumlar." },
    action: "Aç",
  },
} as const;

export default function ContactBlocks({ locale }: { locale: LocaleCode }) {
  const c = COPY[locale];
  const hasPhone = PHONE_NUMBER.replace(/[^0-9]/g, "").length >= 8;
  const hasWhatsapp = WHATSAPP_NUMBER.replace(/[^0-9]/g, "").length >= 8;

  const cards = [
    { icon: IconMail, ...c.email, value: SUPPORT_EMAIL, href: mailtoLink, external: false, show: true },
    { icon: IconChat, ...c.whatsapp, value: WHATSAPP_NUMBER, href: whatsappLink, external: true, show: hasWhatsapp },
    { icon: IconPhone, ...c.phone, value: PHONE_NUMBER, href: telLink, external: false, show: hasPhone },
  ].filter((card) => card.show);

  return (
    <div className="not-prose my-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <a
            key={card.title}
            href={card.href}
            {...(card.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="glass group rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/35"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gold-400/12 text-gold-300">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-base font-semibold text-mist-100">{card.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-mist-400">{card.body}</p>
            <p className="mt-3 break-all text-sm font-medium text-gold-300 group-hover:text-gold-200">
              {card.value}
            </p>
          </a>
        );
      })}
    </div>
  );
}
