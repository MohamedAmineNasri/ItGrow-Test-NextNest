import React from "react";
import Image from "next/image";

const BlogSection = () => {
  return (
    <div className="flex flex-col justify-center items-center  px-6    w-full    ">
      <div className="flex flex-col items-center  gap-32  max-w-[1140px] w-full">
        {/* Header Section */}
        <div className="flex flex-col items-center w-full">
          <h2 className="font-playfair font-bold text-[24px] sm:text-[28px] md:text-[36px] leading-[1.2] text-[#11204D] text-center">
            From The Blog
          </h2>
          <p className="font-playfair font-bold text-[12px] sm:text-[14px] leading-[1.5] text-[#11204D]/[0.35] text-center">
            Stories, Tips, and Inspiration
          </p>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">

          {Array(3)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="flex flex-col items-start w-full max-w-[380px] mx-auto">
                <div className="relative w-full max-w-[350px] h-[450px] sm:h-[521.19px] border border-[#11204D]/[0.15] rounded-[10px]">
                  {/* Blog Image */}
                  <div className="absolute top-[-30px] left-[10px] right-[10px] h-[250px]">
                    <Image
                      src={`/blogpost-img1.jpg.png`}
                      alt={`Blog Post ${index + 1}`}
                      width={328.4}
                      height={328.4}
                      className="rounded-[10px]"
                    />
                  </div>

                  {/* Category Tag */}
                  <div className="absolute top-[10px] left-[10%] bg-[#6138BD] text-white rounded-[10px] px-[10px] py-[5px] text-[12px] sm:text-[13px] uppercase font-jost ">
                    {index === 0 && "Marketing"}
                    {index === 1 && "Branding"}
                    {index === 2 && "Creative"}
                  </div>

                  {/* Blog Content */}
                  <div className="absolute top-[300px] md:top-[300px] left-[10px] right-[10px] p-4 gap-2 ">
                    {/* Date and Author */}
                    <div className="flex flex-row gap-1">
                      <p className="text-[12px] sm:text-[14px] text-[#11204D]/[0.35]">
                        {index === 0 && "March 24, 2020"}
                        {index === 1 && "August 16, 2020"}
                        {index === 2 && "September 30, 2020"} - by Alycia
                      </p>
                    </div>

                    {/* Blog Title */}
                    <h5 className="text-[16px] sm:text-[20px] md:text-[24px] leading-[1.2] text-[#11204D] font-medium mt-4  ">
                      {index === 0 &&
                        "Essential social media tips for small business"}
                      {index === 1 && "Tips to boost product-based sales online"}
                      {index === 2 && "The art of effective storytelling"}
                    </h5>

                    {/* Read More Link */}
                    <div className="flex flex-col">
                      <div className="relative">
                        <div className="absolute bottom-[-2px] w-[30px] h-[2px] bg-[#6138BD]"></div>
                        <p className="text-[#6138BD] text-[14px] sm:text-[17px] leading-[1.5] font-medium mt-4">
                          Continue Reading
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
