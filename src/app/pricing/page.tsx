"use client"

import { useState } from "react"
import { Check, X } from "lucide-react"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

interface PlanFeature {
  text: string
  included: boolean
}

interface Plan {
  name: string
  description: string
  price: number | null
  currency?: string
  features: PlanFeature[]
  popular: boolean
  buttonText: string
}

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  const plans: Plan[] = [
    {
      name: "Starter",
      description:
        "Perfect for individuals and hobby projects just getting started.",
      price: 0,
      currency: "DZD",
      features: [
        { text: "1 User Seat", included: true },
        { text: "Basic Analytics", included: true },
        { text: "Community Support", included: true },
        { text: "API Access", included: false },
      ],
      popular: false,
      buttonText: "Start for Free",
    },
    {
      name: "Growth",
      description: "For growing teams that need more power and flexibility.",
      price: 2500,
      currency: "DZD",
      features: [
        { text: "5 User Seats", included: true },
        { text: "Advanced Automation", included: true },
        { text: "Priority Email Support", included: true },
        { text: "API Access", included: true },
        { text: "Remove Branding", included: true },
      ],
      popular: true,
      buttonText: "Get Growth",
    },
    {
      name: "Enterprise",
      description: "Advanced security and control for large organizations.",
      price: null,
      features: [
        { text: "Unlimited Users", included: true },
        { text: "Dedicated Account Manager", included: true },
        { text: "SLA Guarantee", included: true },
        { text: "Custom Integrations", included: true },
        { text: "SSO & Audit Logs", included: true },
      ],
      popular: false,
      buttonText: "Contact Sales",
    },
  ]

  const getDisplayPrice = (basePrice: number | null) => {
    if (basePrice === null) return null
    if (basePrice === 0) return 0
    return isYearly ? Math.round(basePrice * 0.8) : basePrice
  }

  const getPeriod = () => (isYearly ? "/yr" : "/mo")

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* Spacer for header */}
      <div className="w-full h-[70px] bg-white" />

      {/* Pricing Section */}
      <section className="w-full py-16 sm:py-20 md:py-28 bg-gradient-to-b from-white via-gray-50/50 to-white relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight max-w-4xl mx-auto">
              Flexible Pricing for{" "}
              <span className="text-cyan-600">Algerian Businesses</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Simple, transparent pricing built for local startups and
              enterprises. Pay in DZD, no hidden fees, cancel anytime.
            </p>

            {/* Monthly/Yearly Toggle */}
            <div className="flex items-center justify-center mb-12">
              <div className="relative inline-flex items-center bg-gray-100 rounded-lg p-1">
                {/* Animated background slider */}
                <div
                  className={`absolute top-1 bottom-1 rounded-md bg-cyan-600 transition-all duration-300 ease-in-out ${
                    isYearly ? "left-1/2 right-1" : "left-1 right-1/2"
                  }`}
                />
                <button
                  onClick={() => setIsYearly(false)}
                  className={`relative z-10 px-6 py-2.5 rounded-md text-sm font-semibold transition-colors duration-300 ${
                    !isYearly
                      ? "text-white"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`relative z-10 px-6 py-2.5 rounded-md text-sm font-semibold transition-colors duration-300 ${
                    isYearly
                      ? "text-white"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  Yearly
                </button>
              </div>
              <span className="ml-3 bg-gray-700 text-white text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                Save 20% +
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border transition-all duration-300 ${
                  plan.popular
                    ? "border-cyan-600 bg-white shadow-xl lg:scale-105 z-10"
                    : "border-gray-200 bg-white shadow-md hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <span className="bg-cyan-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                      {plan.description}
                    </p>

                    {plan.price !== null ? (
                      <div className="mb-6 pb-6 border-b border-gray-200">
                        <div className="flex items-baseline justify-center gap-1.5 mb-1">
                          <span className="text-4xl sm:text-5xl font-bold text-gray-900 transition-all duration-300">
                            {getDisplayPrice(plan.price)?.toLocaleString()}
                          </span>
                          <span className="text-lg text-gray-600 font-medium">
                            {plan.currency}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 transition-all duration-300">
                          {getPeriod()}
                        </p>
                      </div>
                    ) : (
                      <div className="mb-6 pb-6 border-b border-gray-200 h-20 flex flex-col items-center justify-center">
                        <p className="text-3xl sm:text-4xl font-bold text-gray-900">
                          Custom
                        </p>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8 min-h-[280px]">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        {feature.included ? (
                          <Check
                            className={`w-4 h-4 flex-shrink-0 mt-1 ${
                              plan.popular ? "text-cyan-600" : "text-gray-400"
                            }`}
                          />
                        ) : (
                          <X className="w-4 h-4 flex-shrink-0 mt-1 text-gray-400" />
                        )}
                        <span
                          className={`text-sm leading-relaxed ${
                            feature.included
                              ? "text-gray-700"
                              : "text-gray-400 line-through"
                          }`}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <a
                      href={
                        plan.price !== null
                          ? "https://cal.com/craftednext/30min"
                          : "/#contact"
                      }
                      target={plan.price !== null ? "_blank" : undefined}
                      rel={
                        plan.price !== null ? "noopener noreferrer" : undefined
                      }
                      className="block"
                    >
                      <button
                        className={`w-full rounded-lg py-3 text-sm font-semibold transition-all duration-200 ${
                          plan.popular
                            ? "bg-cyan-600 hover:bg-cyan-700 text-white shadow-md hover:shadow-lg"
                            : plan.price === 0
                            ? "bg-gray-100 hover:bg-gray-200 text-gray-900"
                            : "bg-gray-900 hover:bg-gray-800 text-white"
                        }`}
                      >
                        {plan.buttonText}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section Placeholder */}
      <section id="faq" className="w-full py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQ />
          </div>
        </div>
      </section>

      {/* Footer Placeholder */}
      <Footer />
    </div>
  )
}
