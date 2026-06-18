import "../styles/projects.css";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
export default function Projects() {
  const [selectedTech, setSelectedTech] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesTech =
      selectedTech === "All" || project.tech.includes(selectedTech);

    const matchesSearch = project.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesTech && matchesSearch;
  });

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="filters">
        <button onClick={() => setSelectedTech("All")}>All</button>

        <button onClick={() => setSelectedTech("HTML")}>HTML</button>

        <button onClick={() => setSelectedTech("CSS")}>CSS</button>

        <button onClick={() => setSelectedTech("JavaScript")}>
          JavaScript
        </button>

        <button onClick={() => setSelectedTech("Angular")}>Angular</button>
      </div>

      <div className="grid">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="empty-state">No projects found for this technology.</p>
      )}
    </section>
  );
}
