import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      {project.image && (
        <div className={styles.imageContainer}>
          <img 
            src={project.image} 
            alt={`${project.title} project screenshot`}
            className={styles.image}
            loading="lazy"
          />
        </div>
      )}
      
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        
        <ul className={styles.highlights}>
          {project.highlights.map((highlight, i) => (
            <li key={i}>{highlight}</li>
          ))}
        </ul>
        
        <div className={styles.tags}>
          {project.tags.map((tag, i) => (
            <span key={i} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        
        <div className={styles.links}>
          {project.links?.github && (
            <a 
              href={project.links.github} 
              target="_blank" 
              rel="noreferrer noopener"
              className={styles.link}
              aria-label={`View ${project.title} on GitHub`}
            >
              GitHub
            </a>
          )}
          {project.links?.website && (
            <a 
              href={project.links.website} 
              target="_blank" 
              rel="noreferrer noopener"
              className={styles.link}
              aria-label={`Visit ${project.title} website`}
            >
              Website
            </a>
          )}
          {project.links?.demo && (
            <a 
              href={project.links.demo} 
              target="_blank" 
              rel="noreferrer noopener"
              className={styles.link}
              aria-label={`View ${project.title} demo`}
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
