import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import ProjectDetails from "./pages/ProjectDetails";

import FeedbackWall from "./components/FeedbackWall";

import "./styles/global.css";

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);

    document.body.className = theme;
  }, [theme]);

  const themes = ["dark", "light", "ocean"];

  const toggleTheme = () => {
    const currentIndex = themes.indexOf(theme);

    const nextIndex = (currentIndex + 1) % themes.length;

    setTheme(themes[nextIndex]);
  };

  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/projects" element={<ProjectsPage />} />

        <Route
          path="/contact"
          element={
            <>
              <ContactPage />
              <FeedbackWall />
            </>
          }
        />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}
