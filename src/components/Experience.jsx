import experience from "../data/experience";

export default function Experience() {
  return (
    <section style={{ padding: "4rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h2>Experience</h2>

      {experience.map((company, idx) => (
        <div key={idx} style={{ marginBottom: "3rem" }}>
          <h3>{company.company}</h3>
          <p>{company.location}</p>

          {company.roles.map((role, rIdx) => (
            <div key={rIdx} style={{ marginTop: "1rem" }}>
              <strong>{role.title}</strong>
              <p>{role.period}</p>
              <ul>
                {role.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}