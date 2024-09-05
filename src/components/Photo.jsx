import { motion } from "framer-motion";
import { photo } from "../assets";

export const Photo = () => {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.5, ease: "easeIn" },
        }}
        className="relative"
      >
        {/* The Photo */}
        <img
          src={photo}
          className="rounded-full w-[200px] sm:w-[250px] md:w-[300px] lg:w-[450px] z-20 relative"
        />

        {/* The Rotating Circle */}
        <motion.svg
          className="absolute inset-0 w-full h-full z-10"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="https://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#FFFF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0 " }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};
