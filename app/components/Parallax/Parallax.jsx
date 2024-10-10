"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  return (
    <div
      ref={ref}
      className={`${
        type === "about"
          ? "bg-gradient-to-b from-dark-secondary-bg to-dark-primary-bg "
          : "bg-gradient-to-b to-dark-secondary-bg from-dark-primary-bg "
      } w-full h-screen py-20 relative  text-center flex justify-center items-center overflow-hidden`}
    >
      <motion.h1 style={{ y: yText }} className="pb-40 text-7xl lg:text-8xl">
        {type === "about" ? "Who Am I?" : "What I Did?"}
      </motion.h1>
      <motion.div className="absolute w-full h-full bg-bottom bg-no-repeat bg-contain mountains md:bg-cover"></motion.div>
      <motion.div
        className="absolute w-full h-full bg-center bg-no-repeat bg-contain planets md:bg-cover"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "about" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yText }} className="absolute w-full h-full bg-center bg-no-repeat bg-cover stars"></motion.div>
    </div>
  );
};

export default Parallax;
