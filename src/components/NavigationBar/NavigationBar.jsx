import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.brand} aria-label="Home">
          Kaustubha
        </Link>

        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={styles.menuIcon}>
            <span className={`${styles.menuLine} ${isMenuOpen ? styles.open : ""}`}></span>
            <span className={`${styles.menuLine} ${isMenuOpen ? styles.open : ""}`}></span>
            <span className={`${styles.menuLine} ${isMenuOpen ? styles.open : ""}`}></span>
          </span>
        </button>

        <ul className={`${styles.links} ${isMenuOpen ? styles.open : ""}`}>
          <li>
            <Link 
              to="/" 
              className={`${styles.link} ${isActive("/") ? styles.active : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/experience" 
              className={`${styles.link} ${isActive("/experience") ? styles.active : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link 
              to="/education" 
              className={`${styles.link} ${isActive("/education") ? styles.active : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Education
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className={`${styles.link} ${isActive("/projects") ? styles.active : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/skills" 
              className={`${styles.link} ${isActive("/skills") ? styles.active : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link 
              to="/achievements-certifications" 
              className={`${styles.link} ${isActive("/achievements-certifications") ? styles.active : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Achievements & Certifications
            </Link>
          </li>
          <li>
            <Link 
              to="/involvements" 
              className={`${styles.link} ${isActive("/involvements") ? styles.active : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Leadership
            </Link>
          </li>
          <li>
            <Link 
              to="/gallery" 
              className={`${styles.link} ${isActive("/gallery") ? styles.active : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link 
              to="/journey" 
              className={`${styles.link} ${isActive("/journey") ? styles.active : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Journey
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`${styles.link} ${isActive("/contact") ? styles.active : ""}`}
              onClick={() => setIsMenuOpen(false)}
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
