import React from "react";
import MainCarousel from "../Carousels/Carousel1";
import { slides } from "../CarsData/CarsData";

export default function Hero() {
  return (
    <div className="mt-4 sm:px-8 px-2">
      <div className="text-black text-[6vh] mb-2 self-start">Kanha Cars</div>
      <MainCarousel slides={slides} />
    </div>
  );
}
