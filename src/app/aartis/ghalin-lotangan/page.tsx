import Image from "next/image";
import Link from "next/link";

export default function GhalinLotanganPage() {
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
              Ghalin Lotangan
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
                <p className="text-lg text-gray-800">
                  घालीन लोटांगण, वंदीन चरण ।
                </p>
                <p className="text-lg text-gray-800 font-medium">
                  Ghalin lotangan vandin charan ।
                </p>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-800">
                  डोळ्यांनी पाहीन रुप तुझें ।
                </p>
                <p className="text-lg text-gray-800 font-medium">
                  Dolyani pahin rup tujhe ।
                </p>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-800">
                  प्रेमें आलिंगिन, आनंदे पूजिन ।
                </p>
                <p className="text-lg text-gray-800 font-medium">
                  Preme alingin anande pujin ।
                </p>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-800">
                  भावें ओवाळीन म्हणे नामा ॥१॥
                </p>
                <p className="text-lg text-gray-800 font-medium">
                  Bhave ovaleen mhane nama ॥1॥
                </p>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-800">
                  त्वमेव माता च पिता त्वमेव ।
                </p>
                <p className="text-lg text-gray-800 font-medium">
                  Twamev mata cha pita twamev ।
                </p>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-800">
                  त्वमेव बंधुक्ष्च सखा त्वमेव ।
                </p>
                <p className="text-lg text-gray-800 font-medium">
                  Twamev bandhusch sakha twamev ।
                </p>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-800">
                  त्वमेव विध्या द्रविणं त्वमेव ।
                </p>
                <p className="text-lg text-gray-800 font-medium">
                  Twamev vidya dravinam twamev ।
                </p>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-800">
                  त्वमेव सर्वं मम देवदेव ॥२॥
                </p>
                <p className="text-lg text-gray-800 font-medium">
                  Twamev sarwam mam dev dev ॥2॥
                </p>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-800">
                  कायेन वाचा मनसेंद्रीयेव्रा, बुद्धयात्मना वा प्रकृतिस्वभावात ।
                </p>
                <p className="text-lg text-gray-800 font-medium">
                  Kayena vacha manasendriyenva, buddhayatmna va
                  prakrutiswabhavat ।
                </p>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-800">
                  करोमि यध्य्त सकलं परस्मे, नारायणायेति समर्पयामि ॥३॥
                </p>
                <p className="text-lg text-gray-800 font-medium">
                  Karomi yadhyat sakalam parasmai, Narayanayeti samarpayami ॥3॥
                </p>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-800">
                  अच्युतं केशवं रामनारायणं कृष्णदामोदरं वासुदेवं भजे ।
                </p>
                <p className="text-lg text-gray-800 font-medium">
                  Achyutam Keshavam Ramnarayanam, Krushnadamodaram Vasudevam
                  bhaje ।
                </p>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-800">
                  श्रीधरं माधवं गोपिकावल्लभं, जानकीनायकं रामचंद्र भजे ॥४॥
                </p>
                <p className="text-lg text-gray-800 font-medium">
                  Shridharam Madhavam Gopikavallabham, Janaki nayakam Ramchandra
                  bhaje ॥4॥
                </p>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-800">
                  हरे राम हरे राम, राम राम हरे हरे ।
                </p>
                <p className="text-lg text-gray-800 font-medium">
                  Hare Ram hare Ram, Ram Ram hare hare ।
                </p>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-800">
                  हरे कृष्ण हरे कृष्ण, कृष्ण कृष्ण हरे हरे ।
                </p>
                <p className="text-lg text-gray-800 font-medium">
                  Hare Krishna hare Krishna, Krishna Krishna hare hare ।
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

              {/* Open Sukh Karta Button */}
              <Link href="/aartis/sukh-karta">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-lg font-semibold transition-colors duration-200 text-xs sm:text-sm">
                  Open Sukh Karta
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
        <div className="absolute inset-0 flex items-end justify-center  sm:mb-0 lg:pb-8">
          <p className="text-white text-center font-medium text-sm">
            Made with ❤️ & Crativos Mithai by Kirana Club
          </p>
        </div>
      </footer>
    </div>
  );
}
