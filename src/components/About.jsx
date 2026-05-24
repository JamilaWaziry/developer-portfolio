import { useState } from "react";
import "../styles/about.css";

export default function About() {
  const hobbies = ["Coding", "Reading", "Fitness", "Movies"];
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="about">
      <h2>About Me</h2>
      <p>I am a passionate developer learning React and building projects.</p>
      <ul>
        {hobbies.map((hobby, i) => (
          <li key={i}>{hobby}</li>
        ))}
      </ul>
      {showMore && (
        <p>
          I aim to become a full-stack developer and contribute to open-source
          projects.
        </p>
      )}
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>
    </section>
  );
}
