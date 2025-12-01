"use client"

import { useState, useEffect, useMemo } from "react"
import { useTranslations, useLocale } from "next-intl"
import MaxWidthWrapper from "../max-with-wrapper"
import { MobileNavigation } from "./navigations/mobil-navigation"
import CustomLocaleSwitcher from "../locale-switcher-select"
import Link from "next/link"

export const SiteHeader = () => {
  const t = useTranslations("header")
  const locale = useLocale()
  const isRTL = locale === "ar"
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Static navigation IDs
  const navIds = ["home", "services", "approach", "capabilities", "about", "contact"]

  // Navigation items with translations
  const navItems = useMemo(
    () => [
      { id: "home", label: t("navigation.home") },
      { id: "services", label: t("navigation.services") },
      { id: "approach", label: t("navigation.approach") },
      { id: "capabilities", label: t("navigation.capabilities") },
      { id: "about", label: t("navigation.about") },
      { id: "contact", label: t("navigation.contact") },
    ],
    [t]
  )

  // Language options for the switcher
  const languageItems = useMemo(
    () => [
      { value: "en", label: t("language.english") },
      { value: "fr", label: t("language.french") },
      { value: "ar", label: t("language.arabic") },
    ],
    [t]
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)

      // Update active section based on scroll position
      const sections = navIds
        .map((id) => {
          const element = document.getElementById(id)
          if (element) {
            const rect = element.getBoundingClientRect()
            return {
              id,
              top: rect.top,
              bottom: rect.bottom,
            }
          }
          return null
        })
        .filter(Boolean)

      const currentSection = sections.find((section) => {
        if (!section) return false
        return section.top <= 100 && section.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navIds])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 70
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <header
      className={`w-full fixed top-0 z-50 bg-transparent overflow-visible transition-all duration-300 ${
        isScrolled ? "py-2 sm:py-3" : "py-0"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <MaxWidthWrapper
        className={`flex items-center justify-between h-[60px] sm:h-[70px] relative overflow-visible gap-2 sm:gap-4 md:gap-6 lg:gap-8 px-3 sm:px-4 ${
          isScrolled 
            ? "border bg-white/95 backdrop-blur-sm rounded-xl shadow-sm mx-2 sm:mx-4 lg:mx-auto w-auto lg:w-full" 
            : ""
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className={`h-full w-fit flex items-center gap-x-2 sm:gap-x-4 overflow-visible cursor-pointer hover:opacity-80 transition-opacity ${isRTL ? "flex-row-reverse" : ""}`}
        >
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl whitespace-nowrap">{t("brand")}</h1>
        </button>

        {/* Desktop Navigation */}
        <nav className={`hidden lg:flex flex-1 items-center ${isRTL ? "justify-end" : "justify-start"}`}>
          <ul className={`flex items-center gap-4 xl:gap-6 ${isRTL ? "flex-row-reverse" : ""}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-[#45ACAB] cursor-pointer whitespace-nowrap ${
                    activeSection === item.id
                      ? "text-[#45ACAB]"
                      : "text-gray-600"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button and Language Switcher - Desktop */}
        <div className={`hidden lg:flex items-center gap-x-4 h-full ${isRTL ? "flex-row-reverse" : ""}`}>
          <CustomLocaleSwitcher
            defaultValue={locale}
            items={languageItems}
            label={t("language.switch")}
            variant="default"
          />
          <Link href={"https://cal.com/craftednext/30min"} target="_blank">
            <button
              className="button-33 cursor-pointer text-sm lg:text-base px-4 lg:px-6 py-2 sm:py-2.5"
              role="button"
            >
              <span className="text whitespace-nowrap">{t("getStarted")}</span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center">
          <MobileNavigation scrollToSection={scrollToSection} />
        </div>
      </MaxWidthWrapper>
    </header>
  )
}
