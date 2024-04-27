"use client";
import React, { useRef, useState, useTransition } from "react";
import Image from "next/image";
import pc from "../../../public/pc.jpeg";
import { motion, useInView } from "framer-motion";
import TabButton from "./TabButton";
import TAB_DATA from "./TabData";

const About = () => {
  const variants = {
    initial: {
      x: -200,
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

  const [tab, setTab] = useState(TAB_DATA[0].id);
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  const currentTabData = TAB_DATA.find((t) => t.id === tab);

  return (
    <motion.div
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
      className=" pt-[120px] h-screen bg-gradient-to-b to-[#dccccc] from-[#f1eaea]  dark:from-[#001b1d] dark:to-[#002f32] overflow-hidden flex flex-col justify-center items-center text-center gap-2 md:gap-10"
    >
      <motion.div variants={variants} className="flex flex-col items-center justify-center md:flex-row md:gap-4">
        <Image
          src={pc}
          alt="old computer image"
          className="object-cover w-60 md:w-40 md:h-20 rounded-3xl "
        />
        <h2 className="text-3xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#F8A000] dark:from-[#F0BE47] to-[#FFC500] dark:to-[#FFE182] text-center">
          {" "}
          <b>About </b> Me
        </h2>
      </motion.div>
      <motion.p variants={variants} className="w-full px-4 text-xs text-center lg:w-1/2 md:text-xl">
        I am a web developer with a strong engineering background, offering a
        unique mix of technical proficiency and creative problem-solving skills.
        I am passionate about creating seamless, user-friendly websites and
        bring a systematic and analytical approach to development, rooted in my
        engineering foundation.
      </motion.p>
      <motion.div variants={variants} className="lg:w-[48rem]">
        <h3 className="text-xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#F8A000] dark:from-[#F0BE47] to-[#FFC500] dark:to-[#FFE182] text-center py-2 ">
          Tech Stack
        </h3>

        <div className="flex flex-col gap-2 px-6 text-left md:flex-row">
          {TAB_DATA.map((tabData) => (
            <TabButton
              key={tabData.id}
              selectTab={() => handleTabChange(tabData.id)}
              active={tab === tabData.id}
            >
              {tabData.title}
            </TabButton>
          ))}
        </div>
        <div className="mt-6 text-xs text-left">
          {currentTabData ? currentTabData.content : null}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;

