import "../styles/projects.css";
import photo3 from "../assets/photo3.jpg";
import website from "../assets/website.jpg";
import movie from "../assets/movie.jpg";
import school from "../assets/school.jpg";
import freelance from "../assets/freelance.jpg";
import taskManager from "../assets/taskManager.jpg";
import ageCalculator from "../assets/ageCalc.jpg";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
const projects = [
  {
    name: "Personal Website",
    image: website,
    description:
      "A responsive personal website showcasing my education, skills, projects, and experience.",
    details:
      "Built using HTML and CSS with a fully responsive layout. The project includes a custom image gallery, skill section, education timeline, experience cards, and a contact section.",
    link: "https://jamilawaziry.github.io/Personal_Website/",
    tech: ["HTML", "CSS"],
    featured: true,
  },

  {
    name: "Movie Theater App",
    image: movie,
    description:
      "A modern movie theater landing page with movie listings and booking interface.",
    details:
      "Designed a responsive movie theater website featuring movie cards, show schedules, and booking-inspired layouts.",
    link: "https://jamilawaziry.github.io/Movie-Theater-Web-Page/",
    tech: ["HTML", "CSS"],
    featured: false,
  },

  {
    name: "School Portal",
    image: school,
    description:
      "A school management portal with interactive navigation and dynamic functionality.",
    details:
      "Built using HTML, CSS, and JavaScript. Demonstrates DOM manipulation and responsive UI design.",
    link: "https://jamilawaziry.github.io/School-Portal/",
    tech: ["HTML", "CSS", "JavaScript"],
    featured: false,
  },

  {
    name: "Freelance Invoice App",
    image: freelance,
    description:
      "An invoice generator for freelancers to manage projects and client payments.",
    details:
      "Allows users to generate professional invoices and calculate totals automatically.",
    link: "https://jamilawaziry.github.io/freelance-invoice-app/",
    tech: ["HTML", "CSS", "JavaScript"],
    featured: true,
  },

  {
    name: "University Management System (KPU-MIS)",
    image: photo3,
    description:
      "A full-stack university management system developed for Kabul Polytechnic University.",
    details:
      "Built using Angular, Spring Boot, PostgreSQL, and Bootstrap. Supports student and academic management.",
    link: "#",
    tech: ["Angular", "Spring Boot", "PostgreSQL", "Bootstrap"],
    featured: true,
  },

  {
    name: "Todo List App",
    image: taskManager,
    description:
      "A task management application for organizing daily activities.",
    details:
      "Users can create, edit, complete, and delete tasks using JavaScript.",
    link: "https://jamilawaziry.github.io/Todo-List/",
    tech: ["HTML", "CSS", "JavaScript"],
    featured: false,
  },

  {
    name: "Age Calculator",
    image: ageCalculator,
    description:
      "A utility application that calculates age from date of birth.",
    details:
      "Uses JavaScript Date APIs to calculate age in years, months, and days.",
    link: "#",
    tech: ["HTML", "CSS", "JavaScript"],
    featured: false,
  },
];

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState("All");

  const filteredProjects =
    selectedTech === "All"
      ? projects
      : projects.filter((project) => project.tech.includes(selectedTech));

  return (
    <section className="projects">
      <h2>Projects</h2>

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
