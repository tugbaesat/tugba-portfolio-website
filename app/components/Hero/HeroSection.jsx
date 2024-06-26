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
    <div className=" pt-[100px] h-screen bg-gradient-to-b to-[#dccccc] from-[#f1eaea]  dark:from-[#001b1d] dark:to-[#002f32] overflow-hidden">
      <div className="flex flex-col items-center gap-6 text-center justify-evenly lg:flex-row">
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          className="z-10 w-1/3"
        >
          <Image src={hero} alt="profile-picture" />
        </motion.div>
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="z-10 flex flex-col items-center gap-6"
        >
          <motion.h1
            variants={textVariants}
            className="mb-4 text-4xl font-extrabold sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#F8A000] dark:from-[#F0BE47] to-[#FFC500] dark:to-[#FFE182] uppercase"
          >
            Hello, I&apos;m Tugba!
          </motion.h1>
          <motion.p variants={textVariants} className="mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F8A000] dark:from-[#F0BE47] to-[#FFC500] dark:to-[#FFE182] text-center sm:text-lg lg:text-xl  uppercase">
              web developer <br />
            </span>
            📍 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F8A000] dark:from-[#F0BE47] to-[#FFC500] dark:to-[#FFE182] text-center sm:text-lg lg:text-xl  uppercase">Los Angeles, CA</span> 
          </motion.p>
          <motion.div variants={textVariants} className="flex">
            <a href="#portfolio">
              <motion.button
                variants={textVariants}
                className="w-40 lg:w-64 items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium rounded-full group bg-gradient-to-br from-[#F8A000] dark:from-[#F0BE47] to-[#FFC500] dark:to-[#FFE182] text-[#f1eaea]  dark:text-[#001b1d]"
              >
                <motion.span className="block p-5 transition-all duration-75 ease-in bg-[#FFE182] bg-opacity-0 rounded-full group-hover:bg-opacity-40">
                  Latest Works
                </motion.span>
              </motion.button>
            </a>
            <a href="https://drive.google.com/file/d/1DA7l5RIx3jcJt7CQstkZp6dyF3s2a4lL/view?usp=drive_link">
              <motion.button
                variants={textVariants}
                className="w-40 lg:w-64 items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium rounded-full group bg-gradient-to-br from-[#F8A000] dark:from-[#F0BE47] to-[#FFC500] dark:to-[#FFE182] text-[#f1eaea]  dark:text-[#001b1d]"
              >
                <motion.span className="block p-5 transition-all duration-75 ease-in bg-[#FFE182] bg-opacity-0 rounded-full group-hover:bg-opacity-40">
                  Resumé
                </motion.span>
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>
      <div className="-z-1 text-5xl md:text-7xl lg:text-[140px] absolute bottom-10 lg:bottom-[10%] right-0 left-0 text-center opacity-40 font-extrabold">
        <TypeAnimation
          sequence={[
            "Engineer",
            1000,
            "Full Stack Developer",
            1000,
            "Frontend Developer",
            1000,
            "Web Developer",
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
