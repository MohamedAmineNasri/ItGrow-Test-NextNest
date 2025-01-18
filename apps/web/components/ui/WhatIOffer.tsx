import React from "react";
import Image from "next/image";

const WhatIOffer = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      <div className="flex flex-col items-center p-4 gap-[40px] w-full">
        {/* Header Section */}
        <div className="relative w-full max-w-[1140px] mx-auto h-auto flex flex-col items-start gap-[5px] isolate">
          <div className="absolute w-[60px] h-[60px] left-0 top-[-14.4px] bg-[#33e7af1a] rounded-full z-0"></div>
          <div className="flex flex-col items-start w-full">
            <h2 className="text-[#11204D] text-[24px] sm:text-[36px] font-playfair font-bold leading-[30px] sm:leading-[46px] tracking-[0.2px]">
              What I Offer
            </h2>
            <p className="text-[#11204D]/[0.35] text-[12px] sm:text-[14px] font-playfair font-bold leading-[20px] sm:leading-[24px] tracking-[0.2px]">
              Creative solutions to bring your vision to life
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex justify-center flex-col sm:flex-row w-full bg-white gap-6 sm:gap-8 px-4 sm:px-8">
          {/* Left Section */}
          <div className="flex flex-col justify-center items-start gap-[24px] w-full sm:w-[380px] md:basis-[380px]">
            <div className="flex flex-row items-center gap-[12px] h-[45px]">
              <p className="text-[18px] sm:text-[20px] md:text-[24px] font-medium leading-[28px] sm:leading-[30px] tracking-[0.2px] text-[#6138BD]">
                Food Photography
              </p>
              <div className="w-[96px] h-[2px] bg-[#6138BD]"></div>
            </div>

            <div className="flex flex-row items-center gap-[12px] h-[45px]">
              <p className="text-[18px] sm:text-[20px] md:text-[24px] font-medium leading-[28px] sm:leading-[30px] tracking-[0.2px] text-[#11204D]">
                Wedding Photoshoot
              </p>
              <div className="w-[96px] h-[2px] bg-[#11204D] opacity-0"></div>
            </div>

            <div className="flex flex-row items-center gap-[12px] h-[45px]">
              <p className="text-[18px] sm:text-[20px] md:text-[24px] font-medium leading-[28px] sm:leading-[30px] tracking-[0.2px] text-[#11204D]">
                Product Art
              </p>
              <div className="w-[96px] h-[2px] bg-[#11204D] opacity-0"></div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-center items-center gap-6 w-full sm:w-[760px] md:basis-[760px]">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/FoodImage.png"
                  alt="Food Photography Example"
                  width={247}
                  height={321}
                  className="rounded-[10px]"
                />
              </div>
              <div>
                <p className="text-[16px] sm:text-[17px] font-medium leading-[24px] sm:leading-[31px] tracking-[0.2px] text-[#11204D]">
                  Food Photography
                </p>
                <p className="text-[14px] sm:text-[16px] md:text-[17px] w-full sm:w-[357.91px] font-normal leading-[20px] sm:leading-[28px] md:leading-[31px] tracking-[0.2px] text-[#11204D]/[0.7]">
                  Transforming culinary creations into visual masterpieces, our
                  food photography captures the essence of flavor, texture, and
                  presentation. Perfect for restaurants, cookbooks, or food
                  brands looking to make an unforgettable impression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIOffer;
