import React from "react";

import { HeroText } from "./HeroText";
import { Photo } from "./Photo";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section
      className={` relative flex items-center justify-center  w-full min-h-[100vh] mx-auto`}
    >
      <div className="flex flex-col-reverse  lg:flex-row lg:gap-32 h-full">
        <HeroText />
        <div className=" sm:mt-20">
          <Photo />
        </div>
      </div>
    </section>
  );
};

export default Hero;
