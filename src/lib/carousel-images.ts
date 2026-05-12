/** Paths under `public/` (symlinked to `_inception/images`). */
export const CAROUSEL_IMAGES: readonly string[] = Array.from(
  { length: 15 },
  (_, i) =>
    `/inception-carousel/image_${String(i + 1).padStart(3, "0")}.jpeg`,
);
