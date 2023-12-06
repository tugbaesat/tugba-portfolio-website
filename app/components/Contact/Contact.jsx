"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Form from "./Form";
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import plane from "../../../public/plane.svg";

const variants = {
  initial: { y: 500, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      whileInView="animate"
      className=" h-full bg-gradient-to-b to-[#dccccc] from-[#f1eaea]  dark:from-[#001b1d] dark:to-[#002f32] flex items-center gap-10 w-full m-auto"
    >
      <motion.div variants={variants} className="flex-1 px-6">
        <motion.h2
          variants={variants}
          className="text-4xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#F8A000] dark:from-[#F0BE47] to-[#FFC500] dark:to-[#FFE182]  mb-6 font-bold"
        >
          Let&apos;s Connect
        </motion.h2>
        <motion.p variants={variants} className=" mb-4 max-w-md">
          Feel free to contact me. I&apos;m always open to new opportunities and
          collaborations.{" "}
        </motion.p>
        <motion.div
          variants={variants}
          className="flex flex-row gap-2 socials items-center justify-center md:justify-start"
        >
          <Link href="https://github.com/tugbaesat">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/tugbaesat/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </motion.div>
      </motion.div>
      <div className="flex-1 px-6 items-center justify-center relative">
        <motion.div
          className="m-auto w-1/2 absolute top-[30%] -z-10"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M27,22.2 l-4.8,10.012l8.391-7.115L22.2,32.212V20.4L61.375,1.125L22.2,20.4l-21-1.9c-0.9-0.3-1.4-1.3-1.1-2.3L60.8,0 c0.9,0.3,1.4,1.3,1.1,2.3L43.8,32.8c-0.3,0.9-1.3,1.4-2.3,1.1L27,22.2L61.375,1.125L27,22.2z M59.2,6.5L30.7,25.2"
              fill="none"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </motion.svg>
        </motion.div>
        <Form />
      </div>
    </motion.div>
  );
};

export default Contact;
