"use client"

import { useTranslations } from "next-intl"
import SendRequestModal from "@/components/cta"
import { Features } from "@/components/feature"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  const tCapabilities = useTranslations("capabilities")
  const tAbout = useTranslations("about")
  const tContact = useTranslations("contact")
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      {/* Spacer for header */}
      <div className="w-full h-[70px] bg-white" />

      {/* Hero Section */}
      <section id="home" className="w-full h-fit bg-white curved-edge">
        <Hero />
      </section>

      {/* Features */}
      <section id="services">
        <Features />
      </section>

      {/* Headline Section */}
      <section
        id="capabilities"
        className="flex flex-col gap-y-6 items-center px-4 text-center relative mt-16 sm:mt-24 md:mt-32 max-w-5xl mx-auto"
      >
        <div className="absolute -left-6 sm:-left-10 top-0 hidden md:block">
          <Image
            src="/odoo-assets/arrow_doodle_3.svg"
            alt="decorative arrow"
            width={70}
            height={70}
            className="opacity-60"
          />
        </div>

        <div className="absolute -right-6 sm:-right-10 bottom-0 hidden md:block opacity-40">
          <Image
            src="/odoo-assets/arrow_doodle_4.svg"
            alt="decorative arrow"
            width={100}
            height={100}
          />
        </div>
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-4xl leading-loose relative inline-block">
          {tCapabilities("headline")}{" "}
          <span className="relative inline-block align-baseline">
            <span className="relative z-10">{tCapabilities("headlineHighlight")}</span>
            <Image
              src="/odoo-assets/highlights/blue_highlight_bold_03.svg"
              alt="highlight"
              width={400}
              height={50}
              className="absolute bottom-[10%] left-0 w-full z-0 pointer-events-none"
            />
          </span>
        </h2>
        <div className="space-y-3 sm:space-y-4 mt-4">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-800">
            {tCapabilities("description1")}
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-800">
            {tCapabilities("description2")}
          </p>
        </div>

        <div className="my-8 space-y-4 sm:space-y-5 max-w-3xl">
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            {tCapabilities("paragraph1")}
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            {tCapabilities("paragraph2")}
          </p>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 w-full max-w-4xl">
          <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-semibold text-lg mb-2 text-gray-900">
              {tCapabilities("inventoryManagement.title")}
            </h3>
            <p className="text-sm text-gray-600">
              {tCapabilities("inventoryManagement.description")}
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-semibold text-lg mb-2 text-gray-900">
              {tCapabilities("salesAnalytics.title")}
            </h3>
            <p className="text-sm text-gray-600">
              {tCapabilities("salesAnalytics.description")}
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-semibold text-lg mb-2 text-gray-900">
              {tCapabilities("customerManagement.title")}
            </h3>
            <p className="text-sm text-gray-600">
              {tCapabilities("customerManagement.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Highlight Section */}
      <section
        id="about"
        className="w-full bg-white rounded-none md:rounded-l-full shadow-2xl relative my-16 sm:my-24 md:my-32 flex flex-col items-center gap-y-8 md:gap-y-12 pt-12 sm:pt-16 md:pt-24 px-4 sm:px-6 lg:px-12 pb-12 sm:pb-16 md:pb-24 overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute -top-6 -left-6 hidden md:block z-10 opacity-30">
          <Image
            src="/odoo-assets/fireworks_01a.svg"
            alt="decorative fireworks"
            width={80}
            height={80}
          />
        </div>

        <div className="absolute -bottom-6 -right-6 hidden md:block z-10 opacity-40">
          <Image
            src="/odoo-assets/fireworks_01a.svg"
            alt="decorative fireworks"
            width={100}
            height={100}
          />
        </div>

        {/* Title */}
        <h1 className="font-caveat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F1117] text-center px-4 relative leading-tight max-w-4xl">
          {tAbout("headline")}{" "}
          <span className="relative inline-block">
            <span className="relative z-10">{tAbout("headlineHighlight")}</span>
            <Image
              src="/odoo-assets/highlights/green_highlight_03.svg"
              alt="highlight"
              width={600}
              height={60}
              className="absolute bottom-[12%] left-0 w-full z-0"
              priority
            />
          </span>
        </h1>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mt-6">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            {tAbout("paragraph1")}
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            {tAbout("paragraph2")}
          </p>
        </div>

        {/* Stats or benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-8 w-full max-w-4xl">
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-3xl md:text-4xl font-bold text-[#45ACAB] mb-2">
              {tAbout("easySetup.title")}
            </div>
            <p className="text-sm md:text-base text-gray-600">
              {tAbout("easySetup.description")}
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-3xl md:text-4xl font-bold text-[#45ACAB] mb-2">
              {tAbout("support24_7.title")}
            </div>
            <p className="text-sm md:text-base text-gray-600">
              {tAbout("support24_7.description")}
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-3xl md:text-4xl font-bold text-[#45ACAB] mb-2">
              {tAbout("retailFocused.title")}
            </div>
            <p className="text-sm md:text-base text-gray-600">{tAbout("retailFocused.description")}</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="w-full px-4 py-16 sm:py-20 md:py-24 relative bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden">
            {/* Background illustration */}
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 opacity-20 md:opacity-30 pointer-events-none">
              <Image
                src="/odoo-assets/illustration_doodle_02.svg"
                alt="decorative illustration"
                width={384}
                height={384}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl">
              <h2 className="font-caveat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                {tContact("headline")}{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">{tContact("headlineHighlight")}</span>
                  <Image
                    src="/odoo-assets/highlights/yellow_highlight_bold_05.svg"
                    alt="highlight"
                    width={300}
                    height={60}
                    className="absolute bottom-[10%] left-0 w-full z-0"
                  />
                </span>
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed">
                {tContact("description")}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <SendRequestModal />
                <Link
                  href={"https://cal.com/craftednext/30min"}
                  target="_blank"
                >
                  <button className="cursor-pointer font-medium rounded-md transition text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-3 sm:py-4 bg-white border-2 border-gray-300 text-gray-900 hover:border-[#45ACAB] hover:text-[#45ACAB] hover:bg-gray-50">
                    {tContact("bookDemo")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
