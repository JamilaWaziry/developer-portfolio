import "../styles/profile.css";

export default function Profile({ photo, title, bio }) {
  return (
    <section className="profile">
      <img src={photo} alt="Profile" />
      <h2>{title}</h2>
      <p>{bio}</p>
    </section>
  );
}
