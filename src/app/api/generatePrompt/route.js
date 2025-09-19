import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req) {
  try {
    if (!process.env.GROQ_API_KEY) {
      return new Response(JSON.stringify({ error: "Groq API key not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { prompt } = await req.json();

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt || "Hello, explain the importance of fast LLMs.",
        },
      ],
      model: "llama-3.3-70b-versatile",
    });

    const reply = chatCompletion.choices[0]?.message?.content || "";

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error in generatePrompt API:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}