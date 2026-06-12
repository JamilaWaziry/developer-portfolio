import { useState } from "react";
import { Link } from "react-router-dom";
function ProjectCard({ project }) {
  const [showDetails] = useState(false);

  return (
    <div className="card">
      {project.featured && <span className="featured-badge">🌟 Featured</span>}

      <img src={project.image} alt={project.name} />

      <h3>{project.name}</h3>

      <p>{project.description}</p>

      <div className="tech">
        {project.tech.map((tech, index) => (
          <span key={index} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>

      <Link to={`/projects/${project.id}`} className="details-btn">
        Open Project
      </Link>

      {showDetails && (
        <div className="details">
          <p>{project.details}</p>
        </div>
      )}

      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;
