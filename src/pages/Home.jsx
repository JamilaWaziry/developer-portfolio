import Header from "../components/Header";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import About from "../components/About";
import logo from "../assets/logo.jpg";
import FeedbackWall from "../components/FeedbackWall";
// import UserSection from "../components/UserSection";
// import ContextUserCard from "../components/ContextUserCard";

export default function Home() {
  return (
    <div className="page">
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
        {/* <UserSection user="Jamila Waziry" />
      <ContextUserCard /> */}
      </>
    </div>
  );
}
