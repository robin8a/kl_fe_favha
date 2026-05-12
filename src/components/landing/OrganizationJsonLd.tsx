import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { getSiteUrl } from "@/lib/site-url";

type Props = {
  locale: string;
};

export default async function OrganizationJsonLd({ locale }: Props) {
  const loc = locale as Locale;
  const tMeta = await getTranslations({ locale: loc, namespace: "Metadata" });
  const tHero = await getTranslations({ locale: loc, namespace: "Hero" });
  const tFooter = await getTranslations({ locale: loc, namespace: "Footer" });
  const tJson = await getTranslations({ locale: loc, namespace: "JsonLd" });
  const base = getSiteUrl();
  const pageUrl = `${base}/${locale}`;
  const knowsAbout = tJson("knowsAbout")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const data = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": `${pageUrl}#organization`,
    name: tHero("acronym"),
    alternateName: tHero("fullName"),
    description: tMeta("description"),
    url: pageUrl,
    logo: `${base}/favicon.ico`,
    email: tFooter("email"),
    telephone: tFooter("phone"),
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    knowsAbout,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
