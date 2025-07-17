import { Send } from 'lucide-react'

export default function NewsletterCTA() {
  return (
    <div className="bg-[#002F6C] rounded-[1.5rem] my-24 mx-4 md:mx-auto max-w-6xl overflow-hidden grid md:grid-cols-2 text-white shadow-lg">
      <div className="p-8 md:p-12 space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">Recibe recursos exclusivos</h2>
        <p className="text-white/80 text-sm">
          Suscríbete a nuestro newsletter y recibe contenido exclusivo, invitaciones a eventos y las últimas novedades del mundo tech.
        </p>
        <form className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Tu email"
            className="px-4 py-3 rounded-full w-full text-gray-800 border-none outline-none"
          />
          <button
            type="submit"
            className="bg-[#00C2A1] hover:bg-[#00a98c] text-white font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" /> Suscribirme
          </button>
        </form>
        <p className="text-xs text-white/60 mt-2">
          Respetamos tu privacidad. Puedes darte de baja en cualquier momento.
        </p>
      </div>

      <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-[#004A8D] to-[#003D77]">
        <div className="w-32 h-32 rounded-full bg-[#00C2A1]/20 flex items-center justify-center">
          <span className="text-5xl">📚</span>
        </div>
      </div>
    </div>
  )
}