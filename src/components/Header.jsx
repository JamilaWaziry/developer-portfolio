import { useEffect, useState, useRef } from "react";
import "../styles/header.css";
import Typed from "typed.js";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header({ message }) {
  const [quote, setQuote] = useState(null);
  const typingRef = useRef(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const today = new Date().toDateString();
      const savedQuote = JSON.parse(localStorage.getItem("dailyQuote"));

      if (savedQuote && savedQuote.date === today) {
        setQuote(savedQuote);
      } else {
        try {
          const res = await fetch("https://dummyjson.com/quotes");
          const data = await res.json();

          const random =
            data.quotes[Math.floor(Math.random() * data.quotes.length)];

          const newQuote = {
            quote: random.quote,
            author: random.author || "Unknown",
            date: today,
          };

          setQuote(newQuote);
          localStorage.setItem("dailyQuote", JSON.stringify(newQuote));
        } catch (error) {
          console.error("Error fetching quote:", error);
          setQuote({
            quote: "Stay consistent and never stop learning.",
            author: "Unknown",
            date: today,
          });
        }
      }
    };

    fetchQuote();
  }, []);

  useEffect(() => {
    const typed = new Typed(typingRef.current, {
      strings: ["Hello I'am ,"],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <header className="header">
      <div className="intro">
        <div className="intro-text">
          <span className="hello" ref={typingRef}></span>

          <h1>
            Jamila <span>Waziry</span>
          </h1>

          <p>
            Building elegant solutions to complex problems with modern
            technologies.
          </p>

          <div className="action-section">
            <div className="buttons">
              <Link to="/contact" className="primary-btn">
                Let's Talk
              </Link>
              <Link to="/projects" className="secondary-btn">
                View Projects
              </Link>
            </div>

            <div className="socials">
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="mailto:you@example.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="code-card">
          <div className="code-header">
            <span className="header-circle red"></span>
            <span className="header-circle yellow"></span>
            <span className="header-circle green"></span>
            <span className="file-name">developer.js</span>
          </div>
          <pre className="code-content">
            <span className="comment">// Developer</span>
            {"\n"}
            <span className="keyword">const</span>{" "}
            <span className="variable">developer</span> ={" {"}
            {"\n"}
            &nbsp;&nbsp;<span className="property">name</span>:{" "}
            <span className="string">"Jamila Waziry"</span>,{"\n"}
            &nbsp;&nbsp;<span className="property">skills</span>: [
            <span className="string">"React"</span>,{" "}
            <span className="string">"JavaScript"</span>,{" "}
            <span className="string">"Java"</span>],{"\n"}
            &nbsp;&nbsp;<span className="property">focuses</span>: [
            <span className="string">"Responsive Design"</span>,{" "}
            <span className="string">"UI/UX"</span>],{"\n"}
            &nbsp;&nbsp;<span className="property">learning</span>:{" "}
            <span className="string">"Always"</span>
            {"\n"}
            {"}"};
          </pre>
        </div>
      </div>

      {quote && (
        <p className="quote">
          {quote.quote} — <span>{quote.author}</span>
        </p>
      )}
    </header>
  );
}
