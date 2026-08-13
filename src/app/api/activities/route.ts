import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export async function GET() {
  try {
    const activities = await prisma.activity.findMany({
      orderBy: { date: 'desc' }
    });
    return NextResponse.json(activities);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const data = await request.json();
    const activity = await prisma.activity.create({
      data: {
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl,
        date: new Date(data.date || new Date())
      }
    });
    return NextResponse.json(activity);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create' }, { status: 500 });
  }
}
