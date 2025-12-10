"use client"

import * as React from "react"
import { useTranslations, useLocale } from "next-intl"
import { usePathname } from "next/navigation"
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

export function MobileNavigation() {
  const t = useTranslations("header")
  const locale = useLocale()
  const pathname = usePathname()
  const isRTL = locale === "ar"
  const [open, setOpen] = React.useState(false)

  // Navigation items with translations
  const navItems = React.useMemo(
    () => [
      { id: "home", label: t("navigation.home"), href: "/" },
      { id: "pricing", label: t("navigation.pricing"), href: "/pricing" },
      { id: "about", label: t("navigation.about"), href: "/about" },
    ],
    [t]
  )

  // Check if a nav item is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname?.startsWith(href)
  }

  // Language options for the switcher
  const languageItems = React.useMemo(
    () => [
      { value: "en", label: t("language.english") },
      { value: "fr", label: t("language.french") },
      { value: "ar", label: t("language.arabic") },
    ],
    [t]
  )

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
        className="w-[300px] sm:w-[380px] overflow-y-auto flex flex-col bg-white border-l border-gray-100"
      >
        <SheetHeader className="pb-6 border-b border-gray-100">
          <SheetTitle className={`text-xl font-bold text-gray-900 ${isRTL ? "text-right" : "text-left"}`}>
            {t("brand")}
          </SheetTitle>
        </SheetHeader>
        
        <nav className="mt-6 px-4 flex-1">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const active = isActive(item.href)
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block w-full px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 border ${
                      active
                        ? "text-blue-600 bg-blue-50 border-blue-600/30 font-semibold"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-600/5 hover:to-transparent border-transparent hover:border-blue-600/20"
                    } ${isRTL ? "text-right" : "text-left"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        
        {/* Language Switcher and CTA Button in Mobile Menu */}
        <div className="mt-auto pt-6 pb-6 px-4 border-t border-gray-200 bg-gradient-to-b from-white to-gray-50/50 space-y-4">
          {/* Language Switcher */}
          <div className={`flex items-center gap-3 p-3 rounded-xl bg-gray-50/50 ${isRTL ? "flex-row-reverse" : ""}`}>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-700 font-semibold">{t("language.title")}</span>
            </div>
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
              className="w-full rounded-xl bg-blue-600 text-white font-semibold text-base py-3.5 px-4 shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-200 active:scale-[0.98]"
              role="button"
            >
              {t("getStarted")}
            </button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
