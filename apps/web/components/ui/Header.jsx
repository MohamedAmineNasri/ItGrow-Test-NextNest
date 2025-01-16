"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./button";
import UserDropdown from "./UserDropdown";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col items-center px-10 py-10 sm:px-20 sm:py-14 md:px-[260px] md:py-[40px] w-full h-[128px] bg-white">
      <div className="flex flex-col sm:flex-row justify-between items-center p-0 w-full max-w-[1400px] h-[48px]">
        <Image
          src="/HeaderIcon.png"
          alt="Description of image"
          width={70}
          height={48}
        />

        <div className="sm:hidden flex flex-col items-center space-y-2" onClick={toggleMenu}>
          <div className={`w-6 h-1 bg-[#6138BD] transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></div>
          <div className={`w-6 h-1 bg-[#6138BD] ${isMenuOpen ? "opacity-0" : "opacity-100"} transition-all duration-300`}></div>
          <div className={`w-6 h-1 bg-[#6138BD] transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
        </div>


        <ul
          className={`sm:flex flex-col sm:flex-row sm:items-start gap-[20px] p-0 mx-auto w-full sm:w-[517.67px] justify-between h-[31px] ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li className="relative flex-none flex-grow-0 z-10 text-[#6138BD] w-[46px] h-[31px] text-center font-medium text-[17px] leading-[31px] tracking-[0.2px]">
            Home
            <span className="absolute left-0 bottom-0 w-[30px] h-[2px] bg-[#6138BD] top-7"></span>
          </li>
          <li className="flex flex-col items-start p-0 w-[66.19px] h-[31px] text-center font-medium text-[17px] leading-[31px] tracking-[0.2px] text-[#11204D]">
            About
          </li>
          <li className="flex flex-col items-start p-0 w-[66.19px] h-[31px] text-center font-medium text-[17px] leading-[31px] tracking-[0.2px] text-[#11204D]">
            Services
          </li>
          <li className="flex flex-col items-start p-0 w-[66.19px] h-[31px] text-center font-medium text-[17px] leading-[31px] tracking-[0.2px] text-[#11204D]">
            Works
          </li>
          <li className="flex flex-col items-start p-0 w-[66.19px] h-[31px] text-center font-medium text-[17px] leading-[31px] tracking-[0.2px] text-[#11204D]">
            Blog
          </li>
          <li className="flex flex-col items-start p-0 w-[66.19px] h-[31px] text-center font-medium text-[17px] leading-[31px] tracking-[0.2px] text-[#11204D]">
            Contact
          </li>
        </ul>


        <div className="sm:flex hidden">
          {/* <Button
            asChild
            className={"flex items-center justify-center px-[20px] py-0 mx-auto w-[94px] h-[40px] bg-[#6138BD] border border-[#6138BD] rounded-[10px] hover:bg-[#6138BD] hover:border-[#6138BD]"}
          >
            <Link
              href="/auth/signin"
              className="text-[17px] font-medium leading-[24px] tracking-[0.2px] text-[#FFFFFF] hover:text-[#FFFFFF]"
            >
              Sign in
            </Link>
          </Button> */}
          <UserDropdown />
        </div>

        <div className="sm:hidden flex justify-center mt-4">
          <Button
            asChild
            className="flex items-center justify-center px-[20px] py-0 mx-auto w-[94px] h-[40px] bg-[#6138BD] border border-[#6138BD] rounded-[10px] hover:bg-[#6138BD] hover:border-[#6138BD]"
          >
            <Link
              href="/auth/signin"
              className="text-[17px] font-medium leading-[24px] tracking-[0.2px] text-[#FFFFFF] hover:text-[#FFFFFF]"
            >
              Sign in
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
