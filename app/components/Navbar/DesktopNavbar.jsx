import React from "react";
import AnimatedLink from "./AnimatedLink";

const DesktopNavbar = ({navLinks}) => {
  return (
    <div className="hidden md:block md:w-auto px-6" id="navbar">
      <ul
        id="navLinks"
        className="flex p-4 mt-0 md:p-0 md:flex-row md:space-x-8 "
      >
        {navLinks.map((link) => (
          <li key={link.id} className="relative">
            <AnimatedLink
              href={link.path}
              title={link.title}
              isLast={link.id + 1 === navLinks.length}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesktopNavbar;
