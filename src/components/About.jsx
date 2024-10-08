import React from "react";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          <FormattedMessage id="about_introduction" />
        </p>
        <h2 className={styles.sectionHeadText}>
          <FormattedMessage id="about_aboutme" />
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] "
        style={{ textAlign: "justify" }}
      >
        <div className="mt-5 mb-5">
          <FormattedMessage id="about_introText" />
        </div>
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
