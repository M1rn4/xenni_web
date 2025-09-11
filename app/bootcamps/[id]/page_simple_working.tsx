"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface BootcampData {
  id: string
  title: string
  description: string
  duration: string
  price: string
}

interface ApiResponse {
  bootcamp: BootcampData
  success: boolean
}

export default function SimpleBootcampPage() {
  const params = useParams()
  const [bootcamp, setBootcamp] = useState<BootcampData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    console.log('useEffect triggered', { params })
    
    if (!params?.id) {
      setError('No bootcamp ID provided')
      setLoading(false)
      return
    }

    const fetchData = async () => {
      try {
        console.log('Fetching data for:', params.id)
        const response = await fetch(`/api/bootcamps/${params.id}`)
        console.log('Response:', response.status)
        
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`)
        }
        
        const data: ApiResponse = await response.json()
        console.log('Data received:', data)
        
        if (data.success) {
          setBootcamp(data.bootcamp)
        } else {
          setError('Bootcamp not found')
        }
      } catch (err) {
        console.error('Fetch error:', err)
        setError('Failed to load bootcamp')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [params?.id])

  if (loading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4">Loading...</p>
          <p className="text-sm">ID: {params?.id}</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error</h1>
          <p className="mb-4">{error}</p>
          <Link href="/bootcamps" className="text-blue-500 hover:underline">
            Back to bootcamps
          </Link>
        </div>
      </div>
    )
  }

  if (!bootcamp) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p>No bootcamp data available</p>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{bootcamp.title}</h1>
        <p className="text-xl text-gray-600 mb-6">{bootcamp.description}</p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="font-semibold">Duration</h3>
            <p>{bootcamp.duration}</p>
          </div>
          <div>
            <h3 className="font-semibold">Price</h3>
            <p>{bootcamp.price}</p>
          </div>
        </div>

        <Link 
          href="/aplicar"
          className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Apply Now
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}