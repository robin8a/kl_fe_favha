import { getTranslations } from "next-intl/server";
import { HandHeart, Shield } from "lucide-react";

export default async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-earth-200/60 bg-gradient-to-br from-human-800 via-human-700 to-earth-700 text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 0%, transparent 45%), radial-gradient(circle at 80% 60%, #c4a574 0%, transparent 40%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-earth-100">
            <Shield className="h-3.5 w-3.5" aria-hidden />
            {t("acronym")}
          </p>
          <h1 className="text-balance font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
            {t("fullName")}
          </h1>
          <p className="mt-6 text-pretty text-lg text-white/90 sm:text-xl">
            {t("tagline")}
          </p>
          <p className="mt-4 flex items-center justify-center gap-2 text-sm text-earth-100 sm:text-base">
            <HandHeart className="h-5 w-5 shrink-0 text-earth-200" aria-hidden />
            <span>{t("trustLine")}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
