"use client"
import React, { useState } from "react";
import Image from "next/image";

const WhatIOffer = () => {
  const [selectedOption, setSelectedOption] = useState("Food Photography");

  const renderContent = () => {
    switch (selectedOption) {
      case "Food Photography":
        return (
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
        );
      case "Wedding Photoshoot":
        return (
          <div className="flex flex-col justify-center items-center gap-6 w-full sm:w-[760px] md:basis-[760px]">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/WeddingImage.png"
                  alt="Wedding Photoshoot Example"
                  width={247}
                  height={321}
                  className="rounded-[10px]"
                />
              </div>
              <div>
                <p className="text-[16px] sm:text-[17px] font-medium leading-[24px] sm:leading-[31px] tracking-[0.2px] text-[#11204D]">
                  Wedding Photoshoot
                </p>
                <p className="text-[14px] sm:text-[16px] md:text-[17px] w-full sm:w-[357.91px] font-normal leading-[20px] sm:leading-[28px] md:leading-[31px] tracking-[0.2px] text-[#11204D]/[0.7]">
                  Relive your special day through stunning, heartfelt imagery.
                  From candid moments to elegant portraits, our wedding
                  photography preserves every precious memory in timeless
                  detail.
                </p>
              </div>
            </div>
          </div>
        );
      case "Product Art":
        return (
          <div className="flex flex-col justify-center items-center gap-6 w-full sm:w-[760px] md:basis-[760px]">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/ProductArtImage.png"
                  alt="Product Art Example"
                  width={247}
                  height={321}
                  className="rounded-[10px]"
                />
              </div>
              <div>
                <p className="text-[16px] sm:text-[17px] font-medium leading-[24px] sm:leading-[31px] tracking-[0.2px] text-[#11204D]">
                  Product Art
                </p>
                <p className="text-[14px] sm:text-[16px] md:text-[17px] w-full sm:w-[357.91px] font-normal leading-[20px] sm:leading-[28px] md:leading-[31px] tracking-[0.2px] text-[#11204D]/[0.7]">
                  Bring your products to life with striking, creative
                  photography that highlights their uniqueness. Whether for
                  e-commerce, advertising, or branding, we deliver visuals that
                  captivate and inspire.
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col w-full bg-white">
      <div className="flex flex-col items-center p-4 gap-[40px] w-full">
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

        <div className="flex justify-center flex-col sm:flex-row w-full bg-white gap-6 sm:gap-8 px-4 sm:px-8">
          <div className="flex flex-col justify-center items-start gap-[24px] w-full sm:w-[380px] md:basis-[380px]">
            <div
              className={`flex flex-row items-center gap-[12px] h-[45px] cursor-pointer ${
                selectedOption === "Food Photography"
                  ? "text-[#6138BD]"
                  : "text-[#11204D]"
              }`}
              onClick={() => setSelectedOption("Food Photography")}
            >
              <p className="text-[18px] sm:text-[20px] md:text-[24px] font-medium leading-[28px] sm:leading-[30px] tracking-[0.2px]">
                Food Photography
              </p>
              <div
                className={`w-[96px] h-[2px] ${
                  selectedOption === "Food Photography"
                    ? "bg-[#6138BD]"
                    : "bg-[#11204D] opacity-0"
                }`}
              ></div>
            </div>

            <div
              className={`flex flex-row items-center gap-[12px] h-[45px] cursor-pointer ${
                selectedOption === "Wedding Photoshoot"
                  ? "text-[#6138BD]"
                  : "text-[#11204D]"
              }`}
              onClick={() => setSelectedOption("Wedding Photoshoot")}
            >
              <p className="text-[18px] sm:text-[20px] md:text-[24px] font-medium leading-[28px] sm:leading-[30px] tracking-[0.2px]">
                Wedding Photoshoot
              </p>
              <div
                className={`w-[96px] h-[2px] ${
                  selectedOption === "Wedding Photoshoot"
                    ? "bg-[#6138BD]"
                    : "bg-[#11204D] opacity-0"
                }`}
              ></div>
            </div>

            <div
              className={`flex flex-row items-center gap-[12px] h-[45px] cursor-pointer ${
                selectedOption === "Product Art"
                  ? "text-[#6138BD]"
                  : "text-[#11204D]"
              }`}
              onClick={() => setSelectedOption("Product Art")}
            >
              <p className="text-[18px] sm:text-[20px] md:text-[24px] font-medium leading-[28px] sm:leading-[30px] tracking-[0.2px]">
                Product Art
              </p>
              <div
                className={`w-[96px] h-[2px] ${
                  selectedOption === "Product Art"
                    ? "bg-[#6138BD]"
                    : "bg-[#11204D] opacity-0"
                }`}
              ></div>
            </div>
          </div>

          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default WhatIOffer;
