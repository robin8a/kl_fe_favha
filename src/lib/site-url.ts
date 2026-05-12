export const defaultSiteUrl = "https://www.favha.org";

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl;
}
