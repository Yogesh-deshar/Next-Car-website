import { poppins } from "@/font/font";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <section
        className={
          `relative bg-gray-100 h-125 md:h-100 md:ml-20 md:mr-20 border lg:ml-40 lg:mr-40 ${poppins.variable} 
          font-sans rounded-2xl overflow-hidden mt-3 flex flex-col md:flex-row items-center lg:gap-35  gap-4`}
      >
        <div className="lg:ml-16 md:ml-6 mt-5 md:mt-0 ">
          <h2 className="text-3xl font-semibold">Find Your Next Car</h2>
          <p className="text-[#7789F3] text-2xl uppercase">
            find it, love it, drive it.
          </p>

          <p className="lg:text-lg md:text-sm md:w-80 lg:w-150">
            Quality vehicles ready for immediate delivery.
            <br />
            Browse top models with easy financing and expert guidance.
          </p>
          <button className="border text-white py-2 rounded-2xl mt-5 bg-[#7789F3] px-10">see more</button>
        </div>

        <div className="w-80 h-60 relative  rounded-lg overflow-hidden">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh-Wuc0YmLy_hxdDXXA9Q58zJCJPoZM61tBA&s"
            fill={true}
            alt="car image"
          />
        </div>
      </section>
    </>
  );
};

export default page;
