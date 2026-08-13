import { writeFile } from 'fs/promises';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const filename = `${uniqueSuffix}-${file.name.replace(/[^a-zA-Z0-9.]/g, '')}`;
    const publicPath = `/uploads/${filename}`;
    const path = join(process.cwd(), 'public', 'uploads', filename);

    await writeFile(path, buffer);

    return NextResponse.json({ url: publicPath });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to upload' }, { status: 500 });
  }
}
