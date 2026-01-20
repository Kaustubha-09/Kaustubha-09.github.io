import React from "react";
import involvementsData from "../../data/Involvements.json";
import styles from "./Involvements.module.css";

const Involvements = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Leadership & Involvement</h2>
      <div className={styles.grid}>
        {involvementsData.map((involvement, idx) => (
          <div key={idx} className={styles.card}>
            {involvement.logo && (
              <div className={styles.logoContainer}>
                <img 
                  src={involvement.logo} 
                  alt={`${involvement.organization} logo`}
                  className={styles.logo}
                />
              </div>
            )}
            <h3 className={styles.role}>{involvement.title}</h3>
            <h4 className={styles.organization}>{involvement.organization}</h4>
            <p className={styles.period}>{involvement.period}</p>
            <p className={styles.description}>{involvement.description}</p>
            {involvement.link && (
              <a 
                href={involvement.link}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                Learn More →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Involvements;
