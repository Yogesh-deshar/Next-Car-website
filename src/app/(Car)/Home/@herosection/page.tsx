"use client";

import { poppins } from "@/font/font";
import { SliderData } from "@/Type/datas/SliderData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

const HeroSection = () => {
  const carSliderData = SliderData;

  useGSAP(() => {
    gsap.from("#hero-section", {
      y: 50,
      opacity: 0,
      duration: 3,
      ease: "easeInOut",
    });
  }, []);

  return (
    <>
      <section
        className={`relative h-135 border md:ml-20 md:mr-20 lg:ml-40 lg:mr-40 ${poppins.variable} font-sans rounded-2xl overflow-hidden mt-3`}
        id="hero-section"
      >
        <Image
          fill={true}
          className="border border-black object-cover opacity-82"
          src="https://news.dupontregistry.com/wp-content/uploads/2023/01/05-BUGATTI_Jean_LaVoitureNoire.jpg"
          alt="Car Images"
        />
        <p className="z-10 absolute top-10 text-white text-4xl left-5">
          Unleash the <span className="text-red-500">Beast</span> Inside you
        </p>

        <p className="z-10 absolute md:bottom-20 bottom-20 text-white text-2xl right-5">
          Discover your dream ride today at
        </p>
        <p className="z-10 absolute md:bottom-14 bottom-10 text-white text-2xl right-0 md:right-5">
          unbeatable prices and drive home in style.
        </p>
      </section>
    </>
  );
};

export default HeroSection;
