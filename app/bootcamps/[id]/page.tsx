"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"

// Add runtime configuration for dynamic routes
export const dynamic = 'force-dynamic'
export const dynamicParams = true
import { DetailedBootcamp } from "@/lib/types/bootcamp"
import {
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
  Briefcase,
  Search,
  BarChart
} from "lucide-react"

interface ApiResponse {
  bootcamp: DetailedBootcamp;
  success: boolean;
}

// Icon mapping for dynamic icon rendering
const iconMap = {
  BookOpen,
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
  Briefcase,
  Search,
  BarChart,
  Rocket,
  Mic,
  GraduationCap
}

// Helper function to get icon component from string
const getIconComponent = (iconName: string) => {
  return iconMap[iconName as keyof typeof iconMap] || BookOpen
}

export default function BootcampDetailPage() {
  const params = useParams()
  const [bootcamp, setBootcamp] = useState<DetailedBootcamp | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState("syllabus")
  const [selectedSession, setSelectedSession] = useState<any>(null)
  const [viewMode, setViewMode] = useState("cards")
  const [currentStage, setCurrentStage] = useState(0)
  const [hoveredWorkshop, setHoveredWorkshop] = useState<number | null>(null)

  // Handle mounting on client side
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Only run on client side after component is mounted
    if (!mounted || !params?.id) {
      return
    }

    const fetchBootcamp = async () => {
      try {
        console.log('Client-side fetching bootcamp with params:', params)
        const response = await fetch(`/api/bootcamps/${params.id}`)
        console.log('Response status:', response.status)
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data: ApiResponse = await response.json()
        console.log('Response data:', data)
        
        if (data.success && data.bootcamp) {
          setBootcamp(data.bootcamp)
          setError(null)
        } else {
          setError('Bootcamp no encontrado')
        }
      } catch (err) {
        console.error('Error fetching bootcamp:', err)
        setError('Error al cargar el bootcamp')
      } finally {
        setLoading(false)
      }
    }

    fetchBootcamp()
  }, [mounted, params?.id])

  // Default fallback data structure based on reference page
  const getBootcampInfo = () => {
    if (!bootcamp) return null

    return {
      title: bootcamp.title || "Bootcamp Web3",
      description: bootcamp.description || "Aprende desarrollo blockchain desde cero",
      duration: bootcamp.duration || "8 semanas",
      modality: bootcamp.modality || "Online en vivo + sesiones híbridas",
      certificate: bootcamp.certificate || "NFT + Diploma PDF",
      price: bootcamp.price || "100 USD",
      includes: bootcamp.includes || [
        "Gana premios",
        "Mentoría personalizada", 
        "Acceso a comunidad Web3",
        "Proyectos prácticos guiados",
        "Recursos descargables y plantillas",
        "Simulaciones de pitch",
        "Feedback por expertos"
      ],
      nextStart: bootcamp.nextStart || "Próximamente",
      level: bootcamp.level || "Básico",
      students: bootcamp.students || 0,
      technologies: bootcamp.technologies || ["Solidity", "React", "Web3"],
      focus: bootcamp.focus || ["Fundamentos Web3", "Smart Contracts", "DApps"],
      color: bootcamp.color || "from-purple-500 to-pink-500",
      icon: bootcamp.icon || "🚀",
      instructor_name: bootcamp.instructor_name || "Por definir",
      schedule_days: bootcamp.schedule_days || [],
      schedule_time: bootcamp.schedule_time || "Por definir"
    }
  }

  // Default syllabus structure from reference page
  const getDefaultSyllabus = () => [
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
          description: "Introducción a la tecnología blockchain, sus principios fundamentales y las oportunidades que ofrece en el mercado actual.",
          deliverables: "Quiz de conceptos básicos",
          duration: "2 horas",
          resources: ["Video introductorio", "Whitepaper de Bitcoin", "Ejercicios prácticos"]
        },
        {
          title: "Historia y Evolución",
          icon: Globe,
          iconBg: "bg-blue-600",
          description: "Recorrido por la historia de blockchain desde Bitcoin hasta las plataformas modernas de contratos inteligentes.",
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
          description: "Análisis de los componentes técnicos de una blockchain y los diferentes algoritmos de consenso.",
          deliverables: "Diagrama comparativo de mecanismos",
          duration: "2.5 horas",
          resources: ["Simulador de consenso", "Diagramas técnicos", "Laboratorio virtual"]
        },
        {
          title: "Clasificación y Escalabilidad",
          icon: Target,
          iconBg: "bg-cyan-600",
          description: "Tipos de blockchains (públicas, privadas, híbridas) y soluciones para mejorar su escalabilidad.",
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
          title: "Finanzas descentralizadas",
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
        }
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
          resources: ["Pitch templates", "Feedback forms", "Mentorship sessions"]
        },
        {
          title: "Presentación Final",
          icon: Mic,
          iconBg: "bg-purple-700",
          description: "Presentación del proyecto finalizado ante un panel de expertos de la industria blockchain.",
          deliverables: "Demo funcional y presentación",
          duration: "4 horas",
          resources: ["Demo guidelines", "Presentation tips", "Judging criteria"]
        },
        {
          title: "Ceremonia de Graduación",
          icon: GraduationCap,
          iconBg: "bg-purple-900",
          description: "Celebración de logros y entrega de certificados NFT a los graduados.",
          deliverables: "Certificado blockchain verificable",
          duration: "2 horas",
          resources: ["Certificate minting", "Alumni network", "Career guidance"]
        }
      ]
    }
  ]

  // Default instructors from reference page
  const getDefaultInstructors = () => {
    // Use database instructors if available, otherwise use default
    if (bootcamp?.instructors && bootcamp.instructors.length > 0) {
      return bootcamp.instructors
    }
    
    return [
      {
        id: "default",
        name: bootcamp?.instructor_name || "Instructor Experto",
        role: "Tech Educator & Web3 Advocate",
        photo: "/instructor/default.png",
        description: "Experto en tecnología blockchain con amplia experiencia en educación y desarrollo de proyectos Web3."
      }
    ]
  }

  // Default FAQ from reference page
  const getDefaultFAQ = () => {
    // Use database FAQ if available, otherwise use default
    if (bootcamp?.faq && bootcamp.faq.length > 0) {
      return bootcamp.faq.sort((a, b) => a.order_index - b.order_index)
    }

    return [
      {
        id: "1",
        icon: "🎓",
        iconColor: "bg-blue-500",
        question: "¿Necesito conocimientos previos para entrar al bootcamp?",
        answer: "No necesitas experiencia previa en blockchain, pero sí conocimientos básicos de programación (especialmente JavaScript). Si eres nuevo, te recomendamos completar los retos intro antes de la primera sesión.",
        order_index: 1
      },
      {
        id: "2",
        icon: "📹",
        iconColor: "bg-purple-500", 
        question: "¿El bootcamp es en vivo o grabado?",
        answer: "Las sesiones son en vivo con mentores expertos, lo que permite interacción directa y resolución de dudas en tiempo real. También tendrás acceso a todas las grabaciones.",
        order_index: 2
      },
      {
        id: "3",
        icon: "🏆",
        iconColor: "bg-yellow-500",
        question: "¿Obtengo algún tipo de certificación?",
        answer: "Sí, al completar el bootcamp recibirás un certificado NFT verificable en blockchain y un diploma en PDF.",
        order_index: 3
      }
    ]
  }

  if (loading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#00C2A1] mx-auto"></div>
          <p className="mt-4 text-lg text-neutral-600">Cargando bootcamp...</p>
          <p className="mt-2 text-sm text-neutral-500">ID: {params?.id || 'Cargando...'}</p>
        </div>
      </div>
    )
  }

  if (error || !bootcamp) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-neutral-800 mb-4">Bootcamp no encontrado</h1>
          <p className="text-lg text-neutral-600 mb-8">{error || 'El bootcamp que buscas no existe o no está disponible.'}</p>
          <Link 
            href="/bootcamps"
            className="btn-primary px-8 py-3 inline-flex items-center"
          >
            <ArrowRight className="mr-2 w-5 h-5" />
            Ver todos los bootcamps
          </Link>
        </div>
      </div>
    )
  }

  const bootcampInfo = getBootcampInfo()
  const syllabus = (bootcamp.syllabus && bootcamp.syllabus.length > 0) ? bootcamp.syllabus : getDefaultSyllabus()
  const instructors = getDefaultInstructors()
  const faqData = getDefaultFAQ()


  const tabs = [
    { id: "syllabus", label: "Plan de Estudios" },
    { id: "instructors", label: "Instructores" },
    { id: "faq", label: "Preguntas Frecuentes" },
  ]

  const totalSessions = syllabus.reduce((total, stage) => total + stage.sessions.length, 0)
  const currentSessionIndex = syllabus.slice(0, currentStage).reduce((total, stage) => total + stage.sessions.length, 0)

  if (!bootcampInfo) return null

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
                  <h3 className="font-display text-2xl font-bold mb-4">Detalles del Bootcamp</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-[#00C2A1] font-semibold mb-2">Precio</h4>
                      <p className="text-2xl font-bold">{bootcampInfo.price}</p>
                      <p className="text-sm text-neutral-300">Pago único o en cuotas</p>
                    </div>

                    <div>
                      <h4 className="text-[#00C2A1] font-semibold mb-2">Incluye</h4>
                      <ul className="space-y-2">
                        {bootcampInfo.includes.slice(0, 4).map((item, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-[#00C2A1]" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-[#00C2A1] font-semibold mb-2">Tecnologías</h4>
                      <div className="flex flex-wrap gap-2">
                        {bootcampInfo.technologies.slice(0, 4).map((tech) => (
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
        <section className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-[#002F6C] mb-6">
                🎓 Plan de estudios
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
                Un programa estructurado y progresivo para dominar el desarrollo blockchain.
              </p>

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
                            Módulo {stageIndex + 1}: {stage.stage}
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
                            const hours = Number.parseFloat(session.duration.split(" ")[0]) || 2
                            return total + hours
                          }, 0)}{" "}
                          horas totales
                        </span>
                      </div>
                    </div>

                    {/* Sessions Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                              {(() => {
                                const IconComponent = typeof session.icon === 'string' 
                                  ? getIconComponent(session.icon) 
                                  : session.icon || BookOpen
                                return <IconComponent className="w-6 h-6 text-white" />
                              })()}
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
                            {(() => {
                              const IconComponent = typeof session.icon === 'string' 
                                ? getIconComponent(session.icon) 
                                : session.icon || BookOpen
                              return <IconComponent className="w-5 h-5 text-white" />
                            })()}
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
          </div>
        </section>
      )}

      {/* Session Detail Modal */}
      {selectedSession && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${selectedSession.iconBg} rounded-xl flex items-center justify-center`}>
                    {(() => {
                      const IconComponent = typeof selectedSession.icon === 'string' 
                        ? getIconComponent(selectedSession.icon) 
                        : selectedSession.icon || BookOpen
                      return <IconComponent className="w-6 h-6 text-white" />
                    })()}
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
                    {selectedSession.resources.map((resource: string, index: number) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#00C2A1]" />
                        <span className="text-neutral-600">{resource}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Instructors Section */}
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
                      <span className="text-3xl">👨‍🏫</span>
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

      {/* FAQ Section */}
      {activeTab === "faq" && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-[#002F6C] mb-6">❓ Preguntas Frecuentes</h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Todo lo que necesitas saber sobre nuestro bootcamp.
              </p>
            </div>

            <div className="grid gap-6">
              {faqData.map((faq, index) => (
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
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 cosmic-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold mb-6">¿Listo para construir el futuro?</h2>
          <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
            Únete a nuestro bootcamp y conviértete en un desarrollador blockchain de alto nivel.
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