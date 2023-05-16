import React from "react";

const AnimatedChevron = ({ isOpen }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="20"
      width="20"
      fill="white"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`animated-chevron ${isOpen ? "open" : ""}`}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
};

export default AnimatedChevron;
