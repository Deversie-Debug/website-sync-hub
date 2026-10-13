import { property } from "@/content/property";

export function WhatsAppIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.4 9.4 0 1 1 7.98 4.41zm8-17.4A11.3 11.3 0 0 0 12.04.75C5.8.75.73 5.82.73 12.06c0 2 .52 3.94 1.51 5.65L.64 23.25l5.67-1.49a11.3 11.3 0 0 0 5.73 1.46h.01c6.24 0 11.31-5.07 11.31-11.31 0-3.02-1.18-5.86-3.31-8z" />
    </svg>
  );
}

/** Small WhatsApp chat link shown next to the phone number. */
export function WhatsAppLink({ className = "", label = true }: { className?: string; label?: boolean }) {
  return (
    <a
      href={property.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with us on WhatsApp at ${property.phone}`}
      className={`inline-flex items-center gap-1.5 ${className}`}
    >
      <WhatsAppIcon className="size-4 shrink-0" />
      {label && <span>WhatsApp</span>}
    </a>
  );
}
