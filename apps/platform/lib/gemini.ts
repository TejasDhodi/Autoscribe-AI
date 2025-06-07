// utils/gemini.ts
import axios from 'axios';

export async function generateContent(prompt: string) {
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.candidates?.[0]?.content?.parts?.[0]?.text || '';
  } catch (error: any) {
    throw new Error(
      axios.isAxiosError(error)
        ? error.response?.data?.error?.message || error.message
        : error.message
    );
  }
}
