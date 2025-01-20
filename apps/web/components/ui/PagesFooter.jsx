import React from "react";

const PagesFooter = () => {
  return (
    <footer className="w-full bg-[#11204D] text-white py-5">
      <div className="flex flex-col items-center justify-center w-full max-w-[1140px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 text-center md:text-left">
          <p className="text-[14px] md:text-[17px] leading-[20px] md:leading-[31px] font-normal font-jost">
            Copyright © Modak 2020. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-[14px] md:text-[17px] leading-[20px] md:leading-[31px] font-normal font-jost">
              Privacy Policy
            </p>
            <span className="hidden md:block w-[1px] h-[24.8px] bg-white opacity-50"></span>
            <p className="text-[14px] md:text-[17px] leading-[20px] md:leading-[31px] font-normal font-jost">
              Terms of Use
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PagesFooter;
