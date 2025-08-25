import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} from "@/app/lib/constants";
import { ImagesResponse } from "@/app/lib/types";

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export async function GET(): Promise<NextResponse<ImagesResponse>> {
  try {
    const result = await cloudinary.api.resources({
      resource_type: "image",
      max_results: 500,
    });

    const urls: string[] = result.resources.map(
      (resource: { secure_url: string }) => resource.secure_url
    );
    const randomizedUrls = shuffleArray(urls);

    return NextResponse.json({
      success: true,
      urls: randomizedUrls,
    });
  } catch (error) {
    console.error("Images fetch error:", error);
    return NextResponse.json(
      {
        success: false,
        urls: [],
        message: "Failed to fetch images",
      },
      { status: 500 }
    );
  }
}
