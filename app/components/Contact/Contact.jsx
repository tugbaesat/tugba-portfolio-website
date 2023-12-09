"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Form from "./Form";
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";

const variants = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = i * 0.75;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const Contact = () => {
  const ref = useRef();
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const onIntersection = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    };

    const observer = new IntersectionObserver(onIntersection, {
      threshold: 0.5,
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className=" h-full bg-gradient-to-b to-[#dccccc] from-[#f1eaea]  dark:from-[#001b1d] dark:to-[#002f32] flex items-center gap-10 w-full m-auto overflow-hidden"
    >
      <motion.div
        variants={variants}
        className="flex flex-col flex-1 px-6 gap-2"
      >
        <motion.h2
          variants={variants}
          className="text-4xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#F8A000] dark:from-[#F0BE47] to-[#FFC500] dark:to-[#FFE182]  mb-6 font-bold"
        >
          Let&apos;s Connect
        </motion.h2>
        <motion.p variants={variants} className=" mb-4 max-w-md">
        Feel free to reach out—I&apos;m always open to new opportunities and collaborations.

        </motion.p>
        <motion.p variants={variants} className=" mb-4 max-w-md">
          You can use the form to contact me or reach out directly at{" "}
          <a
            className="underline text-blue-400"
            href="mailto:tugbaesatsahin@gmail.com"
          >
            tugbaesatsahin@gmail.com
          </a>
          .{" "}
        </motion.p>
        <motion.p variants={variants} className=" mb-4 max-w-md">
          Let&apos;s connect on social media:{" "}
        </motion.p>
        <motion.div
          variants={variants}
          className="flex flex-row gap-2 items-center justify-center md:justify-start"
        >
          <Link href="https://github.com/tugbaesat">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/tugbaesat/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div className="flex-1 px-6 items-center justify-center h-screen pt-[100px] relative">
        <AnimatePresence>
          {isInView && (
            <div className="flex justify-center items-center">
              <div className="w-1/3 flex justify-center items-center">
                <motion.svg
                  viewBox="0 0 64 38"
                  fill="none"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <motion.path
                    d="m27 22.2-4.8 10.012 8.391-7.115-8.391 7.115V20.4L61.375 1.125 22.2 20.4l-21-1.9c-.9-.3-1.4-1.3-1.1-2.3L60.8 0c.9.3 1.4 1.3 1.1 2.3L43.8 32.8c-.3.9-1.3 1.4-2.3 1.1L27 22.2 61.375 1.125 27 22.2z"
                    stroke="#6B6C6E"
                    variants={draw}
                    custom={1}
                  />
                </motion.svg>
              </div>
            </div>
          )}
        </AnimatePresence>
        <Form />
      </motion.div>
    </motion.div>
  );
};

export default Contact;