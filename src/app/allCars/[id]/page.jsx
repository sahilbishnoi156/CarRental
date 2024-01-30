/* eslint-disable @next/next/no-img-element */
import React from "react";
import { carData } from "@/Components/CarsData/CarsData";
import CarCard from "@/Components/CarCard/CarCard";
import Image from "next/image";
import CarCarousel from "@/Components/Carousels/CarCarousel";


export async function generateMetadata({params}){
  let data;
  for(var key in carData){
    if(carData[key]?.id?.toString() === params.id){
      data = carData[key];
      break;
    }
  }
  return {
    title: `${data?.name} ${data?.modal} ${data?.engine}`,
    description: data?.about || "Experience the freedom and flexibility of exploring your destination at your own pace with our reliable and convenient self-drive car rental service.",
    alteranates:{
      canonical: `/allCars/${params.id - 1}?name=${data?.name}&modal=${data?.modal}`
    }
  }
}

export default function Page({ params }) {
  let data;
  for(var key in carData){
    if(carData[key]?.id?.toString() === params.id){
      data = carData[key];
      break;
    }
  }
  const slides = data?.imageUrls || []
  return (
    <div className="relative text-black px-2 pt-4 md:px-16 ">
      <div className="rounded-xl overflow-hidden group relative md:h-[90vh] h-[35vh]">
        <CarCarousel slides={slides}/>
      </div>
      <h1 className="  mt-8 mb-2 text-[5vh] text-green-400">Description</h1>
      <div className="flex items-start justify-center flex-col gap-0 md:gap-8">
        <div className="flex items-start justify-between w-full md:flex-row flex-col md:items-center">
          <div className="flex items-center justify-center gap-4 text-2xl">
            <strong>Name:</strong>
            <p>{data?.name}</p>
          </div>
          <div className="flex items-center justify-center gap-4 text-2xl">
            <strong>Modal:</strong>
            <p>{data?.modal}</p>
          </div>
        </div>
        <div className="flex items-start justify-between w-full md:flex-row flex-col md:items-center">
          <div className="flex items-center justify-center gap-4 text-2xl">
            <strong>Mileage:</strong>
            <p>{data?.mileage}</p>
          </div>
          <div className="flex items-center justify-center gap-4 text-2xl">
            <strong>type:</strong>
            <p>{data?.type}</p>
          </div>
        </div>
        <div className="flex items-start justify-between w-full md:flex-row flex-col md:items-center">
          <div className="flex items-center justify-center gap-4 text-2xl">
            <strong>Price:</strong>
            <p className="text-2xl">{data?.price}</p>
          </div>
          <div className="flex items-center justify-center gap-4 text-2xl">
            <strong>Fuel Type:</strong>
            <p>{data?.fuelType}</p>
          </div>
        </div>
        {data?.about && (
          <div className="flex gap-4">
            <strong className="text-2xl">About:</strong>
            <p className="text-xl text-gray-700">{data?.about}</p>
          </div>
        )}
        <div className="text-3xl cursor-pointer py-1 px-4 rounded-lg bg-green-500 text-white hover:bg-green-700">
          <a href="tel:9779970515">Call Now</a>
        </div>
      </div>

      <div className="my-8">
        <h1 className="mb-2 text-[5vh] text-green-400">More Like This :</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {carData?.map((item, index) => {
            return (
              <CarCard key={item} data={item} dataInd={index} type="3x3" />
            );
          })}
        </div>
      </div>
    </div>
  );
}
