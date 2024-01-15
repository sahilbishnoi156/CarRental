/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { carData } from "@/Components/CarsData/CarsData";

export default function Cars() {
  return (
    <div className=" text-black px-4 sm:px-10">
      <div className="text-[5vw] flex items-center justify-center text-green-400 font-semibold mt-8">
        RENT A CAR
      </div>
      <form className="rounded-2xl flex gap-8 items-center justify-between px-24 py-8 shadow-2xl flex-col md:flex-row">
        <div className="flex items-center w-full gap-8 sm:flex-row flex-col justify-center md:justify-start">
          <div>
            <span className="mr-4">From</span>
            <input
              type="date"
              name="From"
              id="from"
              placeholder="From"
              className="bg-transparent border-b-2 border-black outline-none"
            />
          </div>
          <div>
          <span className="mr-4">To</span>
            <input
              type="date"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 mt-16 ">
        {carData?.slice(0, 2).map((data, index) => {
          return <CarCard key={index} data={data} />;
        })}
      </div>
    </div>
  );
}

const CarCard = ({ data }) => {
  return (
    <div className="flex flex-col gap-4 relative cursor-pointer">
      <div className="rounded-xl overflow-hidden group relative h-auto md:h-96">
        <img
          src={data.imageUrl}
          alt="notFound"
          className="group-hover:scale-110 group-hover:brightness-75 duration-500 object-cover h-full w-full"
        />
        <div className="absolute right-4 top-4 rotate-[135deg] hidden group-hover:block duration-100">
          <FaArrowLeftLong color="white" size={20}/>
        </div>
      </div>
      <div className="  px-4">
        <div className="flex items-center justify-between w-full"> 
          <h1 className="text-xl border-b-2 border-green-500">
            {data.name} {data.modal}
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
          <h1 className="text-2xl">{data.price}</h1>
          <h1>{data.type}</h1>
        </div>
      </div>
    </div>
  );
};
