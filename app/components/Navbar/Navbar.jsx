"use client";
import React from "react";
import Link from "next/link";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./Sidebar/MobileNavbar";
import { motion } from "framer-motion";

const navLinks = [
  {
    title: "Home",
    id: 1,
    path: "/#home",
  },
  {
    title: "About",
    id: 2,
    path: "/#about",
  },
  {
    title: "Portfolio",
    id: 3,
    path: "/#portfolio",
  },
  {
    title: "Contact",
    id: 4,
    path: "/#contact",
  },
  // {
  //   title: "All Projects",
  //   id: 5,
  //   path: "/projects",
  // },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 flex justify-between md:items-center">
      <MobileNavbar navLinks={navLinks} />
      <motion.div
        className="p-6"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Link href={"/"} className="text-4xl font-semibold text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
          TUGBA
        </Link>
      </motion.div>
      <DesktopNavbar navLinks={navLinks} />
    </nav>
  );
};

export default Navbar;
