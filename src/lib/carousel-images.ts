const INCEPTION_IMAGES = Array.from(
  { length: 15 },
  (_, i) => `/inception-carousel/image_${String(i + 1).padStart(3, "0")}.jpeg`,
);

const AUGUST_2026_IMAGES = Array.from(
  { length: 26 },
  (_, i) => `/carousel/image_${String(i + 1).padStart(3, "0")}.jpg`,
);

export const CAROUSEL_IMAGES: readonly string[] = [
  ...INCEPTION_IMAGES,
  ...AUGUST_2026_IMAGES,
];
