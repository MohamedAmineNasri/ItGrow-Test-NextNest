import React from "react";
import Image from "next/image";

const Pricing = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[48px] w-full bg-[#F7F8FA] h-[851.8px]">
      <div className="flex flex-col items-center p-0 gap-2 w-full">
        <h2 className="font-playfair font-bold text-[24px] sm:text-[28px] md:text-[36px] leading-[1.2] text-[#11204D] text-center">
          Plans & Pricing
        </h2>
        <p className="font-playfair font-bold text-[12px] sm:text-[14px] leading-[1.5] text-[#11204D]/[0.35] text-center">
          Tailored Packages to Fit Your Vision
        </p>
      </div>
      <div className="flex flex-row items-start justify-center p-0   gap-[30px]  ">
        <div className="flex flex-col items-center px-[40px] py-[30px] gap-[25px ] bg-[#FFFFFF] rounded-md w-[350px] h-[628.8px] ">
          <Image
            src={`/CameraIcon.png`}
            alt={`Camera Icon`}
            width={48.2}
            height={48}
            className="rounded-[10px]"
          />
          <p className="w-[157px] h-[32px] font-jost font-medium text-[24px] leading-[31px] flex items-center text-center tracking-[0.2px] text-[#11204D] mt-10">
            Silver Package
          </p>
          <div className="flex flex-row items-center px-0 py-[40px]    ">
            <p className="w-[25.62px] font-jost font-medium text-[42px] leading-[74px] flex items-center text-center tracking-[0.2px] text-[#11204D]">
              $
            </p>

            <p className="w-[84.1px]  font-jost font-medium text-[68px] leading-[74px] flex items-center text-center tracking-[0.2px] text-[#11204D]">
              99
            </p>
          </div>
          <p className="w-[69px] h-[31px] font-jost font-medium text-[17px] leading-[31px] flex items-center text-center tracking-[0.2px] text-[#11204D]">
            Includes:
          </p>
          <div className="flex flex-col justify-center items-center p-0 gap-[10px] ">
            <p className=" font-jost font-normal text-[17px] leading-[31px] flex items-center text-center tracking-[0.2px] text-[#11204D]/[0.7]">
              1 Hour Photography
            </p>
            <p className=" font-jost font-normal text-[17px] leading-[31px] flex items-center text-center tracking-[0.2px] text-[#11204D]/[0.7]">
              60 - 100 images / shoot
            </p>
            <p className=" font-jost font-normal text-[17px] leading-[31px] flex items-center text-center tracking-[0.2px] text-[#11204D]/[0.7]">
              Password protected gallery on
            </p>
            <p className=" font-jost font-normal text-[17px] leading-[31px] flex items-center text-center tracking-[0.2px] text-[#11204D]/[0.7]">
              personalized website
            </p>
          </div>
          <button className=" h-[55.6px] bg-[#11204D] border border-[#11204D] rounded-[10px] flex items-center justify-center p-[15.8px_30.8px] mt-5">
            <span className=" h-[24px] font-jost font-medium text-[17px] leading-[24px] text-center tracking-[0.2px] text-white">
              Contact Me
            </span>
          </button>
        </div>
        <div className="flex flex-col items-center px-[40px] py-[30px] gap-[25px ] bg-[#6138BD33] rounded-md w-[350px] h-[628.8px] shadow-[0px_8px_12px_rgba(97,_56,_189,_0.2)] ">
          <Image
            src={`/CamerIcon2.png`}
            alt={`Camera Icon`}
            width={48.2}
            height={48}
            className="rounded-[10px]"
          />
          <p className="w-[157px] h-[32px] font-jost font-medium text-[24px] leading-[31px] flex items-center text-center tracking-[0.2px] text-[#11204D] mt-10">
            Silver Package
          </p>
          <div className="flex flex-row items-center px-0 py-[40px]    ">
            <p className="w-[25.62px] font-jost font-medium text-[42px] leading-[74px] flex items-center text-center tracking-[0.2px] text-[#6138BD]">
              $
            </p>

            <p className="w-[84.1px]  font-jost font-medium text-[68px] leading-[74px] flex items-center text-center tracking-[0.2px] text-[#6138BD]">
              199
            </p>
          </div>
          <p className="w-[69px] h-[31px] font-jost font-medium text-[17px] leading-[31px] flex items-center text-center tracking-[0.2px] text-[#11204D]">
            Includes:
          </p>
          <div className="flex flex-col justify-center items-center p-0 gap-[10px] ">
            <p className=" font-jost font-normal text-[17px] leading-[31px] flex items-center text-center tracking-[0.2px] text-[#11204D]/[0.7]">
              1 Hour Photography
            </p>
            <p className=" font-jost font-normal text-[17px] leading-[31px] flex items-center text-center tracking-[0.2px] text-[#11204D]/[0.7]">
              60 - 100 images / shoot
            </p>
            <p className=" font-jost font-normal text-[17px] leading-[31px] flex items-center text-center tracking-[0.2px] text-[#11204D]/[0.7]">
              Password protected gallery on
            </p>
            <p className=" font-jost font-normal text-[17px] leading-[31px] flex items-center text-center tracking-[0.2px] text-[#11204D]/[0.7]">
              personalized website
            </p>
          </div>
          <button className=" h-[55.6px] bg-[#6138BD] border border-[#6138BD] rounded-[10px] flex items-center justify-center p-[15.8px_30.8px] mt-5">
            <span className=" h-[24px] font-jost font-medium text-[17px] leading-[24px] text-center tracking-[0.2px] text-white">
              Contact Me
            </span>
          </button>
        </div>
        <div className="flex flex-col items-center px-[40px] py-[30px] gap-[25px ] bg-[#FFFFFF] rounded-md w-[350px] h-[628.8px] ">
          <Image
            src={`/CaneraIcon3.png`}
            alt={`Camera Icon`}
            width={48.2}
            height={48}
            className="rounded-[10px]"
          />
          <p className="w-[157px] h-[32px] font-jost font-medium text-[24px] leading-[31px] flex items-center text-center tracking-[0.2px] text-[#11204D] mt-10">
            Silver Package
          </p>
          <div className="flex flex-row items-center px-0 py-[40px]    ">
            <p className="w-[25.62px] font-jost font-medium text-[42px] leading-[74px] flex items-center text-center tracking-[0.2px] text-[#11204D]">
              $
            </p>

            <p className="w-[84.1px]  font-jost font-medium text-[68px] leading-[74px] flex items-center text-center tracking-[0.2px] text-[#11204D]">
              99
            </p>
          </div>
          <p className="w-[69px] h-[31px] font-jost font-medium text-[17px] leading-[31px] flex items-center text-center tracking-[0.2px] text-[#11204D]">
            Includes:
          </p>
          <div className="flex flex-col justify-center items-center p-0 gap-[10px] ">
            <p className=" font-jost font-normal text-[17px] leading-[31px] flex items-center text-center tracking-[0.2px] text-[#11204D]/[0.7]">
              1 Hour Photography
            </p>
            <p className=" font-jost font-normal text-[17px] leading-[31px] flex items-center text-center tracking-[0.2px] text-[#11204D]/[0.7]">
              60 - 100 images / shoot
            </p>
            <p className=" font-jost font-normal text-[17px] leading-[31px] flex items-center text-center tracking-[0.2px] text-[#11204D]/[0.7]">
              Password protected gallery on
            </p>
            <p className=" font-jost font-normal text-[17px] leading-[31px] flex items-center text-center tracking-[0.2px] text-[#11204D]/[0.7]">
              personalized website
            </p>
          </div>
          <button className=" h-[55.6px] bg-[#11204D] border border-[#11204D] rounded-[10px] flex items-center justify-center p-[15.8px_30.8px] mt-5">
            <span className=" h-[24px] font-jost font-medium text-[17px] leading-[24px] text-center tracking-[0.2px] text-white">
              Contact Me
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
