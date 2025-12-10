"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import MaxWidthWrapper from "@/components/max-with-wrapper"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Zap, Users } from "lucide-react"

export default function AboutPage() {
  const t = useTranslations("about")

  const benefits = [
    {
      icon: Zap,
      title: t("easySetup.title"),
      description: t("easySetup.description"),
    },
    {
      icon: Users,
      title: t("support24_7.title"),
      description: t("support24_7.description"),
    },
    {
      icon: CheckCircle2,
      title: t("retailFocused.title"),
      description: t("retailFocused.description"),
    },
  ]

  return (
    <div className="flex flex-col items-center min-h-screen h-fit bg-gray-50">
      {/* Spacer for header */}
      <div className="w-full h-[70px] bg-white" />

      {/* Hero Section */}
      <section className="w-full py-16 sm:py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40" />
        </div>

        <MaxWidthWrapper className="relative">
          <div className="text-center mb-12 sm:mb-16">
            <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 mb-4">
              {t("sectionLabel")}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight max-w-4xl mx-auto">
              {t("headline")}{" "}
              <span className="relative inline-block">
                <span className="relative z-10">{t("headlineHighlight")}</span>
                <Image
                  src="/odoo-assets/highlights/green_highlight_03.svg"
                  alt="highlight"
                  width={400}
                  height={60}
                  className="absolute bottom-[10%] left-0 w-full z-0 pointer-events-none"
                />
              </span>
            </h1>
          </div>

          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              {t("paragraph1")}
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              {t("paragraph2")}
            </p>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-white">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-200"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600/10 mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <MaxWidthWrapper>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t("ctaTitle")}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t("ctaDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-semibold">
                  {t("viewPricing")}
                </Button>
              </Link>
              <Link href="/#contact">
                <Button
                  variant="outline"
                  className="rounded-full border-2 border-gray-300 text-gray-900 hover:border-blue-600 hover:text-blue-600 px-8 py-3 text-base font-semibold"
                >
                  {t("contactUs")}
                </Button>
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
