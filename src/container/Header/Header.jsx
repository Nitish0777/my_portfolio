import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";
import { BiDownload } from "react-icons/bi";
import { ImProfile } from "react-icons/im";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div
        style={{ marginTop: "80px" }}
        className="flex flex-col items-start justify-center p-8 bg-transparent"
      >
        <h1 className="text-2xl font-semibold text-white">Hi There,</h1>
        <h2 className="text-6xl font-bold text-white">
          I am
          <span className="text-blue-500"> Nitish</span>
        </h2>
        <h2 className="text-6xl font-bold text-white">Nashine</h2>
        <div
          style={{ display: "flex", flexWrap: "wrap" }}
          className="mt-4 text-2xl font-light text-gray-500"
        >
          And I am a &nbsp;
          <h1>
            <span class="text_1 text-blue-500">
              {" "}
              <i>Full stack Web developer</i>
            </span>
            <span class="text_2 text-blue-500">
              {" "}
              <i>Graphic Designer</i>
            </span>
          </h1>
        </div>
      </div>

      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div style={{ display: "flex", marginTop: "-20%" }}>
          <a
            href="https://drive.google.com/file/d/15qUa6husZeQhA_qUuBpdJgLnh3v9ZVFS/view?usp=sharing"
            download
            target="blank"
            style={{ textDecoration: "none" }}
          >
            <button className="resume-button" style={{ width: "130px" }}>
              <ImProfile fontSize={20} style={{ marginRight: "5px" }} />
              Resume
            </button>
          </a>
          <a
            href={images.resume}
            download
            style={{ textDecoration: "none", marginLeft: "-20px" }}
          >
            <button className="resume-button" style={{ width: "90px" }}>
              <BiDownload fontSize={25} />
            </button>
          </a>
        </div>
      </motion.div>
    </motion.div>

    {/* <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.robo} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div> */}

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.python, images.react, images.javascript].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
// export default Header;
