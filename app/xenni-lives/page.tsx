'use client'

import { useEffect, useState } from 'react'
import { Calendar, Clock, Eye, PlayCircle } from 'lucide-react'
import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import Link from 'next/link'

const HeroXenniLives = ({ eventNow }: { eventNow?: Event }) => {
  return (
    <section className="relative bg-[#002F6C] text-white text-center px-6 pt-32 pb-28 w-full">
      {/* Frecuenc ia */}
      <span className="text-xs bg-[#003B8E] px-3 py-1 rounded-full inline-block mb-4">
        🔴 En vivo cada semana
      </span>

      {/* Título */}
      <h1 className="text-5xl sm:text-6xl font-bold mb-4">
        Xenni <span className="text-[#00C2A1]">Lives</span>
      </h1>

      {/* Descripción */}
      <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-base sm:text-lg">
        Eventos en vivo con los mejores expertos de la industria tech. Aprende, conecta y construye el futuro junto a la comunidad.
      </p>

      {/* Botones */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="#upcoming"
          className="bg-[#00C2A1] hover:bg-[#00a98c] transition text-white px-6 py-3 rounded-full font-semibold text-sm"
        >
          Ver próximo evento →
        </a>
        <Link
          href="/calendario"
          className="border border-[#00C2A1] text-[#00C2A1] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#00C2A1]/10 transition"
        >
          📅 Calendario completo
        </Link>
      </div>

      {/* EN VIVO AHORA - Franja inferior */}
      {eventNow && (
        <div className="absolute bottom-0 left-0 w-full bg-[#F2416C] text-white flex flex-col sm:flex-row justify-between items-center px-6 py-3 text-sm font-semibold shadow-md z-10">
          <div className="flex items-center gap-2 animate-pulse">
            🔴 EN VIVO AHORA – {eventNow.title} con {eventNow.speaker}
          </div>
          <a
            href={eventNow.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#F2416C] rounded-full px-4 py-1 mt-2 sm:mt-0 text-sm font-bold"
          >
            Unirse ({eventNow.views ?? 0} viewers)
          </a>
        </div>
      )}
    </section>
  )
}

type Event = {
  _id: string
  title: string
  description: string
  date: string
  speaker: string
  speakerRole?: string
  speakerImage?: {
    asset: {
      _ref: string
      _type: string
    }
  }
  thumbnail?: {
    asset: {
      _ref: string
      _type: string
    }
  }
  registered?: number
  duration?: number
  tags?: string[]
  videoUrl?: string
  views?: number
}

function urlForImage(source: any) {
  return `https://cdn.sanity.io/images/5u4bh471/production/${source.asset._ref
    .replace('image-', '')
    .replace('-jpg', '.jpg')
    .replace('-png', '.png')}`
}

export default function XenniLivesPage() {
  const [upcoming, setUpcoming] = useState<Event[]>([])
  const [past, setPast] = useState<Event[]>([])
  const [liveEvent, setLiveEvent] = useState<Event | null>(null)

  useEffect(() => {
    const fetchEvents = async () => {
      const now = new Date().toISOString()
      const nowTime = new Date()

      const data = await client.fetch(`
        *[_type == "xenniLive"] | order(date asc){
          _id, title, description, date, speaker, speakerRole, speakerImage, thumbnail, registered, duration, tags, videoUrl, views
        }
      `)

      const upcomingEvents = data.filter((e: Event) => e.date > now)
      const pastEvents = data.filter((e: Event) => e.date <= now).reverse()

      const liveNow = data.find((e: Event) => {
        const start = new Date(e.date)
        const end = new Date(start.getTime() + (e.duration ?? 60) * 60000)
        return nowTime >= start && nowTime <= end
      })

      setUpcoming(upcomingEvents)
      setPast(pastEvents)
      if (liveNow) setLiveEvent(liveNow)
    }

    fetchEvents()
  }, [])

  const renderTags = (tags?: string[]) =>
    tags?.map(tag => (
      <span
        key={tag}
        className="text-xs bg-[#00C2A1]/10 text-[#00C2A1] px-2 py-1 rounded-full font-medium"
      >
        {tag}
      </span>
    ))

  const renderCard = (event: Event, isPast = false) => (
    <div key={event._id} className="bg-white border rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      {event.thumbnail && (
        <div className="w-full h-[360px] relative">
          <Image
            src={urlForImage(event.thumbnail)}
            alt={`Imagen de ${event.title}`}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-bold text-[#002F6C]">{event.title}</h3>
        <p className="text-sm text-gray-600">{event.description}</p>
        <div className="flex flex-wrap gap-2">{renderTags(event.tags)}</div>
        <div className="text-sm text-gray-500 space-y-1">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#00C2A1]" />
            {new Date(event.date).toLocaleString('es-PE', {
              dateStyle: 'medium',
              timeStyle: 'short',
            })}
          </div>
          {event.registered && (
            <div className="flex items-center gap-2">
              👥 {event.registered} registrados
            </div>
          )}
          {event.duration && (
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#00C2A1]" /> {event.duration} min
            </div>
          )}
          {event.views && isPast && (
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#00C2A1]" /> {event.views.toLocaleString()} views
            </div>
          )}
        </div>
        <a
          href={event.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center px-4 py-2 rounded-full w-full mt-2 ${
            isPast ? 'bg-neutral-800 text-white' : 'bg-[#00C2A1] text-white'
          } text-sm font-semibold`}
        >
          <PlayCircle className="mr-2 w-4 h-4" />
          {isPast ? 'Ver grabación' : 'Registrarse gratis'}
        </a>
      </div>
    </div>
  )

  return (
    <><div className='pt-20'>
      <HeroXenniLives eventNow={liveEvent || undefined} />

      <div className="px-4 pt-20 pb-32 max-w-7xl mx-auto">
        <section id="upcoming" className="mb-20 text-center">
          <h2 className="text-4xl font-bold text-[#002F6C] mb-2">Próximos eventos</h2>
          <p className="text-gray-600 mb-8">
            No te pierdas nuestros próximos Xenni Lives. Cada evento es una oportunidad única de aprender de los mejores.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcoming.map(e => renderCard(e, false))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-[#002F6C] mb-2">Eventos pasados</h2>
          <p className="text-gray-600 mb-8">
            Revive los mejores momentos de Xenni Lives anteriores. Todo el contenido está disponible para la comunidad.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {past.map(e => renderCard(e, true))}
          </div>
        </section>
      </div>
      </div>
    </>
  )
}
