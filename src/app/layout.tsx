import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/side-header";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // optional: adjust weights as needed
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Jethings",
    description: "Stock management software",
    openGraph: {
      title: "Jethings",
      description: "Stock management software",
      url: "https://jethings.com",
      siteName: "Jethings",
      images: [
        {
          url: "/jethings-openghraf.png",
          width: 1200,
          height: 630,
          alt: "Jethings - Stock management software",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Jethings",
      description: "Stock management software",
      images: ["/jethings-openghraf.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased light`}>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
