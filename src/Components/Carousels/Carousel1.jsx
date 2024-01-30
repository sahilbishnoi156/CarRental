"use client";
import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function MainCarousel({slides}) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide(currentIndex);
      setCurrentIndex(currentIndex + 1);
      if (currentIndex >= slides.length - 1) {
        setCurrentIndex(0);
      }
    }, 3000);
    return () => {
      // Clear the interval when the component is unmounted
      clearInterval(interval);
    };
  }, [currentIndex, slides.length]);

  return (
    <div className="max-w-full md:h-[80vh] h-[35vh] w-full relative group flex flex-col items-center justify-center">
      
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      <div className="flex flex-col items-start justify-center absolute left-2 md:left-16 md:bottom-1/4 bottom-16 text-2xl text-white cursor-pointer rounded-full">
        <h1 className="text-green-400 text-xl duration-200 md:text-4xl">{slides[currentIndex].quote}</h1>
        <p className="text-sm md:text-xl">{slides[currentIndex].line}</p>
      </div>
      {/* Left Arrow */}
      <div
        className="hidden items-center justify-center group-hover:flex absolute left-5 top-[50%] -translate-y-1/2 text-2xl text-white cursor-pointer rounded-full"
        onClick={prevSlide}
      >
        <BsChevronCompactLeft size={40} />
      </div>
      {/* Right Arrow */}
      <div
        className="hidden items-center justify-center group-hover:flex absolute right-5 top-[50%] -translate-y-1/2 text-2xl text-white cursor-pointer rounded-full"
        onClick={nextSlide}
      >
        <BsChevronCompactRight size={40} />
      </div>

      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}
