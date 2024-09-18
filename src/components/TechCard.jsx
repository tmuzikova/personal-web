import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";

const TechCard = ({ index, name, icon }) => {
  return (
    <Tilt className="w-[120px] xs:w-[150px] ">
      <motion.div
        variants={fadeIn("right", "spring", 0.3 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary py-5 px-12 rounded-[20px] min-h-[100px] xs:min-h-[150px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={name}
            className="w-16 h-16 max-w-none  object-contain"
          />
          <h3 className="text-white text-[12px] xs:text-[15px] font-bold text-center">
            {name}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default TechCard;
