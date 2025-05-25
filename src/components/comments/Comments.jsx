import React from "react";
import "./comments.css";
import AVTR1 from "../../assets/miguel_brito.jpg";
import AVTR2 from "../../assets/maria_eduarda.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "mebrat",
    review:
      "biruk is bem animada e curioso em aprender novas coisas, tem um conhecimento técnico muito bom em automações e front-end em geral e também está sempre procurando aprimorar mais o seu conhecimento",
    socialMedia: "https://www.instagram.com/mbrito_._/",
    occupation: "Desenvolvedor de software Junior II - Grão de Gente",
  },
  {
    avatar: AVTR2,
    name: "Amare ",
    review:
      " melhor  pessoa que eu conheço! Ele está sempre buscando aprender mais e mais e nunca se contenta, sempre busca cada vez mais aprimorar seus conhecimentos. Trabalha muito bem em equipe e consegue se adaptar facilmente. Tem habilidade para solucionar problemas com velocidade e eficiência",
    socialMedia: "https://www.instagram.com/itsdudars/",
    occupation: "Estagiária - Escola Verde que te quero verde",
  },
];

const Comments = () => {
  return (
    <section id="comments">
      <h5>Review from Coworkers</h5>
      <h2>Comments</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {data.map(
          ({ avatar, name, review, socialMedia, occupation }, index) => {
            const handleSwiperClick = () => {
              window.open(socialMedia, "_blank");
            };
            return (
              <SwiperSlide
                onClick={handleSwiperClick}
                key={index}
                className="testimonial"
              >
                <div className="client__avatar">
                  <img src="/ab.jpg" alt={name} />
                </div>
                <h5 className="client__name">{name}</h5>
                <h5 className="client__occupation">{occupation}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </section>
  );
};

export default Comments;
