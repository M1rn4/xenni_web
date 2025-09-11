import { NextRequest, NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase-admin';

export async function GET(request: NextRequest) {
  try {
    // Query bootcamps collection for public bootcamps only
    const bootcampsRef = adminDb.collection('bootcamps');
    const query = bootcampsRef.where('status', 'in', ['published', 'coming_soon']);
    
    const snapshot = await query.get();
    
    let totalStudents = 0;
    let publishedBootcamps = 0;
    let comingSoonBootcamps = 0;
    
    snapshot.docs.forEach(doc => {
      const data = doc.data();
      
      // Count students
      if (data.current_students) {
        totalStudents += data.current_students;
      }
      
      // Count by status
      if (data.status === 'published') {
        publishedBootcamps++;
      } else if (data.status === 'coming_soon') {
        comingSoonBootcamps++;
      }
    });
    
    const stats = {
      totalBootcamps: snapshot.size,
      publishedBootcamps,
      comingSoonBootcamps,
      totalStudents
    };
    
    return NextResponse.json({ 
      stats,
      success: true 
    });
    
  } catch (error) {
    console.error('API Error fetching bootcamp stats:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch bootcamp statistics',
        success: false,
        stats: {
          totalBootcamps: 0,
          publishedBootcamps: 0,
          comingSoonBootcamps: 0,
          totalStudents: 0
        }
      },
      { status: 500 }
    );
  }
}