"use client"

import { Features } from "@/components/feature"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Image from "next/image"

export default function Page() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      {/* Spacer for header */}
      <div className="w-full h-[70px] bg-white" />

      {/* Hero Section */}
      <Hero />

      {/* Features */}
      <Features />

      {/* Headline Section */}
      <section className="flex flex-col gap-y-4 items-center px-4 text-center relative mt-16 sm:mt-24 md:mt-32">
        <div className="absolute -left-6 sm:-left-10 top-0 hidden md:block">
          <Image
            src="/odoo-assets/arrow_doodle_3.svg"
            alt="decorative arrow"
            width={70}
            height={70}
            className="opacity-60"
          />
        </div>

        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl max-w-3xl leading-snug">
          Imagine a vast collection of business features at your disposal.
        </h2>

        <div className="space-y-1 sm:space-y-2">
          <p className="text-base sm:text-lg md:text-xl">
            Got something to improve? There’s a feature for that.
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            No complexity, no cost — just one-click setup.
          </p>
        </div>

        <div className="my-6 space-y-2 sm:space-y-3">
          <p className="text-sm sm:text-base md:text-lg">
            Each feature simplifies a process and empowers people.
          </p>
          <p className="text-sm sm:text-base md:text-lg">
            Imagine the impact when everyone gets the right tool for the job —
            perfectly integrated.
          </p>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="w-full bg-white rounded-none md:rounded-l-full shadow-2xl min-h-[500px] sm:min-h-[600px] md:min-h-[800px] relative my-16 sm:my-24 md:my-32 flex flex-col items-center gap-y-6 md:gap-y-10 pt-12 sm:pt-16 md:pt-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
        {/* Quote Bubble */}
        {/* <div className="w-full sm:max-w-[500px] md:max-w-[700px] absolute right-0 -top-10 sm:-top-14 md:-top-20">
          <div className="relative flex items-start justify-start px-4 sm:px-0">
            <Image
              src={"/odoo-assets/highlights/bg_yellow.svg"}
              alt="yellow image"
              width={250}
              height={100}
              className="w-[160px] sm:w-[200px] md:w-[250px]"
            />
            <div className="absolute left-6 sm:left-12 md:left-20 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full px-4 sm:px-6 py-3 sm:py-4 max-w-[240px]">
              <p className="text-sm sm:text-base md:text-lg text-start leading-snug">
                If you simplify everything, you can do anything!
              </p>
              <span className="text-gray-400 text-[10px] sm:text-xs block mt-1">
                — Bill McDermott, former CEO of SAP
              </span>
            </div>
          </div>
        </div> */}

        {/* Title */}
        <h1 className="font-caveat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F1117] text-center px-4 relative leading-tight">
          Level up your quality of{" "}
          <span className="relative inline-block">
            <span className="relative z-10">work</span>
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

        {/* Image Grid */}
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 rounded-xl overflow-hidden shadow-2xl mt-6 sm:mt-10 px-2">
          {[
            "/app-screenshots/pos-order-management.png",
            "/app-screenshots/purchase-invoice.png",
            "/app-screenshots/sync-order.png",
            "/app-screenshots/purchase-confirm.png",
          ].map((src, i) => (
            <div
              key={i}
              className="relative w-full aspect-[4/3] rounded-lg overflow-hidden"
            >
              <Image
                src={src}
                alt={`screenshot-${i}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Decoration */}
        <div className="absolute -bottom-6 -right-6 hidden md:block z-10 opacity-40">
          <Image
            src="/odoo-assets/fireworks_01a.svg"
            alt="decorative fireworks"
            width={100}
            height={100}
          />
        </div>
      </section>

      {/* Showcase Section */}
      <section className="w-full px-4 py-16 sm:py-20 relative bg-gray-50">
        <div className="absolute top-0 right-0 hidden lg:block opacity-60">
          <Image
            src="/odoo-assets/arrow_doodle_4.svg"
            alt="decorative arrow"
            width={120}
            height={120}
          />
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F1117]">
              See our apps in action
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Discover how our suite of business apps can transform your
              workflow and boost productivity.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-4 sm:gap-6 max-w-md mx-auto md:mx-0">
            {[
              "/app-screenshots/pos-shifts.png",
              "/app-screenshots/supplier-table.png",
              "/app-screenshots/chose-fromold-new.png",
              "/app-screenshots/pos-openning.png",
            ].map((src, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={src}
                  alt={`screenshot-${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
