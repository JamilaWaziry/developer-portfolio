import "../styles/skills.css";

const skills = [
  {
    name: "HTML",
    percentage: 95,
    fact: "Built more than 10 responsive websites.",
  },
  {
    name: "CSS",
    percentage: 90,
    fact: "Love creating modern UI designs.",
  },
  {
    name: "JavaScript",
    percentage: 85,
    fact: "My favorite language for web development.",
  },
  {
    name: "React",
    percentage: 80,
    fact: "Currently building dynamic React applications.",
  },
  {
    name: "Angular",
    percentage: 75,
    fact: "Used in my University Management System project.",
  },
  {
    name: "Spring Boot",
    percentage: 70,
    fact: "Building backend APIs and services.",
  },
];
export default function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.percentage}%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${skill.percentage}%`,
                }}
              ></div>
            </div>

            <p className="skill-fact">{skill.fact}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
