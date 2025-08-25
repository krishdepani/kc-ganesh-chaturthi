import Image from "next/image";
import Link from "next/link";

export default function SukhKartaPage() {
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
              <Link href="/aartis">
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

      {/* Main Content - Aarti Card */}
      <main className="px-4 sm:px-6 lg:px-16 pb-24 sm:pb-28 lg:pb-32">
        <div className="max-w-4xl mx-auto">
          {/* Aarti Display Card */}
          <div className="bg-white border-2 border-[#C76F59] rounded-lg p-8 shadow-xl relative">
            {/* Aarti Title */}
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#C76F59] text-center mb-8 font-['Instrument_Serif']">
              Sukh Karta Dukh Harta
            </h2>

            {/* Decorative Diya on Right - Hidden on Mobile */}
            <div className="hidden sm:block absolute top-0 right-4">
              <Image
                src="/diya.png"
                alt="Decorative Diya"
                width={120}
                height={120}
                className="w-16 h-16 sm:h-24 lg:h-62 opacity-80"
              />
            </div>

            {/* Aarti Text */}
            <div className="space-y-6 mb-8">
              <div className="text-center">
                <p className="text-lg text-gray-800 ">
                  सुखकर्ता दुःखहर्ता वर्ता विघ्नची ||
                </p>
                <p className="text-lg text-gray-800 font-medium">
                  Sukhkarta Dukhharta Varta Vighnachi ||
                </p>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-800 ">
                  नूर्वी पूर्वी प्रेम कृपा जयची ||
                </p>
                <p className="text-lg text-gray-800 font-medium">
                  Nurvi Purvi Prem Krupa Jayachi ||
                </p>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-800 ">
                  सर्वांगी सुंदर उटी शेंदुराची ||
                </p>
                <p className="text-lg text-gray-800 font-medium">
                  Sarvangi Sundar Uti Shendurachi ||
                </p>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-800 ">
                  कांती झळके माळ मुकुटफळांची ||
                </p>
                <p className="text-lg text-gray-800 font-medium">
                  Kanti Jhalke Mal Mukataphalaanchi ||
                </p>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-800">
                  जयदेव जयदेव जय मंगल मूर्ती ||
                </p>
                <p className="text-lg text-gray-800 font-medium">
                  Jaidev Jaidev Jai Mangal Murti ||
                </p>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-800 ">
                  दर्शन मात्रे मनः कामना फुरती ||
                </p>
                <p className="text-lg text-gray-800 font-medium">
                  Darshan Maatre Man: Kaamna Phurti ||
                </p>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-800 ">
                  रत्नखचित फरा तुझ गौरीकुमरा ||
                </p>
                <p className="text-lg text-gray-800 font-medium">
                  Ratnakhachit Phara Tujh Gaurikumra ||
                </p>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-800 ">
                  चंदनाची उटी कुंकुमकेशरा ||
                </p>
                <p className="text-lg text-gray-800 font-medium">
                  Chandanaachi Uti Kumkumkeshara ||
                </p>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-800">
                  हिरेजडित मुकुट शोभतो बरा ||
                </p>
                <p className="text-lg text-gray-800 font-medium">
                  Hirejadit Mukut Shobhato Bara ||
                </p>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-800 ">
                  रुंजुणती नुपुरे चरणी घागरिया ||
                </p>
                <p className="text-lg text-gray-800 font-medium">
                  Runjhunati Nupure Charani Ghagriya ||
                </p>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-800 ">
                  जयदेव जयदेव जय मंगल मूर्ती ||
                </p>
                <p className="text-lg text-gray-800 font-medium">
                  Jaidev Jaidev Jai Mangal Murti ||
                </p>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-800 ">
                  लंबोदर पीतांबर फणीवरवंदना ||
                </p>
                <p className="text-lg text-gray-800 font-medium">
                  Lambodar Pitaambar Phanivarvandana ||
                </p>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-800 ">
                  सरळ सोंड वक्रतुंड त्रिनयना ||
                </p>
                <p className="text-lg text-gray-800 font-medium">
                  Saral Sond Vakratunda Trinayana ||
                </p>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-800 ">
                  दास रामाचा वट पाहे सदना ||
                </p>
                <p className="text-lg text-gray-800 font-medium">
                  Das Ramacha Vat Pahe Sadana ||
                </p>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-800">
                  संकटी पावावे निर्वाणी रक्षावे सुरवरवंदना ||
                </p>
                <p className="text-lg text-gray-800 font-medium">
                  Sankati Pavave Nirvani Rakshave Survarvandana ||
                </p>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-800 ">
                  जयदेव जयदेव जय मंगल मूर्ती ||
                </p>
                <p className="text-lg text-gray-800 font-medium">
                  Jaidev Jaidev Jai Mangal Murti ||
                </p>
              </div>
            </div>

            {/* Bottom Section with Modak Bowl and Button */}
            <div className="flex items-center justify-between mb-16">
              {/* Modak Bowl (Laddo Image) */}
              <div className="flex items-center">
                <Image
                  src="/laddo.png"
                  alt="Modak Bowl"
                  width={120}
                  height={120}
                  className="w-20 h-20 sm:w-28 sm:h-28 mr-4 opacity-90"
                />
              </div>

              {/* Open Ghalin Lotangan Button */}
              <Link href="/aartis/ghalin-lotangan">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-lg font-semibold transition-colors duration-200 text-xs sm:text-sm">
                  Open Ghalin Lotangan
                </button>
              </Link>
            </div>

            {/* Decorative Flowers at Bottom */}
            <div className="absolute bottom-0 left-0 right-0">
              <Image
                src="/flowerbottom.png"
                alt="Decorative Flowers"
                width={400}
                height={100}
                className="w-full h-20 opacity-90"
              />
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
        <div className="absolute inset-0 flex items-end justify-center sm:mb-0 lg:pb-8">
          <p className="text-white text-center font-medium text-sm">
            Made with ❤️ & Cravitos Mithai by Kirana Club
          </p>
        </div>
      </footer>
    </div>
  );
}
