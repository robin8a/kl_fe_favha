export const CAROUSEL_CATEGORIES = [
  "people",
  "animals",
  "catastrophes",
] as const;

export type CarouselCategory = (typeof CAROUSEL_CATEGORIES)[number];

export const CAROUSEL_FILTERS = ["all", ...CAROUSEL_CATEGORIES] as const;

export type CarouselFilter = (typeof CAROUSEL_FILTERS)[number];

export type CarouselHintKey =
  | "hintColombiaQuindioTebaida"
  | "hintMiamiFlorida";

export type CarouselImage = {
  src: string;
  category: CarouselCategory;
  hintKey?: CarouselHintKey;
};

const COUNTS = {
  people: 23,
  animals: 14,
  catastrophes: 18,
} as const;

function imagesFor(
  folder: string,
  count: number,
  category: CarouselCategory,
  hintKey?: CarouselHintKey,
  start = 1,
): readonly CarouselImage[] {
  return Array.from({ length: count }, (_, i) => ({
    src: `/${folder}/image_${String(start + i).padStart(3, "0")}.jpg`,
    category,
    ...(hintKey ? { hintKey } : {}),
  }));
}

export const CAROUSEL_IMAGES_BY_CATEGORY: Record<
  CarouselCategory,
  readonly CarouselImage[]
> = {
  people: imagesFor("_people", COUNTS.people, "people"),
  animals: [
    ...imagesFor("_animals", COUNTS.animals, "animals"),
    ...imagesFor("_animals", 2, "animals", "hintMiamiFlorida", 15),
  ],
  catastrophes: [
    ...imagesFor("_catastrophes", COUNTS.catastrophes, "catastrophes"),
    ...imagesFor(
      "_catastrophes",
      4,
      "catastrophes",
      "hintColombiaQuindioTebaida",
      19,
    ),
  ],
};

export const CAROUSEL_IMAGES: readonly CarouselImage[] = [
  ...CAROUSEL_IMAGES_BY_CATEGORY.people,
  ...CAROUSEL_IMAGES_BY_CATEGORY.animals,
  ...CAROUSEL_IMAGES_BY_CATEGORY.catastrophes,
];

export function getCarouselImages(
  filter: CarouselFilter,
): readonly CarouselImage[] {
  if (filter === "all") return CAROUSEL_IMAGES;
  return CAROUSEL_IMAGES_BY_CATEGORY[filter];
}
