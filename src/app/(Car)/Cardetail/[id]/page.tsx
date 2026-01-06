import { poppins } from "@/font/font";
import { CarData } from "@/Type/datas/CarData";
import {
  AirVent,
  Fuel,
  RockingChair,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const data = await params;
  const cardata = CarData.find((car) => car.id === Number(data.id));
  if (!cardata) {
    return <div>Car not found</div>;
  }
  //   console.log(cardata);
  return (
    <>
      <section
        className={`flex justify-between mx-40 ${poppins.className} mt-5`}
      >
        <div className="w-[650px]">
          <div className="border border-black w-[650px] aspect-video relative rounded-lg">
            <Image
              src={cardata.image}
              alt="car image"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            <Image
              src={cardata.image}
              alt="car image"
              width={140}
              height={40}
              className="object-cover border border-black rounded-lg mt-1 mr-2"
            />

            <Image
              src={cardata.image}
              alt="car image"
              width={140}
              height={40}
              className="object-cover border border-black rounded-lg mt-1 mr-2"
            />

            <Image
              src={cardata.image}
              alt="car image"
              width={140}
              height={40}
              className="object-cover border border-black rounded-lg mt-1 mr-2"
            />

            <Image
              src={cardata.image}
              alt="car image"
              width={140}
              height={40}
              className="object-cover border border-black rounded-lg mt-1 mr-2"
            />

            <Image
              src={cardata.image}
              alt="car image"
              width={140}
              height={40}
              className="object-cover border border-black rounded-lg mt-1 mr-2"
            />
          </div>
        </div>

        <div>
          <div>
            <h2 className={`text-4xl ${poppins.className}`}>{cardata.brand}</h2>
            <p className={`${poppins.className} opacity-60`}>{cardata.model}</p>
          </div>

          <div className={`w-120 ${poppins.className} mt-10`}>
            Lorem ipsum is typically a corrupted version of De finibus bonorum
            et malorum, a 1st-century BC text by the Roman statesman and
          </div>

          <div className="w-120 mt-10 rounded-lg bg-white">
            <h2 className={`${poppins.className} p-2 text-center`}>
              Key Specification
            </h2>
            <div className="flex flex-wrap">
              <div className="flex  justify-between p-3 w-60">
                <span className="flex gap-2">
                  <Fuel />
                  Petrol
                </span>

                <p>4L</p>
              </div>
              <div className="flex justify-between p-3 w-60">
                <span className="flex gap-2">
                  <RockingChair />
                  Seat
                </span>

                <p>4</p>
              </div>
              <div className="flex justify-between p-3 w-60">
                <span className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7 4v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4z"
                    ></path>
                  </svg>
                  Engine
                </span>

                <p>V2 Turbo</p>
              </div>
              <div className="flex justify-between p-3 w-60">
                <span className="flex gap-2">
                  <AirVent />
                  A/C
                </span>

                <p>Included</p>
              </div>
            </div>
          </div>

          <button className="border bg-[#10C979] text-white flex px-50 py-4 rounded-4xl mt-10 text-center">
            <ShoppingCart />
            Buy Car
          </button>
        </div>
      </section>
    </>
  );
};

export default page;
