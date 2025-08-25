import Image from "next/image";
import Link from "next/link";

export default function AartisPage() {
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
              Aartis Handbook
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

      {/* Main Content - Book Covers */}
      <main className="px-4 sm:px-6 lg:px-16 pb-24 sm:pb-28 lg:pb-32">
        <div className="max-w-6xl mx-auto">
          {/* Book Covers Section */}
          <div className="grid grid-cols-2 gap-8 lg:gap-12">
            {/* Left Book Cover - Sukh Karta Dukh Harta */}
            <Link
              href="/aartis/sukh-karta"
              className="text-center group cursor-pointer transform hover:scale-105 transition-transform duration-200"
            >
              <div className="mb-4">
                <Image
                  src="/book-sukh-harta.png"
                  alt="Sukh Karta Dukh Harta Book Cover"
                  width={400}
                  height={500}
                  className="w-full max-w-sm mx-auto h-auto shadow-2xl rounded-lg"
                  priority
                />
              </div>
              <h3 className="text-lg font-semibold text-black font-['Instrument_Serif']">
                Sukh Karta Dukh Harta
              </h3>
            </Link>

            {/* Right Book Cover - Ghalin Lotangan */}
            <Link
              href="/aartis/ghalin-lotangan"
              className="text-center group cursor-pointer transform hover:scale-105 transition-transform duration-200"
            >
              <div className="mb-4">
                <Image
                  src="/book-ghalin.png"
                  alt="Ghalin Lotangan Book Cover"
                  width={400}
                  height={500}
                  className="w-full max-w-sm mx-auto h-auto shadow-2xl rounded-lg"
                  priority
                />
              </div>
              <h3 className="text-lg font-semibold text-black  font-['Instrument_Serif']">
                Ghalin Lotangan
              </h3>
            </Link>
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
