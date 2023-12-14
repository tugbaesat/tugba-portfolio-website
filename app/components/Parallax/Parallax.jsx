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
          ? "bg-gradient-to-b from-[#dccccc] to-[#f1eaea]  dark:to-[#001b1d] dark:from-[#002f32]"
          : "bg-gradient-to-b to-[#dccccc] from-[#f1eaea]  dark:from-[#001b1d] dark:to-[#002f32]"
      } w-full h-screen py-20 relative  text-center flex justify-center items-center overflow-hidden`}
    >
      <motion.h1 style={{ y: yText }} className="pb-40 text-7xl lg:text-8xl">
        {type === "about" ? "Who Am I?" : "What I Did?"}
      </motion.h1>
      <motion.div className="mountains bg-contain bg-no-repeat md:bg-cover bg-bottom w-full h-full absolute"></motion.div>
      <motion.div
        className="planets bg-contain bg-no-repeat md:bg-cover bg-center w-full h-full absolute"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "about" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yText }} className="stars  bg-no-repeat bg-cover bg-center w-full h-full absolute"></motion.div>
    </div>
  );
};

export default Parallax;
