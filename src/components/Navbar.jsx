import "../Styles/navbar.css";

export default function Navbar() {
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
    </nav>
  );
}
