import { getTranslations } from "next-intl/server";
import { Building2 } from "lucide-react";

export default async function Alliances() {
  const t = await getTranslations("Alliances");
  const p = await getTranslations("AlliancePlaceholder");

  const slots = [
    { key: "a", label: p("a") },
    { key: "b", label: p("b") },
    { key: "c", label: p("c") },
    { key: "d", label: p("d") },
  ] as const;

  return (
    <section
      id="alliances"
      className="border-b border-earth-200 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-human-800 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-pretty text-earth-700">{t("body")}</p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {slots.map(({ key, label }) => (
            <li
              key={key}
              className="flex aspect-[4/3] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-earth-300 bg-earth-50/80 p-4 text-center"
            >
              <Building2
                className="mb-2 h-10 w-10 text-earth-400"
                strokeWidth={1.25}
                aria-hidden
              />
              <span className="text-xs font-medium uppercase tracking-wide text-earth-600">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
