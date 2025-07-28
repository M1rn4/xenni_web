"use client"

import { useState } from "react"
import Link from "next/link"
import {Briefcase, Search,BarChart ,
  ArrowRight,
  Calendar,
  Clock,
  Users,
  Award,
  Download,
  CheckCircle,
  BookOpen,
  Rocket,
  Mic,
  GraduationCap,
  X,
  List,
  Grid3X3,
  Play,
  FileText,
  Globe,
  Shield,
  Coins,
  Settings,
  Brain,
  Target,
  Code,
  Palette,
  UserCheck,
  Zap,
  Star,
  Lightbulb,
  ClipboardList,
  Puzzle,
} from "lucide-react"

export default function Web3BootcampPage() {
  const [activeTab, setActiveTab] = useState("syllabus")
  const [selectedSession, setSelectedSession] = useState(null)
  const [viewMode, setViewMode] = useState("cards") // "cards" or "list"
  const [currentStage, setCurrentStage] = useState(0)
  const [hoveredWorkshop, setHoveredWorkshop] = useState(null)

  const bootcampInfo = {
    title: "Web3 & Blockchain Development",
    description:
      "Crea tu primer proyecto Web3 desde cero. Aprende los fundamentos de blockchain y participa en la construcción de un prototipo funcional en equipo, combinando tecnología, diseño y modelos de negocio innovadores.",

    duration: "8 semanas",
    modality: "Online en vivo + sesiones híbridas",
    certificate: "NFT + Diploma PDF",
    price: "300 Soles",
    includes: [
      "Mentoría personalizada",
      "Acceso a comunidad Web3",
      "Proyectos prácticos guiados",
      "Recursos descargables y plantillas",
      "Simulaciones de pitch",
      "Feedback por expertos",
    ],

    nextStart: "15 Set 2025",
    level: "Intermedio",
    students: 120,

    technologies: [
      "Solidity",
      "ThirdWeb",
      "Figma",
      "IA para developers",
      "Notion",
      "MetaMask",
    ],


    focus: [
      "Fundamentos Web3",
      "Tokenomics para proyectos",
      "Gestión ágil de equipos",
      "Prototipado visual",
      "Presentación de ideas (pitch)",
    ],

    color: "from-purple-500 to-pink-500",
    icon: "🚀",
  };



  const workshops = [
    {
      title: "Setup de entorno Web3",
      description: "Aprende a configurar tu wallet, IDE y conexión a la testnet desde cero",
      icon: Settings,
      iconBg: "bg-blue-500",
      color: "from-blue-500 to-cyan-500",
      duration: "2 horas",
      type: "Workshop",
      difficulty: "Principiante",
      tools: ["MetaMask", "Remix IDE", "Hardhat", "Testnet"],
      outcomes: ["Wallet configurada", "Entorno de desarrollo listo", "Primera transacción en testnet"],
    },
    {
      title: "Hackeando tu primer Smart Contract",
      description: "Guía práctica para desplegar un contrato básico usando Remix y Hardhat",
      icon: Code,
      iconBg: "bg-purple-500",
      color: "from-purple-500 to-pink-500",
      duration: "3 horas",
      type: "Hands-on Lab",
      difficulty: "Intermedio",
      tools: ["Solidity", "Remix", "Hardhat", "Ethers.js"],
      outcomes: ["Smart contract desplegado", "Interacción con contrato", "Testing automatizado"],
    },
    {
      title: "Tokeniza tu idea",
      description: "Crea un token ERC-20 o NFT y súbelo a la red",
      icon: Palette,
      iconBg: "bg-pink-500",
      color: "from-pink-500 to-rose-500",
      duration: "2.5 horas",
      type: "Creative Workshop",
      difficulty: "Intermedio",
      tools: ["OpenZeppelin", "IPFS", "Pinata", "OpenSea"],
      outcomes: ["Token ERC-20 creado", "NFT collection", "Metadata en IPFS"],
    },
    {
      title: "Feedback Sessions",
      description: "Espacios de revisión 1:1 con mentores para mejorar tu código",
      icon: UserCheck,
      iconBg: "bg-green-500",
      color: "from-green-500 to-emerald-500",
      duration: "30 min",
      type: "Mentoría",
      difficulty: "Todos los niveles",
      tools: ["Code Review", "Best Practices", "Debugging"],
      outcomes: ["Código optimizado", "Mejores prácticas", "Feedback personalizado"],
    },
    {
      title: "Reto semanal",
      description: "Un mini-desafío práctico cada semana para poner en acción lo aprendido",
      icon: Zap,
      iconBg: "bg-yellow-500",
      color: "from-yellow-500 to-orange-500",
      duration: "Variable",
      type: "Challenge",
      difficulty: "Progresivo",
      tools: ["GitHub", "Discord", "Leaderboard"],
      outcomes: ["Proyecto semanal", "Puntos de gamificación", "Reconocimiento público"],
    },
    {
      title: "Pitch Final",
      description: "Presenta tu proyecto en vivo ante mentores, invitados y potenciales aliados",
      icon: Rocket,
      iconBg: "bg-red-500",
      color: "from-red-500 to-pink-500",
      duration: "4 horas",
      type: "Demo Day",
      difficulty: "Avanzado",
      tools: ["Pitch Deck", "Live Demo", "Q&A"],
      outcomes: ["Presentación profesional", "Networking", "Feedback de expertos"],
    },
    {
      title: "Workshops sorpresa con expertos",
      description: "Sesiones extra opcionales con especialistas del ecosistema (DeFi, NFT, seguridad)",
      icon: Star,
      iconBg: "bg-indigo-500",
      color: "from-indigo-500 to-purple-500",
      duration: "1.5 horas",
      type: "Guest Session",
      difficulty: "Variable",
      tools: ["Industry Insights", "Networking", "Q&A"],
      outcomes: ["Conocimiento especializado", "Contactos industria", "Tendencias actuales"],
    },
  ]

  const syllabus = [
    {
  stage: "Introducción a Web3 y Blockchain",
  description: "Conoce los principios fundamentales de la tecnología blockchain y su evolución en el ecosistema Web3.",
  color: "from-blue-500 to-cyan-500",
  bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
  borderColor: "border-blue-200",
  sessions: [
    {
      title: "Fundamentos y Oportunidades",
      icon: BookOpen,
      iconBg: "bg-blue-500",
      description:
        "Introducción a la tecnología blockchain, sus principios fundamentales y las oportunidades que ofrece en el mercado actual.",
      deliverables: "Quiz de conceptos básicos",
      duration: "2 horas",
      resources: ["Video introductorio", "Whitepaper de Bitcoin", "Ejercicios prácticos"]
    },
    {
      title: "Historia y Evolución",
      icon: Globe,
      iconBg: "bg-blue-600",
      description:
        "Recorrido por la historia de blockchain desde Bitcoin hasta las plataformas modernas de contratos inteligentes.",
      deliverables: "Línea de tiempo colaborativa",
      duration: "1.5 horas",
      resources: ["Timeline interactivo", "Documentales", "Casos de estudio"]
    },
    {
      title: "Casos de Uso y Tendencias",
      icon: Rocket,
      iconBg: "bg-cyan-800",
      description: "Exploración de casos de uso reales y tendencias emergentes en la tecnología blockchain.",
      deliverables: "Análisis de caso de estudio",
      duration: "2 horas",
      resources: ["Case studies", "Reportes de industria", "Entrevistas con expertos"]
    }
  ]
},
{
  stage: "Infraestructura Blockchain y Seguridad",
  description: "Aprende cómo funcionan las redes blockchain, su arquitectura y cómo interactuar con ellas de forma segura.",
  color: "from-blue-600 to-cyan-600",
  bgColor: "bg-gradient-to-br from-blue-50 to-cyan-100",
  borderColor: "border-blue-300",
  sessions: [
    {
      title: "Componentes y Consenso",
      icon: Settings,
      iconBg: "bg-cyan-500",
      description:
        "Análisis de los componentes técnicos de una blockchain y los diferentes algoritmos de consenso.",
      deliverables: "Diagrama comparativo de mecanismos",
      duration: "2.5 horas",
      resources: ["Simulador de consenso", "Diagramas técnicos", "Laboratorio virtual"]
    },
    {
      title: "Clasificación y Escalabilidad",
      icon: Target,
      iconBg: "bg-cyan-600",
      description:
        "Tipos de blockchains (públicas, privadas, híbridas) y soluciones para mejorar su escalabilidad.",
      deliverables: "Informe de investigación",
      duration: "2 horas",
      resources: ["Comparativa de redes", "Papers técnicos", "Análisis de rendimiento"]
    },
    {
      title: "Gestión de Wallets",
      icon: Shield,
      iconBg: "bg-cyan-700",
      description: "Prácticas para la gestión segura de wallets y claves privadas en el ecosistema blockchain.",
      deliverables: "Configuración de wallet personal",
      duration: "1.5 horas",
      resources: ["Guías de seguridad", "Wallets recomendadas", "Mejores prácticas"]
    }
  ]
},
{
  stage: "Ethereum, Criptomonedas y Tokenización",
  description: "Profundiza en el ecosistema de Ethereum y comprende cómo funcionan las criptomonedas y los modelos de tokens.",
  color: "from-blue-700 to-cyan-700",
  bgColor: "bg-gradient-to-br from-blue-100 to-cyan-100",
  borderColor: "border-blue-400",
  sessions: [
    {
      title: "Criptomonedas y Tokenización",
      icon: Coins,
      iconBg: "bg-blue-700",
      description: "Estudio de criptomonedas y diferentes modelos de tokens (fungibles y no fungibles).",
      deliverables: "Presentación de un modelo de token",
      duration: "2 horas",
      resources: ["Token standards", "Ejemplos de tokenomics", "Herramientas de análisis"]
    },
    {
      title: "Finanzas desce",
      icon: Brain,
      iconBg: "bg-blue-800",
      description: "Introducción a la arquitectura de Ethereum y los fundamentos de los contratos inteligentes.",
      deliverables: "Primer contrato inteligente básico",
      duration: "3 horas",
      resources: ["Ethereum docs", "Remix IDE", "Ejemplos de código"]
    }
  ]
},

{
  stage: "Prototipado Web3",
  description: "Aprende a diseñar y conectar las piezas clave de un proyecto Web3. Crea prototipos funcionales utilizando herramientas como Figma y ThirdWeb, desde la interfaz hasta la lógica básica de contratos inteligentes.",
  color: "from-purple-500 to-pink-500",
  bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
  borderColor: "border-purple-200",
  sessions: [
        {
      title: "IA para Developers (Dev0, ChatGPT, Copilot)",
      icon: Zap,
      iconBg: "bg-pink-600",
      description: "Descubre cómo usar inteligencia artificial para acelerar el desarrollo y la documentación.",
      deliverables: "Uso asistido de IA para avanzar en tu proyecto",
      duration: "2 horas",
      resources: ["Dev0", "Copilot", "Prompts para debugging"]
    },
    {
      title: "Prototipa tu dApp con diseño e interacción",
      icon: Puzzle,
      iconBg: "bg-pink-500",
      description: "Crea interfaces y conecta funciones Web3 sin necesidad de programar todo desde cero.",
      deliverables: "Prototipo visual + conexión con smart contract",
      duration: "2.5 horas",
      resources: ["Figma", "ThirdWeb", "Componentes Web3"]
    },

  ]
},

{
  stage: "Estrategia, Impacto y Pitch para Negocios Web3",
  description: "Aprende a estructurar un modelo Web3 con propósito, validar tu propuesta en comunidad y presentar tu proyecto de forma clara y estratégica ante potenciales aliados o inversores.",
  color: "from-purple-500 to-pink-500",
  bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
  borderColor: "border-purple-200",
  sessions: [
    {
      title: "Fundamentos del Modelo Web3",
      icon: Briefcase,
      iconBg: "bg-purple-600",
      description: "Diferencias entre modelos Web2 y Web3. Cómo se crea, captura y distribuye valor en entornos descentralizados.",
      deliverables: "Comparativa Web2 vs Web3 + mapa de stakeholders",
      duration: "2 horas",
      resources: ["Frameworks de modelo Web3", "Artículos clave", "Videos"]
    },
    {
      title: "Validación de Problemas en Ecosistemas Web3",
      icon: Search,
      iconBg: "bg-purple-500",
      description: "Aprende a identificar problemas reales en comunidades y cómo estructurar soluciones validadas.",
      deliverables: "Ficha de problema validado",
      duration: "2 horas",
      resources: ["Guía de entrevistas", "Ejemplos reales", "Survey templates"]
    },
    {
      title: "Elevator Pitch y Deck",
      icon: Mic,
      iconBg: "bg-purple-700",
      description: "Prepara un pitch claro, breve y persuasivo para presentar tu proyecto.",
      deliverables: "Pitch grabado + deck estructurado",
      duration: "2 horas",
      resources: ["Estructura de pitch", "Ejemplos", "Feedback"]
    },
    {
      title: "Simulación de Pitch y Feedback Real",
      icon: Rocket,
      iconBg: "bg-pink-700",
      description: "Presenta tu proyecto frente a mentores y compañeros para recibir retroalimentación y mejorar.",
      deliverables: "Presentación final simulada",
      duration: "2 horas",
      resources: ["Plantillas de presentación", "Panel de feedback", "Criterios de evaluación"]
    }
  ]
},
{
  stage: "Tokenomics y Analítica para Proyectos Web3",
  description: "Diseña modelos económicos sostenibles y aprende a medir el rendimiento y la tracción de proyectos Web3 mediante herramientas y métricas clave on-chain.",
  color: "from-indigo-500 to-blue-500",
  bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
  borderColor: "border-indigo-200",
  sessions: [
    {
      title: "Tokenomics Sostenible",
      icon: Coins,
      iconBg: "bg-indigo-600",
      description: "Diseña una economía basada en tokens alineada con los incentivos de tu comunidad. Aprende sobre tipos de tokens, distribución, vesting y mecanismos de utilidad y gobernanza.",
      deliverables: "Canvas de tokenomics + lógica de distribución",
      duration: "2.5 horas",
      resources: ["Token Builder", "Casos reales", "Plantillas de distribución"]
    },
    {
      title: "Métricas y KPIs en Web3",
      icon: BarChart,
      iconBg: "bg-blue-600",
      description: "Aprende a medir el rendimiento de tu proyecto Web3 utilizando métricas como TVL, usuarios activos, gobernanza, retención, y otros datos clave on-chain.",
      deliverables: "Dashboard de métricas clave",
      duration: "1.5 horas",
      resources: ["Plantillas Notion", "Referencias técnicas", "Herramientas como Dune y The Graph"]
    }
  ]
},

    {
      stage: "Proyecto Final",
      description: "Aplica todo lo aprendido en un proyecto real con impacto",
      color: "from-gray-800 to-purple-900",
      bgColor: "bg-gradient-to-br from-gray-50 to-purple-50",
      borderColor: "border-gray-300",
      sessions: [
        {
          title: "Pitch de Proyectos",
          icon: Rocket,
          iconBg: "bg-gray-700",
          description: "Presentación inicial de ideas de proyectos y feedback de mentores para refinar la propuesta.",
          deliverables: "Deck de presentación inicial",
          duration: "3 horas",
          resources: ["Pitch templates", "Feedback forms", "Mentorship sessions"],
        },
        {
          title: "Presentación Final",
          icon: Mic,
          iconBg: "bg-purple-700",
          description: "Presentación del proyecto finalizado ante un panel de expertos de la industria blockchain.",
          deliverables: "Demo funcional y presentación",
          duration: "4 horas",
          resources: ["Demo guidelines", "Presentation tips", "Judging criteria"],
        },
        {
          title: "Ceremonia de Graduación",
          icon: GraduationCap,
          iconBg: "bg-purple-900",
          description: "Celebración de logros y entrega de certificados NFT a los graduados.",
          deliverables: "Certificado blockchain verificable",
          duration: "2 horas",
          resources: ["Certificate minting", "Alumni network", "Career guidance"],
        },
      ],
    },
  ]
    const instructors = [
    {
    name: "Mirna Ampuero",
    role: "Tech Educator & Web3 Advocate",
    photo: "/instructor/mirna.png",
    description: "Ingeniera mecatrónica, fundadora de Xenni y educadora apasionada por la tecnología con impacto social. Ha enseñado Web3 y representado proyectos en hackatones globales.",
    },
  ];
  const partners = [
    {
      name: "Crypto Brunch",
      logo: "/partners/web3foundation.png",
      description: "Impulsando la innovación en tecnologías descentralizadas a través de soporte y financiamiento."
    },
  ];

  const tabs = [
    { id: "syllabus", label: "Plan de Estudios" },
    { id: "instructors", label: "Instructores" },
    { id: "faq", label: "Preguntas Frecuentes" },
  ]

  const totalSessions = syllabus.reduce((total, stage) => total + stage.sessions.length, 0)
  const currentSessionIndex = syllabus.slice(0, currentStage).reduce((total, stage) => total + stage.sessions.length, 0)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="cosmic-bg py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6">
                <span className="text-lg">{bootcampInfo.icon}</span>
                <span className="text-sm font-medium">Bootcamp</span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">{bootcampInfo.title}</h1>
              <p className="text-xl text-neutral-200 mb-8">{bootcampInfo.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-[#00C2A1]" />
                  <span>{bootcampInfo.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-[#00C2A1]" />
                  <span>Inicio: {bootcampInfo.nextStart}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-[#00C2A1]" />
                  <span>{bootcampInfo.students} estudiantes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-[#00C2A1]" />
                  <span>{bootcampInfo.certificate}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/aplicar"
                  className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center group hover:scale-105"
                >
                  Aplicar al bootcamp
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <button className="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center group hover:scale-105">
                  <Download className="mr-2 w-5 h-5" />
                  Descargar syllabus
                </button>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="glass-card p-8">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6">
                  <h3 className="font-display text-2xl font-bold mb-4">Información del bootcamp</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-[#00C2A1] font-semibold mb-2">Precio</h4>
                      <p className="text-2xl font-bold">{bootcampInfo.price}</p>
                      <p className="text-sm text-neutral-300">Pago único o en cuotas</p>
                    </div>

                    <div>
                      <h4 className="text-[#00C2A1] font-semibold mb-2">Incluye</h4>
                      <ul className="space-y-2">
                        {bootcampInfo.includes.map((item, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-[#00C2A1]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-[#00C2A1] font-semibold mb-2">Tecnologías</h4>
                      <div className="flex flex-wrap gap-2">
                        {bootcampInfo.technologies.slice(0, 6).map((tech) => (
                          <span
                            key={tech}
                            className="bg-white/10 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto space-x-4 pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#00C2A1] text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus Section */}
      {activeTab === "syllabus" && (
        <>
          <section className="py-20 bg-neutral-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl font-bold text-[#002F6C] mb-6">
                  🎓 Plan de estudios – Aprende desde los fundamentos hasta el pitch final
                </h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
                  Un programa estructurado y progresivo para convertirte en un desarrollador blockchain completo.
                </p>

                {/* Progress Bar */}
                <div className="max-w-2xl mx-auto mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-neutral-600">Progreso del programa</span>
                    <span className="text-sm font-medium text-[#00C2A1]">
                      {currentSessionIndex + 1} de {totalSessions} sesiones
                    </span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[#00C2A1] to-[#002F6C] h-2 rounded-full transition-all duration-500"
                      style={{ width: `${((currentSessionIndex + 1) / totalSessions) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* View Toggle */}
                <div className="flex items-center justify-center space-x-4">
                  <button
                    onClick={() => setViewMode("cards")}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      viewMode === "cards"
                        ? "bg-[#00C2A1] text-white"
                        : "bg-white text-neutral-600 hover:bg-neutral-100"
                    }`}
                  >
                    <Grid3X3 className="w-4 h-4" />
                    <span>Vista Cards</span>
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      viewMode === "list" ? "bg-[#00C2A1] text-white" : "bg-white text-neutral-600 hover:bg-neutral-100"
                    }`}
                  >
                    <List className="w-4 h-4" />
                    <span>Vista Lista</span>
                  </button>
                </div>
              </div>

              {/* Cards View */}
              {viewMode === "cards" && (
                <div className="space-y-16">
                  {syllabus.map((stage, stageIndex) => (
                    <div key={stageIndex} className="relative">
                      {/* Stage Header */}
                      <div className={`${stage.bgColor} rounded-2xl p-8 mb-8 ${stage.borderColor} border-2`}>
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-display text-3xl font-bold text-[#002F6C] mb-2">
                              Curso {stageIndex + 1}: {stage.stage}
                            </h3>
                            <p className="text-lg text-neutral-600">{stage.description}</p>
                          </div>
                          <div
                            className={`w-16 h-16 bg-gradient-to-br ${stage.color} rounded-xl flex items-center justify-center`}
                          >
                            <span className="text-2xl text-white font-bold">{stageIndex + 1}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-neutral-600">
                          <span>{stage.sessions.length} sesiones</span>
                          <span>•</span>
                          <span>
                            {stage.sessions.reduce((total, session) => {
                              const hours = Number.parseFloat(session.duration.split(" ")[0])
                              return total + hours
                            }, 0)}{" "}
                            horas totales
                          </span>
                        </div>
                      </div>

                      {/* Sessions Grid */}
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stage.sessions.map((session, sessionIndex) => (
                          <div
                            key={sessionIndex}
                            onClick={() => setSelectedSession({ ...session, stageIndex, sessionIndex })}
                            className="group cursor-pointer"
                          >
                            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 hover:border-[#00C2A1]/30 hover:scale-105 h-full flex flex-col">
                              <div
                                className={`w-12 h-12 ${session.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                              >
                                <session.icon className="w-6 h-6 text-white" />
                              </div>
                              <h4 className="font-display text-lg font-bold text-[#002F6C] mb-2 group-hover:text-[#00C2A1] transition-colors duration-300">
                                {session.title}
                              </h4>
                              <p className="text-sm text-neutral-600 mb-4 flex-grow line-clamp-3">
                                {session.description}
                              </p>
                              <div className="flex items-center justify-between text-xs text-neutral-500">
                                <span className="flex items-center space-x-1">
                                  <Clock className="w-3 h-3" />
                                  <span>{session.duration}</span>
                                </span>
                                <span className="bg-[#00C2A1]/10 text-[#00C2A1] px-2 py-1 rounded-full">
                                  Sesión {sessionIndex + 1}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* List View */}
              {viewMode === "list" && (
                <div className="space-y-8">
                  {syllabus.map((stage, stageIndex) => (
                    <div key={stageIndex} className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200">
                      <h3 className="font-display text-2xl font-bold text-[#002F6C] mb-4">
                        Etapa {stageIndex + 1}: {stage.stage}
                      </h3>
                      <p className="text-neutral-600 mb-6">{stage.description}</p>
                      <div className="space-y-4">
                        {stage.sessions.map((session, sessionIndex) => (
                          <div
                            key={sessionIndex}
                            onClick={() => setSelectedSession({ ...session, stageIndex, sessionIndex })}
                            className="flex items-center space-x-4 p-4 rounded-xl hover:bg-neutral-50 cursor-pointer transition-all duration-300 group"
                          >
                            <div className={`w-10 h-10 ${session.iconBg} rounded-lg flex items-center justify-center`}>
                              <session.icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-grow">
                              <h4 className="font-semibold text-[#002F6C] group-hover:text-[#00C2A1] transition-colors duration-300">
                                {session.title}
                              </h4>
                              <p className="text-sm text-neutral-600">{session.duration}</p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-[#00C2A1] transition-colors duration-300" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Download Button */}
              <div className="mt-16 text-center">
                <button className="btn-primary text-lg px-8 py-4 inline-flex items-center group hover:scale-105">
                  <Download className="mr-2 w-5 h-5" />
                  Descargar syllabus completo en PDF
                </button>
              </div>
            </div>
          </section>

          {/* Workshops Section */}
          {/* <section className="py-20 bg-white"> */}
            {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl font-bold text-[#002F6C] mb-6">
                  🛠️ Aprende haciendo: workshops y experiencias prácticas
                </h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  En Xenni no solo aprendes teoría. Construyes, practicas y creas proyectos reales que puedes mostrar en
                  tu portafolio profesional.
                </p>
              </div> */}

              {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {workshops.map((workshop, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer"
                    onMouseEnter={() => setHoveredWorkshop(index)}
                    onMouseLeave={() => setHoveredWorkshop(null)}
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 hover:border-[#00C2A1]/30 hover:scale-105 h-full"> */}
                      {/* Header with gradient */}
                      {/* <div className={`h-32 bg-gradient-to-br ${workshop.color} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="absolute top-4 left-4">
                          <div
                            className={`w-12 h-12 ${workshop.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                          >
                            <workshop.icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium">
                            {workshop.type}
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <span className="bg-white/90 text-neutral-800 px-2 py-1 rounded-full text-xs font-semibold">
                            {workshop.difficulty}
                          </span>
                        </div>
                      </div> */}

                      {/* Content */}
                      {/* <div className="p-6">
                        <h3 className="font-display text-xl font-bold text-[#002F6C] mb-3 group-hover:text-[#00C2A1] transition-colors duration-300">
                          {workshop.title}
                        </h3>
                        <p className="text-neutral-600 mb-4 leading-relaxed">{workshop.description}</p> */}

                        {/* Duration */}
                        {/* <div className="flex items-center space-x-2 mb-4">
                          <Clock className="w-4 h-4 text-[#00C2A1]" />
                          <span className="text-sm font-medium text-neutral-700">{workshop.duration}</span>
                        </div> */}

                        {/* Expanded content on hover */}
                        {/* <div
                          className={`transition-all duration-300 overflow-hidden ${
                            hoveredWorkshop === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="space-y-4 pt-4 border-t border-neutral-200"> */}
                            {/* Tools */}
                            {/* <div>
                              <h4 className="font-semibold text-[#002F6C] mb-2 text-sm">Herramientas:</h4>
                              <div className="flex flex-wrap gap-1">
                                {workshop.tools.map((tool, toolIndex) => (
                                  <span
                                    key={toolIndex}
                                    className="bg-neutral-100 text-neutral-700 px-2 py-1 rounded-full text-xs"
                                  >
                                    {tool}
                                  </span>
                                ))}
                              </div>
                            </div> */}

                            {/* Outcomes */}
                            {/* <div>
                              <h4 className="font-semibold text-[#002F6C] mb-2 text-sm">Resultados:</h4>
                              <ul className="space-y-1">
                                {workshop.outcomes.map((outcome, outcomeIndex) => (
                                  <li key={outcomeIndex} className="flex items-center space-x-2">
                                    <CheckCircle className="w-3 h-3 text-[#00C2A1] flex-shrink-0" />
                                    <span className="text-xs text-neutral-600">{outcome}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div> */}

                        {/* CTA */}
                        {/* <div className="mt-4">
                          <button className="w-full btn-primary text-sm py-2">Ver detalles</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div> */}

              {/* Bottom CTA */}
              {/* <div className="mt-16 text-center">
                <div className="bg-gradient-to-br from-[#00C2A1]/10 to-[#002F6C]/10 rounded-2xl p-8 border border-[#00C2A1]/20">
                  <h3 className="font-display text-2xl font-bold text-[#002F6C] mb-4">
                    🚀 ¿Listo para poner las manos en el código?
                  </h3>
                  <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
                    Estos workshops están incluidos en tu bootcamp. No hay costos adicionales, solo ganas experiencia
                    práctica invaluable.
                  </p>
                  <Link
                    href="/aplicar"
                    className="btn-primary text-lg px-8 py-4 inline-flex items-center group hover:scale-105"
                  >
                    <Lightbulb className="mr-2 w-5 h-5" />
                    Comenzar mi journey
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div> */}
         {/* </section> */}
        </>
      )}

      {/* Session Detail Modal */}
      {selectedSession && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${selectedSession.iconBg} rounded-xl flex items-center justify-center`}>
                    <selectedSession.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#002F6C]">{selectedSession.title}</h3>
                    <p className="text-[#00C2A1]">
                      Etapa {selectedSession.stageIndex + 1} • Sesión {selectedSession.sessionIndex + 1}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedSession(null)}
                  className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors duration-300"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-[#002F6C] mb-2">Descripción</h4>
                  <p className="text-neutral-600 leading-relaxed">{selectedSession.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-[#002F6C] mb-2">Duración</h4>
                    <p className="text-neutral-600">{selectedSession.duration}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#002F6C] mb-2">Entregable</h4>
                    <p className="text-neutral-600">{selectedSession.deliverables}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-[#002F6C] mb-3">Recursos incluidos</h4>
                  <div className="space-y-2">
                    {selectedSession.resources.map((resource, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#00C2A1]" />
                        <span className="text-neutral-600">{resource}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  <button className="flex-1 btn-primary py-3 flex items-center justify-center">
                    <Play className="mr-2 w-4 h-4" />
                    Ver preview
                  </button>
                  <button className="flex-1 btn-secondary py-3 flex items-center justify-center">
                    <FileText className="mr-2 w-4 h-4" />
                    Recursos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Instructors Section Placeholder */}
        <div>
      <nav className="flex justify-center mb-10 space-x-6">
        <button
          onClick={() => setActiveTab("instructors")}
          className={`text-lg font-medium px-4 py-2 rounded-full border ${
            activeTab === "instructors" ? "bg-[#002F6C] text-white" : "border-neutral-300 text-neutral-600"
          }`}
        >
          Instructores
        </button>
        <button
          onClick={() => setActiveTab("otros")}
          className={`text-lg font-medium px-4 py-2 rounded-full border ${
            activeTab === "otros" ? "bg-[#002F6C] text-white" : "border-neutral-300 text-neutral-600"
          }`}
        >
          Socios estratégicos
        </button>
      </nav>

      {activeTab === "instructors" && (
        <section className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl font-bold text-[#002F6C] mb-6">
              Conoce a tus instructores
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-12">
              Aprende de expertos con experiencia real en la industria blockchain y Web3.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {instructors.map((instructor, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                    {instructor.photo ? (
                      <img
                        src={instructor.photo}
                        alt={instructor.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <span className="text-3xl">{instructor.emoji}</span>
                    )}
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#002F6C]">
                    {instructor.name}
                  </h3>
                  <p className="text-[#00C2A1]">{instructor.role}</p>
                  <p className="text-neutral-600 mt-2">{instructor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === "otros" && (
        <section className="py-20 bg-neutral-50 text-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-4xl font-bold text-[#002F6C] mb-6">
              Nuestros socios estratégicos
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-12">
              Colaboramos con líderes del ecosistema para construir un futuro más descentralizado.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="w-24 h-24 mx-auto mb-4">
                    <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#002F6C]">{partner.name}</h3>
                  <p className="text-neutral-600 mt-2">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>


      {/* FAQ Section - Conditional Rendering */}
      {activeTab === "faq" && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-[#002F6C] mb-6">❓ Preguntas Frecuentes</h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Todo lo que necesitas saber sobre nuestro bootcamp de Web3 & Blockchain Development.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                {
                  icon: "🎓",
                  iconColor: "bg-blue-500",
                  question: "¿Necesito conocimientos previos para entrar al bootcamp?",
                  answer:
                    "No necesitas experiencia previa en blockchain, pero sí conocimientos básicos de programación (especialmente JavaScript). Si eres nuevo, te recomendamos completar los retos intro antes de la primera sesión. Ofrecemos recursos preparatorios gratuitos para nivelarte.",
                },
                {
                  icon: "📹",
                  iconColor: "bg-purple-500",
                  question: "¿El bootcamp es en vivo o grabado?",
                  answer:
                    "Las sesiones son en vivo con mentores expertos, lo que permite interacción directa y resolución de dudas en tiempo real. También tendrás acceso a todas las grabaciones para repasar el contenido cuando necesites.",
                },
                {
                  icon: "🏆",
                  iconColor: "bg-yellow-500",
                  question: "¿Obtengo algún tipo de certificación?",
                  answer:
                    "Sí, al completar el bootcamp recibirás un certificado NFT verificable en blockchain y un diploma en PDF. El certificado NFT es único, no falsificable y puede ser verificado por empleadores en cualquier momento.",
                },
                {
                  icon: "👨‍🏫",
                  iconColor: "bg-green-500",
                  question: "¿Hay mentorías personalizadas?",
                  answer:
                    "Absolutamente. Cada estudiante tiene acceso a sesiones de mentoría 1:1 con expertos de la industria, además de tutoría grupal semanal. También contamos con un sistema de buddy para apoyo entre compañeros.",
                },
                {
                  icon: "⏰",
                  iconColor: "bg-red-500",
                  question: "¿Cuánto tiempo debo dedicar semanalmente?",
                  answer:
                    "Aproximadamente 6–8 horas por semana distribuidas en: 2 sesiones en vivo (4h) + 1 proyecto o reto (2-3h) + 1 hora opcional de comunidad o workshops. El tiempo es flexible según tu ritmo de aprendizaje.",
                },
                {
                  icon: "📱",
                  iconColor: "bg-indigo-500",
                  question: "¿Qué pasa si no puedo asistir en vivo?",
                  answer:
                    "No te preocupes. Todas las clases quedan grabadas en alta calidad y puedes ponerte al día cuando tengas tiempo. También puedes hacer preguntas en nuestra comunidad Discord activa y en las mentorías programadas.",
                },
                {
                  icon: "💳",
                  iconColor: "bg-pink-500",
                  question: "¿Qué métodos de pago aceptan?",
                  answer:
                    "Aceptamos tarjetas de crédito y débito internacionales, criptomonedas (USDT, USDC, ETH), transferencias bancarias locales, y pagos a través de plataformas como PayPal. También ofrecemos planes de pago en cuotas.",
                },
                {
                  icon: "🎯",
                  iconColor: "bg-orange-500",
                  question: "¿Hay becas disponibles?",
                  answer:
                    "Sí, ofrecemos becas parciales del 20% al 50% basadas en mérito académico y situación económica. Puedes aplicar completando el formulario de beca con tu motivación y proyecto de impacto. Las becas se otorgan por orden de aplicación.",
                },
              ].map((faq, index) => (
                <div key={index} className="group">
                  <div className="bg-neutral-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-neutral-200 hover:border-[#00C2A1]/30 overflow-hidden">
                    <details className="group">
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none group-hover:bg-white transition-colors duration-300">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-12 h-12 ${faq.iconColor} rounded-xl flex items-center justify-center text-xl text-white group-hover:scale-110 transition-transform duration-300`}
                          >
                            {faq.icon}
                          </div>
                          <h3 className="font-semibold text-[#002F6C] text-lg group-hover:text-[#00C2A1] transition-colors duration-300">
                            {faq.question}
                          </h3>
                        </div>
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:bg-[#00C2A1] group-hover:text-white transition-all duration-300 shadow-sm">
                          <ArrowRight className="w-4 h-4 transform group-open:rotate-90 transition-transform duration-300" />
                        </div>
                      </summary>
                      <div className="px-6 pb-6">
                        <div className="pl-16 pr-12">
                          <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </details>
                  </div>
                </div>
              ))}
            </div>

            {/* Still have questions CTA */}
            <div className="mt-16">
              <div className="bg-gradient-to-br from-[#00C2A1]/10 to-[#002F6C]/10 rounded-2xl p-8 text-center border border-[#00C2A1]/20">
                <h3 className="font-display text-2xl font-bold text-[#002F6C] mb-4">¿Aún tienes dudas?</h3>
                <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
                  Nuestro equipo de admisiones está disponible para resolver todas tus preguntas. Agenda una llamada
                  gratuita de 15 minutos o escríbenos directamente.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#"
                    className="btn-primary px-6 py-3 inline-flex items-center justify-center group hover:scale-105"
                  >
                    📅 Agendar llamada gratuita
                  </a>
                  <a
                    href="mailto:admisiones@xenni.academy"
                    className="btn-secondary px-6 py-3 inline-flex items-center justify-center group hover:scale-105"
                  >
                    ✉️ Enviar email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 cosmic-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold mb-6">¿Listo para construir el futuro de Web3?</h2>
          <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
            Únete a nuestro bootcamp y conviértete en un desarrollador blockchain de alto nivel. Las plazas son
            limitadas.
          </p>
          <Link
            href="/aplicar"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center group hover:scale-105"
          >
            Aplicar ahora
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  )
}