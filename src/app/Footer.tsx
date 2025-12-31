import { poppins } from "@/font/font";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className={`bg-gray-100 mt-5 ${poppins.variable} font-sans`}>
        <div className="md:flex justify-between lg:mx-40 md:mx-20 py-10">
          <h2 className={`${poppins.variable} font-sans text-4xl`}>logo</h2>

          <div className="flex gap-5 lg:gap-20 md:gap-10">
            <div>
              <h2 className="text-2xl">About Us</h2>
              <ul>
                <li>What we do</li>
                <li>How we assist you</li>
                <li>Our team</li>
                <li>How we work</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl">Contact Us</h2>
              <ul>
                <li className="flex items-center">
                  <FacebookIcon className="w-3 h-3" /> Facebook{" "}
                </li>
                <li className="flex items-center">
                  <InstagramIcon className="w-3 h-3" /> Instagram{" "}
                </li>
                <li className="flex items-center">
                  <TwitterIcon className="w-3 h-3" /> Twitter{" "}
                </li>
                <li className="flex items-center">
                  <LinkedinIcon className="w-3 h-3" /> LinkedIn{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
