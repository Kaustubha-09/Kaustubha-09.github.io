import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link to="/" className={styles.brand}>
          Kaustubha
        </Link>

        <ul className={styles.links}>
          <li>
            <Link 
              to="/" 
              className={`${styles.link} ${isActive("/") ? styles.active : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/experience" 
              className={`${styles.link} ${isActive("/experience") ? styles.active : ""}`}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className={`${styles.link} ${isActive("/projects") ? styles.active : ""}`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/skills" 
              className={`${styles.link} ${isActive("/skills") ? styles.active : ""}`}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link 
              to="/achievements" 
              className={`${styles.link} ${isActive("/achievements") ? styles.active : ""}`}
            >
              Achievements
            </Link>
          </li>
          <li>
            <Link 
              to="/involvements" 
              className={`${styles.link} ${isActive("/involvements") ? styles.active : ""}`}
            >
              Leadership
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`${styles.link} ${isActive("/contact") ? styles.active : ""}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
