"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, Users, Play, Star, Globe } from "lucide-react"

export default function XenniLivesPage() {
  const [selectedEvent, setSelectedEvent] = useState(null)

  const upcomingEvents = [
    {
      id: 1,
      title: "El Futuro de Web3 en LATAM",
      speaker: "María González",
      speakerRole: "Blockchain Developer en ConsenSys",
      date: "2024-02-15",
      time: "19:00 GMT-5",
      duration: "90 min",
      attendees: 245,
      description:
        "Exploraremos las tendencias emergentes en Web3 y cómo están transformando el panorama tecnológico en Latinoamérica.",
      tags: ["Web3", "Blockchain", "DeFi"],
      avatar: "👩‍💻",
      status: "upcoming",
    },
    {
      id: 2,
      title: "IA Generativa: Más Allá de ChatGPT",
      speaker: "Carlos Vega",
      speakerRole: "AI Research Engineer",
      date: "2024-02-20",
      time: "20:00 GMT-5",
      duration: "75 min",
      attendees: 189,
      description: "Descubre las últimas innovaciones en IA generativa y cómo aplicarlas en proyectos reales.",
      tags: ["IA", "Machine Learning", "GPT"],
      avatar: "👨‍🔬",
      status: "upcoming",
    },
    {
      id: 3,
      title: "Ciberseguridad en la Era IoT",
      speaker: "Ana Silva",
      speakerRole: "Cybersecurity Specialist",
      date: "2024-02-25",
      time: "18:30 GMT-5",
      duration: "60 min",
      attendees: 156,
      description: "Estrategias avanzadas para proteger dispositivos IoT y redes conectadas.",
      tags: ["Ciberseguridad", "IoT", "Redes"],
      avatar: "👩‍🛡️",
      status: "upcoming",
    },
  ]

  const pastEvents = [
    {
      id: 4,
      title: "Introducción a Smart Contracts",
      speaker: "Diego Morales",
      date: "2024-01-30",
      views: 1250,
      rating: 4.8,
      avatar: "👨‍💼",
      status: "recorded",
    },
    {
      id: 5,
      title: "Machine Learning para Principiantes",
      speaker: "Lucía Fernández",
      date: "2024-01-25",
      views: 980,
      rating: 4.9,
      avatar: "👩‍🎓",
      status: "recorded",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="cosmic-bg py-20 text-white relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#00C2A1] rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-ping"></div>
          <div
            className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-[#00C2A1] rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-60 right-1/3 w-1 h-1 bg-white rounded-full animate-ping"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">En vivo cada semana</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Xenni
              <span className="block text-[#00C2A1] glow-text">Lives</span>
            </h1>
            <p className="text-xl text-neutral-200 mb-8">
              Eventos en vivo con los mejores expertos de la industria tech. Aprende, conecta y construye el futuro
              junto a la comunidad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary btn-lg">
                <Play className="mr-2 w-5 h-5" />
                Ver próximo evento
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="btn-secondary btn-lg">
                <Calendar className="mr-2 w-5 h-5" />
                Calendario completo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Event Banner */}
      <section className="bg-gradient-to-r from-red-500 to-pink-500 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span className="font-semibold">EN VIVO AHORA</span>
              </div>
              <span>Introducción a DeFi - con María González</span>
            </div>
            <button className="btn-outline btn-sm">Unirse (245 viewers)</button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-[#002F6C] mb-6">Próximos eventos</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              No te pierdas nuestros próximos Xenni Lives. Cada evento es una oportunidad única de aprender de los
              mejores.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="group hover-lift cursor-pointer" onClick={() => setSelectedEvent(event)}>
                <div className="interactive-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-glow transition-all duration-300 border border-neutral-200 hover:border-[#00C2A1]/30 h-full">
                  {/* Event Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00C2A1]/20 to-[#002F6C]/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">{event.avatar}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#002F6C]">{event.speaker}</h4>
                        <p className="text-sm text-neutral-600">{event.speakerRole}</p>
                      </div>
                    </div>
                    <div className="pill-accent">PRÓXIMO</div>
                  </div>

                  {/* Event Details */}
                  <h3 className="font-display text-xl font-bold text-[#002F6C] mb-3 group-hover:text-[#00C2A1] transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 text-sm leading-relaxed">{event.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags.map((tag) => (
                      <span key={tag} className="pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Event Info */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center space-x-2 text-neutral-600">
                      <Calendar className="w-4 h-4 text-[#00C2A1]" />
                      <span>
                        {new Date(event.date).toLocaleDateString("es-ES", { month: "short", day: "numeric" })}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-neutral-600">
                      <Clock className="w-4 h-4 text-[#00C2A1]" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-neutral-600">
                      <Users className="w-4 h-4 text-[#00C2A1]" />
                      <span>{event.attendees} registrados</span>
                    </div>
                    <div className="flex items-center space-x-2 text-neutral-600">
                      <Globe className="w-4 h-4 text-[#00C2A1]" />
                      <span>{event.duration}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full btn-primary">
                    Registrarse gratis
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-[#002F6C] mb-6">Eventos pasados</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Revive los mejores momentos de nuestros Xenni Lives anteriores. Todo el contenido está disponible para la
              comunidad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <div key={event.id} className="group hover-lift cursor-pointer">
                <div className="interactive-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-glow transition-all duration-300 border border-neutral-200 hover:border-[#00C2A1]/30">
                  {/* Video Thumbnail */}
                  <div className="relative h-48 bg-gradient-to-br from-[#002F6C]/20 to-[#00C2A1]/20 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white px-2 py-1 rounded text-sm">
                      {event.views.toLocaleString()} views
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#00C2A1]/20 to-[#002F6C]/20 rounded-full flex items-center justify-center">
                          <span className="text-lg">{event.avatar}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#002F6C]">{event.speaker}</h4>
                          <p className="text-sm text-neutral-600">{new Date(event.date).toLocaleDateString("es-ES")}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-semibold text-neutral-700">{event.rating}</span>
                      </div>
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#002F6C] mb-4 group-hover:text-[#00C2A1] transition-colors duration-300">
                      {event.title}
                    </h3>

                    <button className="w-full btn-primary">
                      <Play className="mr-2 w-4 h-4" />
                      Ver grabación
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="#" className="btn-primary btn-lg">
              Ver todos los eventos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 cosmic-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold mb-6">¿Quieres ser speaker en Xenni Lives?</h2>
          <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
            Comparte tu conocimiento con la comunidad tech más vibrante de LATAM. Aplicaciones abiertas para speakers.
          </p>
          <Link href="#" className="btn-primary btn-lg">
            Aplicar como speaker
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
