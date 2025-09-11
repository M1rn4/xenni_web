import {
  MarketingBootcamp,
  DetailedBootcamp,
} from '@/lib/types/bootcamp';

export class MarketingBootcampService {
  // Default fallback data for development/offline mode
  private static defaultBootcamps: MarketingBootcamp[] = [
    {
      id: "web3-blockchain",
      title: "Blockchain Builder Bootcamp",
      description: "El bootcamp Web3 donde construyes, creces y ganas dinero",
      duration: "8 semanas",
      level: "Básico" as const,
      students: 1000,
      nextStart: "15 Set 2025",
      technologies: [
        "Solidity",
        "ThirdWeb", 
        "React",
        "IA para developers",
        "MetaMask",
      ],
      color: "from-purple-500 to-pink-500",
      icon: "🔗",
      available: true,
      price: "100 USD",
      includes: [
        "Gana premios",
        "Mentoría personalizada",
        "Acceso a comunidad Web3",
        "Proyectos prácticos guiados",
        "Recursos descargables y plantillas",
        "Simulaciones de pitch",
        "Feedback por expertos",
      ],
      focus: [
        "Fundamentos Web3",
        "Tokenomics para proyectos",
        "Gestión ágil de equipos",
        "Prototipado visual",
        "Presentación de ideas (pitch)",
      ]
    },
    {
      id: "ai-machine-learning",
      title: "Inteligencia Artificial & ML",
      description: "Desarrolla modelos de IA y sistemas inteligentes desde cero",
      duration: "20 semanas",
      level: "Avanzado" as const,
      students: 0,
      nextStart: "Próximamente",
      estimatedStart: "Q2 2025",
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI"],
      color: "from-blue-500 to-cyan-500",
      icon: "🧠",
      available: false,
    },
    {
      id: "iot-embedded",
      title: "Internet of Things & Embedded",
      description: "Conecta el mundo físico con soluciones IoT innovadoras",
      duration: "14 semanas",
      level: "Intermedio" as const,
      students: 0,
      nextStart: "Próximamente",
      estimatedStart: "Q3 2025",
      technologies: ["Arduino", "Raspberry Pi", "C++", "MQTT"],
      color: "from-green-500 to-emerald-500",
      icon: "📡",
      available: false,
    },
    {
      id: "cybersecurity",
      title: "Ciberseguridad Avanzada",
      description: "Protege sistemas y datos con técnicas de seguridad de vanguardia",
      duration: "18 semanas",
      level: "Avanzado" as const,
      students: 0,
      nextStart: "Próximamente",
      estimatedStart: "Q4 2025",
      technologies: ["Kali Linux", "Python", "Wireshark", "Metasploit"],
      color: "from-red-500 to-orange-500",
      icon: "🛡️",
      available: false,
    },
  ];

  /**
   * Get all published and coming soon bootcamps
   */
  static async getPublicBootcamps(): Promise<MarketingBootcamp[]> {
    try {
      const response = await fetch('/api/bootcamps', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.success && data.bootcamps) {
        return data.bootcamps;
      } else {
        throw new Error(data.error || 'Failed to fetch bootcamps');
      }
    } catch (error) {
      console.error('Error fetching bootcamps from API:', error);
      console.log('Falling back to default bootcamps');
      return this.defaultBootcamps;
    }
  }

  /**
   * Get a specific bootcamp by ID
   */
  static async getBootcamp(bootcampId: string): Promise<DetailedBootcamp | null> {
    try {
      const response = await fetch(`/api/bootcamps/${bootcampId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 404) {
        // Fallback to default data
        const defaultBootcamp = this.defaultBootcamps.find(b => b.id === bootcampId);
        return defaultBootcamp ? { ...defaultBootcamp } : null;
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.success && data.bootcamp) {
        return data.bootcamp;
      } else {
        throw new Error(data.error || 'Failed to fetch bootcamp');
      }
    } catch (error) {
      console.error(`Error fetching bootcamp ${bootcampId}:`, error);
      
      // Fallback to default data
      const defaultBootcamp = this.defaultBootcamps.find(b => b.id === bootcampId);
      return defaultBootcamp ? { ...defaultBootcamp } : null;
    }
  }

  /**
   * Check if API is available
   */
  static isApiAvailable(): boolean {
    return typeof window !== 'undefined'; // Check if we're in browser environment
  }


  /**
   * Get bootcamp statistics
   */
  static async getBootcampStats(): Promise<{
    totalBootcamps: number;
    publishedBootcamps: number;
    comingSoonBootcamps: number;
    totalStudents: number;
  }> {
    try {
      const response = await fetch('/api/bootcamps/stats', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.success && data.stats) {
        return data.stats;
      } else {
        throw new Error(data.error || 'Failed to fetch bootcamp stats');
      }
    } catch (error) {
      console.error('Error getting bootcamp stats from API:', error);
      return {
        totalBootcamps: 0,
        publishedBootcamps: 0,
        comingSoonBootcamps: 0,
        totalStudents: 0
      };
    }
  }
}