import Project from "./../components/project/Project";
import { projects } from "./../helpers/projectList";

function Projects() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((project) => {
            return (
              <Project
                key={project.id}
                title={project.title}
                img={project.img}
                index={project.id}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
}

export default Projects;
