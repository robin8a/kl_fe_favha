import { getTranslations } from "next-intl/server";
import { Binoculars, Target } from "lucide-react";

export default async function MissionVision() {
  const t = await getTranslations("MissionVision");

  return (
    <section
      id="mission"
      className="border-b border-earth-200 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 sm:gap-12 sm:px-6">
        <article className="rounded-2xl border border-earth-200 bg-earth-50/80 p-8 shadow-sm">
          <div className="mb-4 inline-flex rounded-xl bg-human-700 p-3 text-white">
            <Target className="h-6 w-6" aria-hidden />
          </div>
          <h2 className="text-xl font-semibold text-human-800 sm:text-2xl">
            {t("missionTitle")}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-earth-800">
            {t("missionBody")}
          </p>
        </article>
        <article className="rounded-2xl border border-earth-200 bg-gradient-to-b from-white to-earth-50 p-8 shadow-sm">
          <div className="mb-4 inline-flex rounded-xl bg-earth-600 p-3 text-white">
            <Binoculars className="h-6 w-6" aria-hidden />
          </div>
          <h2 className="text-xl font-semibold text-human-800 sm:text-2xl">
            {t("visionTitle")}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-earth-800">
            {t("visionBody")}
          </p>
        </article>
      </div>
    </section>
  );
}
