"use client"

import type React from "react"
import { useState } from "react"
import { CheckCircle, ArrowRight, Users, Clock, Award, Star } from "lucide-react"

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

  const bootcamps = ["Web3 & Blockchain Development"]

  const experienceLevels = [
    "Sin experiencia previa",
    "Conocimientos básicos",
    "Experiencia intermedia",
    "Experiencia avanzada",
  ]

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const result = await response.json()
      if (result.result === "success") {
        alert("✅ ¡Formulario enviado con éxito!")
        setFormData({ nombre: "", email: "", pais: "", bootcamp: "", experiencia: "", motivacion: "" })
        setCurrentStep(1)
      } else {
        alert("❌ Falló el envío: " + result.message)
      }
    } catch (error) {
      alert("❌ Error de red o del servidor.")
    }
  }

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-[#00C2A1]/20 text-[#002F6C] font-extrabold text-xl sm:text-2xl px-8 py-4 rounded-3xl border-4 border-[#00C2A1] shadow-xl animate-pulse sticky top-4 z-50 text-center backdrop-blur-md">
        🎁 ¡Premiamos la disciplina! <br className="block sm:hidden" />
        <span className="underline decoration-[#00C2A1] underline-offset-4">
          Si te gradúas, recuperas el 50% de tu inversión 🎓
        </span>
      </div>

        </div>
        <div className="max-w-5xl mx-auto px-4 text-center pt-20">
          <h1 className="text-4xl font-bold mb-6 text-[#002F6C]">
            Únete al Bootcamp Blockchain de Xenni
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            Aprende desde cero hasta lanzar tu propio proyecto Web3. Elige la modalidad que mejor se adapte a ti:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-red-500 p-6 rounded-xl shadow-xl bg-red-50 hover:shadow-2xl transition">
              <h2 className="text-2xl font-semibold text-red-600 mb-4">🎯 Ingreso Directo</h2>
              <p className="text-lg font-bold mb-2">$100 USD</p>
              <ul className="text-left text-gray-700 list-disc list-inside space-y-1 mb-4">
                <li>Acceso completo a todas las sesiones</li>
                <li>Certificación oficial y NFT verificable</li>
                <li>Acceso a comunidad, premios y difusión</li>
                <li>Sin proceso de selección</li>
                <li className="font-semibold text-green-700">📌 Recuperas el 50% si te gradúas</li>
              </ul>
              <a href=" https://tally.so/r/31oaQ1" target="_blank" rel="noopener noreferrer" className="bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded-md inline-block">
                🔓 ¡Inscribirme ahora!
              </a>
            </div>

            <div className="border-2 border-yellow-500 p-6 rounded-xl shadow-xl bg-yellow-50 hover:shadow-2xl transition">
              <h2 className="text-2xl font-semibold text-yellow-600 mb-4">🚀 Aplicar a Beca</h2>
              <p className="text-lg font-bold mb-2">$0 USD</p>
              <ul className="text-left text-gray-700 list-disc list-inside space-y-1 mb-4">
                <li>Cupos limitados</li>
                <li>Proceso de postulación con revisión</li>
                <li>Accede a media beca o beca completa</li>
                <li>Postulaciones destacadas serán difundidas</li>
                <li className="font-semibold text-green-700">📌 Si te gradúas, ¡recibes un bonus sorpresa!</li>
              </ul>
              <a href="https://tally.so/r/n0RWlP" target="_blank" rel="noopener noreferrer" className="bg-yellow-500 hover:bg-yellow-600 transition text-white px-4 py-2 rounded-md inline-block">
                ✍️ Aplicar a beca
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h3 className="text-3xl font-bold text-center text-[#002F6C] mb-12">
      Beneficios por ser parte de la comunidad
    </h3>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          icon: Users,
          title: "Mentorías personalizadas",
          description: "4 Sesiones 1:1 con expertos que te acompañan en cada paso",
        },
        {
          icon: Clock,
          title: "Horarios flexibles",
          description: "Clases en vivo adaptadas a tu ritmo y zona horaria",
        },
        {
          icon: Award,
          title: "Certificación NFT",
          description: "Diploma verificado en blockchain, coleccionable y reconocible",
        },
      ].map((benefit, index) => {
        const Icon = benefit.icon;
        return (
          <div key={index} className="text-center">
            <div className="w-16 h-16 bg-[#00C2A1]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon className="w-8 h-8 text-[#00C2A1]" />
            </div>
            <h4 className="text-xl font-bold text-[#002F6C] mb-2">{benefit.title}</h4>
            <p className="text-neutral-600">{benefit.description}</p>
          </div>
        );
      })}
    </div>
  </div>
</section>


      {/* Aquí puede seguir el formulario si se desea más abajo */}
    </div>
  )
}
