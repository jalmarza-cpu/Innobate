import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize Gemini Client
// NOTE: In a real production environment, do not expose API keys on the client side.
// This should be proxied through a backend (Cloud Functions/Next.js API route).
// For this demo, we assume process.env.API_KEY is available or injected.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Eres el Asistente Virtual de Ventas de "Innobate", una agencia de Performance & IA en Chile.
Tu tono es profesional, innovador, directo y persuasivo ("Dark Mode Premium").
El slogan de la empresa es "Innovate or Esfumate".

Tus objetivos:
1. Explicar brevemente los servicios: Marketing Automation, Influencers IA (como Mia Innoba), Performance Ads, y Chatbots.
2. Calificar al usuario preguntando sutilmente por su industria o necesidad.
3. Invitar al usuario a llenar el formulario de cotización (RFQ) o contactar por WhatsApp.

Restricciones:
- Respuestas cortas (máximo 3 oraciones).
- Formato Markdown.
- Si te preguntan precios exactos, di que depende del alcance y sugieres pedir una cotización.
- Habla en español de Chile (puedes usar modismos sutiles de negocios).
`;

export const sendMessageToGemini = async (history: {role: string, parts: {text: string}[]}[], message: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Error: API Key no configurada. Por favor contacta al administrador.";
  }

  try {
    const model = 'gemini-3-flash-preview';
    
    // Construct the chat history for the stateless call or use chat session
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history
    });

    const response: GenerateContentResponse = await chat.sendMessage({ message });
    
    return response.text || "Lo siento, tuve un problema procesando tu solicitud.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Hubo un error de conexión con la IA. Por favor intenta más tarde.";
  }
};