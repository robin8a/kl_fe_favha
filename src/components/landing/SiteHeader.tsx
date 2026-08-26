import { getTranslations } from "next-intl/server";
import { HeartHandshake } from "lucide-react";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "./LocaleSwitcher";

export default async function SiteHeader() {
  const t = await getTranslations("SiteHeader");
  const links = [
    { href: "#who-we-are", label: t("navWhoWeAre") },
    { href: "#mission", label: t("navMission") },
    { href: "#programs", label: t("navPrograms") },
    { href: "#alliances", label: t("navAlliances") },
    { href: "#cta", label: t("navCta") },
    { href: "#contact", label: t("navContact") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-earth-200/80 bg-earth-50/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 text-human-800 transition hover:text-human-600"
        >
          <HeartHandshake
            className="h-8 w-8 shrink-0 text-human-600"
            aria-hidden
          />
          <span className="truncate font-semibold tracking-tight">
            {t("brand")}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-4 text-sm font-medium text-earth-800 lg:flex xl:gap-5"
          aria-label="Primary"
        >
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="transition hover:text-human-700"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <details className="relative lg:hidden">
            <summary className="cursor-pointer list-none rounded-lg border border-earth-200 bg-white px-3 py-2 text-sm font-medium text-earth-800 shadow-sm [&::-webkit-details-marker]:hidden">
              {t("openMenu")}
            </summary>
            <div className="absolute right-0 z-50 mt-2 flex w-52 flex-col gap-1 rounded-xl border border-earth-200 bg-white p-2 shadow-lg">
              {links.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-lg px-3 py-2 text-sm text-earth-800 hover:bg-earth-100"
                >
                  {label}
                </a>
              ))}
            </div>
          </details>
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
