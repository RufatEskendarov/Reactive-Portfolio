import { useParams } from "react-router-dom";
import { projects } from "./../helpers/projectList";
import app from "./../img/logo/app.svg";
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
            <p>Technologies: {project.technologies}</p>
          </div>
          <div className="project-details__desc wide">
            <p>
              Description: <span>{project.description}</span>
            </p>
          </div>
          <div className="project-div">
            <a
              href={project.deploy}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <img src={app} alt="" />
              Deployed page
            </a>
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <img src={gitHub} alt="" />
              GitHub repo
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Project;
