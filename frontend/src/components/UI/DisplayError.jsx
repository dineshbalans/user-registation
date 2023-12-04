import React from "react";

const DisplayError = ({ classname, errorMsg }) => {
  return <h1 className={`text-red-400 px-2 text-sm sml:w-[75%] text-center sml:text-start ml-auto ${classname}`}>{errorMsg}</h1>;
};

export default DisplayError;
