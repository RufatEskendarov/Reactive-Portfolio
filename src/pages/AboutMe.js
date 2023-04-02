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
              I am from Azerbaijan (Baku), graduated from the Academy of the
              Ministry of Emergency Situations. I have a Bachelor's degree in
              Engineering of Emergency Situations and Life Safety. I worked as a
              rescue and military officer in the Civil Defense Forces. Then I
              was assigned to the position of Operations Manager at the Crisis
              Management Center. I am currently working as a Safety and Quality
              Control Coordinator. Two years ago I got interested in programming
              and took a number of courses on HTML, CSS, SQL, Python, JavaScript
              and React.js. I am also an alumnus of the Coding Boot Camp of the
              University of New Brunswick. During the course, I strengthened my
              knowledges in the front end and gained new knowledges in the back
              end, I learned Data Bases such as MySQL , MongoDB and GraphQL.
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
