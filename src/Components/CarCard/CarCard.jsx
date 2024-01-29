/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";

export default function CarCard({data, dataInd, type='2x2'}) {
  return (
    <Link href={`/allCars/${dataInd+1}?name=${data.name}&modal=${data.type}`} className="flex flex-col gap-4 relative cursor-pointer">
    <div className="rounded-lg sm:rounded-xl overflow-hidden group relative h-auto md:h-96">
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
      <div className={`flex  justify-between w-full flex-row items-center`}>
        <h1>
          {data?.name} {data?.modal}
        </h1>
        <h1>{data?.type}</h1>
      </div>
      <div className="flex items-center justify-between sm:my-4 my-1">
        <div className='flex items-center justify-center gap-4'>

        <h1 className="border-r-2 border-gray-900 pr-4">{data.fuelType}</h1>
        <h1>{data.mileage}</h1>
        </div>
        <h1 className="">{data.engine}</h1>
        </div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl text-green-500">{data?.price}</h1>
        
      </div>
    </div>
  </Link>
  )
}
