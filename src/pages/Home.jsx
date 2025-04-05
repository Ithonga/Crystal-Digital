import React from "react";
import Achievements from "../Components/Achievements";

function Home() {
  return (
    <div
      // style={{ backgroundImage: "url('/bg.jpg')" }}
      className="w-full h-full items-center flex flex-col "
    >
      <div className="flex h-full px-3 md:px-20 py-10 shadow-md justify-start items-start">
        <div className="flex flex-col gap-8 md:items-start items-center justify-center h-full">
          <p className="text-lg font-light text-[#00afef] ">
            Elevate your brand with our creative excellence.
          </p>
          <h1 className="text-[40px] font-bold">
            UNLEASHING THE POWER OF GRAPHICS DESIGN!
          </h1>
          <p className="text-[20px] ">
            Welcome to a world where visual storytelling meets innovation, and
            creativity knows no bounds. From sleek logos that speak volumes to
            immersive web experiences.
          </p>
          <div className="flex md:flex-row flex-col gap-1">
            <a
              href="/services"
              className="bg-white
               hover:bg-[#00afef] hover:text-white hover:border-none text-black border border-black py-2 px-4 "
            >
              Our Services
            </a>
            <a
              href="/contact"
              className="bg-[#00afef] text-white hover:bg-white hover:text-black border hover:border-black py-2 px-4"
            >
              Get in touch
            </a>
          </div>
          {/* <div className="w-full h-[200px] rounded-b-3xl bg-[#00afef]"></div> */}

        </div>
        <img src="/design.png" alt="Company logo" className="hidden md:block w-1/2" />
      </div>
      <Achievements/>
    </div>
  );
}

export default Home;
