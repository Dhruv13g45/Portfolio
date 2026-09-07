import "../App.css";
import { ProjectInfo } from "../data.js";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: ProjectInfo[0].name,
    type: "Developer workflow / Full-stack",
    description: ProjectInfo[0].description,
    stack: ProjectInfo[0].stack,
    live: ProjectInfo[0].live,
    repo: ProjectInfo[0].repoLink,
    tone: "lime",
  },
  {
    title: ProjectInfo[1].name,
    type: "Career platform / Full-stack",
    description: ProjectInfo[1].description,
    stack: ProjectInfo[1].stack,
    live: ProjectInfo[1].live,
    repo: ProjectInfo[1].repoLink,
    tone: "cyan",
  },
];

const Projects = () => (
  <div className="reveal section projects-page">
    <div className="section-heading">
      <div>
        <div className="eyebrow">03 / Selected work</div>
        <h2>
          Things I’ve
          <br />
          <span className="text-lime">made real.</span>
        </h2>
      </div>
      <span className="section-label">02 projects / open for inspection</span>
    </div>
    <div className="project-list">
      {projects.map((project, index) => (
        <article className={`project-card ${project.tone}`} key={project.title}>
          <div className="project-index">0{index + 1}</div>
          <div className="project-visual">
            <span>{project.title.split(" ")[0]}</span>
            <i>{"{}"}</i>
          </div>
          <div className="project-content">
            <div className="eyebrow">{project.type}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-meta">{project.stack}</div>
            <div className="project-links">
              <a href={project.live} target="_blank" rel="noreferrer">
                View live <FiArrowUpRight />
              </a>
              <a href={project.repo} target="_blank" rel="noreferrer">
                <FiGithub /> Source
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default Projects;
