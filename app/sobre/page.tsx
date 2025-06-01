import { ArrowRight, Users, Globe, Award, Zap } from "lucide-react"
import Link from "next/link"

export default function SobrePage() {
  const team = [
    {
      name: "Alejandra Méndez",
      role: "CEO & Co-Fundadora",
      bio: "Ex-CTO de una startup blockchain con más de 10 años de experiencia en tecnología.",
      avatar: "👩‍💼",
    },
    {
      name: "Carlos Vega",
      role: "CTO & Co-Fundador",
      bio: "Ingeniero de IA con experiencia en Google y Meta. Apasionado por la educación tech.",
      avatar: "👨‍💻",
    },
    {
      name: "Sofía Ramírez",
      role: "Directora Académica",
      bio: "PhD en Ciencias de la Computación con especialidad en ciberseguridad y blockchain.",
      avatar: "👩‍🏫",
    },
    {
      name: "Miguel Torres",
      role: "Director de Comunidad",
      bio: "Construyendo comunidades tech por más de 8 años. Experto en Web3 y ecosistemas descentralizados.",
      avatar: "👨‍🚀",
    },
  ]

  const values = [
    {
      title: "Innovación Constante",
      description: "Nos mantenemos a la vanguardia de la tecnología para ofrecer la educación más relevante.",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Comunidad Primero",
      description: "Creemos en el poder de la colaboración y el aprendizaje conjunto.",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Impacto Regional",
      description: "Trabajamos para potenciar el talento tecnológico en toda Latinoamérica.",
      icon: Globe,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Excelencia Educativa",
      description: "Nos comprometemos con los más altos estándares de calidad en nuestros programas.",
      icon: Award,
      color: "from-red-500 to-orange-500",
    },
  ]

  const partners = [
    "Empresa Tech 1",
    "Startup Innovadora",
    "Universidad Digital",
    "Aceleradora Global",
    "Fondo de Inversión",
    "Hub de Innovación",
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="cosmic-bg py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Nuestra
              <span className="block text-[#00C2A1]">misión</span>
            </h1>
            <p className="text-xl text-neutral-200 mb-8">
              Formamos a la próxima generación de creadores tecnológicos en Latinoamérica, democratizando el acceso a
              educación de calidad en tecnologías emergentes.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-[#002F6C] mb-6">¿Por qué existimos?</h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                Xenni nació de una visión clara: transformar el panorama tecnológico de Latinoamérica creando
                oportunidades de educación accesibles y de alta calidad en tecnologías emergentes.
              </p>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                Creemos que el talento está distribuido equitativamente, pero las oportunidades no. Nuestra misión es
                cerrar esa brecha, formando a los futuros líderes tecnológicos que resolverán los desafíos más
                importantes de nuestra región.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                A través de bootcamps intensivos, una comunidad vibrante y mentoría personalizada, estamos construyendo
                un ecosistema donde el conocimiento fluye libremente y las oportunidades se multiplican.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#00C2A1]/10 to-[#002F6C]/10 rounded-2xl p-8 md:p-12">
              <h3 className="font-display text-2xl font-bold text-[#002F6C] mb-6">Nuestra visión para 2030</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#00C2A1]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#00C2A1] font-bold">1</span>
                  </div>
                  <div>
                    <p className="text-neutral-700">
                      Formar a más de <span className="font-bold text-[#002F6C]">50,000 builders</span> en tecnologías
                      emergentes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#00C2A1]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#00C2A1] font-bold">2</span>
                  </div>
                  <div>
                    <p className="text-neutral-700">
                      Establecer <span className="font-bold text-[#002F6C]">hubs de innovación</span> en las principales
                      ciudades de LATAM.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#00C2A1]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#00C2A1] font-bold">3</span>
                  </div>
                  <div>
                    <p className="text-neutral-700">
                      Impulsar la creación de <span className="font-bold text-[#002F6C]">1,000 startups</span> lideradas
                      por graduados de Xenni.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#00C2A1]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#00C2A1] font-bold">4</span>
                  </div>
                  <div>
                    <p className="text-neutral-700">
                      Posicionar a LATAM como un{" "}
                      <span className="font-bold text-[#002F6C]">referente global en innovación tecnológica</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-[#002F6C] mb-6">Nuestros valores</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Estos principios guían todo lo que hacemos en Xenni, desde el diseño de nuestros bootcamps hasta la forma
              en que construimos nuestra comunidad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group hover-lift">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 hover:border-[#00C2A1]/30 h-full">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#002F6C] mb-4">{value.title}</h3>
                  <p className="text-neutral-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-[#002F6C] mb-6">Nuestro equipo</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Conoce a las mentes brillantes detrás de Xenni. Un equipo apasionado por la tecnología y la educación.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group hover-lift">
                <div className="bg-neutral-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-neutral-200 hover:border-[#00C2A1]/30 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#002F6C]/20 to-[#00C2A1]/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                    <span className="text-4xl">{member.avatar}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#002F6C] mb-2">{member.name}</h3>
                  <p className="text-[#00C2A1] font-medium mb-4">{member.role}</p>
                  <p className="text-neutral-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-[#002F6C] mb-6">Nuestros aliados</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Colaboramos con empresas líderes y organizaciones que comparten nuestra visión de transformar el panorama
              tecnológico de LATAM.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="group hover-lift">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-200 hover:border-[#00C2A1]/30 flex items-center justify-center h-32">
                  <span className="font-display font-bold text-neutral-400 group-hover:text-[#002F6C] transition-colors duration-300">
                    {partner}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 cosmic-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold mb-6">Únete a nuestra misión</h2>
          <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
            Estamos construyendo el futuro de la educación tecnológica en LATAM. ¿Te gustaría ser parte de esta
            revolución?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/aplicar" className="btn-primary btn-lg">
              Aplicar como estudiante
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="#" className="btn-secondary btn-lg">
              Trabaja con nosotros
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
