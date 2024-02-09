/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const metadata = {
  title: 'Contact Us',
  description: 'Experience the freedom and flexibility of exploring your destination at your own pace with our reliable and convenient self-drive car rental service.'
}

export default function page() {
  return (
    <div className="text-black p-2 sm:p-16">
      <div className="text-4xl">Contact Details</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-16 mt-8 text-2xl">
        <a className="border-2 border-black flex items-center justify-center gap-2 rounded-lg cursor-pointer sm:hover:scale-105 duration-300 min-w-[290px] min-h-[170px] px-4 hover:shadow-2xl" href="tel:9779970515">
          <div>
            <IoCall size={56} className="text-green-400" />
          </div>
          <div>
            <h3>Office</h3>
            <p>+91 9779970515</p>
          </div>
        </a>
        <a className="border-2 border-black flex items-center justify-center gap-2 rounded-lg cursor-pointer sm:hover:scale-105 duration-300 min-w-[290px] min-h-[170px] px-4 hover:shadow-2xl" href="tel:7988467727">
          <div>
            <IoCall size={56} className="text-green-400" />
          </div>
          <div>
            <h3>Personal</h3>
            <p>+91 7988467727</p>
          </div>
        </a>
        <div className="border-2 border-black  min-w-[290px] min-h-[170px] flex items-center justify-center gap-2 rounded-lg sm:hover:scale-105 duration-300 px-4 hover:shadow-2xl" >
          <div>
            <FaLocationDot size={56} className="text-green-400" />
          </div>
          <div>
            <h3>Address</h3>
            <p className="text-sm">SHOP NO. 1, MAYA GARDEN PHASE 3, <br />
            NEAR SOUTH CITY, VIP ROAD <br/>
            ZIRAKPUR</p>
          </div>
        </div>
        <a className="border-2 border-black   min-w-[290px] min-h-[170px] flex items-center justify-center gap-2 rounded-lg cursor-pointer sm:hover:scale-105 duration-300 px-2 hover:shadow-2xl" href="mailto:help.kanhatravells@gmail.com">
          <div>
            <MdEmail size={56} className="text-green-400" />
          </div>
          <div>
            <h3>Office E - Mail</h3>
            <p className="sm:text-xl text-sm">help.kanhatravells@gmail.com</p>
          </div>
        </a>
        <a className="border-2 border-black   min-w-[290px] min-h-[170px] flex items-center justify-center gap-2 rounded-lg cursor-pointer sm:hover:scale-105 duration-300 px-2 hover:shadow-2xl" href="mailto:royalrishu42@gmail.com">
          <div>
            <MdEmail size={56} className="text-green-400" />
          </div>
          <div>
            <h3>Personal E - Mail</h3>
            <p className="sm:text-xl text-sm">royalrishu42@gmail.com</p>
          </div>
        </a>
      </div>
    </div>
  );
}
