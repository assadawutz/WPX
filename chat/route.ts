import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { prompt, model, systemInstruction, thinkingLevel } = await req.json();
    
    const response = await ai.models.generateContent({
      model: model || "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        thinkingConfig: thinkingLevel === "HIGH" ? { includeThoughts: true } : undefined,
      }
    });

    return NextResponse.json({ text: response.text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: "Failed to generate content" }, { status: 500 });
  }
}
