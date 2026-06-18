import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import TechBadge from "../components/TechBadge";
// import { useAppContext } from "../context/AppContext";
import FavoriteProjects from "../components/FavoriteProjects";

export default function ProjectDetails() {
  const { id } = useParams();
  // const { favorites } = useAppContext();
  const project = projects.find((p) => p.id === Number(id));
  // const favoriteProjects = projects.filter((p) => favorites.includes(p.id));

  // const isFavorite = favorites.includes(project.id);

  if (!project) {
    return <h2>Project Not Found</h2>;
  }

  return (
    <div className="page">
      <section className="project-details">
        <Link to="/projects" className="back-btn">
          ← Back to Projects
        </Link>

        <div className="details-card">
          <div className="details-left">
            <img
              src={project.image}
              alt={project.name}
              className="details-image"
            />

            <div className="project-links">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-btn"
              >
                🚀 Live Demo
              </a>

              <a
                href={project.codeLink}
                target="_blank"
                rel="noreferrer"
                className="project-btn secondary"
              >
                💻 View Code
              </a>
            </div>
            {/* {isFavorite && (
            <p className="favorite-status">
              ⭐ This project is in your favorites
            </p>
          )} */}
            {/* <button
            className="favorite-btn"
            onClick={() => toggleFavorite(project.id)}
          >
            {isFavorite ? "⭐ Favorited" : "☆ Add Favorite"}
          </button> */}
          </div>

          <div className="details-content">
            <h1>{project.name}</h1>

            <span
              className={`status-badge ${
                project.featured ? "featured" : "completed"
              }`}
            >
              {project.featured ? "⭐ Featured" : "✅ Completed"}
            </span>

            <p>{project.description}</p>

            <h3>Project Overview</h3>
            <p>{project.details}</p>

            <h3>Technologies Used</h3>

            <div className="tech">
              {project.tech.map((tech, index) => (
                <TechBadge key={index} tech={tech} />
              ))}
            </div>

            <h3>Completion Progress</h3>

            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow={project.progress}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-fill"
                style={{
                  width: `${project.progress}%`,
                }}
              />
            </div>

            <p className="progress-text">{project.progress}% Complete</p>
          </div>
        </div>
        <FavoriteProjects />
      </section>
    </div>
  );
}
