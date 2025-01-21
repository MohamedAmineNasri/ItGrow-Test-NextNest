"use client";

import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const IntroductionSection = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full py-[260px] h-auto lg:h-[596.81px]">
      <div className="flex flex-col items-center lg:items-start gap-[30px] w-full max-w-[1153px] h-auto lg:h-[496.81px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-[30px] w-full h-auto lg:h-[338.21px]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-[10px] px-[15px] w-full lg:max-w-[570px] h-auto lg:h-full">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="text-[48px] lg:text-[68px] font-jost font-light text-[#11204D] leading-[48px] lg:leading-[68px] tracking-[0.2px]">
                Hello
              </h1>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <h2 className="text-[48px] lg:text-[68px] font-jost font-light text-[#11204D] leading-[48px] lg:leading-[68px] tracking-[0.2px]">
                I’m Alycia Carey
              </h2>
            </div>
            <h3 className="text-[24px] lg:text-[36px] font-jost font-medium text-[#6138BD] leading-[32px] lg:leading-[47px] tracking-[0.2px]">
              Photographer
            </h3>
            <h3 className="text-[24px] lg:text-[36px] font-jost font-medium text-[#6138BD] opacity-70 leading-[32px] lg:leading-[47px] tracking-[0.2px]">
              Zoologist
            </h3>
            <h3 className="text-[24px] lg:text-[36px] font-jost font-medium text-[#6138BD] opacity-40 leading-[32px] lg:leading-[47px] tracking-[0.2px]">
              Writer
            </h3>
          </div>

          <div className="relative hidden lg:block w-[290px] h-[338px] overflow-hidden ml-auto">
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              showIndicators={true}
              interval={3000}
              className="rounded-[10px] w-full h-full"
            >
              <div className="w-full h-full">
                <Image
                  src="/sliderImage4.png"
                  alt="Photography Example 3"
                  width={290}
                  height={338}
                  className="rounded-[10px] object-cover"
                />
              </div>
              <div className="w-full h-full">
                <Image
                  src="/photography_img5.jpg.png"
                  alt="Photography Example 1"
                  width={290}
                  height={338}
                  className="rounded-[10px] object-cover"
                />
              </div>
              <div className="w-full h-full">
                <Image
                  src="/sliderImage2.png"
                  alt="Photography Example 2"
                  width={290}
                  height={338}
                  className="rounded-[10px] object-cover"
                />
              </div>
              <div className="w-full h-full">
                <Image
                  src="/sliderImage3.png"
                  alt="Photography Example 3"
                  width={290}
                  height={338}
                  className="rounded-[10px] object-cover"
                />
              </div>
            </Carousel>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-[1012px] h-auto lg:h-[128.6px]">
          <p className="text-[18px] lg:text-[24px] font-jost font-normal text-[#11204D]/[0.7] leading-[28px] lg:leading-[36px] tracking-[0.2px]">
            I help our clients create brands, build digital products and
            services, innovate, find opportunities and validate ideas.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-[20px] lg:gap-[6px] w-full h-auto lg:h-[56.6px]">
          <div className="flex flex-row items-center gap-[20px]">
            <p className="text-[15px] lg:text-[17px] font-jost font-medium text-[#11204D] leading-[25px] lg:leading-[31px] tracking-[0.2px]">
              Follow Me on
            </p>
            <div className="relative w-[60px] lg:w-[80px] h-[2px] bg-[#11204D]/[0.15] mt-[0.25px]"></div>
          </div>

          <div className="flex flex-row gap-[15.8px]">
            <div className="flex items-center justify-center w-[40px] lg:w-[55.8px] h-[40px] lg:h-[56.6px] bg-white border border-[#11204D]/[0.15] rounded-[10px]">
              <Image
                src="/insta.png"
                alt="Instagram"
                width={24.2}
                height={24.2}
              />
            </div>
            <div className="flex items-center justify-center w-[40px] lg:w-[55.8px] h-[40px] lg:h-[56.6px] bg-white border border-[#11204D]/[0.15] rounded-[10px]">
              <Image
                src="/facebook.png"
                alt="Facebook"
                width={24.2}
                height={24.2}
              />
            </div>
            <div className="flex items-center justify-center w-[40px] lg:w-[55.8px] h-[40px] lg:h-[56.6px] bg-white border border-[#11204D]/[0.15] rounded-[10px]">
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={24.2}
                height={24.2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;
