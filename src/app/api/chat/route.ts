import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { ChatRequest, ChatResponse, ChatHistory, ChatMessage, GeminiContent, ApiError } from '@/app/lib/types';
import { GANESHA_SYSTEM_PROMPT, GEMINI_MODEL, DIVINE_ERROR_MESSAGE, GEMINI_API_KEY } from '@/app/lib/constants';

// In-memory cache for storing chat conversations
const chatCache = new Map<string, ChatHistory>();

// Initialize Google GenAI client
const ai = new GoogleGenAI({
  apiKey: GEMINI_API_KEY
});

function generateChatId(): string {
  return crypto.randomUUID();
}

function validateRequest(body: unknown): body is ChatRequest {
  if (body === null || typeof body !== 'object') {
    return false;
  }
  
  const bodyObj = body as Record<string, unknown>;
  return (
    typeof bodyObj.message === 'string' &&
    bodyObj.message.trim().length > 0 &&
    (bodyObj.chatId === undefined || typeof bodyObj.chatId === 'string')
  );
}

function buildContents(history: ChatMessage[], newMessage: string): GeminiContent[] {
  const contents: GeminiContent[] = [];
  
  // Add system prompt as first message
  contents.push({
    role: 'user' as const,
    parts: [{ text: GANESHA_SYSTEM_PROMPT }]
  });
  
  // Add conversation history
  for (const msg of history) {
    contents.push({
      role: msg.role,
      parts: msg.parts
    });
  }
  
  // Add new user message
  contents.push({
    role: 'user' as const,
    parts: [{ text: newMessage }]
  });
  
  return contents;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Validate API key
    if (!GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY constant is not set');
      return NextResponse.json(
        { error: DIVINE_ERROR_MESSAGE },
        { status: 500 }
      );
    }

    // Parse and validate request body
    let body: unknown;
    try {
      body = await request.json();
    } catch (error) {
      console.error('Invalid JSON in request body:', error);
      return NextResponse.json(
        { error: 'Invalid request format. Please send a valid JSON message.' },
        { status: 400 }
      );
    }

    if (!validateRequest(body)) {
      return NextResponse.json(
        { error: 'Please provide a valid message to communicate with Lord Ganesha.' },
        { status: 400 }
      );
    }

    const { message, chatId: providedChatId }: ChatRequest = body;
    
    // Generate or use existing chat ID
    const chatId = providedChatId || generateChatId();
    
    // Get existing chat history or create new one
    let chatHistory: ChatHistory;
    if (chatCache.has(chatId)) {
      chatHistory = chatCache.get(chatId)!;
      chatHistory.lastActivity = new Date();
    } else {
      chatHistory = {
        messages: [],
        createdAt: new Date(),
        lastActivity: new Date()
      };
    }

    try {
      // Build contents array for the API call
      const contents = buildContents(chatHistory.messages, message);
      
      // Generate response using Gemini API
      const response = await ai.models.generateContent({
        model: GEMINI_MODEL,
        contents: contents
      });

      const ganeshaResponse = response.text;

      if (!ganeshaResponse) {
        throw new Error('Empty response from Gemini API');
      }

      // Update chat history
      chatHistory.messages.push({
        role: 'user',
        parts: [{ text: message }]
      });
      
      chatHistory.messages.push({
        role: 'model',
        parts: [{ text: ganeshaResponse }]
      });

      // Store updated history in cache
      chatCache.set(chatId, chatHistory);

      // Return response
      const responseData: ChatResponse = {
        response: ganeshaResponse,
        chatId: chatId
      };

      return NextResponse.json(responseData);

    } catch (apiError) {
      console.error('Gemini API error:', apiError);
      
      // Check if it's an API key issue
      if (apiError && typeof apiError === 'object' && 'status' in apiError) {
        if ((apiError as ApiError).status === 401) {
          return NextResponse.json(
            { error: DIVINE_ERROR_MESSAGE },
            { status: 401 }
          );
        }
      }
      
      return NextResponse.json(
        { error: DIVINE_ERROR_MESSAGE },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Unexpected error in chat API:', error);
    return NextResponse.json(
      { error: DIVINE_ERROR_MESSAGE },
      { status: 500 }
    );
  }
}

// Optional: Add a method to clean up old conversations (can be called periodically)
export function cleanupOldChats(maxAgeMinutes: number = 60): void {
  const now = new Date();
  const cutoff = new Date(now.getTime() - maxAgeMinutes * 60 * 1000);
  
  for (const [chatId, history] of chatCache.entries()) {
    if (history.lastActivity < cutoff) {
      chatCache.delete(chatId);
    }
  }
}