import { FormattedMessage } from "react-intl";

const Footer = () => {
  return (
    <footer className="pt-3 pb-5 flex justify-center text-secondary text-[15px] leading-[30px]">
      <p>
        2024 - <FormattedMessage id="footer_text" />
        <a href="https://github.com/tmuzikova" target="_blank">
          {" "}
          Tereza Muzikova
        </a>
      </p>
    </footer>
  );
};

export default Footer;
