import Link from "next/link"
import { Github, Twitter, Linkedin, Youtube, Mail, MapPin, Instagram } from "lucide-react"
import Image from "next/image" // Asegúrate de tener esto arriba


export default function Footer() {
  const socialLinks = [
  { icon: Twitter, href: "https://x.com/xenni_xyz", label: "Twitter", target: "_blank", rel: "noopener noreferrer" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/xenni", label: "LinkedIn", target: "_blank", rel: "noopener noreferrer" },
  { icon: Instagram, href: "https://www.instagram.com/xenni.xyz/", label: "GitHub", target: "_blank", rel: "noopener noreferrer" },
  { icon: Youtube, href: "https://www.youtube.com/channel/UCf2tTr-EMEuC3_uifm8diLg", label: "YouTube", target: "_blank", rel: "noopener noreferrer" },
]

  const footerSections = [
    {
      title: "Academia",
      links: [
        { name: "Bootcamps", href: "/bootcamps" },
        { name: "Comunidad", href: "/comunidad" },
        { name: "Xenni Lives", href: "/xenni-lives" },
        { name: "Recursos", href: "/recursos" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { name: "Sobre Xenni", href: "/sobre" },
        { name: "Carreras", href: "#" },
        { name: "Prensa", href: "#" },
        { name: "Partners", href: "#" },
      ],
    },
    {
      title: "Soporte",
      links: [
        { name: "Centro de Ayuda", href: "#" },
        { name: "Contacto", href: "#" },
        { name: "Términos", href: "/terminos" },
        { name: "Privacidad", href: "/privacidad" },
      ],
    },
  ]

  return (
    <footer className="bg-primary-950 text-white border-t border-primary-800">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Image
              src="/xenni_logo_950.png"
              alt="Logo de Xenni"
              width={88}
              height={68}
              className="w-15 h-15 object-contain"
            />
            <p className="text-neutral-300 mb-6 max-w-md">
              Construyendo el futuro de la educación tecnológica en Latinoamérica. Únete a la nueva generación de
              creadores tecnológicos.
            </p>
            <div className="flex items-center space-x-2 text-neutral-300 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Latinoamérica</span>
            </div>
            <div className="flex items-center space-x-2 text-neutral-300">
              <Mail className="w-4 h-4" />
              <span className="text-sm">hola@xenni.academy</span>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-display font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-300 hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Xenni Academy. Todos los derechos reservados.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-neutral-400 hover:text-accent transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
