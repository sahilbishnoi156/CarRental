/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaTaxi } from "react-icons/fa6";
import { MdLocalAirport } from "react-icons/md";
import { MdOutlineAirportShuttle } from "react-icons/md";
import { SiHoney } from "react-icons/si";

const services = [
  {
    cover: "/servicesCovers/oneway.jpg",
    text: "One Way Taxi Service",
    about:'Embark on seamless journeys with our One Way Taxi Service, where comfort meets convenience, and every ride is a step closer to your destination.',
    icon: FaTaxi,
},
{
    cover: "/servicesCovers/airport.jpg",
    text: "Airport Taxi Service",
    about:'Your gateway to hassle-free travel starts here. Our Airport Taxi Service is committed to providing timely, reliable rides for a smooth transition between your home and the airport.',
    icon: MdLocalAirport,
},
{
    cover: "/servicesCovers/honeymoon.jpg",
    text: "Honeymoon Tour Packages",
    about:'Escape to a world of romance and bliss with our specially curated Honeymoon Tour Packages. Let us take care of the details, so you can focus on building cherished memories with your better half.',
    icon: SiHoney,
},
{
    cover: "/servicesCovers/group-travel.webp",
    text: "Group Tour and Travels",
    about:'Discover the joy of collective adventures with our Group Tour and Travels. From thrilling destinations to shared experiences, embark on a journey where the more, the merrier.',
    icon: MdOutlineAirportShuttle,
  },
];

export default function page() {
  return (
    <div className="min-h-screen text-black py-8 flex flex-col gap-20">
      <section>
        <h1 className="text-6xl font-bold text-center">Our Services</h1>
        <p className="text-lg text-center">All India Tour & Travel Services And Self Drive Cars Available</p>
        <div className="flex items-center justify-center flex-col gap-20 mt-8 px-4">
          {services.map((service, index) => {
            return (
              <ServiceCard data={service} key={`${service.text}${index}`} />
            );
          })}
        </div>
      </section>
    </div>
  );
}

const ServiceCard = ({ data }) => {
  return (
    <div className="shrink-0 flex flex-col md:flex-row gap-8 w-full max-w-screen-xl mx-auto md:w-[80vw] items-center">
      <img
        src={data.cover || "https://www.saitourtravels.in/UploadData/na.jpg"}
        alt="not found"
        className="w-96 rounded-2xl shadow-xl shadow-gray-400   "
      />
      <div className="flex gap-3 items-center justify-center flex-col md:items-start text-center md:text-left">
        <div className="flex items-center justify-center gap-2 text-4xl md:flex-row flex-col">
          <data.icon />
          <p>{data?.text}</p>
        </div>
        <p>{data?.about}</p>
        <a  href="tel:9779970515" className="bg-green-600 rounded-xl py-2 px-5 text-xl text-white hover:bg-green-700">
          Call Us Now
        </a>
      </div>
    </div>
  );
};
