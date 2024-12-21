import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import ModalPopUp from "./ModalPopUp";
import DisplayData from "./DisplayData";

const Header = () => {
  const [close, setClose] = useState(false);

  const handleClose = () => {
    setClose(!close);
  };
  return (
    <div className="bg-[#d9dbd9] min-h-screen">
      <div className="px-3 py-1">
        <div className="flex items-center justify-between">
          <div className=" sm:relative flex items-center pr-1">
            <span className=" sm:absolute top-0 left-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 text-sm sm:text-lg   bg-red-600 text-white rounded-full">
              RI
            </span>
            <span className="hidden sm:block pl-12 pr-2 py-1 bg-stone-600 text-white rounded-full">
              adil
            </span>
          </div>
          <div className="w-[300px] relative rounded-2xl pr-1">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-2 py-[2px] sm:py-1 rounded-2xl border-[1px] focus:outline-none"
            />
            <IoIosSearch className="absolute top-2 sm:top-2 right-2 text-lg text-[#666] " />
          </div>
          <div className="flex items-center sm:gap-1">
            <div className="flex items-center">
              <span className="text-sm md:text-base">Dashboard</span>
              <IoIosArrowForward className="text-[#666]" />
            </div>
            <div className="flex items-center sm:gap-1">
              <span className="text-[#666] text-sm md:text-base">Staff</span>
              <IoIosArrowForward className="text-[#666]" />
              <span className="text-[#666] text-sm md:text-base">Employee</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-2">
          <h1 className="text-lg">Employee</h1>
          <button
            onClick={handleClose}
            className="flex items-center justify-center w-7 h-7 bg-white rounded-full text-xl"
          >
            +
          </button>
        </div>

        {close ? (
          <ModalPopUp setClose={setClose} handleClose={handleClose} />
        ) : null}
        <DisplayData />
      </div>
    </div>
  );
};

export default Header;
