import React from "react";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="flex flex-col justify-center items-center px-6 py-16 w-full bg-[#F7F8FA]">
      <div className="flex flex-col items-center gap-10 w-full max-w-6xl">
        <div className="relative flex flex-col items-center gap-2 w-full">
        <div className="absolute w-[60px] h-[60px] left-[541px] top-[-9px] bg-[rgba(51,231,175,0.1)] rounded-[30px] z-0"></div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair text-[#11204D] text-center">
            Testimonial
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-[#11204D]/[0.35] text-center max-w-xl">
            Hear What My Clients Have to Say
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-6 w-full">
          <div className="flex flex-col justify-center items-center gap-6 w-full max-w-4xl">
            <Image
              src="/DotIcon.png"
              alt="Dot Icon"
              width={40}
              height={40}
              className="rounded-[10px]"
            />
            <p className="text-base md:text-lg lg:text-xl text-[#11204D]/[0.7] text-center max-w-3xl">
              “Extremely professional, unique and enjoyable. The effort taken to
              ensure relevance to our requirements ensured the optimum outcome.”
            </p>
            <Image
              src="/IconStars.png"
              alt="Stars Icon"
              width={100}
              height={20}
              className="rounded-[10px]"
            />
            <div className="flex justify-center items-center">
              <Image
                src="/TestimonialUserImage.jpeg"
                alt="Testimonial User"
                width={70}
                height={70}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <h5 className="text-lg font-jost text-[#11204D]">
                Hans Witherspoon
              </h5>
              <p className="text-sm text-[#11204D]/[0.3]">ACME Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
