import { motion } from "framer-motion";
import { profilovka } from "../assets";

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
        <img
          src={profilovka}
          alt="person-photo"
          className="border-2 border-white ml-5 sm:ml-0 rounded-full w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] z-20 relative "
        />
      </motion.div>
    </div>
  );
};
