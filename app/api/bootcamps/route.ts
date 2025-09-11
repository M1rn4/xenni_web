import { NextRequest, NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase-admin';
import { MarketingBootcamp } from '@/lib/types/bootcamp';

export async function GET(request: NextRequest) {
  try {
    // Get query parameters
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    
    // Query bootcamps collection
    const bootcampsRef = adminDb.collection('bootcamps');
    let query = bootcampsRef;
    
    // Filter by status if provided, default to published and coming_soon
    const allowedStatuses = status ? [status] : ['published', 'coming_soon'];
    query = query.where('status', 'in', allowedStatuses);
    
    // Order by creation date
    query = query.orderBy('created_at', 'desc');
    
    const snapshot = await query.get();
    
    const bootcamps: MarketingBootcamp[] = snapshot.docs.map(doc => {
      const data = doc.data();
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
      
      return {
        id: doc.id,
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
        schedule_time: data.schedule_time
      };
    });
    
    return NextResponse.json({ 
      bootcamps,
      total: bootcamps.length,
      success: true 
    });
    
  } catch (error) {
    console.error('API Error fetching bootcamps:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch bootcamps',
        success: false,
        bootcamps: [],
        total: 0
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