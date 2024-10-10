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
      className="md:hidden flex flex-col items-center justify-center bg-[#dccccc] dark:bg-[#002A2E] text-[#494949] dark:text-[#868686]"
      animate={open ? "open" : "closed"}
    >
      <motion.div
        variants={variants}
        className="fixed top-0 bottom-0 left-0 right-0 z-10 w-full bg-dark-primary-bg"
      >
        <MobileNavLink open={open} setOpen={setOpen} navLinks={navLinks} />
      </motion.div>
      <ToggleButton open={open} setOpen={setOpen} />
    </motion.div>
  );
};

export default MobileNavbar;
