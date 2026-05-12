import ActionLines from "@/components/landing/ActionLines";
import Alliances from "@/components/landing/Alliances";
import CtaBand from "@/components/landing/CtaBand";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import LandingCarousel from "@/components/landing/LandingCarousel";
import MissionVision from "@/components/landing/MissionVision";
import SiteHeader from "@/components/landing/SiteHeader";
import OrganizationJsonLd from "@/components/landing/OrganizationJsonLd";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import type { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = getSiteUrl();
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "Metadata",
  });
  const title = t("title");
  const description = t("description");
  const keywords = t("keywords")
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean);

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    keywords,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: `${baseUrl}/es`,
        en: `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description,
      url: `/${locale}`,
      siteName: "FAVHA",
      locale: locale === "es" ? "es_CO" : "en_US",
      alternateLocale: locale === "es" ? ["en_US"] : ["es_CO"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description,
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <OrganizationJsonLd locale={locale} />
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <LandingCarousel />
        <MissionVision />
        <ActionLines />
        <Alliances />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
