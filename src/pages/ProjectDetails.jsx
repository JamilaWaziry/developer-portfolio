import { useParams } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <h2>Project Not Found</h2>;
  }

  return (
    <section className="project-details">
      <h1>{project.name}</h1>

      <img src={project.image} alt={project.name} width="500" />

      <p>{project.description}</p>

      <h3>Technologies Used</h3>

      <ul>
        {project.tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <a href={project.link} target="_blank" rel="noreferrer">
        Visit Project
      </a>
    </section>
  );
}
