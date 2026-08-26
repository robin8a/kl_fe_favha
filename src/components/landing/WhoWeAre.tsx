import { getTranslations } from "next-intl/server";

export default async function WhoWeAre() {
  const t = await getTranslations("WhoWeAre");

  return (
    <section
      id="who-we-are"
      className="border-b border-earth-200 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-human-800 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-earth-800">
            {t("body")}
          </p>
        </div>
      </div>
    </section>
  );
}
