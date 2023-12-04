import React from "react";
import { PiSealWarningDuotone } from "react-icons/pi";
import PreviousButton from "./UI/PreviousButton";

const WindUpPage = () => {
  return (
    <section className="mdl:px-20 mdl:py-44 text-sm font-[420] space-y-10">
      <div className="space-y-1">
        <h3 className="text-xl font-medium">Your Are Done!</h3>
        <h6 className="text-sm text-gray-400 font-medium">
          If you need more info, please
          <span className="text-secondary cursor-pointer"> Sign in</span>{" "}
        </h6>
      </div>
      <div className="space-y-4">
        <h6 className="text-gray-400 text-[13.5px] ">
          Writing headlines for blog posts is as much an art as it is a science
          and probably warrants its own post, but for all advise is with what
          works for your great & amazing audience.
        </h6>
        <div
          className="bg-[#FFF8DD] p-3 mdl:p-6 rounded-md border 
        border-dashed border-[#FFC700] flex items-center gap-5"
        >
          <div className="p-2">
            <PiSealWarningDuotone className="scale-[2.5] text-[#FFC700]" />
          </div>
          <div className="space-y-1">
            <h3 className="text-[16px] font-medium">We need your attention!</h3>
            <h6 className="text-sm text-gray-500 font-medium">
              To start using great tools, please,
              <span className="text-secondary cursor-pointer">
                {" "}
                Create Team Platform
              </span>{" "}
            </h6>
          </div>
        </div>
      </div>
      <div className="flex">
        <PreviousButton URL="/support" />
      </div>
    </section>
  );
};

export default WindUpPage;
