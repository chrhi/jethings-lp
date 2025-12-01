"use client"

import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"
import MaxWidthWrapper from "@/components/max-with-wrapper"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Package, TrendingUp, Users, ShoppingCart, BarChart3, CreditCard } from "lucide-react"

export default function JStorePage() {
  const t = useTranslations("jStore")
  const primaryColor = "#45ACAB"
  
  const features = [
    {
      icon: ShoppingCart,
      title: t("features.pointOfSale.title"),
      description: t("features.pointOfSale.description")
    },
    {
      icon: Package,
      title: t("features.inventoryManagement.title"),
      description: t("features.inventoryManagement.description")
    },
    {
      icon: Users,
      title: t("features.customerManagement.title"),
      description: t("features.customerManagement.description")
    },
    {
      icon: TrendingUp,
      title: t("features.salesAnalytics.title"),
      description: t("features.salesAnalytics.description")
    },
    {
      icon: BarChart3,
      title: t("features.reporting.title"),
      description: t("features.reporting.description")
    },
    {
      icon: CreditCard,
      title: t("features.paymentProcessing.title"),
      description: t("features.paymentProcessing.description")
    },
  ]

  const benefits = t.raw("benefits.items")

  const screenshots = [
    {
      src: "/j-store/screen-01.png",
      alt: t("screenshots.dashboard"),
      title: t("screenshots.dashboard")
    },
    {
      src: "/j-store/screen-02.png",
      alt: t("screenshots.inventory"),
      title: t("screenshots.inventory")
    },
    {
      src: "/j-store/screen-03.png",
      alt: t("screenshots.sales"),
      title: t("screenshots.sales")
    },
  ]

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      {/* Spacer for header */}
      <div className="w-full h-[70px] bg-white" />

      {/* Hero Section */}
      <section className="w-full bg-white py-16 md:py-24">
        <MaxWidthWrapper>
          <div className="flex flex-col items-center text-center gap-8">
            {/* Logo */}
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4"
              style={{ backgroundColor: `${primaryColor}15` }}
            >
              <Image
                src="/logos/2.svg"
                alt="J Store"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 max-w-3xl">
              {t("headline")}{" "}
              <span
                className="relative inline-block"
                style={{ color: primaryColor }}
              >
                {t("headlineHighlight")}
                <span
                  className="absolute bottom-0 left-0 w-full h-[8px] -z-10 opacity-30 rounded"
                  style={{ backgroundColor: primaryColor }}
                />
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
              {t("subheadline")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link href="https://cal.com/craftednext/30min" target="_blank">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: primaryColor }}
                >
                  {t("bookDemo")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="#screenshots">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-2"
                  style={{ borderColor: primaryColor, color: primaryColor }}
                >
                  {t("viewScreenshots")}
                </Button>
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="w-full py-24 bg-gradient-to-b from-gray-50 to-white">
        <MaxWidthWrapper>
          <div className="text-center mb-16">
            <p 
              className="text-sm font-semibold tracking-wider uppercase mb-4"
              style={{ color: primaryColor }}
            >
              {t("productPreview")}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("screenshotsTitle")}
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              {t("screenshotsDescription")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-xl transition-all duration-300">
                  {/* Number badge */}
                  <div 
                    className="absolute top-4 left-4 z-10 w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-lg"
                    style={{ backgroundColor: primaryColor }}
                  >
                    {index + 1}
                  </div>
                  
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      width={800}
                      height={450}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay on hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                      style={{ backgroundColor: primaryColor }}
                    />
                  </div>
                  
                  {/* Title */}
                  <div className="p-5 border-t border-gray-100">
                    <h3 className="font-semibold text-gray-900 text-lg">{screenshot.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{screenshot.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-20 bg-white">
        <MaxWidthWrapper>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("featuresSectionTitle")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("featuresSectionDescription")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg bg-white"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${primaryColor}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: primaryColor }} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-24 bg-white">
        <MaxWidthWrapper>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <div 
                className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
                style={{ backgroundColor: primaryColor }}
              />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <Image
                  src="/j-store/screen-02.png"
                  alt="J Store Inventory Management"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              {/* Floating badge */}
              <div 
                className="absolute -bottom-6 -right-6 px-6 py-4 rounded-xl shadow-lg bg-white border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${primaryColor}15` }}
                  >
                    <ShoppingCart className="w-6 h-6" style={{ color: primaryColor }} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Trusted by</p>
                    <p className="text-sm text-gray-500">Shoe retailers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <p 
                className="text-sm font-semibold tracking-wider uppercase mb-4"
                style={{ color: primaryColor }}
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
                      style={{ backgroundColor: `${primaryColor}20` }}
                    >
                      <Check
                        className="w-4 h-4"
                        style={{ color: primaryColor }}
                      />
                    </div>
                    <span className="text-gray-700 font-medium text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-white">
        <MaxWidthWrapper>
          <div
            className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
            style={{ backgroundColor: `${primaryColor}05` }}
          >
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                {t("ctaSectionTitle")}
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t("ctaSectionDescription")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="https://cal.com/craftednext/30min" target="_blank">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 text-white hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: primaryColor }}
                  >
                    {t("bookDemo")}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/#services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 border-2 bg-white"
                    style={{ borderColor: primaryColor, color: primaryColor }}
                  >
                    {t("viewAllProducts")}
                  </Button>
                </Link>
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

