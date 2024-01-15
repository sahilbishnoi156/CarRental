"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { FaCarRear } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const dropdown = React.useRef(null);
  const [inView, setInView] = React.useState(false);
  return (
    <div className="bg-white text-black py-4 px-6 flex items-center justify-between gap-16">
      <Link href={"/"}>
        <FaCarRear color="green" size={25} />
      </Link>
      <div className="w-full flex items-center justify-between ">
        <div className="flex items-center justify-center gap-2">
          <IoLocationSharp />
          <span>Zirakpur </span>
          <RiArrowDropDownLine />
        </div>
        <div className="hidden items-center justify-center gap-16 mr-16 sm:flex md:flex xl:flex">
          <Link
            href="/"
            className={`${pathname === "/" && "border-b-2 border-green-400"}`}
          >
            Home
          </Link>
          <Link
            href="/allCars"
            className={`${
              pathname.startsWith("/allCars") && "border-b-2 border-green-400"
            }`}
          >
            Cars
          </Link>
          <Link
            href="/contact"
            className={`${
              pathname === "/contact" && "border-b-2 border-green-400"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
      <div className='md:block hidden'><FaUserCircle size={25}/></div>
      <div
        className="relative z-30 md:hidden block"
        onClick={() => {
          setInView(!inView);
        }}
      >
        <IoMenu size={25} />
      </div>
      <div
        className={`pb-4 w-full bg-white border-b-2 border-gray-800 absolute ${
          inView ? "top-0" : "-top-full"
        } left-0 z-20 duration-500`}
        ref={dropdown}
      >
        <div className="flex items-center justify-center text-[6vh] border-b-2 border-black text-green-600">
          Kahna Cars
        </div>
        <div className="flex items-start justify-center gap-8 flex-col mt-8 px-4 text-2xl">
          <Link
            href="/"
            className={`${pathname === "/" && "border-b-2 border-green-400"}`}
          >
            Home
          </Link>
          <Link
            href="/allCars"
            className={`${
              pathname.startsWith("/allCars") && "border-b-2 border-green-400"
            }`}
          >
            Cars
          </Link>
          <Link
            href="/contact"
            className={`${
              pathname === "/contact" && "border-b-2 border-green-400"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
