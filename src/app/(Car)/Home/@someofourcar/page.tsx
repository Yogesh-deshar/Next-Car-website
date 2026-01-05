"use client";

import { poppins } from "@/font/font";
import React from "react";
import { CarData } from "@/Type/datas/CarData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Somecar = () => {
  const cardata = CarData;
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#someofourcar-section", {
      y: 50,
      opacity: 0,
      duration: 3,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#someofourcar-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <>
      <section
        className={` md:ml-20 md:mr-20 lg:ml-40 lg:mr-40 border h-[400px] rounded-2xl  mt-3 ${poppins.variable} font-sans bg-gray-100`}
        id="someofourcar-section"
      >
        <p className="p-3 text-2xl ml-8 mt-5">some of our cars</p>

        <div className="flex gap-5 overflow-x-scroll no-scrollbar p-3">
          {cardata.map((data, i) => {
            return (
              <div key={i} className="w-90 border rounded-lg h-72">
                <img
                  src={data.image}
                  alt={data.brand}
                  className="w-full aspect-[2/1]  object-cover rounded-lg "
                />
                <p className="mt-2 text-lg font-medium ml-3">{data.brand}</p>
                <p className="text-gray-500 ml-3 text-sm">RS 18000000</p>
                <button className="mx-10 mt-2 object-center  border border-blue-400 text-blue-400 px-4 py-2 rounded-lg w-60">
                  View Details
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Somecar;
