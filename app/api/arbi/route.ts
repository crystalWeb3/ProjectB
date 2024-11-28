import { NextResponse } from 'next/server';
import { globalData } from '@/dataStore';

export async function GET() {
  try {
    return NextResponse.json({
      message: 'Data fetched successfully',
      data: globalData,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Error retrieving data',
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
