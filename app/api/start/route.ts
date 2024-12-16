import { NextResponse } from 'next/server';
import { startBackgroundWorker } from '@/lib/backgroundWorker';

let isWorkerTriggered = false;

export async function GET() {
  if (!isWorkerTriggered) {
    await startBackgroundWorker();
    isWorkerTriggered = true; // Prevent re-triggering
    return NextResponse.json({ message: 'Background worker started' });
  } else {
    return NextResponse.json({ message: 'Background worker is already running' });
  }
}
