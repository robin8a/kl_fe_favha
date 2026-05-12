"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { CAROUSEL_IMAGES } from "@/lib/carousel-images";

export default function LandingCarousel() {
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

  return (
    <section
      className="border-b border-earth-200 bg-earth-100/50 py-12 sm:py-16"
      aria-labelledby="carousel-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="carousel-heading"
          className="mb-8 text-center text-2xl font-semibold text-human-800 sm:text-3xl"
        >
          {t("heading")}
        </h2>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-earth-200 bg-earth-50 shadow-lg ring-1 ring-black/5">
            <div ref={emblaRef}>
              <div className="flex">
                {CAROUSEL_IMAGES.map((src, index) => (
                  <div
                    key={src}
                    className="relative min-w-0 shrink-0 grow-0 basis-full"
                  >
                    <div className="relative aspect-[16/10] w-full sm:aspect-[21/9]">
                      <Image
                        src={src}
                        alt=""
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

        <div
          className="mt-4 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label={t("goTo")}
        >
          {CAROUSEL_IMAGES.map((_, index) => (
            <button
              key={index}
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
      </div>
    </section>
  );
}
