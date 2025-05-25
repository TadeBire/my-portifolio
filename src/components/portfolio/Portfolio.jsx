import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/a.jpg";
import IMG2 from "../../assets/a.jpg";
import IMG3 from "../../assets/a.jpg";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "personal website",
    github: "https://github.com/TadeBire/eventGoogleCalendarEAC",
  },
  {
    id: 2,
    image: IMG2,
    title: "school managment",
    github: "https://github.com/TadeBire/flappyBirdGame",
  },
  {
    id: 3,
    image: IMG3,
    title: "Digital-Marketing",
    github: "https://github.com/TadeBire/calculator",
  },
 
 
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>

              <div className="portfolio__item-cta">
                <h3>{title}</h3>
                <a
                  href={github}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
