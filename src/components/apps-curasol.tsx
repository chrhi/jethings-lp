"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { useState, useEffect } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import MaxWidthWrapper from "./max-with-wrapper"
import { Button } from "./ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

export function AppsCurasol() {
  const t = useTranslations("features")
  const [api, setApi] = useState<CarouselApi>()
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const cards = [
    {
      title: t("jStore.name"),
      description: `${t("jStore.description")} ${t("jStore.highlight")}.`,
      accent: "from-[#E9F5FF] via-[#ECFDF3] to-[#FDF2F8]",
      image: "/logos/2.svg",
    },
    {
      title: t("jOptics.name"),
      description: `${t("jOptics.description")} ${t("jOptics.highlight")}.`,
      accent: "from-[#F5F3FF] via-[#E0F2FE] to-[#ECFDF3]",
      image: "/logos/j-optic-logo.svg",
    },
  ]

  const showNav = cards.length > 1

  useEffect(() => {
    if (!api) return

    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())

    api.on("select", () => {
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    })
  }, [api])

  return (
    <section className="w-full overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white py-16 sm:py-24 border rounded-md sm:overflow-visible ">
      <MaxWidthWrapper className="relative overflow-hidden sm:overflow-visible">
        <div className="absolute -left-32 top-12 h-64 w-64 rounded-full bg-[#E0F2FE] blur-3xl opacity-50 pointer-events-none hidden sm:block" />
        <div className="absolute -right-24 bottom-12 h-56 w-56 rounded-full bg-[#ECFDF3] blur-3xl opacity-50 pointer-events-none hidden sm:block" />

        <div className="relative mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4 flex-1">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                {t("appsCarousel.label")}
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight max-w-3xl">
                {t("appsCarousel.title")}
              </h2>
            </div>
            
            {/* Mobile Navigation Buttons - Same level as title */}
            {showNav && (
              <div className="flex items-center justify-center gap-3 sm:hidden">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => api?.scrollPrev()}
                  disabled={!canScrollPrev}
                  className="size-10 rounded-full bg-white shadow-md border-slate-200 hover:bg-slate-50 hover:border-blue-600 disabled:opacity-50"
                >
                  <ArrowLeft className="size-4" />
                  <span className="sr-only">Previous slide</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => api?.scrollNext()}
                  disabled={!canScrollNext}
                  className="size-10 rounded-full bg-white shadow-md border-slate-200 hover:bg-slate-50 hover:border-blue-600 disabled:opacity-50"
                >
                  <ArrowRight className="size-4" />
                  <span className="sr-only">Next slide</span>
                </Button>
              </div>
            )}
          </div>
          
          <div className="flex flex-col items-center text-center gap-4">
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl">
              {t("appsCarousel.description")}
            </p>
            <Button className="rounded-full bg-blue-600 px-5 sm:px-6 py-2 text-white hover:bg-blue-700 shadow-sm">
              {t("appsCarousel.findOutMore")}
            </Button>
          </div>
        </div>

        <div className="relative">
          <Carousel opts={{ align: "start", loop: false }} setApi={setApi} className="w-full">
            <CarouselContent className="-ml-2 sm:-ml-4">
              {cards.map((card, idx) => (
                <CarouselItem
                  key={card.title + idx}
                  className="basis-full sm:basis-1/2 lg:basis-1/3 pl-2 sm:pl-4"
                >
                  <div className="group h-full rounded-3xl border border-slate-100 bg-white/90 backdrop-blur shadow-sm ring-1 ring-slate-100/60 overflow-hidden transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg">
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${card.accent}`}
                      />
                      <div className="absolute inset-0 bg-white/40" />
                      <div className="relative flex h-full items-center justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-slate-100">
                          <Image
                            src={card.image}
                            alt={card.title}
                            width={48}
                            height={48}
                            className="h-12 w-12 object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col gap-3">
                      <h3 className="text-lg font-semibold text-slate-900">
                        {card.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
