"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

interface UploadResponse {
  success: boolean;
  url?: string;
  publicId?: string;
  message?: string;
}

interface ImagesResponse {
  success: boolean;
  urls: string[];
  message?: string;
}

export default function PhotoAlbumPage() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load images on component mount
  useEffect(() => {
    loadGallery();
  }, []);

  const loadGallery = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/images");
      const data: ImagesResponse = await response.json();

      if (data.success) {
        setImages(data.urls);
      } else {
        console.error("Failed to load images:", data.message);
      }
    } catch (error) {
      console.error("Failed to load gallery:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      setUploadMessage("");

      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const result: UploadResponse = await response.json();

      if (result.success) {
        setUploadMessage("Image uploaded successfully! 🎉");
        // Reload gallery to show new image
        setTimeout(() => {
          loadGallery();
          setUploadMessage("");
        }, 2000);
      } else {
        setUploadMessage(`Upload failed: ${result.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Upload failed:", error);
      setUploadMessage("Upload failed. Please try again.");
    } finally {
      setUploading(false);
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
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
              Photo Album
            </h1>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={triggerFileUpload}
                disabled={uploading}
                className="bg-[#C76F59] hover:bg-amber-800 disabled:bg-gray-400 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center gap-2 text-base shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
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
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {uploading ? "Uploading..." : "Upload New Photo"}
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

            {/* Hidden file input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />

            {/* Upload message */}
            {uploadMessage && (
              <div
                className={`text-center p-3 rounded-lg mb-6 ${
                  uploadMessage.includes("successfully")
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : "bg-red-100 text-red-800 border border-red-200"
                }`}
              >
                {uploadMessage}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content - Photo Gallery */}
      <main className="px-4 sm:px-6 lg:px-16 pb-24 sm:pb-28 lg:pb-32">
        <div className="max-w-6xl mx-auto">
          {/* Gallery Section */}
          <div className="space-y-8">
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C76F59] mx-auto mb-4"></div>
                <p className="text-gray-600 text-lg">
                  Loading your memories...
                </p>
              </div>
            ) : images.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg
                    className="w-24 h-24 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No Photos Yet
                </h3>
                <p className="text-gray-500">
                  Upload your first photo to start building your Ganesh
                  Chaturthi memories!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((url, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer transform hover:scale-105 transition-transform duration-200"
                  >
                    <div className="bg-white rounded-lg p-2 shadow-lg border border-gray-200">
                      <div className="relative aspect-square overflow-hidden rounded-lg">
                        <Image
                          src={url}
                          alt={`Photo ${index + 1}`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-200"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
        <div className="absolute inset-0 flex items-end justify-center   lg:pb-8">
          <p className="text-white text-center font-medium text-sm">
            Made with ❤️ & Cravitos Mithai by Kirana Club
          </p>
        </div>
      </footer>
    </div>
  );
}
