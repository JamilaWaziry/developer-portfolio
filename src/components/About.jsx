import { useState } from "react";
import "../styles/about.css";

export default function About() {
  const [mood, setMood] = useState("😊");
  const [floatingEmojis, setFloatingEmojis] = useState([]);
  const [showGoal, setShowGoal] = useState(false);

  const handleReaction = (emoji) => {
    setMood(emoji);

    const newEmojis = Array.from({ length: 15 }, (_, i) => ({
      id: Date.now() + i,
      emoji,
      left: Math.random() * 90,
    }));

    setFloatingEmojis((prev) => [...prev, ...newEmojis]);

    setTimeout(() => {
      setFloatingEmojis((prev) =>
        prev.filter((item) => !newEmojis.some((e) => e.id === item.id)),
      );
    }, 3000);
  };

  return (
    <section className="about">
      <h2 className="about-title">About Me</h2>

      <div className="about-content">
        <div className="goal-card">
          <h3>My Goal</h3>

          <p>
            I am a passionate Frontend Developer focused on building modern,
            responsive, and user-friendly web applications.
          </p>

          {showGoal && (
            <p>
              My long-term goal is to become a skilled Full-Stack Developer,
              contribute to impactful software projects, and create digital
              solutions that make technology more accessible and meaningful. I
              enjoy continuous learning, solving complex problems, and
              transforming ideas into real-world applications.
            </p>
          )}

          <button className="show-btn" onClick={() => setShowGoal(!showGoal)}>
            {showGoal ? "Show Less" : "Show More"}
          </button>
        </div>

        <div className="about-intro">
          <h3>Jamila Waziri</h3>

          <p className="role">Frontend Developer</p>

          <p className="intro">
            I enjoy transforming ideas into responsive and interactive web
            applications using React, JavaScript, and modern frontend
            technologies. I am passionate about building intuitive user
            experiences and continuously improving my skills through hands-on
            projects and learning.
          </p>

          <a href="/Jamila-Waziri-CV.pdf" download className="resume-btn">
            📄 Download Resume
          </a>
        </div>
      </div>

      <div className="portfolio-reactions">
        <h3>React to My Portfolio</h3>

        <div className="reaction-buttons">
          <button onClick={() => handleReaction("😊")}>😊</button>
          <button onClick={() => handleReaction("💻")}>💻</button>
          <button onClick={() => handleReaction("🚀")}>🚀</button>
          <button onClick={() => handleReaction("💡")}>💡</button>
          <button onClick={() => handleReaction("❤️")}>❤️</button>
        </div>

        <div className="reaction-display">
          {mood === "😊" && <p>Glad you enjoyed exploring my portfolio.</p>}

          {mood === "💻" && (
            <p>Code is where creativity meets problem solving.</p>
          )}

          {mood === "🚀" && (
            <p>Always learning and building exciting projects.</p>
          )}

          {mood === "💡" && (
            <p>Every great solution starts with a simple idea.</p>
          )}

          {mood === "❤️" && (
            <p>Thank you for showing some love to my portfolio.</p>
          )}
        </div>

        <div className="floating-container">
          {floatingEmojis.map((item) => (
            <span
              key={item.id}
              className="floating-emoji"
              style={{ left: `${item.left}%` }}
            >
              {item.emoji}
            </span>
          ))}
        </div>
      </div>

      <div className="hobbies-row">
        <div className="hobby-card">
          <span>💻</span>
          <h4>Coding</h4>
          <p>Building web applications and exploring modern technologies.</p>
        </div>

        <div className="hobby-card">
          <span>📚</span>
          <h4>Reading</h4>
          <p>Learning through books, articles, and technical documentation.</p>
        </div>

        <div className="hobby-card">
          <span>🎯</span>
          <h4>Learning</h4>
          <p>Continuously improving skills and staying up to date.</p>
        </div>

        <div className="hobby-card">
          <span>🧩</span>
          <h4>Problem Solving</h4>
          <p>Finding efficient solutions for real-world challenges.</p>
        </div>
      </div>
    </section>
  );
}
