import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export async function GET() {
  try {
    const announcements = await prisma.announcement.findMany({
      orderBy: { date: 'desc' }
    });
    return NextResponse.json(announcements);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const data = await request.json();
    const announcement = await prisma.announcement.create({
      data: {
        title: data.title,
        content: data.content,
        imageUrl: data.imageUrl,
        date: new Date(data.date || new Date())
      }
    });
    return NextResponse.json(announcement);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create' }, { status: 500 });
  }
}
