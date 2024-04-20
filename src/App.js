import React from "react";
import {
  About,
  Footer,
  Header,
  Skills,
  Work,
  Experiences,
  Certifications,
} from "./container";
import { SocialMedia } from "./components";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <>
      <div className="app">
        <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 app__social">
          <div>
            <a href="https://www.linkedin.com/in/nitishnashine/" target="blank">
              <BsLinkedin />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/nitish000777/" target="blank">
              <BsInstagram />
            </a>
          </div>
          <div>
            <a href="https://github.com/nitish0777" target="blank">
              <BsGithub />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/NitishNashine" target="blank">
            <FaSquareXTwitter />
            </a>
          </div>
        </div>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Experiences />
        <Certifications />
        <Footer />
        <div className="social__media">
          <SocialMedia />
        </div>
      </div>
    </>
  );
};

export default App;
