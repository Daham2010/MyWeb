import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a professional AI assistant for Daham Prabhasara's luxury developer portfolio. Be concise, polite, and professional."
        },
        { role: "user", content: userMessage }
      ]
    });

    res.json({
      reply: response.choices[0].message.content
    });
  } catch (error) {
    res.status(500).json({ reply: "AI is temporarily unavailable." });
  }
});

app.listen(port, () => {
  console.log(`✅ AI Server running at http://localhost:${port}`);
});
const port = 3000;
const port = process.env.PORT || 3000;
content: `
You are an AI assistant for Daham Prabhasara.
He is a developer and digital designer from Sri Lanka,
focused on luxury web design, UI/UX, and modern technologies.
Answer professionally and avoid private personal information.
`

