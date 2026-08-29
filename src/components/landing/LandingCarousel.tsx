"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Package,
  PawPrint,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  CAROUSEL_FILTERS,
  type CarouselFilter,
  type CarouselImage,
  getCarouselImages,
} from "@/lib/carousel-images";

const FILTER_ICONS = {
  all: null,
  people: Users,
  animals: PawPrint,
  catastrophes: Package,
} as const;

const FILTER_LABEL_KEYS = {
  all: "filterAll",
  people: "filterPeople",
  animals: "filterAnimals",
  catastrophes: "filterCatastrophes",
} as const;

export default function LandingCarousel() {
  const t = useTranslations("LandingCarousel");
  const [filter, setFilter] = useState<CarouselFilter>("all");
  const images = getCarouselImages(filter);

  return (
    <section
      id="gallery"
      className="border-b border-earth-200 bg-earth-100/50 py-12 sm:py-16"
      aria-labelledby="carousel-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="carousel-heading"
          className="mb-6 text-center text-2xl font-semibold text-human-800 sm:text-3xl"
        >
          {t("heading")}
        </h2>

        <div
          className="mb-6 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label={t("filtersLabel")}
        >
          {CAROUSEL_FILTERS.map((id) => {
            const Icon = FILTER_ICONS[id];
            const selected = filter === id;
            return (
              <button
                key={id}
                type="button"
                aria-pressed={selected}
                onClick={() => setFilter(id)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium shadow-sm transition ${
                  selected
                    ? "border-human-700 bg-human-700 text-white"
                    : "border-earth-200 bg-white text-earth-800 hover:bg-earth-50"
                }`}
              >
                {Icon ? <Icon className="h-4 w-4" aria-hidden /> : null}
                {t(FILTER_LABEL_KEYS[id])}
              </button>
            );
          })}
        </div>

        <CarouselViewport key={filter} images={images} />
      </div>
    </section>
  );
}

function CarouselViewport({ images }: { images: readonly CarouselImage[] }) {
  const t = useTranslations("LandingCarousel");
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "center", loop: true }, [
    Autoplay({ delay: 5200, stopOnInteraction: true, stopOnMouseEnter: true }),
  ]);
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const categoryLabel = (category: CarouselImage["category"]) =>
    t(FILTER_LABEL_KEYS[category]);

  return (
    <>
      <div className="relative">
        <div className="overflow-hidden rounded-2xl border border-earth-200 bg-earth-50 shadow-lg ring-1 ring-black/5">
          <div ref={emblaRef}>
            <div className="flex">
              {images.map((image, index) => (
                <div
                  key={image.src}
                  className="relative min-w-0 shrink-0 grow-0 basis-full"
                >
                  <div className="relative aspect-[16/10] w-full sm:aspect-[21/9]">
                    <Image
                      src={image.src}
                      alt={t("slideAlt", {
                        category: categoryLabel(image.category),
                        n: index + 1,
                        total: images.length,
                      })}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 1152px"
                      priority={index === 0}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-earth-200 bg-white/95 text-human-800 shadow-md transition hover:bg-white sm:left-4"
          onClick={() => emblaApi?.scrollPrev()}
          aria-label={t("prev")}
        >
          <ChevronLeft className="h-6 w-6" aria-hidden />
        </button>
        <button
          type="button"
          className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-earth-200 bg-white/95 text-human-800 shadow-md transition hover:bg-white sm:right-4"
          onClick={() => emblaApi?.scrollNext()}
          aria-label={t("next")}
        >
          <ChevronRight className="h-6 w-6" aria-hidden />
        </button>
      </div>

      <p className="mt-3 text-center text-sm text-earth-700" aria-live="polite">
        {t("slideCount", { n: selected + 1, total: images.length })}
      </p>

      <div
        className="mt-3 flex flex-wrap justify-center gap-2"
        role="tablist"
        aria-label={t("goTo")}
      >
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            role="tab"
            aria-selected={selected === index}
            className={`h-2.5 w-2.5 rounded-full transition sm:h-3 sm:w-3 ${
              selected === index
                ? "bg-human-600"
                : "bg-earth-300 hover:bg-earth-400"
            }`}
            aria-label={`${t("goTo")} ${index + 1}`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </>
  );
}
