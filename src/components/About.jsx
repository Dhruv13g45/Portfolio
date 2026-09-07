import "../App.css";
import Skills from "./Skills.jsx";

const About = () => (
  <div className="reveal section about-page">
    <div className="section-heading">
      <div>
        <div className="eyebrow">02 / The person behind the code</div>
        <h2>
          Curious by default.
          <br />
          <span className="text-lime">Useful by design.</span>
        </h2>
      </div>
      <span className="section-label">Based in Maharashtra, India</span>
    </div>
    <div className="about-grid">
      <div className="about-manifesto">
        <p className="large-copy">
          I started with pixels and interfaces. Now I work across the whole
          stack to make products that feel considered from the first click to
          the last database query.
        </p>
        <p className="muted">
          My sweet spot is the space between product thinking and
          implementation: translating ambiguous problems into simple systems,
          then shipping them with care.
        </p>
        <a
          className="text-link"
          href="https://hashnode.com/@dhruv134507"
          target="_blank"
          rel="noreferrer"
        >
          Read my notes on Hashnode <span>↗</span>
        </a>
      </div>
      <div className="timeline">
        <div>
          <span>01</span>
          <div>
            <strong>Frontend foundation</strong>
            <p>
              React, JavaScript, accessibility, responsive interfaces, and the
              craft of making complex things feel clear.
            </p>
          </div>
        </div>
        <div>
          <span>02</span>
          <div>
            <strong>Full-stack systems</strong>
            <p>
              MERN applications, REST APIs, authentication, Postgres, SQL,
              MongoDB, and production-minded data flows.
            </p>
          </div>
        </div>
        <div>
          <span>03</span>
          <div>
            <strong>Intelligent products</strong>
            <p>
              LLM integrations, Inngest workflows, and GenAI experiences that
              are grounded in useful product outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Skills />
  </div>
);

export default About;
