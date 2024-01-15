"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { carData } from "@/Components/CarsData/CarsData";
import Link from "next/link";

export default function Page({ params }) {
  const [data, setdata] = React.useState(carData[params.id-1]);

  return (
    <div className="relative text-black px-2 pt-4 md:px-16">
      <div className="rounded-xl overflow-hidden group relative h-[80vh]">
        <img
          src={data?.imageUrl}
          alt="notFound"
          className="object-cover h-full w-full"
        />
      </div>
      <h1 className="  mt-8 mb-2 text-[5vh] text-green-400">
          Description
        </h1>
      <div className="flex items-start justify-center flex-col gap-0 md:gap-8">
        <div className="flex items-start justify-between w-full md:flex-row flex-col md:items-center">
          <div className="flex items-center justify-center gap-4 text-2xl">
            <h1>Name:</h1>
            <p>{data.name}</p>
          </div>
          <div className="flex items-center justify-center gap-4 text-2xl">
            <h1>Modal:</h1>
            <p>{data.modal}</p>
          </div>
        </div>
        <div className="flex items-start justify-between w-full md:flex-row flex-col md:items-center">
          <div className="flex items-center justify-center gap-4 text-2xl">
            <h1>Status:</h1>
            <p className={`${data.status === "Booked" ? "text-red-400" : "text-green-400"}`}>{data.status}</p>
          </div>
          <div className="flex items-center justify-center gap-4 text-2xl">
            <h1>type:</h1>
            <p>{data.type}</p>
          </div>
        </div>
        <div className="flex items-start justify-between w-full md:flex-row flex-col md:items-center">
          <div className="flex items-center justify-center gap-4 text-2xl">
            <h1>Fuel Type:</h1>
            <p>{data.fuelType}</p>
          </div>
          <div className="flex items-center justify-center gap-4 text-2xl">
            <h1>Price:</h1>
            <p>{data.price}</p>
          </div>
        </div>
      </div>
      <div className="my-8">
        <h1 className="mb-2 text-[5vh] text-green-400">More Like This :</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {carData.map((item , index)=>{
          return (
            <CarCard key={item} data={item} dataInd={index}/>
          )
        })}
        </div>
      </div>
    </div>
  );
}


const CarCard = ({ data, dataInd }) => {
  return (
    <Link href={`/allCars/${dataInd+1}`} className="flex flex-col gap-4 relative cursor-pointer">
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
          <h1 className="text-xl border-hidden md:border-b-2 border-green-500">
            {data.name} {data.modal}
          </h1>
          {data.status === "Booked" ? (
            <h1 className={`text-red-500 flex items-center justify-center text-sm`}>
              <GoDotFill />
              {data?.status}
            </h1>
          ) : (
            <h1 className={`text-green-500 flex items-center justify-center text-sm`}>
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
    </Link>
  );
};