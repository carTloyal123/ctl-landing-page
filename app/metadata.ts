import type { Metadata } from "next"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.loyaldevelopment.co"

export const siteMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Carson Loyal | Software Engineer",
    template: "%s | Carson Loyal",
  },
  description:
    "Carson Loyal is a software engineer specializing in autonomous systems, GNSS technology, and simulation platforms.",
  keywords: ["Software Engineer", "Autonomous Systems", "GNSS Technology", "Simulation", "ROS", "C++", "Python"],
  authors: [{ name: "Carson Loyal" }],
  creator: "Carson Loyal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Carson Loyal Portfolio",
    title: "Carson Loyal | Software Engineer",
    description: "Software engineer specializing in autonomous systems, GNSS technology, and simulation platforms.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Carson Loyal Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carson Loyal | Software Engineer",
    description: "Software engineer specializing in autonomous systems, GNSS technology, and simulation platforms.",
    images: [`${baseUrl}/og-image.png`],
    creator: "@carsonloyal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

