"use client";
/* eslint-disable @next/next/no-img-element */
import { carData } from "@/Components/CarsData/CarsData";
import Link from "next/link";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

export default function page() {
  return (
    <div className=" text-black px-4 sm:px-10">
      <div className="text-4xl flex items-start font-semibold my-8">
        Kanha Cars
      </div>
      <form className="rounded-2xl flex gap-8 items-center justify-between px-24 py-8 shadow-2xl flex-col md:flex-row">
        <div className="flex items-center w-full gap-8 sm:flex-row flex-col justify-center md:justify-start">
          <div>
            <input
              type="text"
              name="From"
              id="from"
              placeholder="From"
              className="bg-transparent border-b-2 border-black outline-none"
            />
          </div>
          <div>
            <input
              type="text"
              name="to"
              id="t0"
              placeholder="To"
              className="bg-transparent border-b-2 border-black outline-none"
            />
          </div>
        </div>
        <button className="rounded-xl text-2xl px-6 py-1 bg-green-400 text-white cursor-pointer">
          Find
        </button>
      </form>
      <DropDown />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 mt-16 ">
        {carData?.map((data, index) => {
          return <CarCard key={index} data={data} dataInd={index} />;
        })}
      </div>
    </div>
  );
}

const CarCard = ({ data, dataInd }) => {
  return (
    <Link href={`/allCars/${dataInd}`} className="flex flex-col gap-4 relative cursor-pointer">
      <div className="rounded-xl overflow-hidden group relative h-auto md:h-96">
        <img
          src={data?.imageUrl}
          alt="notFound"
          className="group-hover:scale-110 group-hover:brightness-75 duration-500 object-cover h-full w-full"
        />
        <div className="absolute right-4 top-4 rotate-[135deg] hidden group-hover:block duration-100">
          <FaArrowLeftLong color="white" size={20} />
        </div>
      </div>
      <div className="  px-4">
        <div className="flex items-center justify-between w-full">
          <h1>
            {data?.name} {data?.modal}
          </h1>
          {data.status === "Booked" ? (
            <h1 className={`text-red-500 flex items-center justify-center`}>
              <GoDotFill />
              {data?.status}
            </h1>
          ) : (
            <h1 className={`text-green-500 flex items-center justify-center`}>
              <GoDotFill />
              {data?.status}
            </h1>
          )}
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl">{data?.price}</h1>
          <h1>{data?.type}</h1>
        </div>
      </div>
    </Link>
  );
};

function DropDown() {
  return (
    <details className="dropdown mt-8">
      <summary className="m-1 w-auto  inline-block  px-6 py-1 rounded-lg bg-green-400 text-white cursor-pointer">Filters</summary>
      <div className="border-2 border-black rounded-xl select-none">
      <ul className="py-8 px-4 shadow menu dropdown-content z-[1] bg-base-100 rounded-box flex items-start justify-center gap-8 md:flex-row flex-col md:items-center">
        {['Booked Cars', "All Cars", "Aviliable Cars"].map((item)=>{
          return (
            <li key={item} className="px-6 py-2 inline-block rounded-lg bg-green-400 text-white">{item}</li>
          )
        })}
      </ul>
      <ul className="flex items-start md:flex-row flex-col md:items-center justify-center gap-8 border-t-2 border-black px-4 py-8">
      {['Petrol', "Desiel", "Gas"].map((item)=>{
          return (
            <li key={item} className="px-6 py-2 inline-block rounded-lg bg-green-400 text-white">{item}</li>
          )
        })}
      </ul>
      </div>
    </details>
  );
}
