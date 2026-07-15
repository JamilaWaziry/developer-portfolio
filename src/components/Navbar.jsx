import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAppContext } from "../context/AppContext";

import "../styles/navbar.css";
import { FiSun, FiMoon } from "react-icons/fi";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { theme, toggleTheme } = useAppContext();

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        Jamila <span>Waziry</span>.
      </NavLink>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </li>

        <li>
          <button
            className="theme-btn"
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </li>
      </ul>
    </nav>
  );
}
