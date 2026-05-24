import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import profilePic from "./assets/photo1.jpg";
import "./styles/global.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <Header message="Bring your ideas to life with code!" />
      <Profile
        photo={profilePic}
        title="Frontend Developer"
        bio="I love building responsive web apps."
      />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
