import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: {
    template: "%s | West Indies Champions - WCL 2025",
    default: "West Indies Champions - Official WCL 2025",
  },
  description:
    "Explore the official website of the West Indies Champions for the World Championship of Legends (WCL) 2025. Get the latest news, player profiles, match schedules, points table, gallery, and fan lounge access. Follow your favorite team on their journey to victory!",
  keywords: [
    "West Indies Champions",
    "WCL 2025",
    "World Championship of Legends 2025",
    "Cricket",
    "T20 Cricket",
    "Caribbean Cricket",
    "WCL Team",
    "Cricket News",
    "Player Profiles",
    "Match Schedule",
    "Points Table",
    "Fan Lounge",
  ],
  openGraph: {
    title: "West Indies Champions - Official WCL 2025 ",
    description:
      "Explore the official website of the West Indies Champions for the World Championship of Legends (WCL) 2025. Get the latest news, player profiles, match schedules, points table, gallery, and fan lounge access. Follow your favorite team on their journey to victory!",
    url: "https://www.westindieschampions.com", // TODO: Replace with your actual website URL
    siteName: "West Indies Champions",
    images: [
      {
        url: "https://www.westindieschampions.com/og-image.jpg", // TODO: Replace with your actual Open Graph image URL
        width: 1200,
        height: 630,
        alt: "West Indies Champions Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "West Indies Champions - Official WCL 2025",
    description:
      "Explore the official website of the West Indies Champions for the World Championship of Legends (WCL) 2025. Get the latest news, player profiles, match schedules, points table, gallery, and fan lounge access. Follow your favorite team on their journey to victory!",
    creator: "@westindieschamp", // TODO: Replace with your actual Twitter handle
    images: ["https://www.westindieschampions.com/twitter-image.jpg"], // TODO: Replace with your actual Twitter image URL
  },
  robots: "index, follow",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins bg-gray-50 text-gray-900">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
