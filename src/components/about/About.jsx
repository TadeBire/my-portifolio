import React from "react";
import "./about.css";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="/b2.jpg" alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <p className="about__description">
            My name is birhanu, and I'm 23 years old. I've always been very
            curious and passionate about technology. Since I was little, I've loved
            keeping up with the latest innovations and trends in the field.
            That's why I decided to pursue a career in technology, and I'm very
            happy with my choice. Currently, I work as a Full Stack developer
            using React and TypeScript. I always strive to update myself and
            improve my skills in this area that I love so much. Besides work,
            I also value my personal life greatly. I enjoy spending time with
            friends and family, playing soccer, and listening to music. It's
            important for me to maintain this balance as it keeps me motivated
            and ready to face new challenges. I believe that my passion for
            technology and dedication help me achieve my goals.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
