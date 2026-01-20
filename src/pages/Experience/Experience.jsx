import React from "react";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard.jsx";
import experienceData from "../../data/Experience.json";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Experience</h2>
      {experienceData.map((experience, idx) => (
        <ExperienceCard key={idx} experience={experience} />
      ))}
    </section>
  );
};

export default Experience;
