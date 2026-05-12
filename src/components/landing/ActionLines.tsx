import { getTranslations } from "next-intl/server";
import {
  HandCoins,
  HeartPulse,
  PawPrint,
  Scale,
  Sprout,
  Stethoscope,
  Users,
} from "lucide-react";

export default async function ActionLines() {
  const t = await getTranslations("ActionLines");

  const humanCards = [
    {
      title: t("human1Title"),
      body: t("human1Body"),
      Icon: HeartPulse,
    },
    {
      title: t("human2Title"),
      body: t("human2Body"),
      Icon: Users,
    },
    {
      title: t("human3Title"),
      body: t("human3Body"),
      Icon: HandCoins,
    },
  ];

  const animalCards = [
    {
      title: t("animal1Title"),
      body: t("animal1Body"),
      Icon: Stethoscope,
    },
    {
      title: t("animal2Title"),
      body: t("animal2Body"),
      Icon: PawPrint,
    },
    {
      title: t("animal3Title"),
      body: t("animal3Body"),
      Icon: Sprout,
    },
    {
      title: t("animal4Title"),
      body: t("animal4Body"),
      Icon: Scale,
    },
  ];

  return (
    <section
      id="programs"
      className="border-b border-earth-200 bg-earth-50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-human-800 sm:text-4xl">
            {t("sectionTitle")}
          </h2>
          <p className="mt-4 text-pretty text-earth-700">
            {t("sectionSubtitle")}
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 border-b border-human-600/20 pb-2 text-lg font-semibold uppercase tracking-wide text-human-800">
              {t("humansTitle")}
            </h3>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {humanCards.map(({ title, body, Icon }) => (
                <li
                  key={title}
                  className="flex flex-col rounded-xl border border-earth-200 bg-white p-5 shadow-sm"
                >
                  <Icon
                    className="mb-3 h-8 w-8 text-human-600"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <h4 className="font-semibold text-earth-900">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-earth-700">
                    {body}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 border-b border-earth-500/30 pb-2 text-lg font-semibold uppercase tracking-wide text-earth-800">
              {t("animalsTitle")}
            </h3>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {animalCards.map(({ title, body, Icon }) => (
                <li
                  key={title}
                  className="flex flex-col rounded-xl border border-earth-200 bg-white p-5 shadow-sm"
                >
                  <Icon
                    className="mb-3 h-8 w-8 text-earth-600"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <h4 className="font-semibold text-earth-900">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-earth-700">
                    {body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
