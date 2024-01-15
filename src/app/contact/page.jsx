/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function page() {
  return (
    <div className=" w-screen relative text-black px-16 pt-8">
      <div className="text-4xl">Contact Details</div>
      <div className="flex flex-col items-start justify-center text-2xl mt-8 gap-6">
        <div>
          <span className="text-green-600 mr-4">Number: </span> +91 9779970515
        </div>
        <div>
          <span className="text-green-600 mr-4">Email: </span>{" "}
          help.kanhatravells@gmail.com
        </div>
        <div>
          <span className="text-green-600 mr-4">Adress: </span>{" "}
          <p className="text-xl ml-8">
            SHOP NO. LG-25, VIP CENTRAL, <br />
            NEAR SOUTH CITY, VIP ROAD <br/>
            ZIRAKPUR
          </p>
        </div>
      </div>
    </div>
  );
}
