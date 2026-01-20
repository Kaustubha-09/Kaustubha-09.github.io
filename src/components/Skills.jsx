import skills from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ padding: "4rem 2rem", maxWidth: "900px", margin: "0 auto" }}
    >
      <h2>Skills</h2>

      {skills.map((group, idx) => (
        <div key={idx} style={{ marginBottom: "2rem" }}>
          <h3 style={{ marginBottom: "0.75rem" }}>{group.category}</h3>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {group.items.map((skill, i) => (
              <span
                key={i}
                style={{
                  padding: "0.35rem 0.7rem",
                  fontSize: "0.9rem",
                  backgroundColor: "#f3f4f6",
                  borderRadius: "6px",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}