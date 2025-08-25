export interface ChatRequest {
  message: string;
  chatId?: string;
}

export interface ChatResponse {
  response: string;
  chatId: string;
}

export interface ChatMessage {
  role: "user" | "model";
  parts: { text: string }[];
}

export interface ChatHistory {
  messages: ChatMessage[];
  createdAt: Date;
  lastActivity: Date;
}

export interface GeminiContent {
  role: "user" | "model";
  parts: { text: string }[];
}

export interface ApiError {
  status?: number;
  message?: string;
}

export interface UploadResponse {
  success: boolean;
  url?: string;
  publicId?: string;
  message?: string;
}

export interface ImagesResponse {
  success: boolean;
  urls: string[];
  message?: string;
}
