import "../styles/projects.css";
import photo3 from "../assets/photo3.jpg";
import website from "../assets/website.jpg";
import movie from "../assets/movie.jpg";
import school from "../assets/school.jpg";
import freelance from "../assets/freelance.jpg";
import taskManager from "../assets/taskManager.jpg";
import ageCalculator from "../assets/ageCalc.jpg";
const projects = [
  {
    name: "Personal Website",
    image: website,
    description: "A personal website built with HTML, and CSS.",
    link: "https://jamilawaziry.github.io/Personal_Website/",
    tech: ["HTML", "CSS"],
    // featured: true,
  },
  {
    name: "Movie Theater App",
    image: movie,
    description: "A simple movie theater app.",
    link: "https://jamilawaziry.github.io/Movie-Theater-Web-Page/",
    tech: ["HTML", "CSS"],
    // featured: false,
  },
  {
    name: "School Portal",
    image: school,
    description: "A simple school portal app.",
    link: "https://jamilawaziry.github.io/School-Portal/",
    tech: ["HTML", "CSS", "JavaScript"],
    // featured: false,
  },
  {
    name: "Freelance Invoice App",
    image: freelance,
    description: "A simple freelance invoice app.",
    link: "https://jamilawaziry.github.io/freelance-invoice-app/",
    tech: ["HTML", "CSS", "JavaScript"],
    // featured: false,
  },
  {
    name: "University Management System KPU-MIS",
    image: photo3,
    description:
      "A university management system for Kabul polytechnic university.",
    link: "#",
    tech: ["Angular", "Spring Boot", "PostgreSQL", "Bootstrap"],
  },
  {
    name: "Todo List App",
    image: taskManager,
    description: "A simple todo list app.",
    link: "https://jamilawaziry.github.io/Todo-List/",
    tech: ["HTML", "CSS", "JavaScript"],
    // featured: false,
  },
  {
    name: "Age Calculator ",
    image: ageCalculator,
    description: "A simple age calculator app.",
    link: "#",
    tech: ["HTML", "CSS", "JavaScript"],
    // featured: false,
  },
];

function ProjectCard({ project }) {
  return (
    <div className="card">
      <img src={project.image} alt={project.name} />
      <h3>{project.name}</h3>
      {/* {project.featured && <span className="badge">Featured</span>} */}
      <p>{project.description}</p>
      <div className="tech">
        {project.tech.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
      <a href={project.link}>View Project</a>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  );
}
