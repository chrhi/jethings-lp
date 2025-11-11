"use client"

import * as React from "react"
import Link from "next/link"
import {
  ShoppingCart,
  Package,
  Users,
  Building2,
  TrendingUp,
  Store,
  Clock,
  ChevronRight,
  Menu,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const solutions = [
  {
    title: "POS",
    href: "/solutions/pos",
    description: "Complete point of sale system for retail and restaurants",
    icon: ShoppingCart,
    available: true,
  },
  {
    title: "Stock Management",
    href: "/solutions/stock-management",
    description: "Real-time inventory tracking and warehouse management",
    icon: Package,
    available: true,
  },
  {
    title: "Client",
    href: "#",
    description: "Customer relationship and loyalty management platform",
    icon: Users,
    available: false,
  },
  {
    title: "Supplier",
    href: "#",
    description: "Supplier management and procurement automation",
    icon: Building2,
    available: false,
  },
]

const features = [
  {
    title: "POS System",
    href: "/features/pos",
    description:
      "Fast, intuitive checkout with payment processing and receipt management",
    icon: ShoppingCart,
  },
  {
    title: "Stock Management",
    href: "/features/stock",
    description:
      "Track inventory levels, manage warehouses, and automate reordering",
    icon: Package,
  },
  {
    title: "Sales Analytics",
    href: "/features/sales",
    description:
      "Comprehensive sales reporting and business intelligence dashboard",
    icon: TrendingUp,
  },
  {
    title: "Online Store",
    href: "/features/online-store",
    description: "Integrated e-commerce platform with omnichannel capabilities",
    icon: Store,
  },
]

const enterpriseLinks = [
  {
    title: "Enterprise Solutions",
    href: "/enterprise",
    description: "Scalable solutions for large organizations",
  },
  {
    title: "Custom Integration",
    href: "/enterprise/integration",
    description: "API access and custom integrations",
  },
  {
    title: "Dedicated Support",
    href: "/enterprise/support",
    description: "24/7 priority support and account management",
  },
  {
    title: "Security & Compliance",
    href: "/enterprise/security",
    description: "Enterprise-grade security and compliance features",
  },
]

const resources = [
  {
    title: "Documentation",
    href: "/docs",
    description: "Complete guides and API references",
  },
  {
    title: "Case Studies",
    href: "/resources/case-studies",
    description: "Success stories from our customers",
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Latest news and industry insights",
  },
  {
    title: "Support Center",
    href: "/support",
    description: "Get help and contact our team",
  },
]

export function MobileNavigation() {
  const [open, setOpen] = React.useState(false)

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
        <div className="mt-6 px-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="solutions">
              <AccordionTrigger>Solutions</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.title}
                      href={solution.available ? solution.href : "#"}
                      className={`block p-3 rounded-md hover:bg-accent transition-colors ${
                        !solution.available
                          ? "opacity-60 cursor-not-allowed"
                          : ""
                      }`}
                      onClick={(e) => {
                        if (!solution.available) {
                          e.preventDefault()
                        } else {
                          setOpen(false)
                        }
                      }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <solution.icon className="h-4 w-4" />
                        <span className="font-medium text-sm">
                          {solution.title}
                        </span>
                        {!solution.available && (
                          <span className="flex items-center gap-1 text-xs text-muted-foreground ml-auto">
                            <Clock className="h-3 w-3" />
                            Soon
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {solution.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="features">
              <AccordionTrigger>Features</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {features.map((feature) => (
                    <Link
                      key={feature.title}
                      href={feature.href}
                      className="block p-3 rounded-md hover:bg-accent transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm">
                          {feature.title}
                        </span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {feature.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="enterprise">
              <AccordionTrigger>Enterprise</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {enterpriseLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="block p-3 rounded-md hover:bg-accent transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      <div className="font-medium text-sm mb-1">
                        {link.title}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {link.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="resources">
              <AccordionTrigger>Resources</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {resources.map((resource) => (
                    <Link
                      key={resource.title}
                      href={resource.href}
                      className="block p-3 rounded-md hover:bg-accent transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      <div className="font-medium text-sm mb-1">
                        {resource.title}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {resource.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="why-us" className="border-none">
              <AccordionTrigger>Why us?</AccordionTrigger>
            </AccordionItem>
          </Accordion>

          <div className="mt-6 space-y-3 pt-6 border-t">
            <Button variant="outline" className="w-full" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button className="w-full" asChild>
              <Link href="/demo">Request Demo</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
