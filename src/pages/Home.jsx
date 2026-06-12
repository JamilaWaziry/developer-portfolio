import Header from "../components/Header";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import About from "../components/About";
import logo from "../assets/logo.jpg";
import FeedbackWall from "../components/FeedbackWall";

export default function Home() {
  return (
    <>
      <Header />
      <Profile
        photo={logo}
        title="Frontend Developer"
        bio="Frontend Developer driven by curiosity, creativity, and code. I enjoy crafting sleek user interfaces, solving real problems, and building web experiences that are both visually engaging and functional."
      />
      <profilePic />
      <About />

      <Skills />
      <FeedbackWall />
    </>
  );
}
