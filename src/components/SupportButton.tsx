import { SUPPORT_EMAIL, WHATSAPP_NUMBER, whatsappLink, mailtoLink } from "@/config/site.config";
import { IconChat } from "./Icons";
import { buttonStyles } from "./ui";

/**
 * Configurable support button.
 * Uses WhatsApp when a number is configured, otherwise falls back to e-mail.
 */
export default function SupportButton({
  label,
  variant = "primary",
  className = "",
  compact = false,
}: {
  label: string;
  variant?: keyof typeof buttonStyles;
  className?: string;
  compact?: boolean;
}) {
  const hasWhatsapp = WHATSAPP_NUMBER.replace(/[^0-9]/g, "").length >= 8;
  const href = hasWhatsapp ? whatsappLink : mailtoLink;
  const external = hasWhatsapp;

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={`${label} (${hasWhatsapp ? WHATSAPP_NUMBER : SUPPORT_EMAIL})`}
      className={`${buttonStyles[variant]} ${compact ? "px-4 py-2.5 text-[13px]" : ""} ${className}`}
    >
      <IconChat className="h-4 w-4" />
      {label}
    </a>
  );
}
