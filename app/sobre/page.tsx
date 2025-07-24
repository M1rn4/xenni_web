"use client";

import { ArrowRight, Users, Globe, Award, Zap } from "lucide-react"
import Link from "next/link"

export default function SobrePage() {
  const team = [
    {
      name: "Mirna Ampuero",
      role: "CEO & CTO",
      bio: "Ingeniera mecatrónica y emprendedora en Web3, sostenibilidad y educación tech.",
      avatar: "/team/mirna.png",
    },

        {
      name: "Mitchell Mirano ",
      role: "Data & Backend Architect",
      bio: "Con más de 7 años de experiencia en análisis de datos, modelado estadístico y desarrollo backend.",
      avatar: "/team/mitchell.png",
    },

        {
      name: "Erlich Ampuero",
      role: "COO",
      bio: "COO y ganador de MakeX Latam. Apasionado por la tecnología, la robótica",
      avatar: "team/erlich.png",
    },
            {
      name: "Almendra Miranda",
      role: "Coordinadora de Marketing .",
      bio: "Especializada en marketing digital y desarrollo de estrategias comerciales para mypes y pymes",
      avatar: "/team/almendra.png",
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
      title: "Impacto Regional / Global",
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
              Empoderamo a jóvenes y ciudadanos con conocimientos tecnológicos y propósito para que se conviertan en agentes de cambio en sus comunidades y el mundo.
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
                Xenni nació con un propósito claro: transformar el acceso al conocimiento tecnológico en el mundo hispano, empoderando a personas con herramientas para resolver los desafíos sociales, económicos y ambientales más urgentes de nuestra era.
              </p>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                Creemos que el talento está distribuido por igual, pero las oportunidades no. Por eso, nuestra misión es cerrar esa brecha, formando una nueva generación de creadores de impacto capaces de liderar la transformación digital con propósito desde cualquier rincón del mundo.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                A través de bootcamps intensivos, una comunidad global y mentoría personalizada, estamos construyendo un ecosistema donde aprender, crear y colaborar se convierten en la nueva moneda de cambio para el desarrollo sostenible.
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
                      Formar a más de <span className="font-bold text-[#002F6C]">50,000 creadores de impacto </span> en tecnologías emergentes y sostenibles.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#00C2A1]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#00C2A1] font-bold">2</span>
                  </div>
                  <div>
                    <p className="text-neutral-700">
                      Establecer <span className="font-bold text-[#002F6C]">hubs de innovación y aprendizaje</span> n las principales ciudades de LATAM y expandirnos globalmente.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#00C2A1]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#00C2A1] font-bold">3</span>
                  </div>
                  <div>
                    <p className="text-neutral-700">
                      Impulsar la creación de <span className="font-bold text-[#002F6C]">1,000 startupscon impacto real</span> lideradas
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
                      <span className="font-bold text-[#002F6C]">referente global en innovación tecnológica con propósito.</span>.
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
      <section className="py-20 bg-white" aria-labelledby="team-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="team-heading" className="font-display text-4xl font-bold text-[#002F6C] mb-4">
            Nuestro equipo
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Conoce a las mentes detrás de Xenni: personas apasionadas por la tecnología, la educación y el impacto real.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group hover-lift transition-transform duration-300">
              <div className="bg-neutral-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-neutral-200 hover:border-[#00C2A1]/30 text-center">
                
                {member.avatar?.match(/\.(jpeg|jpg|png|webp|gif)$/i) ? (
                  <div className="w-25 h-25 rounded-3xl overflow-hidden mx-auto mb-6 border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={member.avatar}
                      alt={`Foto de ${member.name}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/team/default.jpg";
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 bg-gradient-to-br from-[#002F6C]/20 to-[#00C2A1]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl text-[#002F6C] font-bold group-hover:scale-105 transition-transform duration-300">
                    {member.avatar}
                  </div>
                )}

                <h3 className="font-display text-xl font-bold text-[#002F6C] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#00C2A1] font-medium text-sm mb-3">{member.role}</p>
                <p className="text-neutral-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* Partners Section */}
      {/* <section className="py-20 bg-neutral-50">
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
      </section> */}

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
