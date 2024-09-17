import React from "react";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

import { styles } from "../styles";
import { technologies } from "../constants/constants";
import TechCard from "./TechCard";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          <FormattedMessage id="about_tech" />
        </p>
        <h2 className={styles.sectionHeadText}>
          <FormattedMessage id="about_headTech" />
        </h2>
      </motion.div>

      <div className="mt-9 flex flex-wrap gap-10 sm:justify-start justify-center">
        {technologies.map((technology, index) => (
          <TechCard key={technology.name} index={index} {...technology} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
