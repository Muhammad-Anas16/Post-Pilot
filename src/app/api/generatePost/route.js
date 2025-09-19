// import { ai } from "@/lib/gemini";

// export async function POST(req) {
//   const { platform, product } = await req.json();

//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash-lite",
//     contents: `tell me a creative and catchy social media post for a ${product} on ${platform}`,

//     config: {
//       thinkingConfig: { thinkingBudget: 0 }, // Faster, cheaper
//     },
//   });

//   return new Response(JSON.stringify({ text: response.text }), {
//     headers: { "Content-Type": "application/json" },
//   });
// }

import { ai } from "@/lib/gemini";

export async function POST(req) {
  try {
    const { audience, contentLength, country, socialmediaPlatform, prompt, tone } =
      await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return new Response(JSON.stringify({ error: "Gemini API key not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: `
You are an expert social media strategist and copywriter. 
Based on the following input parameters, create a complete social media posting strategy:

- Audience: ${audience}
- Content length: ${contentLength}
- Country/Region: ${country}
- Platform: ${socialmediaPlatform}
- Prompt/Topic: ${prompt}
- Tone: ${tone}

Your tasks:
1. Write a natural, human-sounding **social media post** that feels authentic for the given audience and platform (make it undetectable as AI).
2. Add **3–5 relevant hashtags/keywords**.
3. Suggest the **best time of day and days of the week** to post for reaching the most potential clients in ${country}.  
   👉 Always explicitly mention the country name when giving posting times (e.g., "6–8 PM local time in ${country}").
4. Give clear instructions on **how to post** (e.g., format, caption style, whether to include an image/video).
5. Estimate a **success probability %** (how likely this strategy is to attract new clients).
6. Ensure tone is authentic, engaging, and platform-appropriate — not generic or robotic.

Final Output Format (always follow this structure):
- Post: [single-line or short text post]
- Hashtags/Keywords: [list of 3–5]
- Best Time to Post: [day(s) + time(s) + country name]
- How to Post: [short step-by-step instructions]
- Success Probability: [number%]
      `,
      config: {
        thinkingConfig: { thinkingBudget: 0 }, // Faster, cheaper
      },
    });

    return new Response(JSON.stringify({ text: response.text }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in generatePost API:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
