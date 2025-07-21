import Link from "next/link"
import { Users, MessageCircle, Calendar, Globe, ArrowRight, Heart } from "lucide-react"

export default function ComunidadPage() {
  const communityStats = [
    { number: "5+", label: "Paises", icon: Users },
    { number: "1", label: "Comunidad en Expansión", icon: Globe },
    { number: "100%", label: "Equipo Tech", icon: Calendar },
    { number: "24/7", label: "Soporte comunidad", icon: MessageCircle },
  ]

  const communityFeatures = [
    {
      title: "Discord Exclusivo",
      description: "Conecta con builders de toda LATAM, comparte proyectos y recibe feedback en tiempo real.",
      icon: "💬",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Xenni Lives",
      description: "Eventos semanales con expertos de la industria, workshops y sesiones de networking.",
      icon: "🎥",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Proyectos Colaborativos",
      description: "Trabaja en proyectos reales con otros estudiantes y construye tu portafolio.",
      icon: "🚀",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Mentorías 1:1",
      description: "Sesiones personalizadas con mentores expertos para acelerar tu crecimiento.",
      icon: "🎯",
      color: "from-red-500 to-orange-500",
    },
  ]

  const testimonials = [
    {
      name: "María González",
      role: "Full Stack Developer",
      country: "México",
      avatar: "👩‍💻",
      quote:
        "La comunidad de Xenni cambió mi carrera. Pasé de no saber programar a trabajar en una startup Web3 en 8 meses.",
    },
    {
      name: "Carlos Rodríguez",
      role: "AI Engineer",
      country: "Colombia",
      avatar: "👨‍🔬",
      quote:
        "Los proyectos colaborativos me ayudaron a entender cómo funciona la IA en el mundo real. Ahora trabajo en ML.",
    },
    {
      name: "Ana Silva",
      role: "Cybersecurity Specialist",
      country: "Brasil",
      avatar: "👩‍🛡️",
      quote:
        "El networking en Xenni es increíble. Conocí a mi co-founder actual en un Xenni Live sobre ciberseguridad.",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="cosmic-bg py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00C2A1]/30 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#002F6C]/30 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              ¡Construimos
              <span className="block text-[#00C2A1]">juntos!</span>
            </h1>
            <p className="text-xl text-neutral-200 mb-8">
               Forma parte de la comunidad que está usando tecnología para resolver los grandes desafíos del mundo.
                Aprende blockchain, IA y sostenibilidad creando soluciones reales con impacto local y global.
            </p>
            <Link href="#" className="btn-primary btn-lg">
              <MessageCircle className="mr-2 w-5 h-5" />
              Únete al Discord
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00C2A1] to-[#00AF91] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-[#002F6C] mb-2">{stat.number}</div>
                <div className="text-neutral-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#002F6C] mb-6">Más que una academia</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Somos una familia de builders que se apoyan mutuamente para crecer y construir el futuro tecnológico de
              LATAM.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {communityFeatures.map((feature, index) => (
              <div key={index} className="group hover-lift">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 hover:border-[#00C2A1]/30">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#002F6C] mb-4">{feature.title}</h3>
                  <p className="text-neutral-600 text-lg leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#002F6C] mb-6">Historias de éxito</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Conoce a algunos de nuestros builders que están transformando la industria tech en LATAM.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group hover-lift">
                <div className="bg-neutral-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-neutral-200 hover:border-[#00C2A1]/30">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00C2A1] to-[#00AF91] rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-[#002F6C]">{testimonial.name}</h4>
                      <p className="text-sm text-neutral-600">
                        {testimonial.role} • {testimonial.country}
                      </p>
                    </div>
                  </div>
                  <p className="text-neutral-700 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center mt-4">
                    <Heart className="w-4 h-4 text-red-500 mr-2" />
                    <span className="text-sm text-neutral-600">Builder verificado</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 cosmic-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Tu lugar en la comunidad te espera</h2>
          <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
            Únete a cientos de builders que ya están construyendo el futuro. La próxima gran idea podría surgir de
            nuestra colaboración.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#" className="btn-primary btn-lg">
              <MessageCircle className="mr-2 w-5 h-5" />
              Únete al Discord
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/aplicar" className="btn-secondary btn-lg">
              <Users className="mr-2 w-5 h-5" />
              Aplicar a bootcamp
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
