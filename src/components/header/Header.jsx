import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      {/* Left Section – Text Content */}
      <div className="header-left">
        <div>
          <h2 className="header-title">
            👋 Welcome to My <span className="highlight">Portfolio</span>
          </h2>
          <p className="header-description">
            I'm <strong>Birhanu Tadele</strong>, a passionate Software Engineering student at Debre Markos University.
            <br />
            I specialize in crafting beautiful and interactive Frontend experiences.
          </p>
        </div>
      </div>

      {/* Right Section – Profile with Download Button */}
      <div className="header-right">
        <div className="header-gradient"></div>

        <div className="header-profile-content">
          {/* 🔼 Download Button at the Top */}
          <a
            href="/BirhanuTadeleCV.pdf"
            download
            className="download-cv-button"
          >
            📄 Download CV
          </a>

          {/* Profile Image */}
          <div className="header-profile-wrapper">
            <img src="/b.jpg" alt="Birhanu Tadele" className="header-profile-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
