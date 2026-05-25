import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import profilePic from "./assets/logo.jpg";
import "./styles/global.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <Header message="Bring your ideas to life with code!" />
      <div className="App">
        <Profile
          photo={profilePic}
          title="Frontend Developer"
          bio="Frontend Developer driven by curiosity, creativity, and code. I enjoy crafting sleek user interfaces, solving real problems, and building web experiences that are both visually engaging and functional."
        />
      </div>
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
