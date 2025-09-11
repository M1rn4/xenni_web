import { NextRequest, NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase-admin';
import { DetailedBootcamp } from '@/lib/types/bootcamp';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    if (!id) {
      return NextResponse.json(
        { error: 'Bootcamp ID is required', success: false },
        { status: 400 }
      );
    }
    
    // Get bootcamp document
    const bootcampDoc = await adminDb.collection('bootcamps').doc(id).get();
    
    if (!bootcampDoc.exists) {
      return NextResponse.json(
        { error: 'Bootcamp not found', success: false },
        { status: 404 }
      );
    }
    
    const data = bootcampDoc.data()!;
    
    // Only return published or coming_soon bootcamps
    if (!['published', 'coming_soon'].includes(data.status)) {
      return NextResponse.json(
        { error: 'Bootcamp not available', success: false },
        { status: 404 }
      );
    }
    
    // Try multiple collection structures to find modules and sessions
    let modulesSnapshot, sessionsSnapshot;
    
    try {
      // Option 1: Subcollections under bootcamp
      modulesSnapshot = await adminDb.collection('bootcamps').doc(id).collection('modules').get();
      sessionsSnapshot = await adminDb.collection('bootcamps').doc(id).collection('sessions').get();
      
      // Option 2: If subcollections are empty, try root-level collections with bootcamp_id filter
      if (modulesSnapshot.empty) {
        modulesSnapshot = await adminDb.collection('modules').where('bootcamp_id', '==', id).get();
      }
      if (sessionsSnapshot.empty) {
        sessionsSnapshot = await adminDb.collection('sessions').where('bootcamp_id', '==', id).get();
      }
    } catch (error) {
      console.log('Error fetching modules/sessions:', error);
      // Initialize empty snapshots if there's an error
      modulesSnapshot = { docs: [], empty: true };
      sessionsSnapshot = { docs: [], empty: true };
    }
    
    const modules = modulesSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    const sessions = sessionsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    // Filter modules to only published ones and sort by order_index
    const publishedModules = modules
      .filter(module => module.status === "published")
      .sort((a, b) => (a.order_index || 0) - (b.order_index || 0));
    
    // Filter sessions to show published and scheduled ones (visible statuses)
    const visibleSessions = sessions.filter(session => 
      session.status === "published" || session.status === "scheduled"
    );
    // Build syllabus from published modules only
    const syllabus = publishedModules.map(module => ({
      stage: module.title || module.name,
      description: module.description || '',
      color: module.color || "from-blue-500 to-cyan-500",
      bgColor: module.bgColor || "bg-gradient-to-br from-blue-50 to-cyan-50",
      borderColor: module.borderColor || "border-blue-200",
      sessions: visibleSessions
        .filter(session => session.module_id === module.id)
        .sort((a, b) => (a.order_index || 0) - (b.order_index || 0))
        .map(session => ({
          title: session.title || session.name,
          icon: session.icon || 'BookOpen',
          iconBg: session.iconBg || 'bg-blue-500',
          description: session.description || '',
          deliverables: session.deliverables || '',
          duration: session.duration || '',
          resources: session.resources || []
        }))
    }));
    
    const isAvailable = data.status === 'published';
    
    // Handle null or undefined start_date safely
    let nextStart = "Próximamente";
    let estimatedStart: string | undefined = undefined;
    
    if (data.start_date) {
      const startDate = data.start_date.toDate ? data.start_date.toDate() : new Date(data.start_date);
      
      if (isAvailable) {
        nextStart = formatDate(startDate);
      } else {
        estimatedStart = formatEstimatedDate(startDate);
      }
    }
    
    const bootcamp: DetailedBootcamp = {
      id: bootcampDoc.id,
      title: data.title || '',
      description: data.description || '',
      duration: data.duration || '',
      level: data.difficulty || 'Básico',
      students: data.current_students || 0,
      nextStart,
      estimatedStart,
      technologies: data.technologies || [],
      color: data.color || "from-purple-500 to-pink-500",
      icon: data.icon || "🚀",
      available: isAvailable,
      price: data.price,
      includes: data.includes || [],
      focus: data.focus || [],
      instructor_name: data.instructor_name,
      max_students: data.max_students,
      schedule_days: data.schedule_days,
      schedule_time: data.schedule_time,
      // Additional fields for detailed page
      modality: data.modality || "Online en vivo",
      certificate: data.certificate || "Certificado digital",
      syllabus: syllabus.length > 0 ? syllabus : (data.syllabus || []),
      instructors: data.instructors || [],
      modules: publishedModules,
      sessions: visibleSessions,
      partners: data.partners || [],
      faq: data.faq || [],
      workshops: data.workshops || []
    };
    
    return NextResponse.json({ 
      bootcamp,
      success: true 
    });
    
  } catch (error) {
    console.error(`API Error fetching bootcamp ${params.id}:`, error);
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch bootcamp',
        success: false
      },
      { status: 500 }
    );
  }
}

/**
 * Format date for display in Spanish
 */
function formatDate(date: Date): string {
  const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

/**
 * Format estimated date for coming soon bootcamps
 */
function formatEstimatedDate(date: Date): string {
  const quarter = Math.ceil((date.getMonth() + 1) / 3);
  return `Q${quarter} ${date.getFullYear()}`;
}