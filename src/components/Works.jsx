import React from "react";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

import { styles } from "../styles";
import { github, web } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  image,
  source_code_link,
  live_link,
  tags,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl md:w-[360px] md:h-[530px] w-full"
      >
        <div className="w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="mt-7">
          <div className="flex justify-between ">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <div className="flex justify-center gap-2">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className=" cursor-pointer"
              >
                <img
                  src={github}
                  alt="github-icon"
                  className="w-[30px] h-[30px] opacity-80 hover:opacity-100 "
                />
              </div>
              <div
                onClick={() => window.open(live_link, "_blank")}
                className="cursor-pointer"
              >
                <img
                  src={web}
                  alt="web-icon"
                  className="w-[30px] h-[30px]  opacity-80 hover:opacity-100 "
                />
              </div>
            </div>
          </div>
          <p
            className="mt-2 text-secondary text-[14px]"
            style={{ textAlign: "justify" }}
          >
            <FormattedMessage id={description} />
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`tag-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          <FormattedMessage id="projects_work" />
        </p>
        <h2 className={styles.sectionHeadText}>
          <FormattedMessage id="projects_projects" />
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          style={{ textAlign: "justify" }}
        >
          <FormattedMessage id="projects_introText" />
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
