import Link from "next/link"
import { ArrowRight, Sparkles, Users, Trophy, Globe } from "lucide-react"

export default function HomePage() {
  const technologies = [
    {
      name: "Web3 & Blockchain",
      description: "Construye el futuro descentralizado",
      icon: "🔗",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Inteligencia Artificial",
      description: "Domina el poder de la IA",
      icon: "🧠",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Internet of Things",
      description: "Conecta el mundo físico y digital",
      icon: "📡",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Ciberseguridad",
      description: "Protege el futuro digital",
      icon: "🛡️",
      color: "from-red-500 to-orange-500",
    },
  ]

  const stats = [
    { number: "500+", label: "Estudiantes activos" },
    { number: "50+", label: "Mentores expertos" },
    { number: "15", label: "Países de LATAM" },
    { number: "95%", label: "Tasa de empleabilidad" },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="cosmic-bg min-h-screen flex items-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00C2A1]/30 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#002F6C]/30 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20">
                <Sparkles className="w-4 h-4 text-[#00C2A1]" />
                <span className="text-sm font-semibold text-high-contrast">El futuro de la educación tech</span>
              </div>

              <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight text-high-contrast">
                Construye el
                <span className="block text-[#00C2A1]">futuro.</span>
                <span className="block">Hoy.</span>
              </h1>

              <p className="text-xl md:text-2xl text-neutral-100 mb-8 leading-relaxed">
                Aprende Web3, IA, IoT y Ciberseguridad con mentores de LATAM.
                <span className="block font-bold text-[#00C2A1]">100% en español.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/bootcamps"
                  className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center group hover:scale-105"
                >
                  Explorar bootcamps
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/comunidad"
                  className="btn-outline text-lg px-8 py-4 inline-flex items-center justify-center group hover:scale-105"
                >
                  Únete a la comunidad
                  <Users className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="glass-card p-8 animate-float">
                <div className="w-full h-80 bg-gradient-to-br from-[#00C2A1]/20 to-[#002F6C]/20 rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-[#00C2A1]/30 rounded-full flex items-center justify-center mx-auto mb-4 animate-glow">
                      <span className="text-4xl">🚀</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-2 text-high-contrast">Builder Futurista</h3>
                    <p className="text-neutral-200">Construyendo el mañana</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="font-display text-4xl md:text-5xl font-bold text-[#002F6C] mb-2 group-hover:text-[#00C2A1] transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-neutral-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#002F6C] mb-6">Tecnologías del futuro</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Domina las tecnologías que están transformando el mundo. Aprende de expertos y construye proyectos reales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="group hover-lift">
                <div className="interactive-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-glow transition-all duration-300 border border-neutral-200 hover:border-[#00C2A1]/30">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-2xl">{tech.icon}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#002F6C] mb-3">{tech.name}</h3>
                  <p className="text-neutral-600 mb-6">{tech.description}</p>
                  <Link
                    href="/bootcamps"
                    className="text-[#00C2A1] font-semibold hover:text-[#00AF91] transition-colors duration-300 flex items-center group"
                  >
                    Explorar bootcamp
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA Section */}
      <section className="py-20 cosmic-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-high-contrast">
              Únete a la revolución tecnológica de LATAM
            </h2>
            <p className="text-xl text-neutral-100 mb-8">
              Más de 500 builders ya están construyendo el futuro. ¿Te unes?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/aplicar"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center group hover:scale-105"
              >
                <Trophy className="mr-2 w-5 h-5" />
                Aplicar ahora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/xenni-lives"
                className="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center group hover:scale-105"
              >
                <Globe className="mr-2 w-5 h-5" />
                Ver Xenni Lives
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
