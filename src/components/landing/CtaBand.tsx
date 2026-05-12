import { getTranslations } from "next-intl/server";

export default async function CtaBand() {
  const t = await getTranslations("CtaBand");

  return (
    <section
      id="cta"
      className="border-b border-earth-900/10 bg-gradient-to-r from-human-800 to-human-700 py-16 text-white sm:py-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">{t("title")}</h2>
          <p className="mt-4 text-pretty text-lg text-white/90">{t("body")}</p>
        </div>
        <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center lg:w-auto lg:flex-col lg:items-stretch">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-human-800 shadow-lg transition hover:bg-earth-50"
          >
            {t("donate")}
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl border-2 border-white/70 bg-transparent px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
          >
            {t("join")}
          </a>
        </div>
      </div>
    </section>
  );
}
