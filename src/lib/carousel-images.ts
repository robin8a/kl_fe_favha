export const CAROUSEL_CATEGORIES = [
  "people",
  "animals",
  "catastrophes",
] as const;

export type CarouselCategory = (typeof CAROUSEL_CATEGORIES)[number];

export const CAROUSEL_FILTERS = ["all", ...CAROUSEL_CATEGORIES] as const;

export type CarouselFilter = (typeof CAROUSEL_FILTERS)[number];

export type CarouselImage = {
  src: string;
  category: CarouselCategory;
};

const COUNTS = {
  people: 23,
  animals: 13,
  catastrophes: 19,
} as const;

function imagesFor(
  folder: string,
  count: number,
  category: CarouselCategory,
): readonly CarouselImage[] {
  return Array.from({ length: count }, (_, i) => ({
    src: `/${folder}/image_${String(i + 1).padStart(3, "0")}.jpg`,
    category,
  }));
}

export const CAROUSEL_IMAGES_BY_CATEGORY: Record<
  CarouselCategory,
  readonly CarouselImage[]
> = {
  people: imagesFor("_people", COUNTS.people, "people"),
  animals: imagesFor("_animals", COUNTS.animals, "animals"),
  catastrophes: imagesFor("_catastrophes", COUNTS.catastrophes, "catastrophes"),
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
