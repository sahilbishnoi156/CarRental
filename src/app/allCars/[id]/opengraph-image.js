/* eslint-disable @next/next/no-img-element */
import { carData } from "@/Components/CarsData/CarsData";
import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({ params }) {
  const data = carData[params.id - 1];
  return new ImageResponse(
    (
      <img
        alt="not found"
        src={data?.imageUrl}
        className="h-full w-full object-cover"
      />
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
