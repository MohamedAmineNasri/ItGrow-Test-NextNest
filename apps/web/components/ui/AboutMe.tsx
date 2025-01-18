import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="flex flex-col justify-center items-center py-[50px] px-[20px] sm:px-[50px] md:px-[100px] lg:px-[260px] w-full h-auto bg-[#F7F8FA]">
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-[40px] w-full md:w-[1400px] h-auto md:h-[566px]">
        {/* Photographer Image */}
        <div className="w-full sm:w-[510px] max-w-[540px] h-[525px]">
          <Image
            src="/photographer_img.png.png"
            alt="Photography Example"
            width={510}
            height={525}
            className="rounded-[10px]"
          />
        </div>

        {/* About Me Text Section */}
        <div className="flex flex-col items-start gap-[24px] w-full sm:w-[570px] h-auto md:h-[566px]">
          {/* Title Section */}
          <div className="relative w-full sm:w-[570px] h-auto md:h-[76px] flex flex-col justify-center items-start gap-[6px] isolate">
            {/* Overlay */}
            <div className="absolute w-[60px] h-[60px] left-[-20px] top-[-9px] bg-[rgba(51,231,175,0.1)] rounded-[30px] z-0"></div>
            <h2 className="text-[#11204D] font-playfair font-bold text-[32px] sm:text-[36px] leading-[46px] tracking-[0.2px]">
              About Me
            </h2>
            <p className="text-[#11204D]/[0.35] font-playfair font-bold text-[12px] sm:text-[14px] leading-[24px] tracking-[0.2px]">
              Capturing Moments, Exploring Worlds, and Crafting Stories
            </p>
          </div>

          {/* Description */}
          <div className="w-full sm:w-[570px] h-auto md:h-[306px]">
            <p className="text-[#11204D]/[0.7] font-jost font-normal text-[15px] sm:text-[17px] leading-[31px] tracking-[0.2px]">
              With a passion for storytelling through lenses, words, and scientific discovery, I bring a unique blend of artistry and curiosity to every project I undertake. As a photographer, zoologist, and writer, I see the world as a canvas filled with endless stories waiting to be told. From documenting the beauty of wildlife in its natural habitat to crafting compelling narratives, my work is inspired by the wonders of nature, human creativity, and the power of innovation. Let’s create something extraordinary together.
            </p>
          </div>

          {/* Awards Section */}
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-start gap-[40px] 570px sm:w-[570px] h-auto md:h-[136px]">
            {/* Award Image */}
            <div className="w-full sm:w-[144px] max-w-[190px] h-[136px]">
              <Image
                src="/award-img.png.png"
                alt="Award Example"
                width={144}
                height={136}
                className="rounded-[10px]"
              />
            </div>

            {/* Award Description */}
            <div className="flex flex-col items-start gap-[0px]  sm:w-[380px] h-auto md:h-[136px]">
              <div className="sm:w-[350px] h-[62px]">
                <p className="text-[#11204D] font-jost font-medium text-[15px] sm:text-[17px] leading-[31px] tracking-[0.2px] w-[260px]">
                  International Photography
                  Awards 2016
                </p>
              </div>
              <div className="w-full sm:w-[350px] h-[40px]">
                <p className="text-[#11204D]/[0.7] font-jost font-normal text-[15px] sm:text-[17px] leading-[20px] tracking-[0.2px]">
                  Recipient of Excellence in Wildlife and Nature Photography
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
