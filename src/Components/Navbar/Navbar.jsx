"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaCarRear } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const iconRef = React.useRef(null)
  const dropdown = React.useRef(null);
  const [inView, setInView] = React.useState(false);

  
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdown.current &&
        !dropdown.current.contains(event.target) && 
        !iconRef.current.contains(event.target)
      ) {
        setInView(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      // Cleanup event listener on unmount
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dropdown]); // Include dropdown in dependency array

  return (
    <nav className="bg-white text-black py-4 px-2 sm:px-6 flex items-center justify-between gap-16">
      <Link href={"/"} className="flex shrink-0 gap-2 items-end ">
        <FaCarRear color="green" size={25} />
        Kanha Cars
      </Link>
      <div className="w-full flex items-center justify-between ">
        <div className="sm:flex items-center justify-center gap-2 hidden">
          <IoLocationSharp />
          <span>Zirakpur </span>
          <RiArrowDropDownLine />
        </div>
        <div className="hidden items-center justify-center gap-16 lg:flex ">
          <Link
            href="/"
            className={`${pathname === "/" && "border-b-2 border-green-400"} hover:scale-105 duration-75`}
          >
            Home
          </Link>
          <Link
            href="/allCars"
            className={`${
              pathname.startsWith("/allCars") && "border-b-2 border-green-400"
            } hover:scale-105 duration-75`}
          >
            Cars
          </Link>
          <Link
            href="/contact"
            className={`${
              pathname === "/contact" && "border-b-2 border-green-400"
            } hover:scale-105 duration-75`}
          >
            Contact Us
          </Link>
          <Link
            href="/about"
            className={`${
              pathname === "/about" && "border-b-2 border-green-400"
            } hover:scale-105 duration-75`}
          >
            About Us
          </Link>
        </div>
      </div>
      <div
        className="relative z-30 lg:hidden block"
        ref={iconRef}
        onClick={() => {
          setInView(!inView);
        }}
      >
        <IoMenu size={25}  className="ioMenu"/>
      </div>
      <div
        className={`pb-4 w-full bg-white border-b-2 border-gray-300 absolute ${
          inView ? "top-0" : "-top-full"
        } left-0 z-20 duration-500`}
        ref={dropdown}
      >
        <div className="flex items-center justify-center text-4xl text-green-600 mt-2">
          Kahna Cars
        </div>
        <div className="flex items-start justify-center gap-8 flex-col mt-8 px-4 text-2xl ">
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
            Contact Us
          </Link>
          <Link
            href="/about"
            className={`${
              pathname === "/about" && "border-b-2 border-green-400"
            }`}
          >
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
