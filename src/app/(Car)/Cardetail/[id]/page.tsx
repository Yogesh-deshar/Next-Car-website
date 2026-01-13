"use client";
import { poppins } from "@/font/font";
import { CarData } from "@/Type/datas/CarData";
import { AirVent, Fuel, RockingChair, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const cardata = CarData;
  const data = React.use(params);
  const cardatas = cardata.find((car) => car.id === Number(data.id));

  const router = useRouter();

  const clickEvent = (id: number) => {
    router.push(`/Cardetail/${id}`);
  };

  if (!cardatas) {
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
              src={cardatas.image}
              alt="car image"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            <Image
              src={cardatas.image}
              alt="car image"
              width={140}
              height={40}
              className="object-cover border border-black rounded-lg mt-1 mr-2"
            />

            <Image
              src={cardatas.image}
              alt="car image"
              width={140}
              height={40}
              className="object-cover border border-black rounded-lg mt-1 mr-2"
            />

            <Image
              src={cardatas.image}
              alt="car image"
              width={140}
              height={40}
              className="object-cover border border-black rounded-lg mt-1 mr-2"
            />

            <Image
              src={cardatas.image}
              alt="car image"
              width={140}
              height={40}
              className="object-cover border border-black rounded-lg mt-1 mr-2"
            />

            <Image
              src={cardatas.image}
              alt="car image"
              width={140}
              height={40}
              className="object-cover border border-black rounded-lg mt-1 mr-2"
            />
          </div>
        </div>

        <div>
          <div>
            <h2 className={`text-4xl ${poppins.className}`}>
              {cardatas.brand}
            </h2>
            <p className={`${poppins.className} opacity-60`}>
              {cardatas.model}
            </p>
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

      <section
        className={` md:ml-20 md:mr-20 lg:ml-40 lg:mr-40 border h-[400px] rounded-2xl  mt-3 ${poppins.className} font-sans bg-gray-100`}
        id="someofourcar-section"
      >
        <p className="p-3 text-2xl ml-8 mt-5 text-center">You may also like</p>

        <div className="flex gap-5 overflow-x-scroll no-scrollbar p-3">
          {cardata.map((data, i) => {
            return (
              <div key={i} className="w-90 border rounded-lg h-72">
                <Image
                  src={data.image}
                  alt={data.brand}
                  width={200}
                  height={100}
                  className="w-full aspect-[2/1]  object-cover rounded-lg "
                />
                <p className="mt-2 text-lg font-medium ml-3">{data.brand}</p>
                <p className="text-gray-500 ml-3 text-sm">RS 18000000</p>
                <button
                  className="mx-10 mt-2 object-center  border border-blue-400 text-blue-400 px-4 py-2 rounded-lg w-60"
                  onClick={() => clickEvent(data.id)}
                >
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

export default Page;
