import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";

const Skills = () => {
  // Hardcoded skills data with provided image URLs and names
  const hardcodedSkills = [
    {
      name: "Prisma",
      icon: "https://cdn.sanity.io/images/8u33sfus/production/5c505bafc195e96a871d63b0ec4440e42f183224-841x1024.png",
    },
    {
      name: "express",
      icon: "https://cdn.sanity.io/images/8u33sfus/production/b524e02aea6e32b20371e1e2db13100974d4c2c6-920x920.png",
    },
    {
      name: "Mui",
      icon: "https://cdn.sanity.io/images/8u33sfus/production/09532d7c1755c8a4086fc78d7edef8b71d398317-64x64.png",
    },
    {
      name: "graphql",
      icon: "https://cdn.sanity.io/images/8u33sfus/production/50da7f11fb838c250ea9f0b1ec233aca1ad045ae-480x480.png",
    },
    {
      name: "TailwindCSS",
      icon: "https://cdn.sanity.io/images/8u33sfus/production/c22769e0858ca967ea907dae32a087c2ba2efd7e-1024x615.png",
    },
    {
      name: "Figma",
      icon: "https://cdn.sanity.io/images/8u33sfus/production/d8e0766960ed3cfc1a482445ee0c314db3c8d0e0-1024x1024.png",
    },
    {
      name: "Git",
      icon: "https://cdn.sanity.io/images/8u33sfus/production/a804a741fb26f6c236c73086a87cfc9f64106401-480x480.png",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.sanity.io/images/8u33sfus/production/64f3e20f8ad906d56dea96863b6db87fad6efb52-64x64.png",
    },
    {
      name: "GitHub",
      icon: "https://cdn.sanity.io/images/8u33sfus/production/39ce4aee7b81c3bba40134b829523d7b5bc73bfb-1024x998.png",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.sanity.io/images/8u33sfus/production/66bbf9242b1ccffebb5d46f376f5036b527fad48-480x480.png",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.sanity.io/images/8u33sfus/production/b8c21ab6b6ec89e5c60b0843110adbab316b45c3-920x920.png",
    },
    {
      name: "NodeJS",
      icon: "https://cdn.sanity.io/images/8u33sfus/production/d8c8025b1695a3f14f849b99afc71d917ef40813-480x480.png",
    },
    {
      name: "Docker",
      icon: "https://cdn.sanity.io/images/8u33sfus/production/fd36e182e82f9cb854b7556d2bac7808092e6d89-1024x739.png",
    },
    {
      name: "ReactJS",
      icon: "https://cdn.sanity.io/images/8u33sfus/production/34be54263e18fa2aea611c6b3b388b76e978e7d7-64x64.png",
    },
    {
      name: "Postman",
      icon: "https://cdn.sanity.io/images/8u33sfus/production/c5f8bd1df084d8483b276832294b07ad4f10524c-225x225.png",
    },
    {
      name: "Sql",
      icon: "https://cdn.sanity.io/images/8u33sfus/production/918bb21d5ce5e36a7e8ff6770417c2ba7efbcbcf-917x1024.png",
    },
  ];

  return (
    <>
      <h2 className="head-text" style={{ color: "white" }}>
        Skillset
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {/* Render hardcoded skills */}
          {hardcodedSkills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: "Your_BG_Color" }} // Set your background color here
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text" style={{ color: "white" }}>
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, "app__skills"), "skills", "app__bg ");
