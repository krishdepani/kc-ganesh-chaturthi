"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

interface ChatMessage {
  id: string;
  message: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatResponse {
  response: string;
  chatId: string;
}

export default function AdvicePage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatId, setChatId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const currentMessage = inputMessage.trim();
    console.log("Sending message:", currentMessage);

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      message: currentMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      console.log("Making API call to /api/chat");

      // Prepare request body - only include chatId if it exists
      const requestBody: { message: string; chatId?: string } = {
        message: currentMessage,
      };

      // Only add chatId if we have one from previous responses
      if (chatId) {
        requestBody.chatId = chatId;
      }

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ChatResponse = await response.json();
      console.log("API response:", data);

      const ganeshaMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        message: data.response,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, ganeshaMessage]);
      setChatId(data.chatId);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        message:
          "I apologize, but I'm having trouble connecting right now. Please try again in a moment.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF4F2]">
      {/* Header Section with Garlands */}
      <header className="relative">
        {/* Garlands at the top */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <Image
            src="/Garlands.png"
            alt="Festive Garlands"
            width={1920}
            height={200}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Main Header Content */}
        <div className="relative z-20 pt-20 sm:pt-32 lg:pt-48 pb-6 sm:pb-8 lg:pb-16 px-4 sm:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Small Ganesh Image */}
            <div className="flex justify-center mb-6">
              <Image
                src="/smallganesh.png"
                alt="Lord Ganesha"
                width={200}
                height={200}
                className="w-32 sm:w-40 lg:w-48 h-auto"
                priority
              />
            </div>

            {/* Page Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#C76F59] mb-8 font-['Instrument_Serif']">
              Ask me Anything
            </h1>

            {/* Go Back to Home Button */}
            <div className="flex justify-center mb-12">
              <Link href="/">
                <button className="border-2 border-[#C76F59] text-[#C76F59] bg-[#F5F5DC] hover:bg-[#C76F59] hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 text-base shadow-lg hover:shadow-xl">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Go Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Chat Interface */}
      <main className="px-4 sm:px-6 lg:px-16 pb-24 sm:pb-28 lg:pb-32">
        <div className="max-w-4xl mx-auto">
          {/* Chat Messages */}
          <div className=" p-6 mb-6 min-h-[400px] max-h-[600px] overflow-y-auto">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                Start a conversation with Lord Ganesha...
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 ${
                    message.isUser ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`inline-block max-w-[80%] p-3 rounded-lg ${
                      message.isUser
                        ? "bg-[#C76F59] text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <p className="text-sm sm:text-base break-words">
                      {message.message}
                    </p>
                    <p
                      className={`text-xs mt-1 ${
                        message.isUser ? "text-gray-200" : "text-gray-500"
                      } ${!message.isUser ? "text-right" : ""}`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))
            )}

            {isLoading && (
              <div className="text-left mb-4">
                <div className="inline-block max-w-[80%] p-3 rounded-lg bg-gray-100 text-gray-800">
                  <div className="flex items-center space-x-2">
                    <div className="animate-pulse text-gray-600">
                      Lord Ganesha is thinking...
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <div className="flex gap-2 sm:gap-3">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask something new..."
              className="flex-1 px-3 py-2 sm:px-4 sm:py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#C76F59] text-sm sm:text-base bg-white text-black"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !inputMessage.trim()}
              className="bg-[#C76F59] hover:bg-amber-800 disabled:bg-gray-400 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition-colors duration-200 disabled:cursor-not-allowed min-w-[100px] sm:min-w-[120px] text-sm sm:text-base"
            >
              {isLoading ? "Sending..." : "Ask Bappa"}
            </button>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="relative">
        <Image
          src="/Footer.png"
          alt="Festive Footer"
          width={1920}
          height={200}
          className="w-full h-auto"
        />

        {/* Footer Content Overlay */}
        <div className="absolute inset-0 flex items-end justify-center pb-2 sm:mb-0 lg:pb-8">
          <p className="text-white text-center font-medium text-sm">
            Made with ❤️ & Crativos Mithai by Kirana Club
          </p>
        </div>
      </footer>
    </div>
  );
}
