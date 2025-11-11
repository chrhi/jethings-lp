"use client"

import * as React from "react"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "approach", label: "Approach" },
  { id: "capabilities", label: "Capabilities" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
]

interface MobileNavigationProps {
  scrollToSection: (sectionId: string) => void
}

export function MobileNavigation({ scrollToSection }: MobileNavigationProps) {
  const [open, setOpen] = React.useState(false)

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] sm:w-[400px] overflow-y-auto"
      >
        <SheetHeader>
          <SheetTitle>Jethings</SheetTitle>
        </SheetHeader>
        <nav className="mt-6 px-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className="w-full text-left px-4 py-3 rounded-md text-sm font-medium text-gray-600 hover:text-[#45ACAB] hover:bg-gray-50 transition-colors duration-200"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t">
            <button
              onClick={() => handleNavClick("contact")}
              className="button-33 cursor-pointer w-full text-center"
            >
              <span className="text">Get Started</span>
            </button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
