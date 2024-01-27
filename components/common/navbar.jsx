"use client";
import React from "react";
import { ChevronDown } from "lucide-react";
import { AlignJustify } from "lucide-react";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import useToggle from "@/hooks/utils/use-toggle";

function Navbar() {
  const navbar = useToggle();

  return (
    <nav className="w-screen bg-customGray h-[80px] z-10 px-10 border-b">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <Image src="/icons/logo.svg" width={110} height={38} alt="logo" priority />
          <ul className="hidden lg:flex gap-9 ml-20">
            <li>
              <Link href={"/about"} className="text-customBlack font-medium">
                About Us
              </Link>
            </li>
            <li>
              <Link href={"/events"} className="text-customBlack font-medium">
                Events
              </Link>
            </li>
            <li>
              <Link href={"/membership"} className="text-customBlack font-medium">
                Membership
              </Link>
            </li>
            <li>
              <Link href={"/partners"} className="text-customBlack font-medium">
                For Partners
              </Link>
            </li>
            <li>
              <Link href={"/certification"} className="text-customBlack font-medium">
                Certification
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden items-center lg:flex pr-4">
          <button className="flex gap-1 border-none bg-transparent text-black mr-4">
            En <ChevronDown />
          </button>
          <button className="py-3 px-4 border rounded-full">Join</button>
        </div>
        <div className="lg:hidden mr-4" onClick={navbar.toggle}>
          {!navbar.isOpen ? <AlignJustify /> : <X />}
        </div>
      </div>

      <ul className={!navbar.isOpen ? "hidden" : "absolute left-0 px-10 bg-gray-50 w-full "}>
        <li className="py-3">
          <Link href={"/about"} className="text-customBlack font-medium">
            About Us
          </Link>
        </li>
        <li className="py-3">
          <Link href={"/events"} className="text-customBlack font-medium">
            Events
          </Link>
        </li>
        <li className="py-3">
          <Link href={"/membership"} className="text-customBlack font-medium">
            Membership
          </Link>
        </li>
        <li className="py-3">
          <Link href={"/partners"} className="text-customBlack font-medium">
            For Partners
          </Link>
        </li>
        <li className="py-3">
          <Link href={"/certification"} className="text-customBlack font-medium">
            Certification
          </Link>
        </li>
        <div className="flex flex-col items-start my-4">
          <button className="bg-transparent mb-4 flex text-customBlack font-medium">
            En <ChevronDown />
          </button>
          <button className="py-3 text-customBlack font-medium">Join</button>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
