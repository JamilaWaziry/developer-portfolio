import { useAppContext } from "../context/AppContext";
import projects from "../data/projects";
import { Link } from "react-router-dom";

export default function FavoriteProjects() {
  const { favorites, toggleFavorite } = useAppContext();

  const favoriteProjects = projects.filter((project) =>
    favorites.includes(project.id),
  );

  return (
    <div className="page">
      <section className="favorite-projects-section">
        <h3>⭐ Favorite Projects</h3>

        {favoriteProjects.length === 0 ? (
          <p>No favorite projects selected yet.</p>
        ) : (
          <div className="favorite-grid">
            {favoriteProjects.map((project) => (
              <div key={project.id} className="favorite-card">
                <img src={project.image} alt={project.name} />

                <h4>{project.name}</h4>

                <div className="favorite-actions">
                  <Link to={`/projects/${project.id}`}>Open</Link>

                  <button onClick={() => toggleFavorite(project.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
