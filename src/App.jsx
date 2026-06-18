import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import ProjectDetails from "./pages/ProjectDetails";

import FeedbackWall from "./components/FeedbackWall";

import { Routes, Route } from "react-router-dom";

import "./styles/global.css";

export default function App() {
  return (
    <div>
      <Navbar />

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
