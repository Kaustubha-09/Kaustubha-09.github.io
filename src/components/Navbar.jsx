export default function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #eaeaea",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left: Name / Brand */}
        <span style={{ fontWeight: 600, fontSize: "1.05rem" }}>
          Kaustubha Eluri
        </span>

        {/* Right: Navigation Links */}
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a href="#experience" style={linkStyle}>Experience</a>
          <a href="#projects" style={linkStyle}>Projects</a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#333",
  fontWeight: 500,
};