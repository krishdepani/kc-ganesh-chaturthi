"use client";

import { useState, useEffect } from "react";

interface ShlokaResponse {
  day: number;
  shloka_sanskrit: string;
  transliteration: string;
  purpose: string;
}

export default function ShlokaSection() {
  const [shloka, setShloka] = useState<ShlokaResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchShloka = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/shloka");

        if (!response.ok) {
          throw new Error("Failed to fetch shloka");
        }

        const data = await response.json();
        setShloka(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching shloka:", err);
        setError("Failed to load shloka");
      } finally {
        setLoading(false);
      }
    };

    fetchShloka();
  }, []);

  if (loading) {
    return (
      <div className="mb-8">
        <h2 className="text-lg font-bold text-[#D94F29] ">
          Shloka of the Day:
        </h2>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border-2 border-amber-200 shadow-lg">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded mb-3"></div>
            <div className="h-4 bg-gray-200 rounded mb-3"></div>
            <div className="h-4 bg-gray-200 rounded mb-3"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !shloka) {
    return (
      <div className="mb-2">
        <h2 className="text-lg font-bold text-[#D94F29] mb-4">
          Shloka of the Day:
        </h2>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border-2 border-amber-200 shadow-lg">
          <p className="text-gray-600 text-center">
            {error || "Unable to load shloka at this time."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold text-[#D94F29] ">Shloka of the Day:</h2>

      {/* Sanskrit Shloka */}
      <div className=" mb-4">
        <div className="text-center mb-4">
          <p className="text-gray-800 text-xl leading-relaxed font-medium">
            {shloka.shloka_sanskrit}
          </p>
        </div>

        {/* Transliteration */}
        <div className="text-center mb-4">
          <p className="text-gray-600 text-lg italic">
            {shloka.transliteration}
          </p>
        </div>
      </div>
    </div>
  );
}
