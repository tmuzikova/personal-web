import { styles } from "../styles";
import { FormattedMessage } from "react-intl";

import { github, linkedin, download, email } from "../assets";

export const HeroText = () => {
  return (
    <div className={`md:mt-20 flex flex-row items-start gap-5  max-w-7xl`}>
      <div className="hidden md:flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 rounded-full bg-white" />
        <div className="w-1 sm:h-80 h-40 white-gradient" />
      </div>
      <div>
        <h1 className={`${styles.heroHeadText}`}>
          <span className="text-lightTeal">
            Tereza <br />
            <FormattedMessage id="surname" />
          </span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 `}>
          Junior Frontend Developer
        </p>

        <div className="flex flex-row gap-5 items-center mt-7  ">
          <div>
            <a href="#contact">
              <button className="flex flex-row outline bg-primary rounded text-white py-2 px-5 opacity-80 hover:opacity-100">
                <img src={email} className="w-6 h-6 mr-3" />
                <span>
                  <FormattedMessage id="contact_me" />
                </span>
              </button>
            </a>
          </div>
          <div>
            <button className="flex flex-row outline bg-primary rounded text-white py-2 px-6 opacity-80 hover:opacity-100">
              <img src={download} className="w-6 h-6 mr-3" />
              <span>
                <FormattedMessage id="download_CV" />
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-row gap-2 mt-7">
          <div className="w-11 h-11 cursor-pointer opacity-80 hover:opacity-100">
            <img
              src={github}
              alt="github"
              onClick={() =>
                window.open("https://github.com/tmuzikova", "_blank")
              }
            />
          </div>

          <div className="w-11 h-11 cursor-pointer opacity-80 hover:opacity-100">
            <img
              src={linkedin}
              alt="linkedin"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/tereza-muzikova/",
                  "_blank"
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
