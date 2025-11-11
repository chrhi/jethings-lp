"use client"

import * as React from "react"

import MaxWidthWrapper from "./max-with-wrapper"

export const Features = () => {
  const features = [
    {
      name: "Web Development",
      image: "/app-screenshots/pos-openning.png",
      description:
        "Modern, responsive web applications built with React, Next.js, and TypeScript. Scalable solutions that grow with your business.",
    },
    {
      name: "Mobile App Development",
      image: "/app-screenshots/pos-order-management.png",
      description:
        "Native iOS and Android apps, plus cross-platform solutions. Delivering seamless mobile experiences that engage your users.",
    },
    {
      name: "Full-Stack Solutions",
      image: "/app-screenshots/pos-shifts.png",
      description:
        "End-to-end development from frontend to backend. Complete systems with APIs, databases, and cloud infrastructure.",
    },
    {
      name: "Custom Software",
      image: "/app-screenshots/sync-order.png",
      description:
        "Tailored software solutions designed specifically for your business needs. Built to solve your unique challenges.",
    },
    {
      name: "API Development",
      image: "/app-screenshots/purchase-invoice.png",
      description:
        "RESTful and GraphQL APIs with seamless integrations. Connect your systems and enable powerful workflows.",
    },
    {
      name: "UI/UX Design",
      image: "/app-screenshots/purchase-confirm.png",
      description:
        "Beautiful, intuitive interfaces that users love. User-centered design that drives engagement and conversions.",
    },
    {
      name: "Cloud & DevOps",
      image: "/app-screenshots/supplier-table.png",
      description:
        "Scalable cloud infrastructure and automated deployments. Reliable hosting and continuous integration pipelines.",
    },
    {
      name: "Maintenance & Support",
      image: "/app-screenshots/chose-fromold-new.png",
      description:
        "Ongoing support and maintenance to keep your systems running smoothly. Long-term partnerships for sustained success.",
    },
  ]

  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [api, setApi] = React.useState<any>(null)

  React.useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap())
    }

    api.on("select", onSelect)
    onSelect()

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <section className="w-full px-4 py-20 bg-gradient-to-b  overflow-hidden">
      <MaxWidthWrapper>
        {/* Header */}
        <div className="max-w-full mr-auto text-start space-y-6 mb-20">
          <h2 className="text-4xl md:text-6xl font-caveat font-bold text-gray-900 leading-tight">
            Complete Development
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#45ACAB] to-[#00eae6]">
              Solutions
            </span>
          </h2>
          <p className="text-gray-600  mx-auto text-lg font-caveat leading-relaxed">
            From web and mobile apps to custom software solutions. We deliver
            high-quality development services that drive real business results.
          </p>
        </div>

        {/* Feature grid */}
        <div className="max-w-full ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`group text-left p-6 rounded-xl transition-all duration-300 hover:shadow-xl ${
                  index === currentIndex
                    ? "bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 shadow-lg"
                    : "bg-white border border-gray-200 hover:border-blue-300"
                }`}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 transition-colors ${
                    index === currentIndex
                      ? "bg-[#45ACAB] text-white"
                      : "bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-[#45ACAB]"
                  }`}
                >
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <h4
                  className={`text-lg font-semibold mb-2 transition-colors ${
                    index === currentIndex ? "text-blue-900" : "text-gray-900"
                  }`}
                >
                  {item.name}
                </h4>
                <p
                  className={`text-sm leading-relaxed transition-colors ${
                    index === currentIndex ? "text-gray-700" : "text-gray-600"
                  }`}
                >
                  {item.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
