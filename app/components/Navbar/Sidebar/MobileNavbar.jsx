"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import MobileNavLink from "./MobileNavLink";
import ToggleButton from "./ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MobileNavbar = ({ navLinks }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="md:hidden flex flex-col items-center justify-center bg-[#E6F4FC] dark:bg-[#11435E] text-[#868686] dark:text-[#ABABAB]"
      animate={open ? "open" : "closed"}
    >
      <motion.div
        variants={variants}
        className=" z-10 fixed top-0 left-0 bottom-0 right-0 w-1/2 bg-white"
      >
        <MobileNavLink navLinks={navLinks} />
      </motion.div>
      <ToggleButton open={open} setOpen={setOpen} />
    </motion.div>
  );
};

export default MobileNavbar;
