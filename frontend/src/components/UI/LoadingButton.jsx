import React from "react";

const LoadingButton = () => {
  return (
    <button
      disabled
      className="bg-secondary/50 text-white px-6 py-[10px] rounded-md 
            flex items-center gap-2 hover:bg-secondary/75 transition-all ease-linear
            cursor-not-allowed ml-auto"
    >
      <span className="font-medium">Continue</span>
      <div className="border-t border-r  border-white rounded-full w-[14px] h-[14px] animate-spin"></div>
    </button>
  );
};

export default LoadingButton;
