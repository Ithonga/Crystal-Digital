import React from "react";

import { FaClock, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function TopHeader() {
  return (
    <div className="hidden pl-5 md:flex bg-[#10171c] h-[45px] text-white items-center text-center">
    <FaPhoneAlt className="text-white mr-2" />
      <p className="text-sm font-light text-white">+254 722 855 767</p>
      <div className="border border-gray-400 h-[25px] mx-3"></div>
      <MdEmail className="text-white mr-2" />
      <p className="text-sm font-light text-white">cdigitalent@gmail.com</p>
      <div className="border border-gray-400 h-[25px] mx-3"></div>
      <FaClock className="text-white mr-2" />
      <p className="text-sm font-light text-white`">MON - SAT 08:00 20:00</p>
    </div>
  );
}

export default TopHeader;
