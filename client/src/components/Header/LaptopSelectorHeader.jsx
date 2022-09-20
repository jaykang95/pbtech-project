import React from "react";
import logo from "../../images/logo.png";

const LaptopFinderHeader = ({ setLaptopSelector }) => {
  return (
    <div className="flex flex-col items-start justify-between border-b border-solid border-slate-200 bg-sky-900">
      <div className="pl-20 border-b border-solid border-white w-full">
        <a href="/">
          <span className="sr-only">Your Company</span>
          <img className="h-36" src={logo} alt="" />
        </a>
      </div>
      <div className="h-10">
      </div>
      <div className="bg-white flex flex-row justify-evenly text-black w-full text-center">
        <a className="border border-solid rounded-r-lg border-slate-300 w-full">
            Category
        </a>
        <a className="border border-solid rounded-r-lg border-slate-300 w-full">
            Price Range
        </a>
        <a className="border border-solid rounded-r-lg border-slate-300 w-full">
            Purpose
        </a>
        <a className="border border-solid rounded-r-lg border-slate-300 w-full">
            Storage
        </a>
        <a className="border border-solid rounded-r-lg border-slate-300 w-full">
            Features
        </a>
      </div>
    </div>
  );
};

export default LaptopFinderHeader;
