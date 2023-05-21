import { NavLink } from "react-router-dom";
import ruf from "./../img/project-img/ruf.jpg";

function AboutMe() {
  return (
    <div className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Rufat Eskendarov</em>
          </strong>
          <br />a full stack developer
        </h1>
        <div className="row">
          <div className="header__text">
            <p>
              Seeking full time position as a front end, back or full stack
              developer with previous experience in quality control and
              engineering. Graduate from the UNB Coding Boot Camp, adaptable and
              passionate to learn new skills as evidenced by self study and
              continuously learning new technologies. Bring many years of
              experience working in a corporate culture and have demonstrated
              abilities to perform and organize complex industrial operations
              tasks and managed unexpected difficulties. Excited to demonstrate
              my strong attention to detail, teamwork, and relationship building
              skills in a developer role.
            </p>
          </div>
          <figure className="main">
            <img src={ruf} alt="Rufat Eskendarov" />
          </figure>
        </div>
        <NavLink to="/resume" className="btn">
          See Resume
        </NavLink>
      </div>
    </div>
  );
}

export default AboutMe;
