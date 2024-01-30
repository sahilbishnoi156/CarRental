"use client";
import React, { useState } from "react";
import { carData } from "./CarsData/CarsData";
import CarCard from "./CarCard/CarCard";

export default function SearchCar({limit=carData.length}) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCars = carData.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <form className="rounded-2xl flex gap-8 items-center justify-between px-2 sm:px-24 md:px-16 py-8 shadow-2xl flex-col md:flex-row">
        <input
          list="cars"
          name="carName"
          id="carName"
          placeholder="Enter Car Name"
          className="bg-transparent border-b-2 border-gray-400 focus:border-black duration-100 outline-none text-2xl"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <datalist id="cars">
          {carData.map((car) => (
            <option key={car.name} value={car.name} />
          ))}
        </datalist>
        <h1 className="rounded-xl text-2xl px-6 py-1">
          <span className="text-3xl text-green-500">Get</span> Your Favourite Self Drive Car
        </h1>
      </form>
      {filteredCars.length === 0 && (
        <div>
          <h2 className="text-2xl text-red-600 mt-16">Car Not Found 😔</h2>
          <span className="text-3xl ">Check out other better options</span>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 mt-16">
        {filteredCars.length === 0
          ? carData
              .slice(0, 4)
              .map((data, index) => (
                <CarCard key={`${data.name}${data.id}`} data={data}  />
              ))
          : filteredCars.slice(0,limit).map((data, index) => (
              <CarCard key={`${data.name}${data.id}`} data={data}  />
            ))}
      </div>
    </>
  );
}
