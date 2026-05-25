import "../styles/profile.css";

import { FaReact, FaGithub, FaCss3Alt, FaNodeJs } from "react-icons/fa";

import { SiJavascript, SiHtml5, SiPython } from "react-icons/si";

export default function Profile({ photo, title, bio }) {
  return (
    <section className="profile">
      <div className="profile-left">
        <div className="profile-info">
          <img src={photo} alt="Profile" className="profile-pic" />

          <div className="profile-text">
            <h2>{title}</h2>

            <p>{bio}</p>
          </div>
        </div>
      </div>

      <div className="profile-right">
        <div className="circle">
          <FaReact className="react-center" />

          <SiJavascript className="big-icon js-icon" />

          <FaNodeJs className="big-icon node-icon" />

          <FaGithub className="big-icon github-icon" />

          <SiHtml5 className="big-icon html-icon" />

          <FaCss3Alt className="big-icon css-icon" />

          <SiPython className="big-icon python-icon" />

          <span className="small-icon symbol1">{"{}"}</span>

          <span className="small-icon symbol2">{"<>"}</span>

          <span className="small-icon symbol3">==</span>

          <span className="small-icon symbol4">!==</span>

          <span className="small-icon symbol5">#</span>

          <span className="small-icon symbol6">λ</span>
        </div>
      </div>
    </section>
  );
}
