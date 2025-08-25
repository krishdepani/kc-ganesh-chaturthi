"use client";

import Image from "next/image";
import Link from "next/link";

export default function SchedulePage() {
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
              Event Schedule
            </h1>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() =>
                  window.open("https://calendar.google.com", "_blank")
                }
                className="bg-[#C76F59] hover:bg-amber-800 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center gap-2 text-base shadow-lg hover:shadow-xl"
              >
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Subscribe to Event Calendar
              </button>

              <Link href="/">
                <button className="border-2 border-[#C76F59] text-[#C76F59] bg-white hover:bg-[#C76F59] hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 text-base shadow-lg hover:shadow-xl">
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

      {/* Main Schedule Content */}
      <main className="px-4 sm:px-6 lg:px-16 pb-24 sm:pb-28 lg:pb-32">
        <div className="max-w-4xl mx-auto">
          {/* Schedule Section */}
          <div className="space-y-8">
            {/* Date Group 1 - August 27 */}
            <div className="relative">
              <div className="flex">
                {/* Vertical Line */}
                <div className="w-1 bg-[#C76F59] mr-6"></div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#C76F59] mb-4 font-['Instrument_Serif']">
                    27 August 2025 (Wednesday)
                  </h2>

                  {/* Event Cards */}
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-800 font-medium">
                          11:00 AM
                        </span>
                        <span className="text-gray-800">•</span>
                        <span className="text-gray-800 font-medium">
                          🙏 Morning Pooja
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-800 font-medium">
                          7:00 PM - 7:45 PM
                        </span>
                        <span className="text-gray-800">•</span>
                        <span className="text-gray-800 font-medium">
                          🎵 Musical Sticks
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-800 font-medium">
                          7:45 PM - 8:00 PM
                        </span>
                        <span className="text-gray-800">•</span>
                        <span className="text-gray-800 font-medium">
                          🪔 Aarti
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Date Group 2 - August 28 */}
            <div className="relative">
              <div className="flex">
                {/* Vertical Line */}
                <div className="w-1 bg-[#C76F59] mr-6"></div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#C76F59] mb-4 font-['Instrument_Serif']">
                    28 August 2025 (Thursday)
                  </h2>

                  {/* Event Cards */}
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-800 font-medium">
                          11:00 AM
                        </span>
                        <span className="text-gray-800">•</span>
                        <span className="text-gray-800 font-medium">
                          🙏 Morning Pooja
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-800 font-medium">
                          7:00 PM - 7:45 PM
                        </span>
                        <span className="text-gray-800">•</span>
                        <span className="text-gray-800 font-medium">
                          🎯 Dumb Charades
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-800 font-medium">
                          7:45 PM - 8:00 PM
                        </span>
                        <span className="text-gray-800">•</span>
                        <span className="text-gray-800 font-medium">
                          🪔 Aarti
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Date Group 3 - August 29 */}
            <div className="relative">
              <div className="flex">
                {/* Vertical Line */}
                <div className="w-1 bg-[#C76F59] mr-6"></div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#C76F59] mb-4 font-['Instrument_Serif']">
                    29 August 2025 (Friday)
                  </h2>

                  {/* Event Cards */}
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-800 font-medium">
                          11:00 AM
                        </span>
                        <span className="text-gray-800">•</span>
                        <span className="text-gray-800 font-medium">
                          🙏 Morning Pooja
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-800 font-medium">
                          7:00 PM - 7:45 PM
                        </span>
                        <span className="text-gray-800">•</span>
                        <span className="text-gray-800 font-medium">
                          🎭 Talent Show
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-800 font-medium">
                          7:45 PM - 8:00 PM
                        </span>
                        <span className="text-gray-800">•</span>
                        <span className="text-gray-800 font-medium">
                          🪔 Aarti
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Date Group 6 - September 1 */}
            <div className="relative">
              <div className="flex">
                {/* Vertical Line */}
                <div className="w-1 bg-[#C76F59] mr-6"></div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#C76F59] mb-4 font-['Instrument_Serif']">
                    1 September 2025 (Monday)
                  </h2>

                  {/* Event Cards */}
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-800 font-medium">
                          11:00 AM
                        </span>
                        <span className="text-gray-800">•</span>
                        <span className="text-gray-800 font-medium">
                          🙏 Morning Pooja
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-800 font-medium">
                          7:00 PM - 7:45 PM
                        </span>
                        <span className="text-gray-800">•</span>
                        <span className="text-gray-800 font-medium">
                          🎨 Drawing Competition
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-800 font-medium">
                          7:45 PM - 8:00 PM
                        </span>
                        <span className="text-gray-800">•</span>
                        <span className="text-gray-800 font-medium">
                          🪔 Aarti
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Date Group 7 - September 2 */}
            <div className="relative">
              <div className="flex">
                {/* Vertical Line */}
                <div className="w-1 bg-[#C76F59] mr-6"></div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#C76F59] mb-4 font-['Instrument_Serif']">
                    2 September 2025 (Tuesday)
                  </h2>

                  {/* Event Cards */}
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-800 font-medium">
                          12:30 PM
                        </span>
                        <span className="text-gray-800">•</span>
                        <span className="text-gray-800 font-medium">
                          🙏 Pooja
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-800 font-medium">
                          1:00 PM
                        </span>
                        <span className="text-gray-800">•</span>
                        <span className="text-gray-800 font-medium">
                          🌊 Visarjan
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-800 font-medium">
                          After Visarjan
                        </span>
                        <span className="text-gray-800">•</span>
                        <span className="text-gray-800 font-medium">
                          🍽️ Potluck Lunch
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
        <div className="absolute inset-0 flex items-end justify-center  sm:mb-0 lg:pb-8">
          <p className="text-white text-center font-medium text-sm">
            Made with ❤️ & Cravitos Mithai by Kirana Club
          </p>
        </div>
      </footer>
    </div>
  );
}
