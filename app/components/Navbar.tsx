"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X} from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Comunidad", href: "/comunidad" },
    { name: "Xenni Lives", href: "/xenni-lives" },
    { name: "Recursos", href: "/recursos" },
    { name: "Bootcamp", href: "/bootcamps" },
    { name: "Sobre", href: "/sobre" },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled
        ? "bg-white/95 backdrop-blur-xl border-b border-neutral-200/50 shadow-lg shadow-neutral-900/5"
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              src="/xenni_logo_white.png"
              alt="Logo de Xenni"
              width={88}
              height={78}
              className="w-17 h-15 object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-700 hover:text-[#002F6C] transition-colors duration-300 font-semibold relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00C2A1] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link href="/aplicar" className="btn-primary">
              Aplicar
            </Link>
            <a
                href="xenni-platform-9ccaykquo-mirnas-projects.vercel.app/login"
                className="block mx-3 mt-2 text-center text-neutral-700 hover:text-[#002F6C] font-semibold"
              >
                Login
              </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-700 hover:text-[#002F6C] transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-neutral-200/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-neutral-700 hover:text-[#002F6C] transition-colors duration-300 font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/aplicar"
                className="block mx-3 mt-4 btn-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                Aplicar
              </Link>
              <a
                href="https://xenni-platform-j26q58zod-mirnas-projects.vercel.app/login"
                className="block mx-3 mt-2 text-center text-neutral-700 hover:text-[#002F6C] font-semibold"
              >
                Login
              </a>


            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
