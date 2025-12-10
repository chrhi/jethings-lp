"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import MaxWidthWrapper from "./max-with-wrapper"
import Link from "next/link"
import { Sparkles, CheckCircle2 } from "lucide-react"

export default function Hero() {
  const t = useTranslations("hero")

  return (
    <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 w-full overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40" />
      </div>

      {/* Decorative arrow */}
      <div className="absolute top-32 right-[15%] hidden lg:block opacity-30">
        <Image
          src="/odoo-assets/arrow_doodle_1.svg"
          alt=""
          width={60}
          height={60}
          aria-hidden="true"
        />
      </div>

      <MaxWidthWrapper className="relative z-10">
        <div className="flex flex-col items-center text-center gap-y-6 sm:gap-y-8">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-medium text-gray-600 animate-fade-in">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span>{t("badge")}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          </div>

          {/* HEADLINE */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] tracking-tight text-gray-900 max-w-5xl mx-auto px-4">
            {t("headline")}{" "}
            <span className="relative inline-block whitespace-nowrap">
              <Image
                src="/odoo-assets/highlights/yellow_highlight_03.svg"
                alt=""
                width={600}
                height={80}
                className="absolute bottom-0 left-0 w-full z-0"
                style={{ height: '0.5em' }}
                priority
                aria-hidden="true"
              />
              <span className="relative z-10">{t("headlineHighlight")}</span>
            </span>
          </h1>

          {/* SUBHEADLINE */}
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-600 max-w-3xl mx-auto px-4">
            {t("subheadline")}{" "}
            <span className="relative inline-block whitespace-nowrap">
              <Image
                src="/odoo-assets/highlights/yellow_highlight_03.svg"
                alt=""
                width={300}
                height={50}
                className="absolute bottom-0 left-0 w-full z-0"
                style={{ height: '0.4em' }}
                priority
                aria-hidden="true"
              />
              <span className="relative z-10 font-semibold text-gray-800">
                {t("subheadlineHighlight")}
              </span>
            </span>
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-gray-600 mt-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              <span>{t("feature1")}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              <span>{t("feature2")}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              <span>{t("feature3")}</span>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10">
            <Link href="#services">
              <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full text-base px-8 py-3 transition-colors">
                {t("exploreProducts")}
              </button>
            </Link>

            <Link href="https://cal.com/craftednext/30min" target="_blank">
              <button className="cursor-pointer text-base px-8 py-3 border border-gray-300 hover:border-blue-600 hover:text-blue-600 text-gray-700 font-medium rounded-full bg-white transition-colors">
                {t("bookDemo")}
              </button>
            </Link>
          </div>

          {/* Social proof */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-200 w-full max-w-2xl">
            <p className="text-sm text-gray-500 mb-6">
              {t("trustedBy")}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-70 transition-all duration-500">
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-gray-200" />
                <span className="font-semibold text-sm">Company 1</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-gray-200" />
                <span className="font-semibold text-sm">Company 2</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-gray-200" />
                <span className="font-semibold text-sm">Company 3</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-gray-200" />
                <span className="font-semibold text-sm">Company 4</span>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
