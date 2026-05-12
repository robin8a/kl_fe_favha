"use client";

import { Home } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function LocaleNotFound() {
  const t = useTranslations("NotFoundPage");

  return (
    <main className="flex min-h-[55vh] flex-col items-center justify-center bg-earth-50 px-4 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-human-600">
        {t("code")}
      </p>
      <h1 className="mt-3 max-w-md text-2xl font-semibold text-earth-900 sm:text-3xl">
        {t("title")}
      </h1>
      <p className="mt-4 max-w-md text-pretty text-earth-700">{t("body")}</p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 rounded-xl bg-human-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-human-600"
      >
        <Home className="h-4 w-4" aria-hidden />
        {t("home")}
      </Link>
    </main>
  );
}
