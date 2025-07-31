"use client"

import { useState } from "react"
import Link from "next/link"
import { Clock, Users, Award, ArrowRight, Filter, X, Mail, Bell } from "lucide-react"

export default function BootcampsPage() {
  const [selectedBootcamp, setSelectedBootcamp] = useState(null)
  const [preRegisterModal, setPreRegisterModal] = useState(false)
  const [preRegisterData, setPreRegisterData] = useState({ name: "", email: "", bootcamp: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const bootcamps = [
    {
      id: "web3-blockchain",
      title: "Blockchain Builder Bootcamp",
      description: "El bootcamp Web3 donde construyes, creces y ganas dinero",
      duration: "8 semanas",
      level: "Principiante",
      students: 10000,
      nextStart: "15 Set 2025",
      technologies: [
      "Solidity",
      "ThirdWeb",
      "React",
      "IA para developers",
      "MetaMask",
    ],
      color: "from-purple-500 to-pink-500",
      icon: "🔗",
      available: true,
    },
    {
      id: "ai-machine-learning",
      title: "Inteligencia Artificial & ML",
      description: "Desarrolla modelos de IA y sistemas inteligentes desde cero",
      duration: "20 semanas",
      level: "Avanzado",
      students: 0,
      nextStart: "Próximamente",
      estimatedStart: "Q2 2024",
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI"],
      color: "from-blue-500 to-cyan-500",
      icon: "🧠",
      available: false,
    },
    {
      id: "iot-embedded",
      title: "Internet of Things & Embedded",
      description: "Conecta el mundo físico con soluciones IoT innovadoras",
      duration: "14 semanas",
      level: "Intermedio",
      students: 0,
      nextStart: "Próximamente",
      estimatedStart: "Q3 2024",
      technologies: ["Arduino", "Raspberry Pi", "C++", "MQTT"],
      color: "from-green-500 to-emerald-500",
      icon: "📡",
      available: false,
    },
    {
      id: "cybersecurity",
      title: "Ciberseguridad Avanzada",
      description: "Protege sistemas y datos con técnicas de seguridad de vanguardia",
      duration: "18 semanas",
      level: "Avanzado",
      students: 0,
      nextStart: "Próximamente",
      estimatedStart: "Q4 2024",
      technologies: ["Kali Linux", "Python", "Wireshark", "Metasploit"],
      color: "from-red-500 to-orange-500",
      icon: "🛡️",
      available: false,
    },
  ]

  const levels = ["Todos", "Principiante", "Intermedio", "Avanzado"]

  const handlePreRegister = (bootcamp: { id: string; title: string; description: string; duration: string; level: string; students: number; nextStart: string; technologies: string[]; color: string; icon: string; available: boolean; estimatedStart?: undefined } | { id: string; title: string; description: string; duration: string; level: string; students: number; nextStart: string; estimatedStart: string; technologies: string[]; color: string; icon: string; available: boolean }) => {
    setPreRegisterData({ ...preRegisterData, bootcamp: bootcamp.title })
    setPreRegisterModal(true)
  }

  const handleSubmitPreRegister = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envío
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)

    setTimeout(() => {
      setPreRegisterModal(false)
      setSubmitSuccess(false)
      setPreRegisterData({ name: "", email: "", bootcamp: "" })
    }, 2000)
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="cosmic-bg py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-high-contrast">
              Bootcamps que transforman
              <span className="block text-[#00C2A1]">carreras</span>
            </h1>
            <p className="text-xl text-neutral-100 mb-8">
              Programas intensivos diseñados por expertos de la industria. Aprende haciendo, construye proyectos reales
              y conecta con la comunidad tech de LATAM.
            </p>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
              <div className="w-2 h-2 bg-[#00C2A1] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-high-contrast">
                Web3 & Blockchain disponible ahora • Más bootcamps próximamente
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-neutral-600" />
              <span className="font-semibold text-neutral-800">Filtrar por nivel:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {levels.map((level) => (
                <button
                  key={level}
                  className={`tab-button ${level === "Todos" ? "tab-button-active" : "tab-button-inactive"}`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bootcamps Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {bootcamps.map((bootcamp) => (
              <div key={bootcamp.id} className={`group ${bootcamp.available ? "hover-lift" : ""}`}>
                <div
                  className={`bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 border border-neutral-200 relative ${
                    bootcamp.available ? "hover:shadow-xl hover:border-[#00C2A1]/30" : "opacity-75"
                  }`}
                >
                  {/* Coming Soon Badge */}
                  {!bootcamp.available && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1 shadow-lg">
                        <span>⏳</span>
                        <span>PRÓXIMAMENTE</span>
                      </div>
                    </div>
                  )}

                  {/* Header */}
                  <div
                    className={`h-32 bg-gradient-to-br ${bootcamp.color} relative overflow-hidden ${
                      !bootcamp.available ? "opacity-80" : ""
                    }`}
                  >
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4 text-4xl">{bootcamp.icon}</div>
                    <div className="absolute top-4 right-4">
                      {bootcamp.available ? (
                        <span className="pill-dark">{bootcamp.level}</span>
                      ) : (
                        <span className="pill-dark">En desarrollo</span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="font-display text-2xl font-bold text-[#002F6C] mb-3">{bootcamp.title}</h3>
                    <p className="text-neutral-600 mb-6">{bootcamp.description}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <Clock className="w-5 h-5 text-[#00C2A1] mx-auto mb-1" />
                        <div className="text-sm font-semibold text-neutral-800">{bootcamp.duration}</div>
                      </div>
                      <div className="text-center">
                        <Users className="w-5 h-5 text-[#00C2A1] mx-auto mb-1" />
                        <div className="text-sm font-semibold text-neutral-800">
                          {bootcamp.available ? `${bootcamp.students} estudiantes` : "Lista de espera"}
                        </div>
                      </div>
                      <div className="text-center">
                        <Award className="w-5 h-5 text-[#00C2A1] mx-auto mb-1" />
                        <div className="text-sm font-semibold text-neutral-800">Certificado blockchain verificable</div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="text-sm font-semibold text-neutral-800 mb-2">Tecnologías:</div>
                      <div className="flex flex-wrap gap-2">
                        {bootcamp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`pill ${
                              bootcamp.available ? "bg-[#F1F5F9] text-[#002F6C]" : "bg-neutral-50 text-neutral-500"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Status Info */}
                    {!bootcamp.available && (
                      <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200">
                        <div className="text-sm text-purple-800 space-y-1">
                          <div className="flex items-center space-x-2">
                            <span>📅</span>
                            <span>
                              <strong>Inicio estimado:</strong> {bootcamp.estimatedStart}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span>🔒</span>
                            <span>Inscripciones aún no disponibles</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span>📨</span>
                            <span>Notifícame cuando se abra</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* CTA */}
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-neutral-600">
                          {bootcamp.available ? "Próximo inicio:" : "Estado:"}
                        </div>
                        <div className={`font-semibold ${bootcamp.available ? "text-[#002F6C]" : "text-purple-600"}`}>
                          {bootcamp.nextStart}
                        </div>
                      </div>

                      {bootcamp.available ? (
                        <Link href={`/bootcamps/${bootcamp.id}`} className="btn-primary inline-flex items-center group">
                          Ver detalles
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      ) : (
                        <button
                          onClick={() => handlePreRegister(bootcamp)}
                          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 flex items-center group border-2 border-transparent focus:ring-4 focus:ring-purple-500/30"
                        >
                          <Bell className="mr-2 w-4 h-4" />
                          Notifícame
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-register Modal */}
      {preRegisterModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full">
            <div className="p-8">
              {!submitSuccess ? (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-[#002F6C]">¡Sé el primero en enterarte!</h3>
                      <p className="text-[#00C2A1] font-semibold">{preRegisterData.bootcamp}</p>
                    </div>
                    <button
                      onClick={() => setPreRegisterModal(false)}
                      className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors duration-300"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-neutral-600 mb-6">
                    Te notificaremos tan pronto como abramos las inscripciones para este bootcamp. ¡No te pierdas la
                    oportunidad!
                  </p>

                  <form onSubmit={handleSubmitPreRegister} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">Nombre completo</label>
                      <input
                        type="text"
                        value={preRegisterData.name}
                        onChange={(e) => setPreRegisterData({ ...preRegisterData, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 border-2 border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#00C2A1] focus:border-[#00C2A1] transition-all duration-300"
                        placeholder="Tu nombre completo"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={preRegisterData.email}
                        onChange={(e) => setPreRegisterData({ ...preRegisterData, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 border-2 border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#00C2A1] focus:border-[#00C2A1] transition-all duration-300"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center border-2 border-transparent focus:ring-4 focus:ring-purple-500/30"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Registrando...
                        </>
                      ) : (
                        <>
                          <Mail className="mr-2 w-4 h-4" />
                          Notificarme cuando se abra
                        </>
                      )}
                    </button>
                  </form>

                  <p className="text-xs text-neutral-500 mt-4 text-center">
                    Solo te contactaremos para notificarte sobre este bootcamp. Respetamos tu privacidad.
                  </p>
                </>
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✅</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#002F6C] mb-2">¡Listo!</h3>
                  <p className="text-neutral-600">
                    Te notificaremos tan pronto como abramos las inscripciones para{" "}
                    <strong>{preRegisterData.bootcamp}</strong>.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 cosmic-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-high-contrast">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-xl text-neutral-100 mb-8 max-w-2xl mx-auto">
            Contáctanos y cuéntanos qué te gustaría aprender. Estamos siempre creando nuevos bootcamps basados en las
            necesidades de nuestra comunidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/aplicar"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center group hover:scale-105"
            >
              Aplicar a Web3 & Blockchain
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="#"
              className="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center group hover:scale-105"
            >
              Sugerir nuevo bootcamp
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
