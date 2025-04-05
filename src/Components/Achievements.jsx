import React from "react";
import { motion } from "framer-motion";
import CountUp from "../Animation/CountUp";

function Achievements() {
  return (
      <div className="flex flex-col md:flex-row w-[340px] h-fit items-center md:items-start justify-between md:w-fit md:gap-20 mb-4 bg-[#003E61] text-white p-4 rounded-b-[32px] ">
        <div className="text-center max-w-[200px]">
          <h2 className="text-[60px] font-bold text-yellow-400">
            {
              <CountUp
                from={0}
                to={10}
                separator=","
                direction="up"
                duration={1}
                className="text-[60px] font-bold text-yellow-400"
              />
            }
            +
          </h2>
          <p className="font-semibold text-lg">Years of Experience</p>
          <p className="text-sm text-gray-300">
            Our team's decade-long excellence drives us forward with unwavering
            determination.
          </p>
        </div>
        <div className="text-center max-w-[200px]">
          <h2 className="text-[60px] font-bold text-yellow-400">
            {
              <CountUp
                from={0}
                to={98}
                separator=","
                direction="up"
                duration={1}
                className=""
              />
            }
            %
          </h2>
          <p className="font-semibold text-lg">Positive feedbackS</p>
          <p className="text-sm text-gray-300">
            Proud of our quality commitment, based on satisfied clients feedback
            on our top-notch products and services.
          </p>
        </div>
        <div className="text-center max-w-[200px]">
          <h2 className="text-[60px] font-bold text-yellow-400">
            {
              <CountUp
                from={0}
                to={200}
                separator=","
                direction="up"
                duration={1}
                className=""
              />
            }
            +
          </h2>
          <p className="font-semibold text-lg">Projects Completed</p>
          <p className="text-sm text-gray-300">All our projects are completed with an unwavering focus on exceptional quality.</p>
        </div>
      </div>
  );
}

export default Achievements;
