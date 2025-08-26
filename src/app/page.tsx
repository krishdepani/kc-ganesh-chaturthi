"use client";

import Image from "next/image";
import Link from "next/link";
import ShlokaSection from "./components/ShlokaSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFEEE8]">
      {/* Header Section with Garlands and Main Content */}
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
          <div className="max-w-6xl mx-auto">
            {/* Main Content Row - Ganesh ji on left, everything else on right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
              {/* Left Side - Only Ganesh ji Image */}
              <div className="flex justify-center lg:justify-start mb-6 lg:mb-0">
                <Image
                  src="/ganeshji.png"
                  alt="Lord Ganesha"
                  width={400}
                  height={500}
                  className="w-64 sm:w-80 lg:w-96 h-auto max-w-full"
                  priority
                />
              </div>

              {/* Right Side - Logo, Title, Shloka, and Subscribe Button */}
              <div className="text-center lg:text-left">
                {/* Logo and Event Title in separate rows */}
                <div className="mb-4">
                  {/* Kirana Club Logo - First Row */}
                  <div className="flex justify-center lg:justify-start mb-4">
                    <Image
                      src="/kiranaclub.png"
                      alt="Kirana Club"
                      width={100}
                      height={100}
                      className="h-6 w-auto"
                    />
                  </div>

                  {/* Event Title - Second Row */}
                  <h1 className="text-3xl sm:text-5xl lg:text-5xl font-semibold text-[#D94F29] text-center lg:text-left leading-tight font-['Instrument_Serif']">
                    Ganesh Chaturthi 2025
                  </h1>
                </div>

                {/* Dynamic Shloka Section */}
                <ShlokaSection />

                {/* Subscribe Button */}
                <button
                  onClick={() =>
                    window.open("https://calendar.google.com/calendar/render?action=TEMPLATE&text=EVENT_TITLE&dates=START_DATE/END_DATE&details=DESCRIPTION&location=LOCATION", "_blank")
                  }
                  className="bg-[#D94F29] hover:bg-amber-800 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center mx-auto lg:mx-0 gap-2 text-base shadow-lg hover:shadow-xl mt-8"
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
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Cards Section */}
      <main className="px-4 sm:px-6 lg:px-16 pb-24 sm:pb-28 lg:pb-32">
        <div className="max-w-7xl mx-auto">
          {/* Three Main Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            {/* Schedule Card */}
            <Link
              href="/schedule"
              className="group cursor-pointer transform hover:scale-105 transition-transform duration-200"
            >
              <div className="  h-full relative overflow-hidden ">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/schedulecard.png"
                    alt="Schedule"
                    width={200}
                    height={150}
                    className="w-full h-auto max-w-full object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* Aartis Card */}
            <Link
              href="/aartis"
              className="group cursor-pointer transform hover:scale-105 transition-transform duration-200"
            >
              <div className="  h-full relative overflow-hidden ">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/aarticard.png"
                    alt="Aarti Book 2"
                    width={200}
                    height={150}
                    className="w-full h-auto max-w-full object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* Seek Advice Card */}
            <Link
              href="/advice"
              className="group cursor-pointer transform hover:scale-105 transition-transform duration-200"
            >
              <div className="h-full relative overflow-hidden ">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/advicecard.png"
                    alt="Seek Advice"
                    width={300}
                    height={200}
                    className="w-full h-auto max-w-full object-contain"
                    priority
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Photo Album Section */}
          <Link
            href="/photo-album"
            className="group cursor-pointer transform hover:scale-105 transition-transform duration-200"
          >
            <div className=" h-full relative overflow-hidden">
              <div className="flex items-center justify-center h-full">
                <Image
                  src="/photoalbumcard.png"
                  alt="Photo Album"
                  width={400}
                  height={250}
                  className="w-full h-auto max-w-full object-contain"
                  priority
                />
              </div>
            </div>
          </Link>
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
