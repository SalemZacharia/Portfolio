/* eslint-disable */
import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { profilpic } from "../assets";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
const ServiceCard = ({ title, description, icon, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      ></motion.div>
    </Tilt>
  );
};
const About = () => {
  const openLinkedInProfile = () => {
    window.open("https://www.linkedin.com/in/zacharia-achref-salem-3760b2262/");
  };

  const downloadCV = () => {
    window.open(
      "https://www.linkedin.com/in/zacharia-achref-salem-3760b2262/overlay/1635526641342/single-media-viewer/?profileId=ACoAAEBxKooBvkbYh8E_yMyCDEmdE_pHw7DC-oo"
    );
  };
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center h-screen p-8">
      <div className="mb-8 lg:mb-0 lg:mr-40">
        <img
          src={profilpic}
          alt="Zacharia Achref Salem profile picture"
          className="rounded-full w-60 h-60"
        />
      </div>

      <div className="text-center  lg:text-left">
        <p className="text-gray-500 mb-4">Hello, I'm</p>
        <p className="text-xl font-bold mb-6 lg:mb-2">Zacharia Achref Salem</p>
        <p className="text-gray-500 mb-4">I'm a fullstack developer.</p>
        <div className="flex justify-center lg:justify-start">
          <button
            className="btn bg-white hover:bg-black hover:text-white text-black rounded-full mr-4 h-10 w-40"
            onClick={openLinkedInProfile}
          >
            LinkedIn
          </button>
          <button
            className="btn bg-white hover:bg-black hover:text-white text-black rounded-full h-10 w-40"
            onClick={downloadCV}
          >
            Download CV
          </button>
        </div>
      </div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default About;
