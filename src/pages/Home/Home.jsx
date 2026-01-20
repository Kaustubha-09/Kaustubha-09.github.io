import React from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard.jsx";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.section}>
      <ProfileCard
        profileImage="/assets/personal/professional-headshot.webp"
        name="Kaustubha Venkata Eluri"
        title="Agentic AI Engineer · Software Engineer · Accessibility Advocate"
        bio="I build production-grade, human-centered systems across AI, accessibility, mobile, and full-stack engineering. Currently leading AI/ML initiatives at Smith-Kettlewell Eye Research Institute and Evenness, Inc."
        socialLinks={{
          email: "kaustubha.ev@gmail.com",
          linkedin: "https://linkedin.com/in/kaustubha-ve/",
          github: "https://github.com/Kaustubha-09"
        }}
      />
    </section>
  );
};

export default Home;
