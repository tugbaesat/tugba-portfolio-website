import React from "react";

const Parallax = ({ type }) => {
  return (
    <div className="">
      <h1>{type === "about" ? "Who Am I?" : "What I Did?"}</h1>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Parallax;
