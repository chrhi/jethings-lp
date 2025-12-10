"use client"

import { useTranslations } from "next-intl"
import MaxWidthWrapper from "./max-with-wrapper"
import {
  BarChart3,
  ClipboardList,
  Layers,
  Users,
  Receipt,
  ShoppingBag,
} from "lucide-react"

export function BentoFeatures() {
  const t = useTranslations("features.bentoFeatures")

  const features = [
    {
      title: t("stockManagement.title"),
      description: t("stockManagement.description"),
      icon: Layers,
      className: "lg:col-span-2 bg-gradient-to-br from-blue-50 to-cyan-50",
    },
    {
      title: t("invoices.title"),
      description: t("invoices.description"),
      icon: Receipt,
      className: "bg-white",
    },
    {
      title: t("analytics.title"),
      description: t("analytics.description"),
      icon: BarChart3,
      className: "bg-white",
    },
    {
      title: t("pos.title"),
      description: t("pos.description"),
      icon: ShoppingBag,
      className: "bg-white",
    },
    {
      title: t("manageClients.title"),
      description: t("manageClients.description"),
      icon: Users,
      className: "lg:col-span-2 bg-gradient-to-br from-indigo-50 to-purple-50",
    },
  ]
  return (
    <section className="w-full py-24 bg-gray-50/60">
      <MaxWidthWrapper>
        <div className="text-start mb-12 sm:mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-2">
            {t("label")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            {t("title")}
            <br className="hidden sm:block" /> {t("titleLine2")}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map(({ title, description, icon: Icon, className }, idx) => (
            <div
              key={title}
              className={`relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm backdrop-blur-sm p-6 sm:p-7 flex flex-col gap-4 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md ${className}`}
            >
              <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_45%)]" />
              <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.12),_transparent_40%)]" />

              <div className="relative flex items-center justify-between gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/70 border border-white/60 shadow-sm">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-xs font-semibold text-gray-400">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="relative">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}