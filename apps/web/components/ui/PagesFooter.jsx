import React from "react";

const PagesFooter = () => {
  return (
    <footer className="flex flex-col justify-center items-center py-[50px] px-[260px] w-full bg-[#11204D] text-white">
      <div className="flex flex-col items-start w-full max-w-[1140px]">
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
          <p className="text-[17px] leading-[31px] font-normal font-jost">
            Copyright © Modak 2020. All rights reserved.
          </p>
          <div className="flex flex-row items-center gap-2">
            <p className="text-[17px] leading-[31px] font-normal font-jost">
              Privacy Policy
            </p>
            <span className="w-[1px] h-[24.8px] bg-white opacity-50"></span>
            <p className="text-[17px] leading-[31px] font-normal font-jost">
              Terms of Use
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PagesFooter;
