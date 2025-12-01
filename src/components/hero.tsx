"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import MaxWidthWrapper from "./max-with-wrapper"
import { Button } from "./ui/button"
import Link from "next/link"

export default function Hero() {
  const t = useTranslations("hero")

  return (
    <>
      <section className="relative py-12 sm:py-16 md:py-20  w-full ">
        <MaxWidthWrapper className="h-fit">
          <div className="flex flex-col items-center text-center gap-y-6 sm:gap-y-8">
            {/* HEADLINE */}
            <h1 className="relative font-caveat text-[3rem] sm:text-[3.6rem] md:text-[5rem] lg:text-[5.2rem] font-bold leading-tight text-[#0F1117]">
              {t("headline")}{" "}
              <span className="relative inline-block">
                <span className="relative z-10">{t("headlineHighlight")}</span>
                <Image
                  src="/odoo-assets/highlights/yellow_highlight_bold_05.svg"
                  alt="highlight"
                  width={600}
                  height={60}
                  className="absolute bottom-[12%] left-0 w-full z-0"
                  priority
                />
              </span>
            </h1>

            {/* SUBHEADLINE */}
            <p className="relative font-semibold font-caveat text-[1.75rem] sm:text-[1.9rem] md:text-[2.75rem] lg:text-[3rem] text-[#0F1117]">
              {t("subheadline")}{" "}
              <span className="relative inline-block">
                <span className="relative z-10">{t("subheadlineHighlight")}</span>
                <Image
                  src="/odoo-assets/highlights/blue_highlight_01.svg"
                  alt="highlight"
                  width={300}
                  height={40}
                  className="absolute bottom-[10%] left-0 w-full z-0"
                  priority
                />
              </span>
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6">
              <Link href={"#services"} target="_self">
                <button className="button-33 cursor-pointer font-medium rounded-md transition text-lg sm:text-lg md:text-xl !px-8 sm:!px-10 md:!px-12 !py-[0.9rem] sm:!py-4">
                  {t("exploreProducts")}
                </button>
              </Link>

              <Link href={"https://cal.com/craftednext/30min"} target="_blank">
                <Button
                  className="cursor-pointer text-lg sm:text-lg md:text-xl !px-8 sm:!px-10 md:!px-12 !py-[0.9rem] sm:!py-4"
                  variant={"ghost"}
                  size={"lg"}
                >
                  {t("bookDemo")}
                </Button>
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
