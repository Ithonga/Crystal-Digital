import React from "react";

function TopHeader() {
  return (
    <div className=" pl-5 flex bg-[rgb(181,226,244)] h-[45px] text-white items-center text-center">
      <p className="text-sm font-light text-black">+254 722 855 767</p>
      <div className="border border-gray-400 h-[25px] mx-3"></div>
      <p className="text-sm font-light text-black">cdigitalent@gmail.com</p>
      <div className="border border-gray-400 h-[25px] mx-3"></div>
      <p className="text-sm font-light text-black">MON - SAT 08:00 19:00</p>
    </div>
  );
}

export default TopHeader;
