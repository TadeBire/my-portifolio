import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa"; // Telegram icon
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e0o28lb",
        "template_psen1th",
        form.current,
        "oPNsOXOqS8yOJLNKW"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <a
              href="mailto:biretade881@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="contact__option-icon-link"
              style={{ color: "inherit" }}
            >
              <MdOutlineEmail className="contact__option-icon" />
            </a>
            <h4>Email</h4>
            <h5>biretade881@gmail.com</h5>
            <a
              href="mailto:biretade881@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <a
              href="https://www.linkedin.com/in/jo/"
              target="_blank"
              rel="noreferrer"
              className="contact__option-icon-link"
              style={{ color: "inherit" }}
            >
              <AiOutlineLinkedin className="contact__option-icon" />
            </a>
            <h4>LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/joaofalcaodev/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <a
              href="https://t.me/bir1221"
              target="_blank"
              rel="noreferrer"
              className="contact__option-icon-link"
              style={{ color: "inherit" }}
            >
              <FaTelegramPlane className="contact__option-icon" />
            </a>
             <h4>Telegram</h4>
            <a
              href="https://t.me/bir1221"
             
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
