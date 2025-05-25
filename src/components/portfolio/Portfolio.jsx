import React from "react";
import "./portfolio.css";
import { FaCode, FaSchool, FaBullhorn } from "react-icons/fa"; // Updated marketing icon

const data = [
  {
    id: 1,
    icon: <FaCode size={40} />,
    title: "Personal Website",
    github: "https://github.com/TadeBire/my-portifolio.git",
    color: "#6c63ff",
  },
  {
    id: 2,
    icon: <FaSchool size={40} />,
    title: "School Management",
    github: "https://github.com/TadeBire/schoolmanagment.git",
    color: "#00b894",
  },
  {
    id: 3,
    icon: <FaBullhorn size={40} />, // Replaced with more relevant icon
    title: "Digital Marketing",
    github:
      "https://github.com/21mebrat/smart-scalable-E-commerce-platform-for-Ethiopian-entrepreneurs-and-smse.git",
    color: "#fdcb6e",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, icon, title, github, color }) => (
          <article key={id} className="portfolio__item">
            <div
              className="portfolio__item-icon"
              style={{
                backgroundColor: color,
                borderRadius: "1rem",
                padding: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              {icon}
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a
                href={github}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
