"use client"

import * as React from "react"
import { useTranslations, useLocale } from "next-intl"
import { Menu, Globe } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import CustomLocaleSwitcher from "@/components/locale-switcher-select"

interface MobileNavigationProps {
  scrollToSection: (sectionId: string) => void
}

export function MobileNavigation({ scrollToSection }: MobileNavigationProps) {
  const t = useTranslations("header")
  const locale = useLocale()
  const isRTL = locale === "ar"
  const [open, setOpen] = React.useState(false)

  // Navigation items with translations
  const navItems = React.useMemo(
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
  const languageItems = React.useMemo(
    () => [
      { value: "en", label: t("language.english") },
      { value: "fr", label: t("language.french") },
      { value: "ar", label: t("language.arabic") },
    ],
    [t]
  )

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden h-9 w-9 sm:h-10 sm:w-10">
          <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="sr-only">{t("menu.toggle")}</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side={isRTL ? "left" : "right"}
        className="w-[280px] sm:w-[350px] overflow-y-auto flex flex-col"
      >
        <SheetHeader>
          <SheetTitle className={isRTL ? "text-right" : "text-left"}>{t("brand")}</SheetTitle>
        </SheetHeader>
        <nav className="mt-6 px-2 sm:px-4 flex-1">
          <ul className="space-y-1 sm:space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm font-medium text-gray-600 hover:text-[#45ACAB] hover:bg-gray-50 transition-colors duration-200 cursor-pointer ${isRTL ? "text-right" : "text-left"}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Language Switcher and CTA Button in Mobile Menu */}
        <div className="mt-auto pt-4 pb-2 px-2 sm:px-4 border-t border-gray-100 space-y-4">
          {/* Language Switcher */}
          <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
            <Globe className="w-5 h-5 text-gray-500" />
            <span className="text-sm text-gray-600 font-medium">{t("language.title")}</span>
            <div className="flex-1">
              <CustomLocaleSwitcher
                defaultValue={locale}
                items={languageItems}
                label={t("language.switch")}
                variant="default"
              />
            </div>
          </div>
          
          {/* CTA Button */}
          <Link 
            href="https://cal.com/craftednext/30min" 
            target="_blank"
            onClick={() => setOpen(false)}
            className="block"
          >
            <button
              className="w-full button-33 cursor-pointer text-sm sm:text-base py-3"
              role="button"
            >
              <span className="text">{t("getStarted")}</span>
            </button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
