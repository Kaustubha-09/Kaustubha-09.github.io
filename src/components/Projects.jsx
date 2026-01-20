import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "4rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h2>Projects</h2>

      {projects.map((project, idx) => (
        <div key={idx} style={{ marginBottom: "3rem" }}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>

          <ul>
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>

          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {project.tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}