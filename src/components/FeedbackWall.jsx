import { useState, useEffect } from "react";
import "../styles/feedback.css";

export default function FeedbackWall() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const saved = localStorage.getItem("feedbacks");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      id: Date.now(),
      ...formData,
    };

    setFeedbacks([newFeedback, ...feedbacks]);

    setFormData({
      name: "",
      rating: 5,
      comment: "",
    });
  };

  return (
    <section className="feedback-wall">
      <h2>Visitor Feedback</h2>

      <form onSubmit={handleSubmit} className="feedback-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />

        <select name="rating" value={formData.rating} onChange={handleChange}>
          <option value="5">⭐⭐⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="2">⭐⭐</option>
          <option value="1">⭐</option>
        </select>

        <textarea
          name="comment"
          placeholder="Write your feedback..."
          value={formData.comment}
          onChange={handleChange}
        />

        <button type="submit">Submit Feedback</button>
      </form>

      <div className="sort-buttons">
        <button
          onClick={() =>
            setFeedbacks([...feedbacks].sort((a, b) => b.rating - a.rating))
          }
        >
          Highest Rating
        </button>

        <button
          onClick={() =>
            setFeedbacks([...feedbacks].sort((a, b) => a.rating - b.rating))
          }
        >
          Lowest Rating
        </button>
      </div>
      <div className="feedback-list">
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="feedback-card">
            {Number(feedback.rating) === 5 && (
              <span className="featured-review">🌟 Featured Review</span>
            )}

            <h3>{feedback.name}</h3>

            <p className="rating">{"⭐".repeat(Number(feedback.rating))}</p>

            <p>{feedback.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
