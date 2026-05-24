import { useEffect, useState } from "react";
import "../Styles/header.css";
import codePic from "../assets/photo3.jpg";

export default function Header({ message }) {
  const [quote, setQuote] = useState(null);

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

  return (
    <header className="header">
      <div className="intro">
        <div className="intro-image">
          <img src={codePic} alt="code" />
        </div>

        <div className="intro-text">
          <h1>&lt; Hello, I am Jamila! &gt;</h1>
          <h1>&lt; I design and develop</h1>
          <h1>web applications. &gt;</h1>
          <p>{message}</p>
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
