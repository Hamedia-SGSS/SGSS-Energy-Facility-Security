import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Secure Guard Security Services || Energy Facility Security",
  description:
    "Professional energy facility security officers, gate control, and perimeter patrols designed to protect utility sites, power plants, solar farms, and critical infrastructure.",
  keywords: [
    "energy facility security",
    "utility site security",
    "solar farm security",
    "power plant security",
    "substation patrol",
    "critical infrastructure protection",
    "secure guard",
    "gate control",
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/Favicon.png",
  },
  openGraph: {
    title: "Secure Guard Security Services || Energy Facility Security",
    description:
      "Professional energy facility security officers, gate control, and perimeter patrols designed to protect utility sites, power plants, solar farms, and critical infrastructure.",
    type: "website",
  },
};

import { ScrollToTop } from "@/components/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
