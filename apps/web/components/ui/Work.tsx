import React from "react";
import Image from "next/image";

const Work = () => {
  return (
    <div className="flex flex-col items-center h-full px-4 sm:px-8 md:px-16 "> 
      <div className="flex flex-col items-center p-0 gap-[40px] w-full max-w-[1140px]">
        <div className="flex flex-col items-center p-0 gap-2 w-full">
          <h2 className="font-playfair font-bold text-[24px] sm:text-[28px] md:text-[36px] leading-[1.2] text-[#11204D] text-center">
            My Work
          </h2>
          <p className="font-playfair font-bold text-[12px] sm:text-[14px] leading-[1.5] text-[#11204D]/[0.35] text-center">
            A Glimpse Into My Creative World
          </p>
        </div>

        <div className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:h-[1200px] justify-items-center">
          {/* Image components go here */}
          <Image
            src={`/photography_img4.jpg.png`}
            alt={`photography_img4`}
            width={255}
            height={297.5}
            className="lg:absolute lg:left-[15px] lg:right-[870px] lg:top-[0] rounded-[10px] opacity-0 hidden lg:block"
          />

          <Image
            src={`/photography_img11.jpg.png`}
            alt={`photography_img11`}
            width={255}
            height={245}
            className="lg:absolute lg:left-[300px] lg:right-[585px] lg:top-[0] rounded-[10px] opacity-0 hidden lg:block"
          />

          <Image
            src={`/photography_img5.jpg.png`}
            alt={`photography_img5`}
            width={255}
            height={297.5}
            className="lg:absolute lg:left-[585px] lg:right-[300px] lg:top-[0] rounded-[10px]"
          />

          <Image
            src={`/photography_img12.jpg.png`}
            alt={`photography_img12`}
            width={255}
            height={255}
            className="lg:absolute lg:left-[870px] lg:right-[15px] lg:top-[0] rounded-[10px]"
          />

          <Image
            src={`/photography_img13.jpg.png`}
            alt={`photography_img13`}
            width={255}
            height={255}
            className="lg:absolute lg:left-[15px] lg:right-[870px] lg:top-[327.5px] rounded-[10px]"
          />

          <Image
            src={`/photography_img8.jpg.png`}
            alt={`photography_img8.jpg`}
            width={255}
            height={297.5}
            className="lg:absolute lg:left-[300px] lg:right-[585px] lg:top-[285px] rounded-[10px]"
          />

          <Image
            src={`/photography_img7.jpg.png`}
            alt={`photography_img7`}
            width={255}
            height={297.5}
            className="lg:absolute lg:left-[585px] lg:right-[300px] lg:top-[327.5px] rounded-[10px]"
          />

          <Image
            src={`/photography_img3.jpg.png`}
            alt={`photography_img3.jpg.png`}
            width={255}
            height={297.5}
            className="lg:absolute lg:left-[870px] lg:right-[15px] lg:top-[327.5px] rounded-[10px]"
          />

          <Image
            src={`/photography_img1.jpg.png`}
            alt={`photography_img1.jpg.png`}
            width={255}
            height={297.5}
            className="lg:absolute lg:left-[15px] lg:right-[870px] lg:top-[612.5px] rounded-[10px]"
          />

          <Image
            src={`/photography_img14.jpg.png`}
            alt={`photography_img14.jpg.png`}
            width={255}
            height={255}
            className="lg:absolute lg:left-[300px] lg:right-[585px] lg:top-[612.5px] rounded-[10px]"
          />

          <Image
            src={`/photography_img9.jpg.png`}
            alt={`photography_img9.jpg.png`}
            width={255}
            height={297.5}
            className="lg:absolute lg:left-[585px] lg:right-[300px] lg:top-[655px] rounded-[10px] opacity-0 hidden lg:block"
          />

          <Image
            src={`/photography_img10.jpg.png`}
            alt={`photography_img10.jpg.png`}
            width={255}
            height={297.5}
            className="lg:absolute lg:left-[870px] lg:right-[15px] lg:top-[612.5px] rounded-[10px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
