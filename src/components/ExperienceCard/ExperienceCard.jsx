import React from "react";
import styles from "./ExperienceCard.module.css";

const ExperienceCard = ({ experience }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          {experience.logo && (
            <img 
              src={experience.logo} 
              alt={`${experience.company} logo`}
              className={styles.logo}
            />
          )}
        </div>
        <div className={styles.companyInfo}>
          <h3 className={styles.company}>{experience.company}</h3>
          <p className={styles.location}>{experience.location}</p>
        </div>
      </div>
      
      {experience.roles.map((role, idx) => (
        <div key={idx} className={styles.role}>
          <div className={styles.roleHeader}>
            <strong className={styles.title}>{role.title}</strong>
            <span className={styles.period}>{role.period}</span>
          </div>
          <ul className={styles.bullets}>
            {role.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperienceCard;
