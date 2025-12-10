import type { Metadata } from "next"
import { Poppins, Caveat, Tajawal } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/layout/side-header"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, getLocale } from "next-intl/server"

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  display: "swap",
})

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Jethings - Development Agency",
    description:
      "Jethings is a development agency specializing in web development, mobile apps, full-stack solutions, and custom software development. We deliver high-quality solutions that drive business results.",
    openGraph: {
      title: "Jethings - Development Agency",
      description:
        "Jethings is a development agency specializing in web development, mobile apps, full-stack solutions, and custom software development. We deliver high-quality solutions that drive business results.",
      url: "https://jethings.com",
      siteName: "Jethings",
      images: [
        {
          url: "/jethings-openghraf.png",
          width: 1200,
          height: 630,
          alt: "Jethings - Development Agency",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Jethings - Development Agency",
      description:
        "Jethings is a development agency specializing in web development, mobile apps, full-stack solutions, and custom software development.",
      images: ["/jethings-openghraf.png"],
    },
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()
  const messages = await getMessages()
  const isRTL = locale === "ar"

  // Final computed font class
  const fontClass = isRTL
    ? `${tajawal.variable} font-tajawal`
    : `${poppins.variable} font-poppins`

  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"}>
      <body
        className={`${fontClass} ${caveat.variable} antialiased overflow-x-hidden`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <SiteHeader />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
