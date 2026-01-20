import React from "react";
import skillsData from "../../data/Skills.json";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Technical Skills</h2>
      {skillsData.map((group, idx) => (
        <div key={idx} className={styles.group}>
          <h3 className={styles.category}>{group.category}</h3>
          <div className={styles.items}>
            {group.items.map((skill, i) => (
              <span key={i} className={styles.skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
