import React, { useEffect, useRef } from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard.jsx";
import styles from "./Home.module.css";

const Home = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.style.opacity = "1";
      cardRef.current.style.transform = "translateY(0)";
    }
  }, []);

  return (
    <section className={styles.section}>
      <div ref={cardRef} className={styles.cardWrapper}>
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
      </div>
    </section>
  );
};

export default Home;
