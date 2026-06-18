import { useState, useEffect } from "react";
import "../styles/contact.css";

export default function ContactForm() {
  const savedData = (() => {
    try {
      return (
        JSON.parse(localStorage.getItem("contactForm")) || {
          name: "",
          email: "",
          message: "",
        }
      );
    } catch {
      return {
        name: "",
        email: "",
        message: "",
      };
    }
  })();

  const [formData, setFormData] = useState(savedData);

  const [errors, setErrors] = useState({});

  const [showToast, setShowToast] = useState(false);

  const [hasDraft, setHasDraft] = useState(
    !!(savedData.name || savedData.email || savedData.message),
  );
  const [emailHint, setEmailHint] = useState("");

  // Auto Save
  useEffect(() => {
    localStorage.setItem("contactForm", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!formData.email) {
        setEmailHint("");
        return;
      }

      const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

      if (validEmail) {
        setEmailHint("✅ Valid email address");
      } else {
        setEmailHint("⚠️ Email format looks incorrect");
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [formData.email]);

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setHasDraft(true);
  };

  // vslidation
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name.trim())) {
      newErrors.name = "Name can only contain letters and spaces";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);

      localStorage.removeItem("contactForm");

      setHasDraft(false);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setErrors({});
    }
  };

  return (
    <div className="page">
      <section className="contact-section">
        <h2>Contact Me</h2>

        {hasDraft && (
          <div className="draft-message">
            📌 You have unsent message data saved.
          </div>
        )}

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {emailHint && (
            <p
              className={
                emailHint.includes("Valid") ? "email-success" : "email-warning"
              }
            >
              {emailHint}
            </p>
          )}

          {errors.email && <p className="error">{errors.email}</p>}

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />

          {errors.message && <p className="error">{errors.message}</p>}

          <button type="submit">Send Message</button>
        </form>

        <div className="preview-card">
          <h3>✨ Live Preview</h3>

          <p>
            <strong>Name:</strong>{" "}
            {formData.name || "Your name will appear here"}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {formData.email || "Your email will appear here"}
          </p>

          <div className="preview-message">
            <strong>Message:</strong>

            <p>
              {formData.message ||
                "Start typing your message to see a live preview..."}
            </p>
          </div>
        </div>

        {showToast && (
          <div className="toast">✅ Message sent successfully!</div>
        )}
      </section>
    </div>
  );
}
