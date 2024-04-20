import { AppWrap, MotionWrap } from "../../wrapper";
import "./Experiences.scss";
import React from "react";
import { motion } from "framer-motion";

const Experiences = () => {
  return (
    <>
      <h2 className="head-text" style={{ color: "white" }}>
        Education and <span style={{ color: "#483CC2" }}>Work Experience</span>
      </h2>
      <div className="app__skills-exp">
        <motion.div className="app__skills-exp-item">
          <>
            <div className="education education22">
              <div className="app__skills-exp-year">
                <p className="bold-text" style={{ color: "#483CC2" }}>
                  Aug 2021 - Jun 2025
                </p>
              </div>
              <motion.div className="app__skills-exp-works">
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                  >
                    <h4 className="bold-text" style={{ color: "white" }}>
                      B.tech(Computer Science Engineering)
                    </h4>
                    <p
                      className="p-text"
                      style={{
                        color: "#4f9ed7",
                        fontStyle: "italic",
                        fontWeight: "bold",
                      }}
                    >
                      MIT WPU, Pune
                    </p>
                  </motion.div>
                </>
              </motion.div>
            </div>
            <div className="education">
              <div className="app__skills-exp-year">
                <p className="bold-text" style={{ color: "#483CC2" }}>
                  Oct 2021 - Present
                </p>
              </div>
              <motion.div className="app__skills-exp-works">
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                  >
                    <h4 className="bold-text" style={{ color: "white" }}>
                      MERN Stack-Open source Development
                    </h4>
                    <p
                      className="p-text"
                      style={{
                        color: "#4f9ed7",
                        fontStyle: "italic",
                        fontWeight: "bold",
                      }}
                    >
                      Innovation Hub
                    </p>
                  </motion.div>
                </>
              </motion.div>
            </div>
          </>
        </motion.div>
      </div>
      <div className="app__skills-exp expp" style={{ width: "100%" }}>
        <motion.div
          className="app__skills-exp-item"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <>
            <div className="experience">
              <div className="app__skills-exp-year">
                <p className="bold-text" style={{ color: "#483CC2" }}>
                  2023 Jul - 2023 Nov
                </p>
              </div>
              <motion.div className="app__skills-exp-works">
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                  >
                    <h4 className="bold-text" style={{ color: "white" }}>
                      Full stack Developer
                    </h4>
                    <p
                      className="p-text"
                      style={{
                        color: "#4f9ed7",
                        fontStyle: "italic",
                        fontWeight: "bold",
                      }}
                    >
                      Innovation Hub
                    </p>
                    <p className="p-text-desc" style={{ color: "#cbcbcb" }}>
                      ● Demonstrated expertise as a MERN stack developer with a
                      strong track record in building secure and efficient
                      servers.
                    </p>
                    <p
                      className="p-text-desc para-none"
                      style={{ color: "#cbcbcb" }}
                    >
                      ● Proficient in writing clean, maintainable code, and
                      implementing best practices for optimal performance.
                    </p>
                    <p
                      className="p-text-desc para-none"
                      style={{ color: "#cbcbcb" }}
                    >
                      ● A dedicated team member in Innovation Hub,” actively
                      contributing to the development of a MonoRepo
                      architecture, Docker implementation, Prisma ORM
                      integration, and Trpc CI/CD pipeline. Collaborated
                      effectively with fellow members, fostering a collaborative
                      environment, and actively contributed to open source
                      initiatives.
                    </p>
                  </motion.div>
                </>
              </motion.div>
            </div>
            <div className="experience">
              <div className="app__skills-exp-year">
                <p className="bold-text" style={{ color: "#483CC2" }}>
                  2023 Sep - 2023 Oct
                </p>
              </div>
              <motion.div className="app__skills-exp-works">
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                  >
                    <h4 className="bold-text" style={{ color: "white" }}>
                      MERN stack Developer
                    </h4>
                    <p
                      className="p-text"
                      style={{
                        color: "#4f9ed7",
                        fontStyle: "italic",
                        fontWeight: "bold",
                      }}
                    >
                      Oasis
                    </p>
                    <p className="p-text-desc" style={{ color: "#cbcbcb" }}>
                      ● Worked on a real-time project for 1 months as a
                      Fullstack Developer Intern and helped the to team build
                      various components, added new features, Fixing UI issues,
                      and maintained databases workflow.
                    </p>
                    <p
                      className="p-text-desc para-none"
                      style={{ color: "#cbcbcb" }}
                    >
                      ● Implemented cutting-edge technologies including React
                      JS, Tailwind CSS, and JavaScript to build top-quality
                      code, resulting in a 30% increase in website performance
                      and a 20% reduction in customer support issues for diverse
                      projects
                    </p>
                    <p
                      className="p-text-desc para-none"
                      style={{ color: "#cbcbcb" }}
                    >
                      ● Proactively contributed to solving real-time project
                      complexities, ensuring a seamless and enhanced user
                      experience.
                    </p>
                  </motion.div>
                </>
              </motion.div>
            </div>

            <div className="experience">
              <div className="app__skills-exp-year">
                <p className="bold-text" style={{ color: "#483CC2" }}>
                  2023 Dec - 2024 Mar
                </p>
              </div>
              <motion.div className="app__skills-exp-works">
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                  >
                    <h4 className="bold-text" style={{ color: "white" }}>
                      Teaching Assitant
                    </h4>
                    <p
                      className="p-text"
                      style={{
                        color: "#4f9ed7",
                        fontStyle: "italic",
                        fontWeight: "bold",
                      }}
                    >
                      Coding Ninja
                    </p>
                    <p className="p-text-desc" style={{ color: "#cbcbcb" }}>
                      ● Provide comprehensive support to students enrolled in
                      backend MERN stack development courses at Coding Ninjas as
                      a dedicated Teaching Assistant.
                    </p>
                    <p
                      className="p-text-desc para-none"
                      style={{ color: "#cbcbcb" }}
                    >
                      ● Utilize expertise in backend technologies to address
                      student queries and guide them through complex concepts,
                      fostering a deeper understanding of MERN stack
                      development.
                    </p>
                    <p
                      className="p-text-desc para-none"
                      style={{ color: "#cbcbcb" }}
                    >
                      ● Contribute to students' success by facilitating
                      interactive learning sessions and offering personalized
                      assistance, ensuring their proficiency in backend
                      development.
                    </p>
                  </motion.div>
                </>
              </motion.div>
            </div>
          </>
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Experiences, "app__about"),
  "experience",
  "app__bg"
);
