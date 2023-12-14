import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button onClick={selectTab}>
      <p
        className={`md:mr-3 text-xs text-center ${
          active ? "underline md:font-semibold" : "dark:text-[#767474] text-[#494949]"
        } `}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
