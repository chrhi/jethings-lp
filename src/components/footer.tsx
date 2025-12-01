"use client"

import { Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { useTranslations } from "next-intl"
import MaxWidthWrapper from "./max-with-wrapper"

export default function Footer() {
  const t = useTranslations("footer")

  const features = [
    "J Store",
    "J Optics",
    "Inventory Management",
    "Sales Analytics",
  ]

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

  return (
    <footer
      className="w-full bg-white text-gray-900 mt-auto border-t border-gray-200"
      dir="ltr"
    >
      <MaxWidthWrapper>
        {/* Main Footer Content */}
        <div className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
            {/* Company Info - Wider column */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-xl font-bold text-black">Jethings</h3>
              </div>
              <p className="leading-relaxed text-gray-600 mb-4 text-sm">
                {t("description")}
              </p>
            </div>

            {/* Products */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-semibold mb-4 text-black">
                {t("products")}
              </h4>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-black transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-black transition-colors flex-shrink-0"></span>
                      <span>{feature}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-semibold mb-4 text-black">{t("legal")}</h4>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-black transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-black transition-colors flex-shrink-0"></span>
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-semibold mb-4 text-black">{t("contact")}</h4>
              <div className="space-y-3">
                <a
                  href="mailto:support@jethings.com"
                  className="flex items-start gap-2 text-sm text-gray-600 hover:text-black transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400 group-hover:text-black transition-colors" />
                  <span className="break-all">neggazfarid@gmail.com</span>
                </a>
                <a
                  href="tel:+213540261833"
                  className="flex items-start gap-2 text-sm text-gray-600 hover:text-black transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400 group-hover:text-black transition-colors" />
                  <span>+213 562001394</span>
                </a>
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400" />
                  <span>{t("location")}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-5">
                <p className="text-xs font-medium text-gray-900 mb-2">
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
                        className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-black hover:text-white transition-all duration-300"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}
