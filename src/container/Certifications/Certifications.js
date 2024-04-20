import React, { useState, useEffect } from "react";
import "./Certifications.scss";
import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import udemyImage from "../../assets/uudemy.png";
import forage from "../../assets/foorage.png";
import codingNinjas from "../../assets/cn.jpg";
import hacker from "../../assets/hacker.png";

const Certifications = () => {
  const [certifications, setCertifications] = useState([
    {
      id: 1,
      certificationName: "J.P. Morgan - Software Engineering Job Simulation",
      imgUrl: forage,
      issuingOrg: "J.P. Morgan",
      credentialURL:
        "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_ihgyG876iEt8eQLsN_1711774824195_completion_certificate.pdf",
    },
    {
      id: 2,
      certificationName: "Goldman Sachs - Software Engineering Job Simulation",
      imgUrl: forage,
      issuingOrg: "Goldman Sachs",
      credentialURL:
        "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_ihgyG876iEt8eQLsN_1693905777123_completion_certificate.pdf",
    },
    {
      id: 3,
      certificationName: "Graphic Design",
      imgUrl: udemyImage,
      issuingOrg: "Udemy",
      credentialURL:
        "https://udemy-certificate.s3.amazonaws.com/pdf/UC-4153ab07-63a2-4a1c-a72d-e942eb42346d.pdf",
    },
    {
      id: 4,
      certificationName:
        "Advance Front-End Web Development with React - Full Stack",
      imgUrl: codingNinjas,
      issuingOrg: "Coding Ninjas",
      credentialURL:
        "https://certificate.codingninjas.com/view/555ffb31169195e7",
    },
    {
      id: 5,
      certificationName: "Front End | Full Stack Web Development",
      imgUrl: codingNinjas,
      issuingOrg: "Coding Ninjas",
      credentialURL:
        "https://certificate.codingninjas.com/view/0d237b0c62b40d79",
    },
    {
      id: 6,
      certificationName: "Introduction to JAVA Excellence Certificate",
      imgUrl: codingNinjas,
      issuingOrg: "Coding Ninjas",
      credentialURL:
        "http://files.codingninjas.in/certificate1791732c8df9fd57389f76e9e9844944b122bfd.pdf",
    },
    {
      id: 7,
      certificationName: "JAVA(BASIC) Certificate",
      imgUrl: hacker,
      issuingOrg: "HackerRank",
      credentialURL: "https://www.hackerrank.com/certificates/ece75f8708c0",
    },
  ]);

  console.log(certifications, "Certifications Array");

  return (
    <div>
      <h2 className="head-text main-head">Certifications</h2>
      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__cert-portfolio"
      >
        {certifications.map((certification) => (
          <div className="certifications__main" key={certification.id}>
            <div className="app__cert-img app__flex">
              <img
                src={certification.imgUrl}
                alt={certification.certificationName}
              />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__cert-hover app__flex"
              >
                <a
                  href={certification.credentialURL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div
              className="app__cert-content app__flex"
              style={{ color: "white" }}
            >
              <h4 className="bold-text cert_heading">
                {certification.certificationName}
              </h4>
              <p className="p-text">{certification.issuingOrg}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Certifications, "app__certifications"),
  "certifications",
  "app__bg"
);
