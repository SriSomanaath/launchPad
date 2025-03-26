// import { NextResponse } from "next/server";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// // Load API key
// const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
// if (!apiKey) {
//   console.error("❌ Error: Gemini API key is missing!");
//   throw new Error("Gemini API key is missing. Set it in .env.local.");
// }

// const genAI = new GoogleGenerativeAI(apiKey);

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     console.log("Received Request Body:", body);

//     if (!body.message) {
//       return NextResponse.json({ error: "Message is required" }, { status: 400 });
//     }
//     const message = body.message.trim();

//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//     const result = await model.generateContent(message);
//     // console.log("Raw API Response:", JSON.stringify(result, null, 2));

//     if (!result || !result.response) {
//       throw new Error("Invalid API response: No response object found.");
//     }

//     const aiReply = result.response.text();
//     return NextResponse.json({ reply: aiReply });
//   } catch (error: any) {
//     console.error("❌ Error calling Gemini AI:", error?.message || error);
//     return NextResponse.json(
//       { error: "Failed to generate response", details: error?.message || error },
//       { status: 500 }
//     );
//   }
// }
import { NextResponse } from "next/server";
import OpenAI from "openai";

// Load API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Received Request:", body);

    if (!body.message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // Call OpenAI API
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: body.message }],
      max_tokens: 150,
    });

    // Extract AI response
    const aiReply = response.choices[0]?.message?.content || "No response.";
    return NextResponse.json({ reply: aiReply });
  } catch (error: any) {
    console.error("❌ OpenAI Error:", error);
    return NextResponse.json(
      { error: "Failed to generate response", details: error.message },
      { status: 500 }
    );
  }
}
