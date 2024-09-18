import React from "react";

import { HeroText } from "./HeroText";
import { Photo } from "./Photo";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`${styles.paddingX} relative w-full h-screen mx-auto`}>
      <div className="flex flex-col-reverse justify-center sm:flex-row sm:justify-evenly items-center h-full">
        <HeroText />
        <div className=" sm:mt-20">
          <Photo />
        </div>
      </div>
    </section>
  );
};

export default Hero;
