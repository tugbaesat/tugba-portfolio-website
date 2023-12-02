"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const AnimatedLink = ({ href, title }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link href={href}>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative cursor-pointer uppercase overflow-hidden text-sm"
      >
        <AnimatedWord
          title={title}
          href={href}
          animation={letterAnimation}
          isHovered={isHovered}
        />
        <div className="absolute top-0">
          <AnimatedWord
            title={title}
            href={href}
            animation={letterAnimationTwo}
            isHovered={isHovered}
          />
        </div>
      </motion.div>
    </Link>
  );
};

export default AnimatedLink;

const titleAnimation = {
  rest: {
    transition: {
      staggerChildren: 0.01,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.01,
    },
  },
};
const letterAnimation = {
  rest: {
    y: 0,
  },
  hover: {
    y: -20,
    transition: {
      duration: 0.55,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
};
const letterAnimationTwo = {
  rest: {
    y: 20,
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
};

const AnimatedWord = ({ title, animation, isHovered, href }) => {
  return (
    <motion.span
      href={href}
      variants={titleAnimation}
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
      className="relative whitespace-nowrap tracking-wide "
    >
      {title.split("").map((char, index) =>
        char === " " ? (
          <span key={index}>&nbsp;</span>
        ) : (
          <motion.span
            variants={animation}
            className="relative inline-block whitespace-nowrap tracking-wide "
            key={index}
          >
            {char}
          </motion.span>
        )
      )}
    </motion.span>
  );
};
