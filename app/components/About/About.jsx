"use client";
import React, { useRef } from "react";
import Image from "next/image";
import pc from "../../../public/pc.jpeg";
import { motion, useInView } from "framer-motion";

const About = () => {
  const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
      className=" h-screen bg-gradient-to-b to-[#dccccc] from-[#f1eaea]  dark:from-[#001b1d] dark:to-[#002f32] overflow-hidden flex flex-col justify-center items-center text-center gap-10"
    >
      <motion.div
        variants={variants}
        className="flex items-center justify-center gap-6"
      >
        <Image
          src={pc}
          alt="old computer image"
          className="object-cover w-20 h-10 md:w-36 md:h-16 rounded-3xl "
        />
        <h2 className="text-4xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#F8A000] dark:from-[#F0BE47] to-[#FFC500] dark:to-[#FFE182] text-center mb-6">
          {" "}
          <motion.b whileHover={{ color: "pink" }}>About </motion.b> Me
        </h2>
      </motion.div>
      <p className="w-1/2 text-transparent bg-clip-text bg-gradient-to-r from-[#F8A000] dark:from-[#F0BE47] to-[#FFC500] dark:to-[#FFE182] text-center sm:text-lg lg:text-xl mb-6">
        I am a web developer with a strong engineering background, offering a
        unique mix of technical proficiency and creative problem-solving skills.
        I am passionate about creating seamless, user-friendly websites and
        bring a systematic and analytical approach to development, rooted in my
        engineering foundation.
      </p>
    </motion.div>
  );
};

export default About;
