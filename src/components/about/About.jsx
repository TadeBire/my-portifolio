import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5 className="section__subtitle">Get to Know</h5>
      <h2 className="section__title">About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="/b2.jpg" alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <p className="about__description">
            My name is Birhanu Tadele, id no"1305153,and I'm 23 years old. I've always been curious and passionate about technology. Since I was young, I’ve loved keeping up with the latest innovations. That passion led me to pursue a career as a Full Stack Developer using React and TypeScript. I’m constantly seeking to improve and learn more in this ever-evolving field.
            <br /><br />
            Outside of work, I enjoy spending time with friends and family, playing soccer, and listening to music — keeping that balance helps me stay motivated and ready to tackle new challenges.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let’s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
