import { useState } from "react";

function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false);

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

      <button
        className="details-btn"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Details" : "View Details"}
      </button>

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
