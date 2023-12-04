import React from "react";
import { FaAngleRight } from "react-icons/fa";

const NextButton = ({ dispText = "Continue", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-secondary/90 text-white px-6 py-[10px] rounded-md 
          flex items-center gap-2 hover:bg-secondary transition-all ease-linear"
    >
      <span className="font-medium">{dispText}</span>
      <FaAngleRight className="scale-110" />
    </button>
  );
};

export default NextButton;
