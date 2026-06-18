import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAppContext } from "../context/AppContext";

import "../styles/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { theme, toggleTheme } = useAppContext();

  return (
    <nav className="navbar">
      <h2>Jamila Waziry.</h2>

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
          <button type="button" onClick={toggleTheme}>
            Theme: {theme}
          </button>
        </li>
      </ul>
    </nav>
  );
}
