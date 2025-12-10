"use client"

import { useTranslations } from "next-intl"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Image from "next/image"
import { BentoFeatures } from "@/components/bento-features"
import { AppsCurasol } from "@/components/apps-curasol"
import MaxWidthWrapper from "@/components/max-with-wrapper"
import { Check, Eye } from "lucide-react"

export default function Page() {
  const tContact = useTranslations("contact")

  const t = useTranslations("jOptics")

  const benefits = t.raw("benefits.items") as string[]
  return (
    <div className="flex flex-col items-center min-h-screen h-fit bg-gray-50">
      {/* Spacer for header */}
      <div className="w-full h-[70px] bg-white" />

      {/* Hero Section */}
      <section id="home" className="w-full h-fit min-h-screen bg-white ">
        <Hero />
      </section>

      <section id="features" className="mt-0">
        <BentoFeatures />
      </section>

      <section id="curasol" className="my-20">
        <AppsCurasol />
      </section>

      {/* Benefits Section */}
      <section className="w-full py-24 bg-white mt-0">
        <MaxWidthWrapper>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <div
                className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
                style={{ backgroundColor: "#5481aa" }}
              />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <Image
                  src="/j-optic/screen-02.png"
                  alt="J Optics Stock Management"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 px-6 py-4 rounded-xl shadow-lg bg-white border border-gray-100">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `#5481aa15` }}
                  >
                    <Eye className="w-6 h-6" style={{ color: "#5481aa" }} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{t("trustedBy")}</p>
                    <p className="text-sm text-gray-500">{t("opticalStores")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <p
                className="text-sm font-semibold tracking-wider uppercase mb-4"
                style={{ color: "#5481aa" }}
              >
                {t("benefits.title")}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {t("benefitsSectionTitle")}
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                {t("benefitsSectionDescription")}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `#5481aa20` }}
                    >
                      <Check className="w-4 h-4" style={{ color: "#5481aa" }} />
                    </div>
                    <span className="text-gray-700 font-medium text-sm">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="w-full py-16 sm:py-20 md:py-24 mb-12 sm:mb-16 md:mb-20 lg:mb-24   overflow-hidden"
      >
        <MaxWidthWrapper className="relative">
          <div className="absolute -left-16 top-6 h-48 w-48 rounded-full bg-[#ECFDF3] blur-3xl opacity-60 pointer-events-none hidden sm:block" />
          <div className="absolute -right-12 bottom-6 h-40 w-40 rounded-full bg-[#E0F2FE] blur-3xl opacity-50 pointer-events-none hidden sm:block" />

          <div className="relative overflow-hidden rounded-3xl border  bg-white ">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8FBFF] to-white opacity-90" />
            <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-10 px-6 py-10 sm:px-12 sm:py-12 md:px-16 md:py-16 lg:px-20">
              <div className="max-w-3xl space-y-6">
                <p className="inline-flex items-center gap-2 rounded-full bg-[#E0F2FE] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2563eb]">
                  {tContact("headlineHighlight")}
                </p>
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    {tContact("headline")}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                    {tContact("description")}
                  </p>
                </div>
              </div>

              <div className="w-full">
                <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white/90 p-6 shadow-lg backdrop-blur">
                  <p className="text-sm font-medium text-gray-700">
                    {tContact("ctaDescription")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
