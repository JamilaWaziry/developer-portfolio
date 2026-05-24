import "../styles/projects.css";

const projects = [
  {
    name: "Personal Website",
    image: "/assets/photo3.jpg",
    description: "A personal website built with HTML, and CSS.",
    link: "#",
    tech: ["HTML", "CSS", "JavaScript"],
    featured: true,
  },
  {
    name: "Movie Theater App",
    image: "/assets/photo4.jpg",
    description: "A simple movie theater app.",
    link: "#",
    tech: ["HTML", "CSS"],
    featured: false,
  },
];

function ProjectCard({ project }) {
  return (
    <div className="card">
      <img src={project.image} alt={project.name} />
      <h3>{project.name}</h3>
      {project.featured && <span className="badge">Featured</span>}
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
