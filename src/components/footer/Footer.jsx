import React from "react";
import "./footer.css";
import { FiInstagram } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Birhanu
      </a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#comments">Comments</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/bir1213/" target="_blank" rel="noopener noreferrer">
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/bir12/" target="_blank" rel="noopener noreferrer">
          <FiInstagram />
        </a>
        <a href="https://github.com/TadeBire" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://t.me/bir1221" target="_blank" rel="noopener noreferrer">
          <FaTelegram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
