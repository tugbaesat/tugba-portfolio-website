"use client";
import React from "react";
import Image from "next/image";
import hero from "../../../public/cartoon.png";
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
    <div className=" pt-[100px] h-screen bg-gradient-to-b to-dark-secondary-bg from-dark-primary-bg  overflow-hidden">
      <div className="flex flex-col items-center gap-6 text-center justify-evenly lg:flex-row  h-[60vh] home lg:items-start">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          className="w-1/3 "
        >
          <Image src={hero} alt="profile-picture" />
        </motion.div> */}
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="z-10 flex flex-col items-center h-full gap-6 lg:justify-between"
        >
          <motion.h1
            variants={textVariants}
            className="mt-0 mb-4 text-4xl font-extrabold text-transparent uppercase sm:text-5xl lg:text-9xl bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary"
          >
            Hello, it&apos;s Tugba!
          </motion.h1>
          <motion.p variants={textVariants} className="mb-6">
            <span className="text-center text-transparent uppercase bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary sm:text-lg lg:text-5xl">
              web developer <br />
            </span>
            <span className="uppercase sm:text-lg lg:text-4xl">📍</span>
            <span className="text-center text-transparent uppercase bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary sm:text-lg lg:text-4xl">
              Los Angeles, CA
            </span>
          </motion.p>
          <motion.div variants={textVariants} className="flex gap-8">
            {/* <a href="#portfolio">
              <motion.button
                variants={textVariants}
                className="w-40 lg:w-64 items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium rounded-full group bg-gradient-to-br from-brand-primary to-brand-secondary text-light-primary-text"
              >
                <motion.span className="block p-5 transition-all duration-75 ease-in bg-opacity-0 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary group-hover:bg-opacity-40">
                  Latest Works
                </motion.span>
              </motion.button>
            </a> */}

            <div class="relative inline-flex group">
              <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <a
                href="#portfolio"
                class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                {" "}
                <motion.button variants={textVariants}>
                  <motion.span>Latest Works</motion.span>
                </motion.button>
              </a>
            </div>
            <div class="relative inline-flex  group">
              <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <a
                href="https://drive.google.com/file/d/1DA7l5RIx3jcJt7CQstkZp6dyF3s2a4lL/view?usp=drive_link"
                class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                {" "}
                <motion.button variants={textVariants}>
                  <motion.span> Resumé</motion.span>
                </motion.button>
              </a>
            </div>
            {/* <a href="https://drive.google.com/file/d/1DA7l5RIx3jcJt7CQstkZp6dyF3s2a4lL/view?usp=drive_link">
              <motion.button
                variants={textVariants}
                className="w-40 lg:w-64 items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium rounded-full group bg-gradient-to-br from-brand-primary to-brand-secondary text-light-primary-text"
              >
                <motion.span className="block p-5 transition-all duration-75 ease-in bg-opacity-0 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary group-hover:bg-opacity-40">
                  Resumé
                </motion.span>
              </motion.button>
            </a> */}
          </motion.div>
        </motion.div>
      </div>
      <div className="-z-1 text-5xl md:text-7xl lg:text-[140px] absolute bottom-10 lg:bottom-[10%] right-0 left-0 text-center opacity-40 font-extrabold">
        <TypeAnimation
          sequence={[
            "Engineer",
            1000,
            "Designer",
            1000,
            "Frontend Developer",
            1000,
            "Web Developer",
            1000,
            "Web Designer",
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
