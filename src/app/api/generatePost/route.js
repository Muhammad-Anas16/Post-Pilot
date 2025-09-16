import { ai } from "@/lib/gemini";

export async function POST(req) {
  const { platform, product } = await req.json();

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-lite",
    contents: `tell me a creative and catchy social media post for a ${product} on ${platform}`,

    config: {
      thinkingConfig: { thinkingBudget: 0 }, // Faster, cheaper
    },
  });

  return new Response(JSON.stringify({ text: response.text }), {
    headers: { "Content-Type": "application/json" },
  });
}