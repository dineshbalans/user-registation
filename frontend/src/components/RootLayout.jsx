import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import LOGO from "../assets/media/logos/logo.png";
import { sideBarItems } from "../data/sideBarData";

const RootLayout = () => {
  return (
    <section className="flex flex-wrap container mx-auto justify-between">
      <ScrollRestoration />
      <div className="w-full lg:w-[39%] lg:h-screen lg:sticky top-0 overflow-y-scroll pt-12">
        <img
          src={LOGO}
          alt=""
          className="object-contain w-[45%] mx-auto py-16"
        />
        {sideBarItems.map(({ id, secNo, title, subTitle }) => (
          <div className="flex pb-12 justify-center" key={id}>
            <div className="flex gap-4 sml:w-[54%] justify-center lg:justify-normal">
              <div
                className=" w-12 flex items-center 
          justify-center rounded-lg bg-primary
          text-lg font-semibold text-white"
              >
                {secNo}{" "}
              </div>
              <div className="">
                <h3 className="font-bold text-xl text-ternary">{title}</h3>
                <div className="text-sm font-medium text-gray-500">
                  {subTitle}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="pb-8 text-primary text-[13px] font- flex justify-center">
          <div className="flex gap-8">
            <h4 className="cursor-pointer">Terms</h4>
            <h4 className="cursor-pointer">Plans</h4>
            <h4 className="cursor-pointer">Contact Us</h4>
          </div>
        </div>
      </div>
      <div className="w-full px-5 py-10 lg:w-[61%]">
        <Outlet />
      </div>
    </section>
  );
};

export default RootLayout;
