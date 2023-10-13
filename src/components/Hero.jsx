/* eslint-disable */
import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { profilpic } from "../assets";
const Hero = () => {
  const openLinkedInProfile = () => {
    window.open("https://www.linkedin.com/in/zacharia-achref-salem-3760b2262/");
  };

  const downloadCV = () => {
    // Add your CV download logic here
    // For simplicity, let's just open a new tab with a sample PDF URL
    window.open(
      "https://www.linkedin.com/in/zacharia-achref-salem-3760b2262/overlay/1635526641342/single-media-viewer/?profileId=ACoAAEBxKooBvkbYh8E_yMyCDEmdE_pHw7DC-oo"
    );
  };

  return (
    <section className="flex flex-col lg:flex-row justify-center items-center h-screen p-8">
      {/* Picture */}
      <div className="mb-8 lg:mb-0 lg:mr-40">
        <img
          src={profilpic} // Assuming profilpic is a variable holding your image URL
          alt="Zacharia Achref Salem profile picture"
          className="rounded-full w-60 h-60"
        />
      </div>
      {/* Message */}
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
    </section>
  );
};

export default Hero;
