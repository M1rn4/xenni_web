import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollProgressBar from "./components/ScrollProgressBar"
import CustomCursor from "./components/CustomCursor"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Xenni - Academia Tecnológica de LATAM",
  description:
    "Forma parte del futuro. Aprende Web3, IA, IoT y Ciberseguridad con los mejores mentores de Latinoamérica.",
  keywords: "Web3, Inteligencia Artificial, IoT, Ciberseguridad, Academia, Latinoamérica, Bootcamp",
  authors: [{ name: "Xenni Academy" }],
  openGraph: {
    title: "Xenni - Construye el futuro. Hoy.",
    description: "Academia tecnológica líder en LATAM. Bootcamps en Web3, IA, IoT y más.",
    type: "website",
  },
    generator: 'v0.dev',
  icons: {
    icon: "/favicon.ico", // O usa "/favicon.png"
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body bg-background text-neutral-800 antialiased">

        <ScrollProgressBar />
        <CustomCursor />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
