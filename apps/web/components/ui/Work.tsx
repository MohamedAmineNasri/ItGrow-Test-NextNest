import React from "react";
import Image from "next/image";
import { getWorkImages } from "@/lib/work";

const Work = async () => {
  const photos = await getWorkImages();

  if (!photos || photos.length === 0) {
    return <p>No images available at the moment.</p>;
  }

  console.log(photos); // Check the structure of the photos

  return (
    <div className="flex flex-col items-center h-full px-4 sm:px-8 md:px-16">
      <div className="flex flex-col items-center p-0 gap-[40px] w-full max-w-[1140px]">
        <div className="flex flex-col items-center p-0 gap-2 w-full">
          <h2 className="font-playfair font-bold text-[24px] sm:text-[28px] md:text-[36px] leading-[1.2] text-[#11204D] text-center">
            My Work
          </h2>
          <p className="font-playfair font-bold text-[12px] sm:text-[14px] leading-[1.5] text-[#11204D]/[0.35] text-center">
            A Glimpse Into My Creative World
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {photos.map((photo, index) => (
            <Image
              key={index} // Added unique key
              src={photo.images[0]} // Using the first image from the 'images' array
              alt={`Work image ${index}`}
              width={255}
              height={297.5}
              className="rounded-[10px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
