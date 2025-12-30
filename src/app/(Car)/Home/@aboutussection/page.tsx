import { poppins } from "@/font/font";
import Image from "next/image";
import React from "react";

const AboutUSsections = () => {
  return (
    <>
      <section className="relative h-120 border md:ml-20 md:mr-20 lg:ml-40 lg:mr-40 rounded-2xl overflow-hidden mt-3 flex justify-center  bg-black/10 ">
        <Image
          src="https://hpe-photos.s3.us-east-2.amazonaws.com/wp-content/uploads/2024/01/2020-Hennessey-Velocity-Blue-Ford-Mustang-GT500-Venom-1000-for-Sale-4.webp"
          alt="car image"
          fill={true}
          className="object-cover mix-blend-darken opacity-70"
        />
        <div className={`relative top-40  ${poppins.variable} font-sans`}>
          <h2 className="text-center text-white text-5xl ">About us</h2>
          <p className="text-center mx-10 text-white text-2xl w-[calc(100%-80px)] mt-5">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis
            urna. Nunc viverra imperdiet enim. Fusce est.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutUSsections;
