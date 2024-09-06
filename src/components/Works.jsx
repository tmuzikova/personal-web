import React from "react";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

import { styles } from "../styles";
import { github_black, web } from "../assets";
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
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] sm:h-[500px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute top-0 right-0 flex flex-col justify-end m-3 card-img-hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="flex justify-center items-center cursor-pointer mb-2"
            >
              <img
                src={github_black}
                alt="github"
                className="w-10 h-10 rounded-full opacity-80 hover:opacity-100 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(live_link, "_blank")}
              className="flex justify-center items-center cursor-pointer"
            >
              <img
                src={web}
                alt="web"
                className="w-9 h-9 rounded-full opacity-80 hover:opacity-100 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">
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
