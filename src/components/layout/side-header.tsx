"use client"

import { useState, useEffect } from "react"
import MaxWidthWrapper from "../max-with-wrapper"
import { Button } from "../ui/button"
import { Navigation } from "./navigations"
import { MobileNavigation } from "./navigations/mobil-navigation"

export const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`w-full h-[70px] fixed top-0 z-50 bg-transparent overflow-visible transition-all duration-200  ${
        isScrolled ? "py-2 " : ""
      }`}
    >
      <MaxWidthWrapper
        className={`flex items-center justify-between h-[70px] relative overflow-visible gap-4 md:gap-8 px-4 ${
          isScrolled ? "border bg-white rounded-lg w-[90%] lg:w-full " : ""
        }`}
      >
        {/* Logo */}
        <div className="h-full w-fit flex items-center justify-start gap-x-4 overflow-visible">
          <h1 className="font-bold text-xl md:text-2xl">Jethings</h1>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 items-center justify-start">
          <Navigation />
        </div>
        {/* CTA Buttons */}
        <div className="flex items-center justify-end gap-x-2 lg:gap-x-4 h-full">
          <Button variant="link" className="hidden lg:flex">
            contact us
          </Button>

          <button
            className="button-33 cursor-pointer text-sm md:text-base hidden lg:flex"
            role="button"
          >
            <span className="text">Request Demo</span>
          </button>
        </div>
        {/* Mobile Menu */}
        <div className="lg:hidden">
          <MobileNavigation />
        </div>
      </MaxWidthWrapper>
    </div>
  )
}
