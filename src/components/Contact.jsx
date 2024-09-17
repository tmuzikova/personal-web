import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FormattedMessage, useIntl } from "react-intl";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { copy } from "../assets";

const Contact = () => {
  const [form, setForm] = useState({ username: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const intl = useIntl();

  const email = "tereza.muzikova@gmail.com";

  //to copy email to clipboard
  const handleEmailClick = () => {
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copied to clipboard!");
    });
  };

  //when user types into any of the input fields in the form -> the relevant field in the form object is updated (other fields in the object are not affected)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  //when the form is submitted:
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    //to send the email via emailjs:
    emailjs
      .send(
        "service_ctojwrd",
        "template_lxtcvgn",
        {
          from_name: form.username,
          to_name: "Tereza",
          from_email: form.email,
          to_email: "tereza.muzikova@gmail.com",
          message: form.message,
        },
        "LCBb7po0EgtrQPTa3"
      )

      //executes when the email is succesfully sent
      .then(() => {
        setLoading(false);
        alert(intl.formatMessage({ id: "contact_alert" }));
        setForm({ username: "", email: "", message: "" });

        //executes if any errors occur during email sending process
        (error) => {
          setLoading(false);
          console.log(error);
          alert(intl.formatMessage({ id: "contact_error" }));
        };
      });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 rounded-2xl p-8"
      >
        <p className={styles.sectionSubText}>
          <FormattedMessage id="contact_getintouch" />
        </p>
        <h3 className={styles.sectionHeadText}>
          <FormattedMessage id="contact_contact" />
        </h3>
        <div className="text-secondary">
          <FormattedMessage id="contact_introTexta" />
          <div className="flex gap-3">
            <strong
              onClick={handleEmailClick}
              className="underline cursor-pointer"
            >
              {email}
            </strong>
            <img
              src={copy}
              alt="copy"
              onClick={handleEmailClick}
              className="cursor-pointer w-[15px] object-contain"
            />
          </div>
          <FormattedMessage id="contact_introTextb" />
        </div>

        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="font-medium text-white mb-4">
              <FormattedMessage id="contact_name" />
            </span>
            <input
              type="text"
              name="name"
              value={form.username}
              onChange={handleChange}
              placeholder={intl.formatMessage({ id: "contact_nameQ" })}
              className="bg-tertiary px-6 py-4 placeholder:text-secondary border-none font-medium outlined-none rounded-lg text-white"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="font-medium text-white mb-4">
              <FormattedMessage id="contact_email" />
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={intl.formatMessage({ id: "contact_emailQ" })}
              className="bg-tertiary px-6 py-4 placeholder:text-secondary border-none font-medium outlined-none rounded-lg text-white"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="font-medium text-white mb-4">
              <FormattedMessage id="contact_message" />
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={intl.formatMessage({ id: "contact_messageQ" })}
              className="bg-tertiary px-6 py-4 placeholder:text-secondary border-none font-medium outlined-none rounded-lg text-white"
              required
            />
          </label>
          <button
            type="submit"
            className="px-8 py-3 bg-tertiary shadow-md shadow-primary rounded-xl outline-none w-fit text-white font-bold"
          >
            {loading
              ? intl.formatMessage({ id: "contact_sending" })
              : intl.formatMessage({ id: "contact_send" })}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] "
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
