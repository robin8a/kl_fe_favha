import { getTranslations } from "next-intl/server";
import { Mail, MapPin, MessageCircle, Phone, Share2 } from "lucide-react";

export default async function Footer() {
  const t = await getTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-earth-900 text-earth-100"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-earth-300">
            {t("contact")}
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-earth-400" aria-hidden />
              <a href={`mailto:${t("email")}`} className="hover:text-white">
                {t("email")}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-earth-400" aria-hidden />
              <a href={`tel:${t("phone").replace(/\s/g, "")}`} className="hover:text-white">
                {t("phone")}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-earth-400" aria-hidden />
              <span>{t("city")}</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-earth-300">
            {t("social")}
          </h2>
          <ul className="mt-4 flex gap-4">
            <li>
              <a
                href="#"
                className="inline-flex rounded-lg border border-earth-600 p-2 text-earth-200 transition hover:border-earth-400 hover:text-white"
                aria-label="Facebook"
              >
                <Share2 className="h-5 w-5" aria-hidden />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex rounded-lg border border-earth-600 p-2 text-earth-200 transition hover:border-earth-400 hover:text-white"
                aria-label="Instagram"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex rounded-lg border border-earth-600 p-2 text-earth-200 transition hover:border-earth-400 hover:text-white"
                aria-label="X"
              >
                <span className="px-0.5 text-xs font-bold" aria-hidden>
                  X
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="sm:col-span-2 lg:col-span-1">
          <p className="text-sm leading-relaxed text-earth-300">
            {t("jurisdiction")}
          </p>
        </div>
      </div>

      <div className="border-t border-earth-800">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-earth-500 sm:px-6 sm:text-left">
          {t("rights", { year })}
        </div>
      </div>
    </footer>
  );
}
