import { useParams } from "react-router-dom";
import { projects } from "./../helpers/projectList";
import img from "./../img/project-img/cookingBig.png";
import gitHub from "./../img/logo/gitHub-black.svg";

function Project() {
  const { id } = useParams();
  const project = projects[id];
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.imgBig}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills: React, Node.js, MongoDB</p>
          </div>

          <a href="#!" className="btn-outline">
            <img src={gitHub} alt="" />
            GitHub repo
          </a>
        </div>
      </div>
    </main>
  );
}

export default Project;
