import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import { styles } from "../styles";
import { NAVLINKS } from "../constants/constants";
import { menu, close } from "../assets";
import { LanguageSelector } from "./LanguageSelector";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5  fixed top-0 z-20 transition-all duration-300 ${
        isScrolled ? "bg-primary border-b-2 border-secondary" : "bg-transparent"
      }`}
    >
      <div className=" w-full flex justify-end   max-w-7xl mx-auto">
        <ul className="list-none hidden md:flex flex-row gap-10">
          <Link
            to="/"
            className="text-white opacity-80 text-[18px] hover:opacity-100 font-medium cursor-pointer"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <FormattedMessage id="navbar_home" />
          </Link>
          {NAVLINKS.map((link) => (
            <li
              key={link.id}
              className="text-white opacity-80 text-[18px] hover:opacity-100 font-medium cursor-pointer"
            >
              <a href={`#${link.id}`}>
                <FormattedMessage id={link.title} />
              </a>
            </li>
          ))}
          <div className="LanguageSelectorContainer">
            <LanguageSelector />
          </div>
        </ul>

        {/*COLLAPSED NAVBAR*/}
        <div className="md:hidden flex justify-end ">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer z-20"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } pt-20 p-6 bg-primary absolute top-0 right-0 w-full h-screen z-10 flex justify-center items-center`}
          >
            <ul className="list-none flex items-center flex-col gap-4">
              <Link
                to="/"
                className="font-medium cursor-pointer text-[18px] text-white"
                onClick={() => {
                  setToggle(!toggle);
                  window.scrollTo(0, 0);
                }}
              >
                <FormattedMessage id="navbar_home" />
              </Link>
              {NAVLINKS.map((link) => (
                <li
                  key={link.id}
                  className="font-medium cursor-pointer text-[18px] text-white"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>
                    <FormattedMessage id={link.title} />
                  </a>
                </li>
              ))}
              <div className="LanguageSelectorContainer">
                <LanguageSelector />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
