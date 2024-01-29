import React from "react";
import CarCard from "@/Components/CarCard/CarCard";
import { carData } from "@/Components/CarsData/CarsData";
import SearchCar from "@/Components/SearchCar";


export default function page() {
  return (
    <div className=" text-black px-4 sm:px-10">
      <div className="text-4xl flex items-start font-semibold my-8">
        Kanha Cars
      </div>
      <SearchCar/>
    </div>
  );
}


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
