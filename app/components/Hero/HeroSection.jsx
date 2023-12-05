"use client";
import React from "react";
import Image from "next/image";
import hero from "../../../public/tugba-hero.png";
import scroll from "../../../public/scroll.png";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollBtn: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const bottomSliderVariants = {
  initial: {
    x: -100,
  },
  animate: {
    x: "-600%",
    transition: {
      duration: 15,
      repeat: Infinity,
    },
  },
};
const HeroSection = () => {
  return (
    <div className=" pt-[100px] h-screen bg-gradient-to-b to-[#dccccc] from-[#f1eaea]  dark:from-[#001b1d] dark:to-[#002f32] overflow-hidden flex flex-col justify-center items-center md:flex-row text-center">
      <div className="w-1/3 z-10">
        <Image src={hero} alt="profile-picture" />
      </div>
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="flex flex-col items-center z-10"
      >
        <motion.h1
          variants={textVariants}
          className="mb-4 text-4xl font-extrabold sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#F8A000] dark:from-[#F0BE47] to-[#FFC500] dark:to-[#FFE182] uppercase"
        >
          Hello, I&apos;m Tugba!
        </motion.h1>
        <motion.p
          variants={textVariants}
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#F8A000] dark:from-[#F0BE47] to-[#FFC500] dark:to-[#FFE182] text-center sm:text-lg lg:text-xl mb-6 uppercase"
        >
          a web developer <br />
          based in Los Angeles
        </motion.p>
        <motion.div variants={textVariants} className="flex">
          <motion.button
            variants={textVariants}
            className="w-full items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium rounded-full group bg-gradient-to-br from-[#F8A000] dark:from-[#F0BE47] to-[#FFC500] dark:to-[#FFE182] text-[#f1eaea]  dark:text-[#001b1d]"
          >
            <motion.span
              variants={textVariants}
              className="block px-5 py-3 transition-all duration-75 ease-in bg-[#FFE182] bg-opacity-0 rounded-full group-hover:bg-opacity-40"
            >
              See My Latest Works
            </motion.span>
          </motion.button>
          <motion.button
            variants={textVariants}
            className="w-full items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium rounded-full group bg-gradient-to-br from-[#F8A000] dark:from-[#F0BE47] to-[#FFC500] dark:to-[#FFE182] text-[#f1eaea]  dark:text-[#001b1d]"
          >
            <motion.span
              variants={textVariants}
              className="block p-5 transition-all duration-75 ease-in bg-[#FFE182] bg-opacity-0 rounded-full group-hover:bg-opacity-40"
            >
              Download My CV
            </motion.span>
          </motion.button>
        </motion.div>
        <motion.div variants={textVariants} animate="scrollBtn">
          <Image src={scroll} alt="scroll-icon" />
        </motion.div>
      </motion.div>
      {/* <motion.div
        variants={bottomSliderVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-[3%] text-[30vh] whitespace-nowrap text-gray-400 w-1/2 font-bold opacity-20"
      >
        Engineer Full Stack Web Developer
      </motion.div> */}
    </div>
  );
};

export default HeroSection;
