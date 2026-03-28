import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateLeads(industry) {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: `Generate 10 business leads for ${industry} in South Africa with outreach ideas`
      }
    ]
  });

  console.log(response.choices[0].message.content);
}

generateLeads("car dealerships");
