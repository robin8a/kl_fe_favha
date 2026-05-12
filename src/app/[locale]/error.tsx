"use client";

import { AlertTriangle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function LocaleError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("ErrorPage");

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center bg-earth-50 px-4 py-16 text-center">
      <AlertTriangle
        className="h-12 w-12 text-human-600"
        strokeWidth={1.5}
        aria-hidden
      />
      <h1 className="mt-6 text-2xl font-semibold text-earth-900">
        {t("title")}
      </h1>
      <p className="mt-3 max-w-md text-pretty text-earth-700">{t("body")}</p>
      {process.env.NODE_ENV === "development" && error.message ? (
        <pre className="mt-6 max-w-lg overflow-x-auto rounded-lg bg-earth-200/80 p-3 text-left text-xs text-earth-900">
          {error.message}
        </pre>
      ) : null}
      <button
        type="button"
        onClick={() => reset()}
        className="mt-8 rounded-xl bg-human-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-human-600"
      >
        {t("retry")}
      </button>
    </div>
  );
}
