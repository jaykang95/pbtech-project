import React from "react";
import logo from "../../images/logo.png";

const LaptopFinderHeader = ({ closeModal }) => {
  return (
    <div className="flex flex-row justify-between bg-sky-900">
      <div className="pl-20 w-full flex text-white gap-4">
        <a href="/">
          <span className="sr-only">Your Company</span>
          <img className="h-36" src={logo} alt="" />
        </a>
        <div className="my-auto text-4xl">Laptop Finder</div>
      </div>
      <div className="w-full text-white my-auto fill-white">
        <button
          className="float-right mr-24"
          onClick={closeModal}
        >
          <svg
            className="w-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M180.7 180.7C186.9 174.4 197.1 174.4 203.3 180.7L256 233.4L308.7 180.7C314.9 174.4 325.1 174.4 331.3 180.7C337.6 186.9 337.6 197.1 331.3 203.3L278.6 256L331.3 308.7C337.6 314.9 337.6 325.1 331.3 331.3C325.1 337.6 314.9 337.6 308.7 331.3L256 278.6L203.3 331.3C197.1 337.6 186.9 337.6 180.7 331.3C174.4 325.1 174.4 314.9 180.7 308.7L233.4 256L180.7 203.3C174.4 197.1 174.4 186.9 180.7 180.7zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LaptopFinderHeader;
