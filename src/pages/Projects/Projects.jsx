import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import projectsData from "../../data/Projects.json";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.grid}>
        {projectsData.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
