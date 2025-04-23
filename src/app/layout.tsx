import type { Metadata } from "next";
import { Jost, Raleway } from "next/font/google"
import "./globals.css";

import "@/css/bootstrap.css"
import "@/css/animate.css"
import "@/css/magnific-popup.css"
import "@/css/main.css"
import "@/css/slick.css"
import "@/css/spacing.css"
import "@/css/swiper-bundle.css"

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Navbar } from "@/components/navbar";
config.autoAddCss = false

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Gudang Order",
  description: "E-Catalog Gudangorder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} ${jost.className} antialiased`}
      >
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}
