"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, CheckCircle, Users, Clock, Award, Info } from "lucide-react"

export default function AplicarPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    pais: "",
    bootcamp: "",
    experiencia: "",
    motivacion: "",
  })

  const bootcamps = [
    "Web3 & Blockchain Development", // Solo este está disponible
  ]

  const upcomingBootcamps = [
    "Inteligencia Artificial & ML (Q3 2025)",
    "Internet of Things & Embedded (Q4 2025)",
    "Ciberseguridad Avanzada (Q4 2025)",
  ]

  const experienceLevels = [
    "Sin experiencia previa",
    "Conocimientos básicos",
    "Experiencia intermedia",
    "Experiencia avanzada",
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    console.log("Enviando datos:", formData);

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    console.log("Respuesta del servidor:", result);

    if (result.result === "success") {
      alert("✅ ¡Formulario enviado con éxito!");
      setFormData({
        nombre: "",
        email: "",
        pais: "",
        bootcamp: "",
        experiencia: "",
        motivacion: ""
      });
      setCurrentStep(1);
    } else {
      alert("❌ Falló el envío: " + result.message);
    }
  } catch (error) {
    console.error("❌ Error al conectar con el backend:", error);
    alert("❌ Error de red o del servidor.");
  }
};


const paisesHispanohablantes = [
  "Argentina", "Bolivia", "Chile", "Colombia", "Costa Rica", "Cuba",
  "Ecuador", "El Salvador", "España", "Guatemala", "Honduras", "México",
  "Nicaragua", "Panamá", "Paraguay", "Perú", "República Dominicana",
  "Uruguay", "Venezuela"
];






  const benefits = [
    {
      icon: Users,
      title: "Mentorías personalizadas",
      description: "Sesiones 1:1 con expertos de la industria",
    },
    {
      icon: Clock,
      title: "Horarios flexibles",
      description: "Clases en vivo adaptadas a tu zona horaria",
    },
    {
      icon: Award,
      title: "Certificación NFT",
      description: "Certificado blockchain verificable",
    },
  ]

  if (currentStep === 4) {
    return (
      <div className="pt-16 min-h-screen bg-neutral-50 flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="font-display text-3xl font-bold text-[#002F6C] mb-4">¡Aplicación enviada con éxito!</h1>
            <p className="text-lg text-neutral-600 mb-8">
              Gracias por tu interés en Xenni. Nuestro equipo revisará tu aplicación y te contactaremos en las próximas
              48 horas.
            </p>
            <div className="bg-[#00C2A1]/10 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-[#002F6C] mb-2">Próximos pasos:</h3>
              <ul className="text-left text-neutral-600 space-y-2">
                <li>• Revisión de tu aplicación (24-48h)</li>
                <li>• Entrevista técnica (si calificas)</li>
                <li>• Confirmación de admisión</li>
                <li>• ¡Bienvenido a Xenni! 🚀</li>
              </ul>
            </div>
            <button onClick={() => (window.location.href = "/")} className="btn-primary">
              Volver al inicio
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="cosmic-bg py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Tu futuro tech
              <span className="block text-[#00C2A1]">comienza aquí</span>
            </h1>
            <p className="text-xl text-neutral-200 mb-6">
              Únete a la próxima generación de builders tecnológicos de LATAM. El proceso de aplicación es simple y
              diseñado para conocerte mejor.
            </p>

            {/* Available Bootcamp Notice */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-4">
              <div className="w-2 h-2 bg-[#00C2A1] rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Actualmente disponible: Web3 & Blockchain Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#00C2A1]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-[#00C2A1]" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#002F6C] mb-2">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
<section className="py-20 bg-neutral-50">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-[#002F6C] p-6">
        <div className="flex justify-between items-center text-white mb-4">
          <span className="font-semibold">Paso {currentStep} de 3</span>
          <span className="text-[#00C2A1]">{Math.round((currentStep / 3) * 100)}% completado</span>
        </div>
        <div className="w-full bg-[#001D47] rounded-full h-2">
          <div
            className="bg-[#00C2A1] h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-8">
        {/* Paso 1: Información personal */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-2xl font-bold text-[#002F6C] mb-2">Información personal</h2>
              <p className="text-neutral-600 mb-6">Cuéntanos un poco sobre ti para personalizar tu experiencia.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Nombre completo *</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#00C2A1] focus:border-transparent transition-all duration-300"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#00C2A1] focus:border-transparent transition-all duration-300"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">País de residencia *</label>
              <select
                name="pais"
                value={formData.pais}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#00C2A1] focus:border-transparent transition-all duration-300"
              >
                <option value="">Selecciona tu país</option>
                {paisesHispanohablantes.map((pais) => (
                  <option key={pais} value={pais}>{pais}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Paso 2: Intereses académicos */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-2xl font-bold text-[#002F6C] mb-2">Intereses académicos</h2>
              <p className="text-neutral-600 mb-6">Selecciona el bootcamp que más te interese y tu nivel de experiencia.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Bootcamp disponible *</label>
              <select
                name="bootcamp"
                value={formData.bootcamp}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#00C2A1] focus:border-transparent transition-all duration-300"
              >
                <option value="">Selecciona un bootcamp</option>
                {bootcamps.map((bootcamp) => (
                  <option key={bootcamp} value={bootcamp}>{bootcamp}</option>
                ))}
              </select>

              <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Próximos bootcamps en desarrollo:</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      {upcomingBootcamps.map((bootcamp, index) => (
                        <li key={index}>• {bootcamp}</li>
                      ))}
                    </ul>
                    <p className="text-xs text-blue-600 mt-2">
                      ¿Te interesa alguno? Menciónalo en tu motivación y te notificaremos cuando esté disponible.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Nivel de experiencia *</label>
              <select
                name="experiencia"
                value={formData.experiencia}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#00C2A1] focus:border-transparent transition-all duration-300"
              >
                <option value="">Selecciona tu nivel</option>
                {experienceLevels.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Paso 3: Motivación */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-2xl font-bold text-[#002F6C] mb-2">Motivación</h2>
              <p className="text-neutral-600 mb-6">Cuéntanos por qué quieres formar parte de Xenni y qué esperas lograr.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                ¿Por qué quieres unirte a Xenni? *
              </label>
              <textarea
                name="motivacion"
                value={formData.motivacion}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#00C2A1] focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Cuéntanos tu historia, tus objetivos y por qué crees que Xenni es el lugar perfecto para tu crecimiento profesional. Si te interesan otros bootcamps que aún no están disponibles, también puedes mencionarlo aquí..."
              />
              <p className="text-sm text-neutral-500 mt-2">Mínimo 100 caracteres</p>
            </div>

            <div className="bg-[#00C2A1]/10 rounded-xl p-6">
              <h3 className="font-semibold text-[#002F6C] mb-2">💡 Consejos para tu respuesta:</h3>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Comparte tu pasión por la tecnología</li>
                <li>• Menciona tus objetivos profesionales</li>
                <li>• Explica cómo planeas contribuir a la comunidad</li>
                <li>• Si te interesan bootcamps futuros, menciónalo</li>
                <li>• Sé auténtico y específico</li>
              </ul>
            </div>
          </div>
        )}

        {/* Botones de navegación */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-neutral-200">
          {currentStep > 1 && (
            <button type="button" onClick={() => setCurrentStep(currentStep - 1)} className="btn-outline-light">
              Anterior
            </button>
          )}

          {currentStep < 3 ? (
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep + 1)}
              disabled={
                (currentStep === 1 && (!formData.nombre || !formData.email || !formData.pais)) ||
                (currentStep === 2 && (!formData.bootcamp || !formData.experiencia))
              }
              className="ml-auto btn-primary"
            >
              Siguiente
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={!formData.motivacion || formData.motivacion.length < 100}
              className="ml-auto btn-primary"
            >
              Enviar aplicación
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          )}
        </div>
      </form>
    </div>
  </div>
</section>



      {/* Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-[#002F6C] mb-6">Becas y financiamiento</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#00C2A1]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#00C2A1] font-bold">💰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#002F6C] mb-2">Becas de excelencia</h3>
                    <p className="text-neutral-600">Hasta 70% de descuento para estudiantes destacados</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#00C2A1]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#00C2A1] font-bold">📅</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#002F6C] mb-2">Pagos flexibles</h3>
                    <p className="text-neutral-600">Opciones de pago en cuotas adaptadas a tu situación</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#00C2A1]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#00C2A1] font-bold">🤝</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#002F6C] mb-2">Acuerdos de ingresos</h3>
                    <p className="text-neutral-600">Paga solo cuando consigas trabajo en tech</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#00C2A1]/10 to-[#002F6C]/10 rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold text-[#002F6C] mb-4">¿Tienes preguntas?</h3>
              <p className="text-neutral-600 mb-6">
                Nuestro equipo está aquí para ayudarte en cada paso del proceso. No dudes en contactarnos si necesitas
                más información.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-[#00C2A1]">📧</span>
                  <span className="text-neutral-700">admisiones@xenni.academy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#00C2A1]">💬</span>
                  <span className="text-neutral-700">WhatsApp: +52 55 1234 5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#00C2A1]">🕒</span>
                  <span className="text-neutral-700">Lun - Vie: 9:00 AM - 6:00 PM (GMT-5)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
