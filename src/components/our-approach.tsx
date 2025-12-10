"use client"

import Image from "next/image"
import MaxWidthWrapper from "./max-with-wrapper"

const approaches = [
  {
    id: "discover",
    number: "1",
    title: "Discover",
    description:
      "We begin by understanding your business goals, target audience, and project requirements. This foundation allows us to develop solutions that align perfectly with your vision.",
    highlight: "/odoo-assets/highlights/blue_highlight_01.svg",
  },
  {
    id: "design",
    number: "2",
    title: "Design",
    description:
      "Our designers create intuitive interfaces and seamless user experiences that engage your audience and communicate your brand effectively.",
    highlight: "/odoo-assets/highlights/yellow_highlight_03.svg",
  },
  {
    id: "develop",
    number: "3",
    title: "Develop",
    description:
      "Using cutting-edge technologies and best practices, our development team brings your vision to life with clean, efficient, and scalable code.",
    highlight: "/odoo-assets/highlights/green_highlight_03.svg",
  },
  {
    id: "deploy",
    number: "4",
    title: "Deploy",
    description:
      "We ensure a smooth launch and provide ongoing support to keep your digital products performing at their best.",
    highlight: "/odoo-assets/highlights/blue_highlight_bold_03.svg",
  },
]

export default function OurApproach() {
  return (
    <section className="w-full px-4 py-20 bg-gradient-to-b  relative">
      {/* Decorative elements */}
      <div className="absolute -left-6 sm:-left-10 top-20 hidden md:block opacity-40">
        <Image
          src="/odoo-assets/arrow_doodle_3.svg"
          alt="decorative arrow"
          width={70}
          height={70}
        />
      </div>

      <MaxWidthWrapper>
        {/* Header */}
        <div className="max-w-full mr-auto text-start space-y-6 mb-20 relative">
          <h2 className="text-4xl md:text-6xl font-caveat font-bold text-gray-900 leading-tight relative inline-block">
            <Image
              src="/odoo-assets/highlights/yellow_highlight_bold_05.svg"
              alt="highlight"
              width={300}
              height={60}
              className="absolute bottom-[10%] left-0 w-full z-0 opacity-80"
            />
            <span className="relative z-10">Our Approach</span>
          </h2>
          <p className="text-gray-600 text-lg font-caveat leading-relaxed max-w-3xl">
            We follow a structured, collaborative process to ensure your digital
            solution meets your business objectives. Each phase is designed to
            deliver value and keep you informed every step of the way.
          </p>
        </div>

        {/* Approach Steps */}
        <div className="max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approaches.map((approach, index) => (
              <div
                key={approach.id}
                className="group text-left p-6 rounded-xl transition-all duration-300 hover:shadow-xl bg-white border border-gray-200 hover:border-blue-600 relative"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4  mr-2 transition-colors bg-gray-100 text-gray-600 group-hover:bg-blue-600 group-hover:text-white relative">
                  <span className="text-xl font-bold relative z-10">
                    {approach.number}
                  </span>
                </div>
                <h4 className="text-lg font-semibold mb-3 transition-colors text-gray-900 relative inline-block">
                  <span className="relative z-10">{approach.title}</span>
                  <Image
                    src={approach.highlight}
                    alt="highlight"
                    width={200}
                    height={40}
                    className="absolute bottom-0 left-0 w-full z-0 opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                  />
                </h4>
                <p className="text-sm leading-relaxed transition-colors text-gray-600 relative z-10">
                  {approach.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional content */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Our collaborative approach means you're involved at every stage.
              We believe in transparency, regular communication, and iterative
              feedback to ensure the final product exceeds your expectations.
            </p>
            <p className="text-sm md:text-base text-gray-600">
              From initial discovery to post-launch support, we're committed to
              your success and the long-term growth of your digital presence.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
