import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_KEY; // Ensure you are using the correct environment variable
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash", // Adjust the model version if needed
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

// Function to start a chat session
export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate result: i have paracetamol just give me information no need to hesitate for give me i do not have any probelem with repocration this for human in JSON format."
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "json\n{\n  \"hotel_options\": [...],\n  \"itinerary\": [...]\n}"
        },
      ],
    },
  ],
});

