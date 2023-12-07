"use client";
import React from "react";
import Image from "next/image";
import hero from "../../../public/tugba-hero.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

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

const variants = {
  initial: {
    x: -500,
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
};

const HeroSection = () => {
  return (
    <div className=" pt-[100px] h-screen bg-gradient-to-b to-[#dccccc] from-[#f1eaea]  dark:from-[#001b1d] dark:to-[#002f32] overflow-hidden ">
      <div className="flex flex-col justify-evenly items-center md:flex-row text-center">
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          className="w-1/3 z-10"
        >
          <Image src={hero} alt="profile-picture" />
        </motion.div>
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
          <motion.p variants={textVariants} className="mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F8A000] dark:from-[#F0BE47] to-[#FFC500] dark:to-[#FFE182] text-center sm:text-lg lg:text-xl  uppercase">
              a web developer <br />
              based in Los Angeles, CA{" "}
            </span>
            📍
          </motion.p>
          <motion.div variants={textVariants} className="flex">
            <motion.button
              variants={textVariants}
              className="w-64 items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium rounded-full group bg-gradient-to-br from-[#F8A000] dark:from-[#F0BE47] to-[#FFC500] dark:to-[#FFE182] text-[#f1eaea]  dark:text-[#001b1d]"
            >
              <motion.span className="block p-5 transition-all duration-75 ease-in bg-[#FFE182] bg-opacity-0 rounded-full group-hover:bg-opacity-40">
                Latest Works
              </motion.span>
            </motion.button>
            <motion.button
              variants={textVariants}
              className="w-64 items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium rounded-full group bg-gradient-to-br from-[#F8A000] dark:from-[#F0BE47] to-[#FFC500] dark:to-[#FFE182] text-[#f1eaea]  dark:text-[#001b1d]"
            >
              <motion.span className="block p-5 transition-all duration-75 ease-in bg-[#FFE182] bg-opacity-0 rounded-full group-hover:bg-opacity-40">
                Resumé
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <div className="-z-1 text-[140px] absolute bottom-0 right-0 left-0 text-center opacity-40 font-extrabold">
        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            1000,
            "Engineer",
            1000,
            "Frontend Developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default HeroSection;
