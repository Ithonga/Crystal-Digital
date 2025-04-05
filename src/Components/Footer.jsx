import React from "react";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoTiktok,
} from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="bg-[#10171c] bottom-0 p-3 md:p-10 flex flex-col">
      <div className="flex flex-col md:flex-row gap-8 md:gap-40">
        <div className="flex flex-col gap-6">
          <a href="/">
            <img src="/footer-logo.png" alt="Logo" className="h-12 mb-" />
          </a>
          <h2 className="text-[20px] font-bold text-white max-w-[500px]">
            Creating modern, responsive, and Interactive user experiences.
          </h2>
          <div className="flex-row md:flex justify-beween text-gray-400">
            <div className="flex flex-col-reverse gap-4">
              <div className="flex gap-2">
                <MdEmail className="text-white mt-1" />
                <div>
                  <h2 className="font-medium">info@ronnieithonga.com</h2>
                  <h2 className="font-medium">ithongadev@gmail.com</h2>
                </div>
              </div>
              <div className="gap-2 flex items-center">
                <FaPhoneAlt className="text-white" />
                <h2 className="font-medium">+(254) (0) 741 994 264</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-gray-400 mb-8">
          <h1 className="font-semibold text-[18px] mb-3  text-white">
            Quick Links
          </h1>
          <a href="/" className="hover:text-white">
            <p>{">"} Home</p>
          </a>
          <a href="/" className="hover:text-white">
            <p>{">"} About</p>
          </a>
          <a href="/" className="hover:text-white">
            <p>{">"} Services</p>
          </a>
          <a href="/" className="hover:text-white">
            <p>{">"} Contact</p>
          </a>
        </div>
      </div>
      <div className="border-t border-gray-400 my-6"></div>
      <div className="items-center justify-between flex-col text-gray-400  md:flex-row flex md:gap-8 mb-8">
        <h2> &copy; 2025 Crystal Digital ENT.</h2>
        <div className="flex gap-4">
          <h2>Privacy Policy</h2>
          <h2>Terms</h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
