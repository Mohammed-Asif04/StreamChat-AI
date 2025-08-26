import { StreamChat } from "stream-chat";

// 📦 Get your Stream Chat keys from .env file
export const apiKey = process.env.STREAM_API_KEY as string;
export const apiSecret = process.env.STREAM_API_SECRET as string;

// ⚠️ Stop everything if keys are missing
if (!apiKey || !apiSecret) {
  throw new Error("Missing required environment variables for STREAM_API_KEY and STREAM_API_SECRET");
}

// 🚀 Create your chat server (like opening the chat app backend)
export const serverClient = new StreamChat(apiKey, apiSecret);
