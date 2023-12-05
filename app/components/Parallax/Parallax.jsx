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
      } w-full h-full relative flex justify-center items-center overflow-hidden`}
    >
      <motion.h1 style={{ y: yText }} className="text-7xl lg:text-8xl">
        {type === "about" ? "Who Am I?" : "What I Did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div  className="planets" style={{ y: yBg, backgroundImage: `url(${type === "about" ? "/planets.png" : "/sun.png"})`}}></motion.div>
      <motion.div style={{ x: yText }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
