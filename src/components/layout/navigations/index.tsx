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
  ChevronRight
} from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

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
    description: "Fast, intuitive checkout with payment processing and receipt management",
    icon: ShoppingCart,
  },
  {
    title: "Stock Management",
    href: "/features/stock",
    description: "Track inventory levels, manage warehouses, and automate reordering",
    icon: Package,
  },
  {
    title: "Sales Analytics",
    href: "/features/sales",
    description: "Comprehensive sales reporting and business intelligence dashboard",
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

export function Navigation() {
  const isMobile = useIsMobile()

  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
              {solutions.map((solution) => (
                <SolutionItem
                  key={solution.title}
                  title={solution.title}
                  href={solution.href}
                  description={solution.description}
                  icon={solution.icon}
                  available={solution.available}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
              {features.map((feature) => (
                <FeatureItem
                  key={feature.title}
                  title={feature.title}
                  href={feature.href}
                  description={feature.description}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Enterprise</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    href="/enterprise"
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    <Building2 className="h-6 w-6 mb-2" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Enterprise Solutions
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Powerful tools and dedicated support for large-scale businesses
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              {enterpriseLinks.slice(1).map((link) => (
                <ListItem
                  key={link.title}
                  title={link.title}
                  href={link.href}
                >
                  {link.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px]">
              {resources.map((resource) => (
                <ListItem
                  key={resource.title}
                  title={resource.title}
                  href={resource.href}
                >
                  {resource.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

   
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function SolutionItem({
  title,
  href,
  description,
  icon: Icon,
  available,
}: {
  title: string
  href: string
  description: string
  icon: React.ElementType
  available: boolean
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={available ? href : "#"}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${
            !available ? "opacity-60 cursor-not-allowed" : ""
          }`}
          onClick={(e) => !available && e.preventDefault()}
        >
          <div className="flex items-center gap-2 mb-1">
            <Icon className="h-5 w-5" />
            <div className="text-sm font-medium leading-none">{title}</div>
            {!available && (
              <span className="flex items-center gap-1 text-xs text-muted-foreground ml-auto">
                <Clock className="h-3 w-3" />
                Coming Soon
              </span>
            )}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

function FeatureItem({
  title,
  href,
  description,
}: {
  title: string
  href: string
  description: string
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
        >
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium leading-none">{title}</div>
            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}