"use client"

import Image from "next/image"
import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"
import MaxWidthWrapper from "./max-with-wrapper"

export const Features = () => {
  const t = useTranslations("features")
  const locale = useLocale()
  const isRTL = locale === "ar"

  const apps = [
    {
      name: t("jStore.name"),
      image: "/logos/2.svg",
      description: t("jStore.description"),
      highlight: t("jStore.highlight"),
      color: "#45ACAB",
      comingSoon: true,
    },
    {
      name: t("jOptics.name"),
      image: "/logos/j-optic-logo.svg",
      description: t("jOptics.description"),
      highlight: t("jOptics.highlight"),
      color: "#5481aa",
      comingSoon: false,
    },
  ]

  return (
    <section className="w-full py-24 bg-gray-50/50">
      <MaxWidthWrapper>
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#45ACAB] font-medium tracking-wide uppercase text-sm mb-3">
            {t("sectionLabel")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            {t("description")}
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {apps.map((app) => (
            <div
              key={app.name}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg relative overflow-hidden"
              dir={isRTL ? "rtl" : "ltr"}
            >
              {/* Coming Soon Badge */}
              {app.comingSoon && (
                <span className={`absolute top-4 ${isRTL ? "left-4" : "right-4"} px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-500`}>
                  {t("jStore.comingSoon")}
                </span>
              )}

              {/* Logo & Name */}
              <div className={`flex items-center gap-4 mb-6 ${isRTL ? "flex-row-reverse justify-end" : ""}`}>
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${app.color}15` }}
                >
                  <Image
                    src={app.image}
                    alt={app.name}
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{app.name}</h3>
              </div>

              {/* Description with highlight */}
              <p className={`text-gray-600 text-lg leading-relaxed mb-8 ${isRTL ? "text-right" : ""}`}>
                {app.description}{" "}
                <span
                  className="font-semibold relative inline-block"
                  style={{ color: app.color }}
                >
                  {app.highlight}
                  <span
                    className="absolute bottom-0 left-0 w-full h-[6px] -z-10 opacity-30 rounded"
                    style={{ backgroundColor: app.color }}
                  />
                </span>
              </p>

              {/* CTA */}
              {app.comingSoon ? (
                <button
                  disabled
                  className={`group/btn inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 bg-gray-100 text-gray-400 cursor-not-allowed ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  {t("jStore.notifyMe")}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isRTL ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              ) : (
                <Link href={app.name === t("jOptics.name") ? "/j-optics" : app.name === t("jStore.name") ? "/j-store" : "#"}>
                  <button
                    className={`group/btn inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 text-white cursor-pointer hover:gap-4 ${isRTL ? "flex-row-reverse" : ""}`}
                    style={{ backgroundColor: app.color }}
                  >
                    {t("jOptics.explore")}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${isRTL ? "rotate-180 group-hover/btn:-translate-x-1" : "group-hover/btn:translate-x-1"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
