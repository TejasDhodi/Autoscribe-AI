import { NextResponse } from 'next/server';
import { generateContent } from '@/lib/gemini';

export function parseHTMLString(raw: string): string {
  return raw.replace(/```html\n?/, "").replace(/```$/, "");
}

export async function POST(request: Request) {
  const body = await request.json();
  const { topic, chars = 300, tone = 'Professional' } = body;

  if (!topic) {
    return NextResponse.json({ message: 'Topic is required' }, { status: 400 });
  }

  const prompt = `Write a detailed blog post on "${topic}" with headings, paragraphs, and a ${tone} tone, about ${chars} characters long. Return in HTML (no <html>, <head>, or <body> tags) with inline CSS for styling, using content tags like <h1>, <p>, etc.`

  try {
    const content = await generateContent(prompt);
    return NextResponse.json({ content: parseHTMLString(content) }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Error generating content', error: error.message },
      { status: 500 }
    );
  }
}
