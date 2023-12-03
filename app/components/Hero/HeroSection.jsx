import React from "react";
import Image from "next/image";
import hero from "../../assets/tugba-hero.png";
import scroll from "../../assets/scroll.png";

// import resume from "../../assests/TugbaEsatSahin-Resume.pdf";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="pt-[100px] h-screen bg-gradient-to-b to-[#dccccc] from-[#f1eaea]  dark:from-[#001b1d] dark:to-[#002f32] overflow-hidden flex flex-col justify-center items-center md:flex-row text-center">
      <div className="w-1/3">
        <Image src={hero} alt="profile-picture" />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0BE47] to-[#FFE182] uppercase">
            Hello, I&apos;m Tugba!{" "}
          </span>
        </h1>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0BE47] to-[#FFE182] text-center sm:text-lg lg:text-xl mb-6 uppercase">
          a web developer <br />
          based in Los Angeles
        </p>
        <div className="flex">
        <button className="w-full items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium rounded-full group bg-gradient-to-br from-[#F0BE47] to-[#FFE182]   text-[#001b1d]">
          <span className="block px-5 py-2 transition-all duration-75 ease-in bg-[#FFE182] bg-opacity-0 rounded-full group-hover:bg-opacity-40">
            See My Latest Works
          </span>
        </button>
        <button className="w-full items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium rounded-full group bg-gradient-to-br from-[#F0BE47] to-[#FFE182]   text-[#001b1d]">
          <span className="block px-5 py-2 transition-all duration-75 ease-in bg-[#FFE182] bg-opacity-0 rounded-full group-hover:bg-opacity-40">
            Download CV
          </span>
        </button>
      </div>
        <Image src={scroll} alt="scroll-icon"/>
      </div>
     <div></div>
    </div>
  );
};

export default HeroSection;
