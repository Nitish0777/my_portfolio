import React, { useState } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Footer.scss";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { TiLocation } from "react-icons/ti";
import { BiDownload } from "react-icons/bi";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("name", name);
    formDataToSend.append("email", email);
    formDataToSend.append("message", message);

    fetch("https://getform.io/f/warkxgrb", {
      method: "POST",
      body: formDataToSend,
    })
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="main__footer">
        <h2 className="head-text" style={{ color: "white", margin: "35px" }}>
          Contact
        </h2>
        <div className="footer__contianer">
          <div className="contact_container">
            <h2 className="p-text head__drop">Drop a Message</h2>
            <p className="p-text">
              Thank you for taking the time to explore my portfolio. I'm
              passionate about my work and always eager to embark on new
              creative journeys. If you have any questions or opportunities to
              discuss, please don't hesitate to reach out. Let's create
              something remarkable together!
            </p>
            <div className="contact_card">
              <div className="icon__style">
                <AiFillMail style={{ color: "white" }} className="icons" />
              </div>
              <a href="mailto:nitishnashine@gmail.com" className="p-text">
                nitishnashine@gmail.com
              </a>
            </div>
            <div className="contact_card">
              <div className="icon__style">
                <AiFillPhone style={{ color: "white" }} className="icons" />
              </div>
              <a href="tel:+91 9011114043" className="p-text">
                +91 90111 14043
              </a>
            </div>
            <div className="contact_card">
              <div className="icon__style">
                <TiLocation style={{ color: "white" }} className="icons" />
              </div>
              <a href="" className="p-text">
                Plot 24, Paud Road, <br /> MIT Back Gate, Pune District, <br />
                Pune, India 411038.
              </a>
            </div>
          </div>
          {!isFormSubmitted ? (
            <div className="message__container">
              <form action="https://getform.io/f/warkxgrb" method="POST">
                <div>
                  <input
                    className="p-text"
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={name}
                    onChange={handleChangeInput}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={email}
                    onChange={handleChangeInput}
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    value={message}
                    name="message"
                    type="text"
                    onChange={handleChangeInput}
                    className="textareaa"
                  />
                </div>
                <button type="button" onClick={handleSubmit}>
                  {!loading ? "Send Message" : "Sending..."}
                </button>
              </form>
            </div>
          ) : (
            <div className="message_note">
              <h3>Thank you for getting in touch!</h3>
            </div>
          )}
        </div>
        <div className="button-resume">
          <a href={images.resume} download style={{ textDecoration: "none" }}>
            <button className="resume-button">
              <BiDownload fontSize={20} />
              &nbsp;&nbsp;Download Resume
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "main__footer"),
  "contact",
  "app__bg"
);
