import React from "react";
import Image from "next/image";
import { getWorkImages } from "@/lib/work";

const Work = async () => {
  const photos = await getWorkImages();

  if (!photos || photos.length === 0) {
    return <p>No images available at the moment.</p>;
  }

  return (
    <div className="flex flex-col items-center h-full px-4 sm:px-8 md:px-16 py-20">
      <div className="flex flex-col items-center p-0 gap-[40px] w-full max-w-[1140px]">
      <div className="relative flex flex-col items-center p-0 gap-2 w-full">
        <div className="absolute w-[60px] h-[60px] left-[474px] top-[-9px] bg-[rgba(51,231,175,0.1)] rounded-[30px] z-0"></div>
          <h2 className="font-playfair font-bold text-[24px] sm:text-[28px] md:text-[36px] leading-[1.2] text-[#11204D] text-center">
            My Work
          </h2>
          <p className="font-playfair font-bold text-[12px] sm:text-[14px] leading-[1.5] text-[#11204D]/[0.35] text-center">
            A Glimpse Into My Creative World
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div className="grid gap-4" key={index}>
              {photo.images.map((image, imgIndex) => (
                <div key={imgIndex}>
                  <Image
                    src={image}
                    alt={`Work image ${index}-${imgIndex}`}
                    width={255}
                    height={297.5}
                    className="h-auto max-w-full rounded-lg "
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
