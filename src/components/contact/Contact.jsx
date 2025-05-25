import React, { useRef, useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch("https://formsubmit.co/ajax/biretade881@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Message sent!");
        formRef.current.reset();
        setTimeout(() => setStatus(""), 3000); // ✅ Hide message after 3s
      } else {
        setStatus("Failed to send. Please try again.");
        setTimeout(() => setStatus(""), 3000);
      }
    } catch (error) {
      setStatus("Error sending message.");
      setTimeout(() => setStatus(""), 3000);
    }
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
            <a href="mailto:biretade881@gmail.com" target="_blank" rel="noreferrer">
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
            <a href="https://www.linkedin.com/in/joaofalcaodev/" target="_blank" rel="noreferrer">
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
            <a href="https://t.me/bir1221" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="contact__form">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>

          {/* Hidden fields for Formsubmit */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>

          {/* Success/Error message */}
          {status && (
            <p style={{ marginTop: "10px", color: status.includes("sent") ? "green" : "red" }}>
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
