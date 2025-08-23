# Ganesh Chaturthi AI Application

This is a Next.js application for Ganesh Chaturthi celebrations, featuring an AI chatbot powered by Google's Gemini API and a daily shloka delivery system.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## API Integration Guide

This application provides two REST APIs for frontend integration:

### 1. Chat API - Lord Ganesha AI Assistant

**Endpoint:** `POST /api/chat`

**Purpose:** Interact with an AI chatbot that embodies Lord Ganesha's persona as a divine guide and obstacle remover.

#### Request Format

```typescript
interface ChatRequest {
  message: string;      // Required: User's message to Lord Ganesha
  chatId?: string;      // Optional: Chat session ID for conversation continuity
}
```

#### Response Format

```typescript
interface ChatResponse {
  response: string;     // Lord Ganesha's AI-generated response
  chatId: string;       // Chat session ID (new or existing)
}
```

#### Example Usage

```bash
# Start a new conversation
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Om Gam Ganapataye Namaha! How can you help me today?"}'

# Continue existing conversation
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Tell me about removing obstacles", "chatId": "your-chat-id-here"}'
```

#### JavaScript/TypeScript Integration

```typescript
async function chatWithGanesha(message: string, chatId?: string) {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, chatId })
  });
  
  if (!response.ok) {
    throw new Error('Failed to communicate with Lord Ganesha');
  }
  
  return await response.json();
}

// Usage
const result = await chatWithGanesha("Please guide me through my challenges");
console.log(result.response); // AI response
console.log(result.chatId);   // Session ID for follow-up messages
```

#### Key Features

- **Conversation Memory**: Chat sessions are maintained server-side using UUID-based identifiers
- **Spiritual Persona**: AI responds as Lord Ganesha with appropriate wisdom and guidance
- **Error Handling**: Graceful error responses with spiritual messaging
- **Session Management**: Automatic cleanup of inactive conversations after 60 minutes

---

### 2. Daily Shloka API

**Endpoint:** `GET /api/shloka`

**Purpose:** Retrieve the appropriate shloka (Sanskrit verse) based on the current day of Ganesh Chaturthi festival or a random shloka outside the festival period.

#### Response Format

```typescript
interface ShlokaResponse {
  day: number;              // Day number (1-7)
  shloka_sanskrit: string;  // Sanskrit verse with Devanagari script
  transliteration: string;  // Roman script transliteration
  purpose: string;          // Detailed explanation of the shloka's significance
}
```

#### Example Usage

```bash
# Get today's shloka
curl -X GET http://localhost:3000/api/shloka
```

#### JavaScript/TypeScript Integration

```typescript
async function getTodaysShloka() {
  const response = await fetch('/api/shloka');
  
  if (!response.ok) {
    throw new Error('Failed to fetch shloka');
  }
  
  return await response.json();
}

// Usage
const shloka = await getTodaysShloka();
console.log(`Day ${shloka.day}: ${shloka.shloka_sanskrit}`);
console.log(`Meaning: ${shloka.purpose}`);
```

#### Festival Logic

- **Festival Period**: August 27 - September 2, 2025 (7-day Ganesh Chaturthi)
- **During Festival**: Returns the appropriate shloka for the current day (Day 1-7)
- **Outside Festival**: Returns a random shloka from the collection
- **Timezone**: All calculations are based on Indian Standard Time (IST/UTC+5:30)
- **Fallback**: Always returns the first shloka if any error occurs

---

### Error Handling

Both APIs implement comprehensive error handling:

#### Common HTTP Status Codes

- **200**: Success
- **400**: Bad Request (invalid JSON, missing message, etc.)
- **401**: Unauthorized (invalid API key)
- **500**: Internal Server Error

#### Error Response Format

```typescript
interface ErrorResponse {
  error: string;    // Human-readable error message
}
```

#### Example Error Responses

```json
// Chat API - Invalid request
{
  "error": "Please provide a valid message to communicate with Lord Ganesha."
}

// Chat API - Server error
{
  "error": "Lord Ganesha is in deep meditation. Please try again in a few moments. Om Gam Ganapataye Namaha! 🙏"
}
```

---

### Frontend Integration Best Practices

1. **Chat Sessions**: Always store and reuse `chatId` for conversation continuity
2. **Error Handling**: Implement proper try-catch blocks and user-friendly error messages
3. **Loading States**: Show loading indicators during API calls
4. **Rate Limiting**: Consider implementing client-side rate limiting for chat API
5. **Accessibility**: Ensure Sanskrit text is properly displayed with appropriate fonts
6. **Responsive Design**: APIs return text content suitable for mobile and desktop displays

#### React Example Component

```tsx
import { useState } from 'react';

export function GaneshaChat() {
  const [message, setMessage] = useState('');
  const [chatId, setChatId] = useState<string>();
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;
    
    setLoading(true);
    try {
      const result = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, chatId })
      });
      
      const data = await result.json();
      if (result.ok) {
        setResponse(data.response);
        setChatId(data.chatId);
        setMessage('');
      } else {
        console.error('Error:', data.error);
      }
    } catch (error) {
      console.error('Network error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <textarea 
        value={message} 
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask Lord Ganesha for guidance..."
      />
      <button onClick={sendMessage} disabled={loading}>
        {loading ? 'Communicating...' : 'Send Message'}
      </button>
      {response && <div>{response}</div>}
    </div>
  );
}
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
