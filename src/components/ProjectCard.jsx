import { useState } from "react";
import { Link } from "react-router-dom";
import TechBadge from "./TechBadge";
import { useAppContext } from "../context/AppContext";

export default function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false);

  const { favorites, toggleFavorite } = useAppContext();

  const isFavorite = favorites.includes(project.id);

  return (
    <div className="card">
      <div className="image-wrapper">
        <img src={project.image} alt={project.name} />
      </div>

      <h3>{project.name}</h3>

      <span
        className={`status-badge ${project.status
          .toLowerCase()
          .replace(" ", "-")}`}
      >
        {project.status}
      </span>

      <p>{project.description}</p>

      <div className="progress-wrapper">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={project.progress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="progress-fill"
            style={{ width: `${project.progress}%` }}
          />
        </div>

        <span>{project.progress}% Complete</span>
      </div>

      <div className="tech">
        {project.tech.map((tech, index) => (
          <TechBadge key={index} tech={tech} />
        ))}
      </div>

      <button
        className="favorite-btn"
        onClick={() => toggleFavorite(project.id)}
      >
        {isFavorite ? "⭐ Favorited" : "☆ Add Favorite"}
      </button>

      <button
        className="details-btn"
        onClick={() => setShowDetails(!showDetails)}
        aria-expanded={showDetails}
      >
        {showDetails ? "Hide Details" : "More Info"}
      </button>

      {showDetails && (
        <div className="details">
          <p>{project.details}</p>
        </div>
      )}

      <div className="project-actions">
        <Link to={`/projects/${project.id}`} className="project-btn">
          Open Project
        </Link>
      </div>
    </div>
  );
}
