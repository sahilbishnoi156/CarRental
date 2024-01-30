import React from "react";
import SearchCar from "@/Components/SearchCar";

export const metadata = {
  title: 'All Cars',
  description: 'Experience the freedom and flexibility of exploring your destination at your own pace with our reliable and convenient self-drive car rental service.'
}

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
