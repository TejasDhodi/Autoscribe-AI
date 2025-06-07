import { NextResponse } from 'next/server';
import { generateContent } from '@/lib/gemini';

export async function POST(request: Request) {
  const body = await request.json();
  const { keyword } = body;

  if (!keyword) {
    return NextResponse.json({ message: 'Keyword is required' }, { status: 400 });
  }

  const prompt = `List 10 unique blog topics based on the keyword "${keyword}". Return as array of string.`;

  try {
    const content = await generateContent(prompt);
    return NextResponse.json({ topics: content }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Error generating topics', error: error.message },
      { status: 500 }
    );
  }
}
