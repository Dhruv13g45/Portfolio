import "../App.css";

const groups = [
  {
    label: "Build",
    items: ["React", "Node.js", "Express", "JavaScript", "Tailwind CSS"],
  },
  {
    label: "Data",
    items: ["Postgres", "SQL", "MongoDB", "Redis", "REST APIs"],
  },
  {
    label: "Intelligence",
    items: ["LLM APIs", "GenAI", "Inngest", "Prompt design", "AI workflows"],
  },
];

const Skills = () => (
  <div className="skills-block">
    <div className="section-label">Toolbox / 2026</div>
    <div className="skills-grid">
      {groups.map((group) => (
        <div className="skill-group" key={group.label}>
          <h3>{group.label}</h3>
          {group.items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
