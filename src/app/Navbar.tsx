"use client";

import React from "react";
import { Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Navbar = () => {
  const [isopen, setIsopen] = useState(false);
  return (
    <>
      <header className="sticky p-2 top-0 bg-white shadow-md z-50 ">
        <div className="flex justify-between items-center md:ml-40 md:mr-40">
          <div>Car Dhekho</div>

          <div className="">
            <form action="" className="flex items-center gap-2">
              <div className="flex items-center border px-2 py-1 rounded-2xl gap-1 md:w-100">
                <Input
                  placeholder="Search or Ask a Question"
                  className="ml-2 bg-transparent border border-none focus:outline-none focus:ring-0 px-2 py-1"
                />
                <Search className="text-gray-400" size={18} />
              </div>
            </form>
          </div>
          <div className="md:hidden">
            <Menu className="relative" onClick={() => setIsopen(!isopen)} />
            {isopen && (
              <div className="border absolute right-0 top-10 bg-white ">
                <ul>
                  <li className="p-3">Home</li>
                  <li className="p-3">About</li>
                  <li className="p-3">Services</li>
                  <li className="p-3">Contact</li>
                  <li className="p-3">Login</li>
                </ul>
              </div>
            )}
          </div>
          <div className="hidden md:block">
            <p>Login/Regester</p>
          </div>
        </div>

        <nav>
          <div className="flex md:ml-40 md:mr-40 mt-3 justify-between z-10 mb-3">
            <div className="flex items-center gap-11 ">
              <div className="group relative">
                <div className="flex gap-2 cursor-pointer ">New Car</div>

                <div className="flex flex-col gap-2 group-hover:block hidden delay-[1s] border w-60 mt-1 cursor-pointer absolute top-5 bg-white z-10">
                  <p className="border-b-2 p-3 ">Explore car</p>
                  <p className="border-b-2 p-3 ">Explore car</p>
                  <p className="border-b-2 p-3 ">Explore car</p>
                  <p className="border-b-2 p-3 ">Explore car</p>
                  <p className="border-b-2 p-3 ">Explore car</p>
                  <p className="border-b-2 p-3 ">Explore car</p>
                </div>
              </div>

          
            </div>

            <div className="flex items-center justify-center">
              <p className="text-gray-400">Select city</p>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
