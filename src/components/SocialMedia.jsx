import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
const SocialMedia = () => {
  return (
    <div className="app__social_mobile">
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
  );
};

export default SocialMedia;
