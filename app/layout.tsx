import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://solutionsbyjam.com"),

  title: {
    default: "SolutionsbyJAM | HR Consulting & Talent Solutions",
    template: "%s | SolutionsbyJAM",
  },

  description:
    "SolutionsbyJAM provides expert HR consulting, talent acquisition, workforce strategy, and organizational development to help businesses scale effectively.",

  applicationName: "SolutionsbyJAM",
  generator: "Next.js",

  keywords: [
    "HR consulting",
    "talent acquisition",
    "human resources",
    "workforce strategy",
    "organizational development",
    "HR solutions",
  ],

  authors: [{ name: "SolutionsbyJAM" }],
  creator: "SolutionsbyJAM",
  publisher: "SolutionsbyJAM",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://solutionsbyjam.com",
    siteName: "SolutionsbyJAM",
    title: "SolutionsbyJAM | HR Consulting & Talent Solutions",
    description:
      "Transform your workforce with expert HR consulting, talent acquisition, and organizational development services.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SolutionsbyJAM HR Consulting",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SolutionsbyJAM | HR Consulting & Talent Solutions",
    description:
      "Expert HR consulting, talent acquisition, and workforce solutions for growing businesses.",
    images: ["/Dr JAM.png"],
  },

  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.className} ${geistMono.className}`}>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
