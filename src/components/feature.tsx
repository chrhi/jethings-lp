"use client"

import * as React from "react"

import MaxWidthWrapper from "./max-with-wrapper"

export const Features = () => {
  const features = [
    {
      name: "POS Opening",
      image: "/app-screenshots/pos-openning.png",
      description:
        "Streamline your day with lightning-fast system initialization. Get your point of sale ready in seconds with an intuitive startup process.",
    },
    {
      name: "Order Management",
      image: "/app-screenshots/pos-order-management.png",
      description:
        "Take full control of your orders with real-time tracking, instant updates, and powerful filtering options that keep you ahead of demand.",
    },
    {
      name: "POS Shifts",
      image: "/app-screenshots/pos-shifts.png",
      description:
        "Effortlessly manage employee schedules, track performance metrics, and maintain accountability with comprehensive shift monitoring.",
    },
    {
      name: "Sync Order",
      image: "/app-screenshots/sync-order.png",
      description:
        "Keep your entire operation in perfect harmony. Orders sync instantly across all locations, ensuring consistency and preventing errors.",
    },
    {
      name: "Purchase Invoice",
      image: "/app-screenshots/purchase-invoice.png",
      description:
        "Generate professional invoices in moments. Automated calculations, customizable templates, and seamless record-keeping built right in.",
    },
    {
      name: "Purchase Confirm",
      image: "/app-screenshots/purchase-confirm.png",
      description:
        "Verify every transaction with confidence. Smart confirmation workflows prevent costly mistakes before they happen.",
    },
    {
      name: "Supplier Management",
      image: "/app-screenshots/supplier-table.png",
      description:
        "Build and maintain strong supplier relationships with a centralized database that tracks contacts, orders, and performance history.",
    },
    {
      name: "Flexible Interface",
      image: "/app-screenshots/chose-fromold-new.png",
      description:
        "Choose your perfect workflow. Seamlessly switch between classic and modern interfaces to match your team's preferences and experience.",
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
            Everything You Need to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#45ACAB] to-[#00eae6]">
              Run Your Business
            </span>
          </h2>
          <p className="text-gray-600  mx-auto text-lg font-caveat leading-relaxed">
            A comprehensive point of sale system designed to simplify
            operations, boost efficiency, and scale with your business.
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
