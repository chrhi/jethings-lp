"use client"

import { useState, useMemo, useEffect } from "react"
import { useTranslations, useLocale } from "next-intl"
import MaxWidthWrapper from "../max-with-wrapper"
import { MobileNavigation } from "./navigations/mobil-navigation"
import CustomLocaleSwitcher from "../locale-switcher-select"
import Link from "next/link"
import Image from "next/image"

export const SiteHeader = () => {
  const t = useTranslations("header")
  const locale = useLocale()
  const isRTL = locale === "ar"
  const [isScrolled, setIsScrolled] = useState(false)

  // Navigation items with translations
  const navItems = useMemo(
    () => [
      { id: "home", label: t("navigation.home"), href: "/" },
      { id: "pricing", label: t("navigation.pricing"), href: "/pricing" },
      { id: "about", label: t("navigation.about"), href: "/about" },
    ],
    [t]
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`w-full fixed top-0 z-50 bg-transparent overflow-visible transition-all duration-300 ${
        isScrolled
          ? "py-0 border-b bg-white backdrop-blur-sm  shadow-sm"
          : "py-0"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <MaxWidthWrapper
        className={`flex items-center justify-between h-[60px] sm:h-[70px] relative overflow-visible gap-2 sm:gap-4 md:gap-6 lg:gap-8 px-3 sm:px-4 ${
          isScrolled ? " " : ""
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className={`h-full w-fit flex items-center gap-x-2 sm:gap-x-4 overflow-visible cursor-pointer hover:opacity-80 transition-opacity ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          <Image src="/jethings/logo-written.png" alt="logo" width={100} height={100} />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex flex-1 items-center justify-center"
        >
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="text-sm font-medium transition-colors duration-200 hover:text-blue-600 text-gray-700 whitespace-nowrap"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button and Language Switcher - Desktop */}
        <div
          className={`hidden lg:flex items-center gap-x-4 h-full ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          <Link href={"https://cal.com/craftednext/30min"} target="_blank">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full cursor-pointer text-sm lg:text-base px-4 lg:px-6 py-2 sm:py-3 transition-colors"
              role="button"
            >
              <span className="whitespace-nowrap">{t("getStarted")}</span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center">
          <MobileNavigation />
        </div>
      </MaxWidthWrapper>
    </header>
  )
}
