import React from "react";
import SearchCar from "../SearchCar";
import Link from "next/link";

export default function Cars() {
  return (
    <div className=" text-black px-4 sm:px-10">
      <div className="text-[5vw] flex items-center justify-center text-green-500 font-semibold mt-8">
        RENT A CAR
      </div>
      <SearchCar limit={2} />
      <div className="mt-16 flex items-center justify-center">
        <Link
          href={"/allCars"}
          className="bg-green-400 py-4 px-10 text-white rounded-lg text-xl hover:bg-green-700 duration-150 hover:scale-105"
        >
          All Cars
        </Link>
      </div>
    </div>
  );
}
