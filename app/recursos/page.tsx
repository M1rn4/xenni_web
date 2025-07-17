"use client"

import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import { PlayCircle, FileText, Mic, BookOpen, Link as LinkIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import NewsletterCTA from './NewsletterCTA'

interface Resource {
  _id: string
  title: string
  description: string
  type: 'article' | 'video' | 'podcast' | 'guide' | 'other'
  link: string
  thumbnail?: {
    asset: {
      _ref: string
      _type: string
    }
  }
  tags?: string[]
  author?: string
  publishedAt?: string
}

function urlForImage(source: any) {
  return `https://cdn.sanity.io/images/5u4bh471/production/${source.asset._ref
    .replace('image-', '')
    .replace('-jpg', '.jpg')
    .replace('-png', '.png')}`
}

const iconForType = (type: Resource['type']) => {
  switch (type) {
    case 'article': return <FileText className="w-4 h-4 text-white" />
    case 'video': return <PlayCircle className="w-4 h-4 text-white" />
    case 'podcast': return <Mic className="w-4 h-4 text-white" />
    case 'guide': return <BookOpen className="w-4 h-4 text-white" />
    default: return <LinkIcon className="w-4 h-4 text-white" />
  }
}

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([])
  const [selectedTag, setSelectedTag] = useState<string>('Todos')
  const [search, setSearch] = useState('')
  const [allTags, setAllTags] = useState<string[]>([])

  useEffect(() => {
    const fetchResources = async () => {
      const data = await client.fetch(`
        *[_type == "resource"] | order(publishedAt desc){
          _id, title, description, type, link, thumbnail, tags, author, publishedAt
        }
      `)
      setResources(data)

      const tagSet = new Set<string>()
      data.forEach((r: { tags: any[] }) => r.tags?.forEach(t => tagSet.add(t)))
      setAllTags(['Todos', ...Array.from(tagSet)])
    }

    fetchResources()
  }, [])

  const filtered = resources.filter(r =>
    (selectedTag === 'Todos' || r.tags?.includes(selectedTag)) &&
    (r.title.toLowerCase().includes(search.toLowerCase()) || r.description.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div className='pt-20'>
     <div className="bg-[#F8FAFC]">
      <div className="bg-[#001E3C] text-white py-20 px-4 text-center">
        <h1 className="text-5xl font-bold">
          Recursos <span className="text-[#00C2A1]">educativos</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Explora nuestra biblioteca de recursos gratuitos para aprender sobre Web3, IA, IoT y Ciberseguridad. Creados por expertos para la comunidad.
        </p>

        <div className="mt-8 max-w-md mx-auto">
          <input
            type="text"
            placeholder="🔍 Buscar recursos..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full px-4 py-3 rounded-full text-gray-800 border border-[#00C2A1] bg-white"
          />
        </div>

        <div className="flex flex-wrap justify-center mt-6 gap-3">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedTag === tag
                  ? 'bg-white text-[#002F6C]'
                  : 'bg-[#002F6C] text-white border border-white'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 pt-16 pb-32 max-w-7xl mx-auto">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500">No se encontraron recursos con ese filtro.</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filtered.map(resource => (
              <div key={resource._id} className="bg-white border rounded-2xl p-5 shadow hover:shadow-lg transition">
                <div className="flex items-start gap-3 mb-3">
                  <div className="rounded-md bg-[#7E3AF2] p-2">
                    {iconForType(resource.type)}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {resource.tags?.map((tag, idx) => (
                    <span key={idx} className="text-xs font-medium px-2 py-0.5 rounded-full w-fit mb-1"
                      style={{
                        backgroundColor: tag === 'Web3' ? '#F0F4FF' : tag === 'IA' ? '#E0F7FA' : tag === 'IoT' ? '#E6F4EA' : '#F0FDF9',
                        color: tag === 'Web3' ? '#1E40AF' : tag === 'IA' ? '#006064' : tag === 'IoT' ? '#1B5E20' : '#0F766E'
                      }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-md font-bold text-[#002F6C] leading-snug mb-1">
                  {resource.title}
                </h2>
                <p className="text-sm text-gray-600 mb-3">
                  {resource.description}
                </p>
                <Link
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm text-[#002F6C] font-semibold border border-[#002F6C] px-4 py-2 rounded-full hover:bg-[#002F6C] hover:text-white transition"
                >
                  Acceder →
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      <NewsletterCTA />
    </div>
  </div>
  )
}
