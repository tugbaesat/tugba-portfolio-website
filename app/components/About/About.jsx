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
      className=" pt-[120px] h-screen bg-gradient-to-b from-dark-secondary-bg to-dark-primary-bg overflow-hidden flex flex-col justify-center items-center text-center gap-2 md:gap-10 lg:flex-row lg:justify-center lg:items-start"
    >
      <motion.div
        variants={variants}
        className="flex flex-col items-center justify-center md:gap-4 lg:items-start"
      >
        <Image
          src={pc}
          alt="old computer image"
          className="object-cover w-60 md:w-40 md:h-20 rounded-3xl "
        />
        <h2 className="text-3xl text-center text-transparent md:text-7xl bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
          {" "}
          <b>About </b> Me
        </h2>
      </motion.div>
      <motion.div
        variants={variants}
        className="w-full px-4 text-xs text-center lg:text-left lg:w-1/2 md:text-xl lg:flex lg:flex-col lg:gap-6 "
      >
        <motion.p variants={variants}>
          I’m a Web Developer & Designer based in Los Angeles, CA.
          With a strong background in UX/UI design and frontend development, I
          thrive on creating seamless, user-centric digital experiences that
          blend functionality with aesthetics. My work is driven by a commitment
          to detail, performance optimization, and delivering results that
          exceed client expectations.
        </motion.p>
        <motion.p variants={variants}>
          I have experience designing and developing high-conversion websites
          and applications using modern frameworks like React.js and Tailwind
          CSS, ensuring a focus on responsive design and accessibility. I’m also
          skilled in SEO optimization where I ensure 100% performance,
          accessibility, and SEO rankings.
        </motion.p>
        <motion.p variants={variants}>
          I’m always excited to work on innovative projects that push the
          boundaries of design and technology. My passion for continuous
          learning keeps me up-to-date with the latest trends, and I’m always
          looking for new opportunities to grow and take on exciting challenges.
        </motion.p>
      </motion.div>
      {/* <motion.div variants={variants} className="lg:w-[48rem]">
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
      </motion.div> */}
    </motion.div>
  );
};

export default About;
