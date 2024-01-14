"use client"
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { FaCarRear } from "react-icons/fa6";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className='bg-white text-black py-4 px-6 flex items-center justify-between gap-16'>
        <div>
          <FaCarRear color='green' size={25}/>
        </div>
        <div className='w-full flex items-center justify-between '>
            <div className='flex items-center justify-center gap-2'>
                <IoLocationSharp/>
                <span>Zirakpur </span>
                <RiArrowDropDownLine/>
            </div>
              <div className='hidden items-center justify-center gap-16 mr-16 sm:flex md:flex xl:flex'>
                  <Link href="/" className={`${pathname === "/" && "border-b-2 border-green-400" }`}>My Bookings</Link>
                  <Link href="/allCars" className={`${pathname === "/allCars" && "border-b-2 border-green-400" }`}>Cars</Link>
                  <Link href="/contact" className={`${pathname === "/contact" && "border-b-2 border-green-400" }`}>Contact</Link>
              </div>
        </div>
        <div className=''><FaUserCircle size={25}/></div>
    </div>
  )
}
