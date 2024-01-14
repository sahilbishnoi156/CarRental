"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { carData } from "@/Components/CarsData/CarsData";

export default function Page({ params }) {
  const [data, setdata] = React.useState(carData[params.id]);

  return (
    <div className="relative text-black px-2 pt-4 md:px-16">
      <div className="rounded-xl overflow-hidden group relative h-[80vh]">
        <img
          src={data?.imageUrl}
          alt="notFound"
          className="object-cover h-full w-full"
        />
      </div>
      <h1 className="  mt-8  mb-2 text-6xl text-green-400">
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
    </div>
  );
}
