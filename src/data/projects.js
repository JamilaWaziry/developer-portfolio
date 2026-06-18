import photo3 from "../assets/photo3.jpg";
import website from "../assets/website.jpg";
import movie from "../assets/movie.jpg";
import school from "../assets/school.jpg";
import freelance from "../assets/freelance.jpg";
import taskManager from "../assets/taskManager.jpg";
import ageCalculator from "../assets/ageCalc.jpg";

const projects = [
  {
    id: 1,
    name: "Personal Website",
    image: website,
    description:
      "A responsive personal website showcasing my education, skills, projects, and experience.",
    details:
      "Built using HTML and CSS with a fully responsive layout. The project includes a custom image gallery, skill section, education timeline, experience cards, and a contact section.",
    link: "https://jamilawaziry.github.io/Personal_Website/",
    codeLink: "https://github.com/yourusername/Personal_Website",
    tech: ["HTML", "CSS"],
    featured: true,
    status: "Completed",
    progress: 100,
  },

  {
    id: 2,
    name: "Movie Theater App",
    image: movie,
    description:
      "A modern movie theater landing page with movie listings and booking interface.",
    details:
      "Designed a responsive movie theater website featuring movie cards, show schedules, and booking-inspired layouts.",
    link: "https://jamilawaziry.github.io/Movie-Theater-Web-Page/",
    codeLink: "https://github.com/yourusername/Personal_Website",
    tech: ["HTML", "CSS"],
    featured: false,
    status: "Completed",
    progress: 100,
  },

  {
    id: 3,
    name: "School Portal",
    image: school,
    description:
      "A school management portal with interactive navigation and dynamic functionality.",
    details:
      "Built using HTML, CSS, and JavaScript. Demonstrates DOM manipulation and responsive UI design.",
    link: "https://jamilawaziry.github.io/School-Portal/",
    codeLink: "https://github.com/yourusername/Personal_Website",
    tech: ["HTML", "CSS", "JavaScript"],
    featured: false,
    status: "Completed",
    progress: 100,
  },

  {
    id: 4,
    name: "Freelance Invoice App",
    image: freelance,
    description:
      "An invoice generator for freelancers to manage projects and client payments.",
    details:
      "Allows users to generate professional invoices and calculate totals automatically.",
    link: "https://jamilawaziry.github.io/freelance-invoice-app/",
    codeLink: "https://github.com/yourusername/Personal_Website",
    tech: ["HTML", "CSS", "JavaScript"],
    featured: true,
    status: "Completed",
    progress: 100,
  },

  {
    id: 5,
    name: "University Management System (KPU-MIS)",
    image: photo3,
    description:
      "A full-stack university management system developed for Kabul Polytechnic University.",
    details:
      "Built using Angular, Spring Boot, PostgreSQL, and Bootstrap. Supports student and academic management.",
    link: "#",
    codeLink: "https://github.com/yourusername/Personal_Website",
    tech: ["Angular", "Spring Boot", "PostgreSQL", "Bootstrap"],
    featured: true,
    status: "Completed",
    progress: 100,
  },

  {
    id: 6,
    name: "Todo List App",
    image: taskManager,
    description:
      "A task management application for organizing daily activities.",
    details:
      "Users can create, edit, complete, and delete tasks using JavaScript.",
    link: "https://jamilawaziry.github.io/Todo-List/",
    codeLink: "https://github.com/yourusername/Personal_Website",
    tech: ["HTML", "CSS", "JavaScript"],
    featured: false,
    status: "Completed",
    progress: 100,
  },

  {
    id: 7,
    name: "Age Calculator",
    image: ageCalculator,
    description:
      "A utility application that calculates age from date of birth.",
    details:
      "Uses JavaScript Date APIs to calculate age in years, months, and days.",
    link: "#",
    codeLink: "https://github.com/yourusername/Personal_Website",
    tech: ["HTML", "CSS", "JavaScript"],
    featured: false,
    status: "Completed",
    progress: 100,
  },
];
export default projects;
