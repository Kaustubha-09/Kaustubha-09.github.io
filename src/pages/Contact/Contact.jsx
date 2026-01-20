import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Get In Touch</h2>
      <p className={styles.subtitle}>
        I'm always open to discussing new opportunities, interesting projects, or just having a chat!
      </p>
      <div className={styles.content}>
        <a href="mailto:kaustubha.ev@gmail.com" className={styles.link}>
          📧 kaustubha.ev@gmail.com
        </a>
        <a href="tel:6692046927" className={styles.link}>
          📱 (669) 204-6927
        </a>
        <div className={styles.socialLinks}>
          <a 
            href="https://linkedin.com/in/kaustubha-ve/"
            target="_blank"
            rel="noreferrer"
            className={styles.socialLink}
          >
            💼 LinkedIn
          </a>
          <a 
            href="https://github.com/Kaustubha-09"
            target="_blank"
            rel="noreferrer"
            className={styles.socialLink}
          >
            🔗 GitHub
          </a>
        </div>
        <p className={styles.location}>
          Silicon Valley, CA · U.S. Citizen
        </p>
      </div>
    </section>
  );
};

export default Contact;
