"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-earth-200 bg-white/90 p-1 text-sm shadow-sm"
      role="group"
      aria-label={t("label")}
    >
      <span className="sr-only">{t("label")}</span>
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => router.replace(pathname, { locale: loc })}
          className={`rounded-full px-3 py-1 font-medium transition ${
            locale === loc
              ? "bg-human-700 text-white shadow"
              : "text-earth-700 hover:bg-earth-100"
          }`}
        >
          {loc === "es" ? t("es") : t("en")}
        </button>
      ))}
    </div>
  );
}
