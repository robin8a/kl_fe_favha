import { getTranslations } from "next-intl/server";

export default async function OurHistory() {
  const t = await getTranslations("OurHistory");
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <section
      id="our-history"
      className="border-b border-earth-200 bg-earth-50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-human-800 sm:text-4xl">
          {t("title")}
        </h2>

        <div className="mt-10 space-y-5 text-pretty leading-relaxed text-earth-800">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>

        <blockquote className="mt-10 border-l-4 border-human-600 bg-white px-6 py-5 shadow-sm">
          <p className="text-pretty text-lg font-medium italic leading-relaxed text-human-800">
            {t("quote")}
          </p>
        </blockquote>

        <div className="mt-10 text-center">
          <p className="text-pretty font-medium leading-relaxed text-earth-800">
            {t("signOff")}
          </p>
          <p className="mt-6 font-semibold text-human-800">{t("author")}</p>
          <p className="mt-1 text-sm uppercase tracking-wide text-earth-600">
            FAVHA
          </p>
        </div>
      </div>
    </section>
  );
}
