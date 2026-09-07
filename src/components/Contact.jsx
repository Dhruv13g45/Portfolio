import "../App.css";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Contact = () => (
  <div className="reveal section contact-page">
    <div className="section-heading">
      <div>
        <div className="eyebrow">04 / Say hello</div>
        <h2>
          Have a problem
          <br />
          <span className="text-lime">worth solving?</span>
        </h2>
      </div>
      <span className="section-label">Let’s make something useful</span>
    </div>
    <div className="contact-grid">
      <div>
        <p className="large-copy">
          I’m open to thoughtful collaborations, product work, and conversations
          about the future of intelligent software.
        </p>
        <a className="email-link" href="mailto:dhruvhgoradia@gmail.com">
          dhruvhgoradia@gmail.com <FiArrowUpRight />
        </a>
      </div>
      <div className="contact-details">
        <div>
          <span>Location</span>
          <strong>Maharashtra, India</strong>
        </div>
        <div>
          <span>Elsewhere</span>
          <strong>
            <a
              href="https://github.com/Dhruv13g45"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub /> Github
            </a>
            <a
              href="https://www.linkedin.com/in/dhruv-goradia-3111102a6/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin /> LinkedIn
            </a>
          </strong>
        </div>
        <div>
          <span>Availability</span>
          <strong className="available">
            <i /> Open to opportunities
          </strong>
        </div>
      </div>
    </div>
    <div className="contact-cta">
      <FiMail />
      <span>Drop a line. I usually reply within a day.</span>
      <a href="mailto:dhruvhgoradia@gmail.com">Write to me ↗</a>
    </div>
  </div>
);

export default Contact;
