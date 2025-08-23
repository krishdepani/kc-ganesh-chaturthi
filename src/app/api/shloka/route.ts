import { NextResponse } from 'next/server';
import shlokas from '@/app/data/shlokas.json';

export async function GET() {
  try {
    // Get current time in IST (UTC+5:30)
    const now = new Date();
    const istOffset = 5.5 * 60 * 60 * 1000; // 5.5 hours in milliseconds
    const istTime = new Date(now.getTime() + istOffset);
    
    // Festival start date: August 27, 2025 IST
    const festivalStartDate = new Date('2025-08-27T00:00:00+05:30');
    // Festival end date: September 2, 2025 IST
    const festivalEndDate = new Date('2025-09-02T23:59:59+05:30');
    
    // Convert to UTC for comparison
    const istTimeUTC = new Date(istTime.toISOString());
    const festivalStartUTC = new Date(festivalStartDate.getTime() - istOffset);
    const festivalEndUTC = new Date(festivalEndDate.getTime() - istOffset);
    
    let dayToReturn: number;
    
    // Check if current date is within festival period
    if (istTimeUTC >= festivalStartUTC && istTimeUTC <= festivalEndUTC) {
      // Calculate the day of the festival (1-7)
      const timeDiff = istTimeUTC.getTime() - festivalStartUTC.getTime();
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      dayToReturn = Math.min(dayDiff + 1, 7); // Ensure it's between 1-7
    } else {
      // Return random shloka for dates outside festival range
      dayToReturn = Math.floor(Math.random() * 7) + 1;
    }
    
    // Find and return the corresponding shloka
    const shloka = shlokas.find(s => s.day === dayToReturn);
    
    if (!shloka) {
      // Fallback to first shloka if not found
      return NextResponse.json(shlokas[0]);
    }
    
    return NextResponse.json(shloka);
    
  } catch (error) {
    console.error('Error fetching shloka:', error);
    // Return first shloka as fallback
    return NextResponse.json(shlokas[0]);
  }
}