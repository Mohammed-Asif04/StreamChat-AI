import type { Channel, StreamChat, User } from "stream-chat";

/**
 * 🤖 Blueprint for any AI Assistant (ChatGPT, Writing Helper, etc.)
 */
export interface AIAgent {
  user?: User;                          // 👤 The AI's profile (optional)
  channel: Channel;                     // 💬 Which chat room the AI lives in
  chatClient: StreamChat;               // 🔌 Connection to Stream Chat service
  getLastInteraction: () => number;     // ⏰ When AI last talked (timestamp)
  init: () => Promise<void>;            // 🚀 Start up the AI agent
  dispose: () => Promise<void>;         // 🛑 Shut down the AI agent cleanly
}

/**
 * 🏷️ Types of AI agents you can create
 */
export enum AgentPlatform {
  OPENAI = "openai",                    // 🧠 ChatGPT/OpenAI assistant
  WRITING_ASSISTANT = "writing_assistant", // ✍️ Grammar/writing helper
}

/**
 * 📝 Special message format for writing assistance
 */
export interface WritingMessage {
  custom?: {
    suggestion?: string[];              // 💡 AI's writing suggestions ["Fix this", "Try that"]
    writingTask?: string;               // 📋 What user wants help with "Write email"
    messageType?: "user_input" | "ai_response" | "system_message"; // 🏷️ Who sent it
  };
}