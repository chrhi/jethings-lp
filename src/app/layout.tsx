import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
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
      <body className={`${montserrat.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
