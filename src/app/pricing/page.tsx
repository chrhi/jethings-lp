"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"
import MaxWidthWrapper from "@/components/max-with-wrapper"
import Footer from "@/components/footer"
import FAQ from "@/components/faq"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PricingPage() {
  const t = useTranslations("pricing")

  const plans = [
    {
      name: t("plans.basic.name"),
      description: t("plans.basic.description"),
      price: "2000",
      currency: "DZD",
      period: t("plans.period"),
      features: [
        t("plans.basic.features.inventory"),
        t("plans.basic.features.invoices"),
        t("plans.basic.features.analytics"),
        t("plans.basic.features.pos"),
        t("plans.basic.features.clients"),
      ],
      popular: false,
    },
    {
      name: t("plans.professional.name"),
      description: t("plans.professional.description"),
      price: "8000",
      currency: "DZD",
      period: t("plans.period"),
      features: [
        t("plans.professional.features.allBasic"),
        t("plans.professional.features.advanced"),
        t("plans.professional.features.integrations"),
        t("plans.professional.features.priority"),
      ],
      popular: true,
    },
    {
      name: t("plans.enterprise.name"),
      description: t("plans.enterprise.description"),
      price: null,
      features: [
        t("plans.enterprise.features.allProfessional"),
        t("plans.enterprise.features.custom"),
        t("plans.enterprise.features.dedicated"),
        t("plans.enterprise.features.sla"),
      ],
      popular: false,
    },
  ]

  return (
    <div className="flex flex-col items-center min-h-screen h-fit bg-gray-50">
      {/* Spacer for header */}
      <div className="w-full h-[70px] bg-white" />

      {/* Pricing Section */}
      <section className="w-full py-16 sm:py-20 md:py-28 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40" />
        </div>

        <MaxWidthWrapper className="relative">
          <div className="text-center mb-16 sm:mb-20">
            <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 mb-4">
              {t("sectionLabel")}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight max-w-4xl mx-auto">
              {t("title")}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t("description")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border transition-all duration-300 ${
                  plan.popular
                    ? "border-blue-600 bg-white shadow-xl lg:scale-105 z-10"
                    : "border-gray-200 bg-white shadow-md hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                      {t("popular")}
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

                    {plan.price ? (
                      <div className="mb-6 pb-6 border-b border-gray-200">
                        <div className="flex items-baseline justify-center gap-1.5 mb-1">
                          <span className="text-4xl sm:text-5xl font-bold text-gray-900">
                            {plan.price}
                          </span>
                          <span className="text-lg text-gray-600 font-medium">
                            {plan.currency}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">
                          {plan.period}
                        </p>
                      </div>
                    ) : (
                      <div className="mb-6 pb-6 border-b border-gray-200 h-20 flex flex-col items-center justify-center">
                        <p className="text-sm text-gray-600 font-medium">
                          {t("contactForPricing")}
                        </p>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8 min-h-[280px]">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className={`w-4 h-4 flex-shrink-0 mt-1 ${
                          plan.popular ? "text-blue-600" : "text-gray-400"
                        }`} />
                        <span className="text-sm text-gray-700 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2">
                    <Link
                      href={plan.price ? "https://cal.com/craftednext/30min" : "/#contact"}
                      target={plan.price ? "_blank" : undefined}
                      className="block"
                    >
                      <Button
                        className={`w-full rounded-lg py-3 text-sm font-semibold transition-all duration-200 ${
                          plan.popular
                            ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg"
                            : "bg-white border border-gray-300 text-gray-900 hover:border-blue-600 hover:text-blue-600"
                        }`}
                      >
                        {plan.price ? t("getStarted") : t("contactUs")}
                      </Button>
                    </Link>
                    <a href="#faq" className="block">
                      <Button
                        variant="ghost"
                        className="w-full rounded-lg py-2 text-xs text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                      >
                        {t("viewFAQ")}
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 sm:mt-20 text-center">
            <div className="inline-block rounded-2xl border border-gray-200 bg-white/80 backdrop-blur px-8 py-6 shadow-lg">
              <p className="text-base text-gray-700 mb-2 font-medium">
                {t("note")}
              </p>
              <Link href="/#contact">
                <Button variant="outline" className="rounded-full border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600">
                  {t("contactUs")}
                </Button>
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-16 sm:py-20 md:py-24 bg-white scroll-mt-20">
        <FAQ />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
