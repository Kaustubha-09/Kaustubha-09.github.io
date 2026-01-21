import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <div className={styles.content}>
        <p>
          My career didn't begin in computer science - it began in architectural engineering, designing spaces where people could live, work, and connect. Over time, I realized I was less drawn to the physical walls and more fascinated by the systems behind them - the invisible structures that make things work. That curiosity led me to pursue my Master's in Computer Science at <a href="https://siliconvalley.northeastern.edu/kaustubha-eluri-aspiring-product-manager/" target="_blank" rel="noreferrer noopener" className={styles.link}>Northeastern University</a>, where my "blueprints" became algorithms, APIs, and AI models.
        </p>
        
        <p>
          Today, I'm advancing AI accessibility research as a Research Assistant at the <a href="https://www.ski.org/" target="_blank" rel="noreferrer noopener" className={styles.link}>Smith-Kettlewell Eye Research Institute</a>, developing <a href="https://ydx.youdescribe.org/home" target="_blank" rel="noreferrer noopener" className={styles.link}><strong>YouDescribeX</strong></a>, an AI-powered extension of YouDescribe that enables blind and visually impaired users to enjoy videos through intelligent audio descriptions. From integrating AI/ML pipelines to building real-time bot features, my work ensures WCAG compliance and inclusive design across web, iOS, and Android.
        </p>
        
        <p>
          In parallel, as an Agentic AI Engineer Intern at Evenness, I've deployed autonomous AI agents that reduced manual effort by <strong>40%</strong>, improved throughput by <strong>25%</strong>, and sustained <strong>99.9% uptime</strong>. My projects include:
        </p>
        
        <ul className={styles.list}>
          <li><strong>94% accurate</strong> deepfake detection system</li>
          <li><strong>GPT-4-powered</strong> emergency triage assistant improving patient urgency classification</li>
          <li><strong>Award-winning</strong> mobile apps (NEUQuest, Husky Mingle) driving campus engagement</li>
        </ul>
        
        <p>
          <strong>Core Skills:</strong> Python, Java, JavaScript, Swift, Dart, C, PyTorch, TensorFlow, Hugging Face, OpenAI APIs, AWS, Azure, GCP, Flask, FastAPI, Docker, CI/CD, React.js, Flutter, Android, iOS, Firebase, Agile/Scrum, Product Management.
        </p>
        
        <p>
          I thrive at the intersection of technology, design, and human impact. If you're hiring for Software Engineering, AI/ML, or Product Management roles or exploring the next wave of AI-driven products, let's connect.
        </p>
        
        <p className={styles.workAuth}>
          <strong>Work Authorization:</strong> U.S. Citizen (no sponsorship required).
        </p>

        <div className={styles.personalInterests}>
          <h3 className={styles.interestsTitle}>Beyond Code</h3>
          <p>
            When I'm not building AI systems or writing code, I'm an <strong>avid photographer</strong> capturing moments through my lens, a <strong>traveler</strong> exploring new places and cultures, a <strong>history buff</strong> fascinated by the stories that shaped our world, and an <strong>avid reader</strong> constantly learning from books. I also have a special love for <strong>dogs</strong> and enjoy photographing these wonderful companions. You can follow my journey and photography on <a href="https://instagram.com/kaustubha_ev" target="_blank" rel="noreferrer noopener" className={styles.link}>Instagram</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
