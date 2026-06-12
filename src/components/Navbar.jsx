import "../styles/navbar.css";

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <h2>Jamila Waziry.</h2>
      <ul className="nav-links">
        {["// Home", "// About", "// Projects", "// Contact"].map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
      <button onClick={toggleTheme}>Theme: {theme}</button>
    </nav>
  );
}
