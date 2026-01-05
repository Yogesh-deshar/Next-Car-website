"use client";

import { poppins } from "@/font/font";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React from "react";

const Partnersection = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#partner-section", {
      x: 50,
      duration: 2,
      opacity: 0,
      ease: "easeInOut",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#partner-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play restart none reverse",
      },
    });
  }, []);
  return (
    <>
      <section
        className={`bg-gray-100 md:h-60 border md:ml-20 md:mr-20 lg:ml-40 lg:mr-40 rounded-2xl  mt-3 ${poppins.variable} font-sans  `}
        id="partner-section"
      >
        <h2 className="text-center text-3xl mt-5">Some of our partners</h2>

        <div className="flex flex-col md:justify-center items-center gap-10 mt-3 md:flex-row">
          <Image
            src="/bmw.svg"
            alt="bmw logo"
            width={150}
            height={150}
            className="object-contain w-full md:w-[15%] aspect-[4/3] "
          />
          <Image
            src="/Volkswagen.svg"
            alt="Volkswagen logo"
            width={150}
            height={150}
            className="object-contain w-full  md:w-[15%] aspect-[4/3] "
          />
          <Image
            src="/Hyundai.svg"
            alt="Hyundai logo"
            width={150}
            height={150}
            className="object-contain w-full md:w-[15%] aspect-[4/3] "
          />
          <Image
            src="/ford.svg"
            alt="ford logo"
            width={150}
            height={150}
            className="object-contain w-full md:w-[15%] aspect-[4/3] "
          />
        </div>
      </section>
    </>
  );
};

export default Partnersection;
