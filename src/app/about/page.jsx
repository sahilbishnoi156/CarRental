import MainCarousel from "@/Components/Carousels/Carousel1";
import { slides } from "@/Components/CarsData/CarsData";
import React from "react";

export const metadata = {
  title: 'About Us',
  description: 'Experience the freedom and flexibility of exploring your destination at your own pace with our reliable and convenient self-drive car rental service.'
}


export default function page() {
  return (
    <div className="text-black sm:p-16 p-2">
      <div className="mb-16">
        <MainCarousel slides={slides}/>
      </div>
      <div>
        <h1 className="text-6xl font-bold text-center">ABOUT US</h1>
        <p className="mt-4 text-center">
          Welcome to Kanha Tour & Travells, your premier destination for
          reliable and convenient transportation services. We specialize in
          providing exceptional one-way taxi and self-drive car rental options
          to cater to all your travel needs. With a strong commitment to
          customer satisfaction, we strive to make your journey comfortable,
          safe, and memorable. At Kanha Tour & Travells, we understand the
          importance of reliable transportation for both business and leisure
          travelers. Whether you’re planning a solo trip or traveling with a
          group, we have the perfect solution for you. Our fleet of
          well-maintained vehicles, coupled with our professional and
          experienced drivers, ensures that you reach your destination on time
          and in style
        </p>
      </div>
      <div className="mt-24">
        <h3 className="text-6xl font-bold text-center">Why Choose Us</h3>
        <ul className="flex text-2xl font-medium items-center justify-evenly mt-4 flex-col md:flex-row">
            <li>Reliability</li>
            <li>Safety</li>
            <li>Affordable</li>
            <li>Quality Service</li>
            <li>Large Fleets</li>
        </ul>
      </div>
      <div className="mt-24">
        <h3 className="text-6xl font-bold text-center">Special Services</h3>
        <ul className="flex text-2xl font-medium items-center gap-4 justify-evenly mt-4 flex-col md:flex-row">
            <li>Doorstep Delievery</li>
            <li>Drop the car anywhere you want</li>
            <li>200km limit</li>
            <li>Clean & Refined cars</li>
        </ul>
      </div>
    </div>
  );
}
