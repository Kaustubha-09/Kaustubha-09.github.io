export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <div style={styles.brand}>Kaustubha</div>

        <ul style={styles.links}>
          <li><a href="#experience" style={styles.link}>Experience</a></li>
          <li><a href="#projects" style={styles.link}>Projects</a></li>
          <li><a href="#skills" style={styles.link}>Skills</a></li>
          <li><a href="#contact" style={styles.link}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #eaeaea",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brand: {
    fontWeight: 700,
    fontSize: "1.1rem",
  },
  links: {
    listStyle: "none",
    display: "flex",
    gap: "1.5rem",
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: "0.95rem",
  },
};