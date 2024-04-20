import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([
    {
      title: "Backend Developer",
      description:
        "I am a backend developer with a passion for building beautiful and functional web applications",
      imgUrl:
        "https://assets-global.website-files.com/5e9aa66fd3886aa2b4ec01ca/65a9eeb9eab0a82eb85d50c3_3.BackEndDeveloper.jpg", // Assuming you have an image for the backend developer
    },
    {
      title: "Open source contributor",
      description:
        "I am a passionate developer dedicated to contributing to open source, collaborating with the community, and building meaningful projects",
      imgUrl:
        "https://www.udacity.com/blog/wp-content/uploads/2021/01/Become-a-full-stack-web-developer_Blog-scaled.jpeg", // Assuming you have an image for the open source contributor
    },
    {
      title: "Web Development",
      description:
        "I'm a web designer dedicated to creating visually appealing projects and fostering creativity through thoughtful design",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFeHpuwiYoGhrF3VBRT6gMTykQoB5DKJvOhgN2lP9D5Q&s", // Assuming you have an image for web development
    },
    {
      title: "Frontend Development",
      description:
        "I am a frontend developer with a passion for building beautiful and functional web applications",
      imgUrl:
        "https://images.ctfassets.net/23aumh6u8s0i/5gieAxw4n3rxYsyjaAnhGm/aa67599b991ad67b3241bf730fc2a131/security_programming_hero.jpg", // Assuming you have an image for frontend development
    },
  ]);

  return (
    <>
      <h2 className="head-text about__head">
        I believe in <span>The Power of Code</span> <br />
        to transform <small>Ideas into Reality.</small>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />

            <h2
              className="bold-text title-color"
              style={{ marginTop: 20, textAlign: "center" }}
            >
              {about.title}
            </h2>
            <p
              className="p-text p-color"
              style={{ marginTop: 10, textAlign: "center" }}
            >
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, "app__about"), "about", "app__bg");
