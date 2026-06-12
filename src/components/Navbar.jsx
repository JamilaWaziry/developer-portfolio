import "../styles/navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <h2>Jamila Waziry.</h2>

      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      <button onClick={toggleTheme}>Theme: {theme}</button>
    </nav>
  );
}
