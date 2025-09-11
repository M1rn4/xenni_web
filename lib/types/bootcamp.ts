import { Timestamp } from 'firebase/firestore';

// Enhanced status system
export type BootcampStatus = 'draft' | 'published' | 'coming_soon' | 'archived';
export type DifficultyLevel = 'Básico' | 'Intermedio' | 'Avanzado';

// Firebase Bootcamp interface (from app site)
export interface FirebaseBootcamp {
  id: string;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  duration: string; // "8 semanas"
  total_modules: number;
  price: string; // "100 USD"
  instructor_id: string;
  instructor_name: string;
  max_students: number;
  current_students: number;
  rating: number;
  image_url: string;
  status: BootcampStatus;
  start_date: Timestamp;
  end_date: Timestamp;
  schedule_days: string[]; // ["Monday", "Wednesday", "Friday"]
  schedule_time: string; // "19:00"
  created_at: Timestamp;
  updated_at: Timestamp;
  // Additional fields for marketing
  technologies?: string[];
  includes?: string[];
  focus?: string[];
  color?: string;
  icon?: string;
  // Additional fields for detailed page
  modality?: string; // "Online en vivo + sesiones híbridas"
  certificate?: string; // "NFT + Diploma PDF"
  syllabus?: SyllabusStage[];
  instructors?: Instructor[];
  modules?: Module[];
  sessions?: Session[];
  partners?: Partner[];
  faq?: FAQItem[];
  workshops?: Workshop[];
}

// Marketing site display interface
export interface MarketingBootcamp {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: DifficultyLevel;
  students: number;
  nextStart: string;
  estimatedStart?: string;
  technologies: string[];
  color: string;
  icon: string;
  available: boolean;
  price?: string;
  includes?: string[];
  focus?: string[];
  instructor_name?: string;
  max_students?: number;
  schedule_days?: string[];
  schedule_time?: string;
  modality?: string;
  certificate?: string;
}

// Detailed bootcamp for individual pages
export interface DetailedBootcamp extends MarketingBootcamp {
  modules?: Module[];
  sessions?: Session[];
  instructors?: Instructor[];
  syllabus?: SyllabusStage[];
  partners?: Partner[];
  faq?: FAQItem[];
  workshops?: Workshop[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  order_index: number;
  sessions: Session[];
}

export interface Session {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: 'live' | 'video' | 'workshop' | 'quiz' | 'assignment';
  deliverables?: string;
  resources?: string[];
}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  photo?: string;
  description: string;
}

export interface SyllabusStage {
  stage: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
  sessions: SyllabusSession[];
}

export interface SyllabusSession {
  title: string;
  icon: any;
  iconBg: string;
  description: string;
  deliverables: string;
  duration: string;
  resources: string[];
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  website?: string;
}

export interface FAQItem {
  id: string;
  icon: string;
  iconColor: string;
  question: string;
  answer: string;
  order_index: number;
}

export interface Workshop {
  id: string;
  title: string;
  description: string;
  icon: any;
  iconBg: string;
  color: string;
  duration: string;
  type: string;
  difficulty: string;
  tools: string[];
  outcomes: string[];
}

// Firestore collection names
export const COLLECTIONS = {
  BOOTCAMPS: 'bootcamps',
  MODULES: 'modules',
  SESSIONS: 'sessions',
  USERS: 'users'
} as const;