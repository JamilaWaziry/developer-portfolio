import "../Styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="links">
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
        <a href="#">Twitter</a>
      </div>
      <p>© {new Date().getFullYear()} Jamila Waziry</p>
    </footer>
  );
}
