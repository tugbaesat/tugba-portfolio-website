import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button onClick={selectTab}>
      <p
        className={`md:mr-3 text-xs text-center ${
          active ? "underline md:font-semibold" : "dark:text-[#cbcbcb] text-[#2e2e2e]"
        } `}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
