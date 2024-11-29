import { NextResponse } from 'next/server';
import { endBackgroundWorker } from '@/lib/backgroundWorker';


export async function GET() {

    console.log("End Process")
    endBackgroundWorker();
    return NextResponse.json({ message: 'Background worker stoped' });
  
}
