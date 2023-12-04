import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const PreviousButton = ({ URL = "/", dispText = " Previous" }) => {
  return (
    <Link to={URL}>
      <button
        className="bg-[#F1FAFF] text-secondary hover:text-white px-6 py-[10px] rounded-md 
          flex items-center gap-2 hover:bg-secondary transition-all ease-linear"
      >
        <FaAngleLeft className="scale-110" />
        <span className="font-medium">{dispText}</span>
      </button>
    </Link>
  );
};

export default PreviousButton;
