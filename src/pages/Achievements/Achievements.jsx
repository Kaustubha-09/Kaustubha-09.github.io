import React from "react";
import AchievementCard from "../../components/AchievementCard/AchievementCard.jsx";
import achievementsData from "../../data/Achievements.json";
import styles from "./Achievements.module.css";

const Achievements = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Achievements & Awards</h2>
      <div className={styles.grid}>
        {achievementsData.map((achievement, idx) => (
          <AchievementCard key={idx} achievement={achievement} />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
