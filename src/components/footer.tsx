"use client"

import { Linkedin, Mail, MapPin, Phone, Globe } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import MaxWidthWrapper from "./max-with-wrapper"
import CustomLocaleSwitcher from "./locale-switcher-select"

export default function Footer() {
  const t = useTranslations("footer")
  const tHeader = useTranslations("header")
  const locale = useLocale()

  const features = ["J Store", "J Optics"]

  const legalLinks = [
    { href: "/terms", label: t("termsOfService") },
    { href: "/privacy", label: t("privacyPolicy") },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/jethings",
      label: "LinkedIn",
    },
  ]

  const languageItems = [
    { value: "en", label: tHeader("language.english") },
    { value: "fr", label: tHeader("language.french") },
    { value: "ar", label: tHeader("language.arabic") },
  ]

  return (
    <footer className="w-full  bg-white border-t border-gray-200 text-gray-900 mt-10">
      <MaxWidthWrapper>
        <div className="px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-4 space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">Jethings</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                Jethings is a retail software company providing specialized
                solutions for shoe stores and optical stores. Our products help
                retailers manage inventory, track sales, and grow their business
                with ease.
              </p>
            </div>

            {/* Products */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-semibold text-gray-900">
                {t("products")}
              </h4>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-black transition-colors"
                    >
                      <span className="h-1 w-5 rounded-full bg-gray-300" />
                      <span>{feature}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-sm font-semibold text-gray-900">
                {t("legal")}
              </h4>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-black transition-colors"
                    >
                      <span className="h-1 w-5 rounded-full bg-gray-300" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-semibold text-gray-900">
                {t("contact")}
              </h4>
              <div className="space-y-2 text-sm text-gray-700">
                <a
                  href="mailto:neggazfarid@gmail.com"
                  className="flex items-start gap-2 hover:text-black transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-gray-400" />
                  <span className="break-all">neggazfarid@gmail.com</span>
                </a>
                <a
                  href="tel:+213562001394"
                  className="flex items-start gap-2 hover:text-black transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-gray-400" />
                  <span>+213 562 001 394</span>
                </a>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-gray-400" />
                  <span>{t("location")}</span>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-800 mb-2">
                  {t("followUs")}
                </p>
                <div className="flex gap-2">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 hover:border-gray-900 hover:text-black transition-all duration-300"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-gray-200 pt-5">
            <span className="text-xs sm:text-sm text-gray-600">
              © {new Date().getFullYear()} Jethings. All rights reserved.
            </span>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <span className="text-xs sm:text-sm text-gray-500">{t("location")}</span>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gray-500" />
                <CustomLocaleSwitcher
                  defaultValue={locale}
                  items={languageItems}
                  label={tHeader("language.switch")}
                  variant="default"
                />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}
