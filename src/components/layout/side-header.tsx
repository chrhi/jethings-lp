"use client"

import { useState, useEffect } from "react"
import MaxWidthWrapper from "../max-with-wrapper"
import { MobileNavigation } from "./navigations/mobil-navigation"
import SendRequestModal from "../cta"

const navItems = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "approach", label: "Approach" },
  { id: "capabilities", label: "Capabilities" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
]

export const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)

      // Update active section based on scroll position
      const sections = navItems
        .map((item) => {
          const element = document.getElementById(item.id)
          if (element) {
            const rect = element.getBoundingClientRect()
            return {
              id: item.id,
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
  }, [])

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
    <div
      className={`w-full h-[70px] fixed top-0 z-50 bg-transparent overflow-visible transition-all duration-200 ${
        isScrolled ? "py-2" : ""
      }`}
    >
      <MaxWidthWrapper
        className={`flex items-center justify-between h-[70px] relative overflow-visible gap-4 md:gap-8 px-4 ${
          isScrolled ? "border bg-white rounded-lg w-[90%] lg:w-full" : ""
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="h-full w-fit flex items-center justify-start gap-x-4 overflow-visible cursor-pointer hover:opacity-80 transition-opacity"
        >
          <h1 className="font-bold text-xl md:text-2xl">Jethings</h1>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 items-center justify-start">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-[#45ACAB] ${
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

        {/* CTA Button */}
        <div className="flex items-center justify-end gap-x-2 lg:gap-x-4 h-full">
          <SendRequestModal />
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <MobileNavigation scrollToSection={scrollToSection} />
        </div>
      </MaxWidthWrapper>
    </div>
  )
}
