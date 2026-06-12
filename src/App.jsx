import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import profilePic from "./assets/logo.jpg";
import ContactForm from "./components/ContactForm";
import "./styles/global.css";
import { useState, useEffect } from "react";
import FeedbackWall from "./components/FeedbackWall";
import Skills from "./components/Skills";

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
      <Header message="Bring your ideas to life with code!" />
      <div className="App">
        <Profile
          photo={profilePic}
          title="Frontend Developer"
          bio="Frontend Developer driven by curiosity, creativity, and code. I enjoy crafting sleek user interfaces, solving real problems, and building web experiences that are both visually engaging and functional."
        />
      </div>
      <About />
      <Projects />
      <Skills />
      <FeedbackWall />
      <ContactForm />
      <Footer />
    </div>
  );
}
