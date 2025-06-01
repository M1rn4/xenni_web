import Link from "next/link"
import { ArrowRight, BookOpen, FileText, Video, Download, Search } from "lucide-react"

export default function RecursosPage() {
  const categories = [
    { name: "Todos", active: true },
    { name: "Web3", active: false },
    { name: "IA", active: false },
    { name: "IoT", active: false },
    { name: "Ciberseguridad", active: false },
  ]

  const resources = [
    {
      title: "Introducción a Web3 y Blockchain",
      description: "Una guía completa para entender los fundamentos de la tecnología blockchain y Web3.",
      type: "Guía",
      icon: BookOpen,
      category: "Web3",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Prompt Engineering para IA Generativa",
      description: "Aprende a crear prompts efectivos para modelos de lenguaje como GPT-4 y DALL-E.",
      type: "Tutorial",
      icon: FileText,
      category: "IA",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Construyendo un Smart Home con Arduino",
      description: "Tutorial paso a paso para crear tu propio sistema IoT para automatizar tu hogar.",
      type: "Video",
      icon: Video,
      category: "IoT",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Guía de Seguridad para Desarrolladores",
      description: "Mejores prácticas de seguridad para proteger tus aplicaciones y datos.",
      type: "E-book",
      icon: Download,
      category: "Ciberseguridad",
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Tokenomics: Diseño de Economías Digitales",
      description: "Aprende a diseñar sistemas económicos sostenibles para proyectos blockchain.",
      type: "Guía",
      icon: BookOpen,
      category: "Web3",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Fundamentos de Machine Learning",
      description: "Conceptos básicos y aplicaciones prácticas de machine learning para principiantes.",
      type: "Curso",
      icon: Video,
      category: "IA",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Seguridad en Redes IoT",
      description: "Protocolos y mejores prácticas para asegurar dispositivos conectados.",
      type: "Whitepaper",
      icon: FileText,
      category: "IoT",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Análisis de Vulnerabilidades",
      description: "Metodologías para identificar y mitigar vulnerabilidades en sistemas informáticos.",
      type: "Tutorial",
      icon: FileText,
      category: "Ciberseguridad",
      color: "from-red-500 to-orange-500",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="cosmic-bg py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Recursos
              <span className="block text-[#00C2A1]">educativos</span>
            </h1>
            <p className="text-xl text-neutral-200 mb-8">
              Explora nuestra biblioteca de recursos gratuitos para aprender sobre Web3, IA, IoT y Ciberseguridad.
              Creados por expertos para la comunidad.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Buscar recursos..."
                className="w-full px-6 py-4 pl-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#00C2A1]"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`tab-button ${category.active ? "tab-button-active" : "tab-button-inactive"}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="group hover-lift">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 hover:border-[#00C2A1]/30 h-full flex flex-col">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${resource.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="mb-2">
                    <span className="pill">{resource.category}</span>
                    <span className="pill-accent ml-2">{resource.type}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#002F6C] mb-2">{resource.title}</h3>
                  <p className="text-neutral-600 mb-4 flex-grow">{resource.description}</p>
                  <Link href="#" className="btn-outline-light btn-sm">
                    Acceder
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#002F6C] to-[#001D47] rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="p-8 md:p-12">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  Recibe recursos exclusivos
                </h2>
                <p className="text-neutral-200 mb-8">
                  Suscríbete a nuestro newsletter y recibe contenido exclusivo, invitaciones a eventos y las últimas
                  novedades del mundo tech.
                </p>
                <form className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Tu email"
                    className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#00C2A1] flex-grow"
                  />
                  <button type="submit" className="btn-primary">
                    Suscribirme
                  </button>
                </form>
                <p className="text-xs text-neutral-300 mt-4">
                  Respetamos tu privacidad. Puedes darte de baja en cualquier momento.
                </p>
              </div>
              <div className="hidden md:block relative h-full min-h-[300px]">
                <div className="absolute inset-0 bg-[#00C2A1]/20 backdrop-blur-sm"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#00C2A1]/30 rounded-full flex items-center justify-center animate-glow">
                  <div className="w-32 h-32 bg-[#00C2A1]/40 rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-[#00C2A1]/60 rounded-full flex items-center justify-center">
                      <span className="text-4xl">📚</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
