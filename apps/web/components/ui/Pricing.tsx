import React from "react";
import Image from "next/image";

const Pricing = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[48px] w-full bg-[#F7F8FA] py-8">
      <div className="flex flex-col items-center gap-2 w-full px-4">
        <h2 className="font-playfair font-bold text-[24px] sm:text-[28px] md:text-[36px] leading-[1.2] text-[#11204D] text-center">
          Plans & Pricing
        </h2>
        <p className="font-playfair font-bold text-[12px] sm:text-[14px] md:text-[16px] leading-[1.5] text-[#11204D]/[0.35] text-center">
          Tailored Packages to Fit Your Vision
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[30px] px-4 w-full justify-items-center">
        <div className="flex flex-col items-center px-[20px] py-[30px] gap-[25px] bg-[#FFFFFF] rounded-md max-w-xs w-full">
          <Image
            src={`/CameraIcon.png`}
            alt={`Camera Icon`}
            width={48.2}
            height={48}
            className="rounded-[10px]"
          />
          <p className="font-jost font-medium text-[24px] sm:text-[22px] md:text-[26px] leading-[31px] text-[#11204D] mt-10 text-center">
            Silver Package
          </p>
          <div className="flex items-center px-0 py-[40px]">
            <p className="font-jost font-medium text-[42px] text-[#11204D]">$</p>
            <p className="font-jost font-medium text-[68px] text-[#11204D]">99</p>
          </div>
          <p className="font-jost font-medium text-[17px] text-[#11204D]">
            Includes:
          </p>
          <div className="flex flex-col justify-center items-center gap-[10px]">
            <p className="font-jost text-[17px] text-[#11204D]/[0.7]">1 Hour Photography</p>
            <p className="font-jost text-[17px] text-[#11204D]/[0.7]">60 - 100 images / shoot</p>
            <p className="font-jost text-[17px] text-[#11204D]/[0.7]">Password protected gallery</p>
            <p className="font-jost text-[17px] text-[#11204D]/[0.7]">Personalized website</p>
          </div>
          <button className="h-[55.6px] bg-[#11204D] border border-[#11204D] rounded-[10px] flex items-center justify-center px-8 mt-5">
            <span className="font-jost font-medium text-[17px] text-white">
              Contact Me
            </span>
          </button>
        </div>

        {/* Repeat the same structure for other packages */}
        <div className="flex flex-col  items-center px-[20px] py-[30px] gap-[25px] bg-[#6138BD33] rounded-md max-w-xs w-full shadow-[0px_8px_12px_rgba(97,_56,_189,_0.2)]">
          <Image
            src={`/CamerIcon2.png`}
            alt={`Camera Icon`}
            width={48.2}
            height={48}
            className="rounded-[10px]"
          />
          <p className="font-jost font-medium text-[24px] sm:text-[22px] md:text-[26px] leading-[31px] text-[#11204D] mt-10 text-center">
            Gold Package
          </p>
          <div className="flex items-center px-0 py-[40px]">
            <p className="font-jost font-medium text-[42px] text-[#6138BD]">$</p>
            <p className="font-jost font-medium text-[68px] text-[#6138BD]">199</p>
          </div>
          <p className="font-jost font-medium text-[17px] text-[#11204D]">
            Includes:
          </p>
          <div className="flex flex-col justify-center items-center gap-[10px]">
            <p className="font-jost text-[17px] text-[#11204D]/[0.7]">1 Hour Photography</p>
            <p className="font-jost text-[17px] text-[#11204D]/[0.7]">60 - 100 images / shoot</p>
            <p className="font-jost text-[17px] text-[#11204D]/[0.7]">Password protected gallery</p>
            <p className="font-jost text-[17px] text-[#11204D]/[0.7]">Personalized website</p>
          </div>
          <button className="h-[55.6px] bg-[#6138BD] border border-[#6138BD] rounded-[10px] flex items-center justify-center px-8 mt-5">
            <span className="font-jost font-medium text-[17px] text-white">
              Contact Me
            </span>
          </button>
        </div>

        <div className="flex flex-col items-center px-[20px] py-[30px] gap-[25px] bg-[#FFFFFF] rounded-md max-w-xs w-full ">
          <Image
            src={`/CaneraIcon3.png`}
            alt={`Camera Icon`}
            width={48.2}
            height={48}
            className="rounded-[10px]"
          />
          <p className="font-jost font-medium text-[24px] sm:text-[22px] md:text-[26px] leading-[31px] text-[#11204D] mt-10 text-center">
            Platinum Package
          </p>
          <div className="flex items-center px-0 py-[40px]">
            <p className="font-jost font-medium text-[42px] text-[#11204D]">$</p>
            <p className="font-jost font-medium text-[68px] text-[#11204D]">299</p>
          </div>
          <p className="font-jost font-medium text-[17px] text-[#11204D]">
            Includes:
          </p>
          <div className="flex flex-col justify-center items-center gap-[10px]">
            <p className="font-jost text-[17px] text-[#11204D]/[0.7]">1 Hour Photography</p>
            <p className="font-jost text-[17px] text-[#11204D]/[0.7]">60 - 100 images / shoot</p>
            <p className="font-jost text-[17px] text-[#11204D]/[0.7]">Password protected gallery</p>
            <p className="font-jost text-[17px] text-[#11204D]/[0.7]">Personalized website</p>
          </div>
          <button className="h-[55.6px] bg-[#11204D] border border-[#11204D] rounded-[10px] flex items-center justify-center px-8 mt-5">
            <span className="font-jost font-medium text-[17px] text-white">
              Contact Me
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
