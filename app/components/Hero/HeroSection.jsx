import React from "react";
import Image from "next/image";
import hero from "../../assests/tugba-hero.png";
// import resume from "../../assests/TugbaEsatSahin-Resume.pdf";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="pt-[100px] h-screen bg-gradient-to-b to-[#dccccc] from-[#f1eaea]  dark:from-[#001b1d] dark:to-[#002f32] overflow-hidden flex">
      <div className="w-1/3">
        <Image src={hero} alt="profile-picture" />
      </div>
      <div>
        <h1 className="mb-4 text-4xl font-extrabold text-darkPurple sm:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purpleTwo to-pinkOne">
            Hello, I&apos;m{" "}
          </span>
        </h1>
        <p className="text-greyOne text-base sm:text-lg lg:text-xl mb-6">
          I&apos;m Tugba, a web developer <br />
          based in Los Angeles.
        </p>
      </div>
      <div>
        {/* <a href={resume} download="Resume">
          <button className="w-full sm:w-fit items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium rounded-full group bg-gradient-to-br from-purpleOne to-pinkOne group-hover:from-purpleOne group-hover:to-pinkOne text-purpleTwo focus:ring-4 focus:outline-none focus:ring-purpleOne">
            <span className="block px-5 py-2 transition-all duration-75 ease-in bg-pinkOne bg-opacity-50 rounded-full group-hover:bg-opacity-0">
              Download CV
            </span>
          </button>
        </a> */}
      </div>
    </div>
  );
};

export default HeroSection;
