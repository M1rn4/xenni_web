"use client"

import Link from "next/link"
import {
  ArrowRight,
  Users,
  Trophy,
  Globe,
  Calendar,
  Play,
  Code,
  Zap,
  Sparkles,
  Shield,
  Brain,
  Wifi,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [currentStage, setCurrentStage] = useState(0)
  const [currentWord, setCurrentWord] = useState(0)
  const [currentTech, setCurrentTech] = useState(0)
  const [currentRevolution, setCurrentRevolution] = useState(0)

  const stages = [
    {
      title: "Aprende",
      subtitle: "las tecnologías del futuro",
      description: "Domina Web3, IA, IoT y Ciberseguridad",
      color: "from-blue-500 to-cyan-500",
      icon: <Code className="w-8 h-8" />,
    },
    {
      title: "Construye",
      subtitle: "proyectos reales",
      description: "Desarrolla aplicaciones que impacten",
      color: "from-[#00C2A1] to-[#00AF91]",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Conecta",
      subtitle: "con la comunidad LATAM",
      description: "Únete a 500+ builders del futuro",
      color: "from-[#002F6C] to-[#001D47]",
      icon: <Users className="w-8 h-8" />,
    },
  ]

  const floatingWords = ["Web3", "IA", "IoT", "Blockchain", "Ciberseguridad"]

  const techWords = ["innovadoras", "disruptivas", "emergentes", "revolucionarias", "transformadoras"]
  const revolutionWords = ["tecnológica", "digital", "innovadora", "disruptiva", "del futuro"]

  const technologies = [
    {
      name: "Web3 & Blockchain",
      description: "Construye el futuro descentralizado",
      icon: "🔗",
      color: "from-purple-500 to-pink-500",
      bgIcon: <Shield className="w-6 h-6" />,
    },
    {
      name: "Inteligencia Artificial",
      description: "Domina el poder de la IA",
      icon: "🧠",
      color: "from-blue-500 to-cyan-500",
      bgIcon: <Brain className="w-6 h-6" />,
    },
    {
      name: "Internet of Things",
      description: "Conecta el mundo físico y digital",
      icon: "📡",
      color: "from-green-500 to-emerald-500",
      bgIcon: <Wifi className="w-6 h-6" />,
    },
    {
      name: "Ciberseguridad",
      description: "Protege el futuro digital",
      icon: "🛡️",
      color: "from-red-500 to-orange-500",
      bgIcon: <Shield className="w-6 h-6" />,
    },
  ]

  const stats = [
  { number: "100+", label: "Alumnos registrados" },
  { number: "10+", label: "Mentores expertos en tecnologías disruptivas" },
  { number: "1", label: "Objetivo: democratizar el acceso a educación tecnológica en LATAM" },

]


  const upcomingEvents = [
    {
      date: "Setiembre 15, 2025",
      title: "Xenni Bootcamp: Web3 & Blockchain Intensivo",
      description: "6 semanas construyendo el futuro descentralizado",
      status: "Inscripciones abiertas",
      statusLink: "/bootcamps/web3-blockchain",
      color: "bg-emerald-500",
    },
    // {
    //   date: "Agosto 2, 2025",
    //   title: "AI Workshop: Construye tu primer modelo",
    //   description: "Taller práctico de Machine Learning",
    //   status: "Próximamente",
    //   statusLink: null, 
    //   color: "bg-blue-500",
    // },
  ]

  // const locations = ["XenniMéxico", "XenniBogotá", "XenniLima", "XenniBuenos", "XenniSantiago"]

  useEffect(() => {
    const stageInterval = setInterval(() => {
      setCurrentStage((prev) => (prev + 1) % stages.length)
    }, 4000)

    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % floatingWords.length)
    }, 2000)

    const techInterval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techWords.length)
    }, 3000)

    const revolutionInterval = setInterval(() => {
      setCurrentRevolution((prev) => (prev + 1) % revolutionWords.length)
    }, 2500)

    return () => {
      clearInterval(stageInterval)
      clearInterval(wordInterval)
      clearInterval(techInterval)
      clearInterval(revolutionInterval)
    }
  }, [])

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#002F6C] via-[#001D47] to-[#000B22]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Location Clouds */}
          {/* {locations.map((location, index) => (
            <div
              key={location}
              className={`absolute floating-cloud animate-float-cloud bg-[#00C2A1]/20 backdrop-blur-sm rounded-full px-6 py-3 text-white font-semibold text-sm border border-[#00C2A1]/30`}
              style={{
                top: `${20 + index * 15}%`,
                left: `${10 + index * 15}%`,
                animationDelay: `${index * 0.5}s`,
              }}
            >
              <span className="flex items-center">
                <div className="w-6 h-6 bg-[#00C2A1] rounded-full flex items-center justify-center mr-2">
                  <span className="text-white text-xs">🚀</span>
                </div>
                {location}
              </span>
            </div>
          ))} */}

          {/* Flowing Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
            <path
              d="M0,300 Q250,200 500,300 T1000,300"
              stroke="#00C2A1"
              strokeWidth="2"
              fill="none"
              className="animate-draw-line"
            />
            <path
              d="M0,500 Q300,400 600,500 T1000,500"
              stroke="#00C2A1"
              strokeWidth="2"
              fill="none"
              className="animate-draw-line"
              style={{ animationDelay: "1s" }}
            />
            <path
              d="M0,700 Q400,600 700,700 T1000,700"
              stroke="#00C2A1"
              strokeWidth="2"
              fill="none"
              className="animate-draw-line"
              style={{ animationDelay: "2s" }}
            />
          </svg>

          {/* Floating Stars */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-[#00C2A1]/60 animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              ✦
            </div>
          ))}

          {/* Geometric Tent Shape */}
          <div className="absolute top-1/2 right-10 transform -translate-y-1/2 opacity-10">
            <svg width="200" height="200" viewBox="0 0 200 200">
              <path
                d="M100 20 L180 180 L20 180 Z"
                stroke="#00C2A1"
                strokeWidth="3"
                fill="none"
                className="animate-draw-tent"
              />
              <path
                d="M100 20 L100 180"
                stroke="#00C2A1"
                strokeWidth="2"
                fill="none"
                className="animate-draw-tent"
                style={{ animationDelay: "0.5s" }}
              />
            </svg>
          </div>

          {/* Additional geometric shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#00C2A1]/5 rotate-45 rounded-2xl animate-float"></div>
          <div
            className="absolute top-40 right-20 w-24 h-24 bg-[#00C2A1]/10 rotate-12 rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-[#00C2A1]/10 to-[#002F6C]/10 rotate-45 rounded-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
            {/* Left Content - Main Hero */}
            <div className="lg:col-span-7">
              {/* Dynamic Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 mb-12 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${stages[currentStage].color} rounded-full flex items-center justify-center text-white transition-all duration-500`}
                >
                  {stages[currentStage].icon}
                </div>
                <div className="text-white">
                  <div className="font-bold text-lg transition-all duration-500">{stages[currentStage].title}</div>
                  <div className="text-sm opacity-90 transition-all duration-500">{stages[currentStage].subtitle}</div>
                </div>
              </div>

              {/* Main Headline with Word Transitions */}
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.85] text-white tracking-tight">
                <span className="block animate-fade-in-up">Construye el</span>
                <span className="block animate-fade-in-up animate-delay-100">
                  <span className="relative inline-block">
                    futuro
                    <svg
                      className="absolute -bottom-4 left-0 w-full h-4 text-[#00C2A1]/70"
                      viewBox="0 0 300 12"
                      fill="none"
                    >
                      <path
                        d="M0 6 Q150 0 300 6"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        className="animate-draw-underline"
                      />
                    </svg>
                  </span>
                </span>
                <span className="block animate-fade-in-up animate-delay-200">
                  <span className="relative text-[#00C2A1]">
                    <span className="transition-all duration-1000 inline-block transform">
                      {floatingWords[currentWord]}
                    </span>
                  </span>
                </span>
              </h1>

              {/* Dynamic Subtitle */}
              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl leading-relaxed font-light animate-fade-in-up animate-delay-300">
                <span className="transition-all duration-1000">{stages[currentStage].description}</span>
                <br />
                <span className="font-semibold text-[#00C2A1]">Co-aprende y co-construye en 6 semanas intensivas</span>
              </p>

              {/* Email Subscription with Enhanced Styling */}
              
<div className="max-w-lg mb-12 animate-fade-in-up animate-delay-400">
  <div className="flex flex-col sm:flex-row gap-4 w-full">
    <a
      href="/aplicar"
      className="flex-1 text-center px-6 py-5 bg-[#00C2A1] text-white rounded-full font-bold hover:bg-[#00AF91] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 hover:-translate-y-1 active:scale-95 text-lg"
    >
      Aplica
    </a>

    <a
      href="https://chat.whatsapp.com/DEVGEWw3S7ILIzgL3yc9YC"
      target="_blank"
      className="flex-1 text-center px-6 py-5 bg-white/10 backdrop-blur-md border-2 border-white/20 text-white rounded-full font-bold hover:border-[#00C2A1] hover:bg-white/20 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 hover:-translate-y-1 active:scale-95 text-lg"
    >
      Ùnete
    </a>
  </div>

  <p className="text-white/80 mt-4 flex items-center justify-center text-lg">
    <span className="w-3 h-3 bg-[#00C2A1] rounded-full mr-3 animate-pulse"></span>
    Únete a 500+ builders construyendo el futuro
  </p>
</div>





              {/* Enhanced CTA Buttons */}
              {/* <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up animate-delay-500">
                <Link
                  href="/bootcamps"
                  className="group inline-flex items-center justify-center px-10 py-5 bg-[#00C2A1] text-white rounded-full font-bold hover:bg-[#00AF91] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 text-lg"
                >
                  <Play className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                  Explorar bootcamps
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                <Link
                  href="/comunidad"
                  className="group inline-flex items-center justify-center px-10 py-5 bg-transparent text-white rounded-full font-bold border-3 border-white hover:bg-white hover:text-[#002F6C] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-2 text-lg"
                >
                  <Users className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  Comunidad
                </Link>
              </div> */}
            </div>

            {/* Right Sidebar - Enhanced Cards */}
            <div className="lg:col-span-5 space-y-8">
              {/* Stats Card with Geometric Design */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up animate-delay-600 relative overflow-hidden">
                {/* Geometric decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <polygon points="50,10 90,90 10,90" fill="#00C2A1" />
                  </svg>
                </div>

                <div className="grid grid-cols-2 gap-6 relative z-10">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="font-display text-4xl font-bold text-white mb-2 group-hover:text-[#00C2A1] transition-colors duration-300">
                        {stat.number}
                      </div>
                      <div className="text-white/80 text-sm font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Event Cards */}
              {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up relative overflow-hidden`}
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="w-full h-full bg-gradient-to-br from-[#00C2A1] to-transparent"></div>
                </div>

                <div className="flex items-start space-x-4 relative z-10">
                  <div className={`w-4 h-4 ${event.color} rounded-full mt-2 animate-pulse shadow-lg`}></div>
                  <div className="flex-1">
                    <div className="flex items-center text-white/70 mb-3 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <h3 className="font-display text-xl font-bold text-white mb-3 hover:text-[#00C2A1] transition-colors cursor-pointer">
                      {event.title}
                    </h3>
                    <p className="text-white/80 mb-4">{event.description}</p>
                    <div className="inline-flex items-center px-4 py-2 bg-[#00C2A1]/20 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-[#00C2A1]/30">
                      {event.statusLink ? (
                        <a
                          href={event.statusLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {event.status}
                        </a>
                      ) : (
                        event.status
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}


              {/* Interactive Xenni Lives Card */}
              <div className="bg-gradient-to-br from-[#00C2A1]/20 to-[#002F6C]/20 backdrop-blur-md rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up animate-delay-900 relative overflow-hidden">
                {/* Animated geometric decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
                  <div className="w-full h-full border-2 border-[#00C2A1] rounded-2xl rotate-45 animate-spin-slow"></div>
                  <div
                    className="absolute top-2 left-2 w-20 h-20 border-2 border-[#00C2A1] rounded-2xl rotate-45 animate-spin-slow"
                    style={{ animationDirection: "reverse" }}
                  ></div>
                </div>

                <h3 className="font-display text-3xl font-bold mb-4 relative z-10">
                  Xenni <span className="text-[#00C2A1]">Lives</span>
                </h3>
                <p className="text-white/90 mb-6 relative z-10 text-lg">
                  Sesiones en vivo con expertos de la industria tech de LATAM
                </p>
                <Link
                  href="/xenni-lives"
                  className="inline-flex items-center px-8 py-4 bg-[#00C2A1] text-white rounded-full font-bold hover:bg-[#00AF91] transition-all duration-300 transform hover:scale-105 group relative z-10 shadow-lg"
                >
                  <Globe className="mr-3 w-5 h-5" />
                  Ver próximas sesiones
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center opacity-80 hover:opacity-100 transition-opacity">
            <div className="w-2 h-4 bg-[#00C2A1]/80 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Technologies Section - Enhanced with Dynamic Elements */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Tech Clouds */}
          {["AI", "Web3", "IoT", "Cyber"].map((tech, index) => (
            <div
              key={tech}
              className={`absolute floating-cloud animate-float-cloud bg-[#00C2A1]/10 backdrop-blur-sm rounded-full px-4 py-2 text-[#002F6C] font-semibold text-xs border border-[#00C2A1]/20`}
              style={{
                top: `${15 + index * 20}%`,
                right: `${5 + index * 10}%`,
                animationDelay: `${index * 0.7}s`,
              }}
            >
              {tech}
            </div>
          ))}

          {/* Geometric shapes */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#00C2A1]/5 rotate-12 rounded-xl animate-float"></div>
          <div
            className="absolute bottom-20 right-20 w-16 h-16 bg-[#002F6C]/5 rotate-45 rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="grid grid-cols-20 gap-4 h-full">
              {Array.from({ length: 400 }).map((_, i) => (
                <div key={i} className="border border-[#002F6C]"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            {/* Dynamic Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#00C2A1]/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-[#00C2A1]/20 shadow-sm hover:shadow-md transition-all duration-500 hover:scale-105">
              <Sparkles className="w-5 h-5 text-[#00C2A1] animate-pulse" />
              <span className="text-sm font-medium text-[#002F6C]">Innovación constante</span>
            </div>

            {/* Dynamic Title with Word Transitions */}
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#002F6C] mb-6">
              <span className="block">Tecnologías</span>
              <span className="relative">
                <span className="transition-all duration-1000 text-[#00C2A1]">{techWords[currentTech]}</span>
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#00C2A1]/30" viewBox="0 0 200 8" fill="none">
                  <path
                    d="M0 4 Q100 0 200 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="animate-draw-underline"
                  />
                </svg>
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
              Domina las tecnologías que están transformando el mundo. Aprende de expertos y construye proyectos reales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="interactive-card bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-200 hover:border-[#00C2A1]/30 transform hover:scale-105 relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                    <div className={`w-full h-full bg-gradient-to-br ${tech.color} rounded-full`}></div>
                  </div>

                  {/* Floating background icon */}
                  <div className="absolute top-4 right-4 text-[#00C2A1]/10 group-hover:text-[#00C2A1]/20 transition-colors duration-300">
                    {tech.bgIcon}
                  </div>

                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10`}
                  >
                    <span className="text-2xl">{tech.icon}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#002F6C] mb-3 group-hover:text-[#00C2A1] transition-colors duration-300 relative z-10">
                    {tech.name}
                  </h3>
                  <p className="text-neutral-600 mb-6 relative z-10">{tech.description}</p>
                  <Link
                    href="/bootcamps"
                    className="text-[#00C2A1] font-semibold hover:text-[#00AF91] transition-colors duration-300 flex items-center group-hover:translate-x-1 transition-transform relative z-10"
                  >
                    Explorar bootcamp
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA Section - Enhanced with Dynamic Elements */}
      <section className="py-20 bg-gradient-to-br from-[#002F6C] via-[#001D47] to-[#000B22] text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Community Elements */}
          {/* {["Builders", "Innovadores", "Creadores", "Visionarios"].map((role, index) => (
            <div
              key={role}
              className={`absolute floating-cloud animate-float-cloud bg-[#00C2A1]/20 backdrop-blur-sm rounded-full px-6 py-3 text-white font-semibold text-sm border border-[#00C2A1]/30`}
              style={{
                top: `${10 + index * 20}%`,
                left: `${5 + index * 15}%`,
                animationDelay: `${index * 0.6}s`,
              }}
            >
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                {role}
              </span>
            </div>
          ))} */}

          {/* Geometric decorations */}
          <div className="absolute top-20 right-10 w-32 h-32 border-2 border-[#00C2A1]/20 rounded-2xl rotate-45 animate-spin-slow"></div>
          <div
            className="absolute bottom-20 left-10 w-24 h-24 bg-[#00C2A1]/10 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Flowing lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
            <path
              d="M0,200 Q500,100 1000,200"
              stroke="#00C2A1"
              strokeWidth="2"
              fill="none"
              className="animate-draw-line"
            />
            <path
              d="M0,800 Q500,700 1000,800"
              stroke="#00C2A1"
              strokeWidth="2"
              fill="none"
              className="animate-draw-line"
              style={{ animationDelay: "1s" }}
            />
          </svg>

          {/* Twinkling stars */}
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-[#00C2A1]/40 animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              ✦
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Dynamic Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 mb-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
              <Trophy className="w-6 h-6 text-[#00C2A1] animate-pulse" />
              <span className="text-white font-semibold">Únete al movimiento</span>
            </div>

            {/* Dynamic Title with Word Transitions */}
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-high-contrast">
              <span className="block animate-fade-in-up">Únete a la revolución</span>
              <span className="block animate-fade-in-up animate-delay-100">
                <span className="relative text-[#00C2A1]">
                  <span className="transition-all duration-1000 inline-block">
                    {revolutionWords[currentRevolution]}
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-2 text-[#00C2A1]/50"
                    viewBox="0 0 300 8"
                    fill="none"
                  >
                    <path
                      d="M0 4 Q150 0 300 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="animate-draw-underline"
                    />
                  </svg>
                </span>
              </span>
              <span className="block animate-fade-in-up animate-delay-200">de LATAM</span>
            </h2>

            <p className="text-xl text-neutral-100 mb-12 animate-fade-in-up animate-delay-300">
              Más de 500 builders ya están construyendo el futuro. ¿Te unes?
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animate-delay-400">
              <Link
                href="/aplicar"
                className="group inline-flex items-center justify-center px-10 py-5 bg-[#00C2A1] text-white rounded-full font-bold hover:bg-[#00AF91] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 text-lg"
              >
                <Trophy className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                Aplicar ahora
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link
                href="/xenni-lives"
                className="group inline-flex items-center justify-center px-10 py-5 bg-transparent text-white rounded-full font-bold border-3 border-white hover:bg-white hover:text-[#002F6C] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-2 text-lg"
              >
                <Globe className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                Ver Xenni Lives
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
