import cooking from "./../img/project-img/whats-cooking.png";
import mapty from "./../img/project-img/mapty.PNG";
import pig_game from "./../img/project-img/pig_game.PNG";
import bankist from "./../img/project-img/bankist.PNG";
import guess from "./../img/project-img/Guess-my.PNG";
import forkify from "./../img/project-img/forkify.PNG";

function Projects() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          <li className="project">
            <a href="./project-page.html">
              <img src={cooking} alt="Project img" className="project__img" />
              <h3 className="project__title">Whats Cooking</h3>
            </a>
          </li>
          <li className="project">
            <a href="./project-page.html">
              <img src={mapty} alt="Project img" className="project__img" />
              <h3 className="project__title">mapty</h3>
            </a>
          </li>
          <li className="project">
            <a href="./project-page.html">
              <img src={pig_game} alt="Project img" className="project__img" />
              <h3 className="project__title">Pig Game</h3>
            </a>
          </li>

          <li className="project">
            <img src={bankist} alt="Project img" className="project__img" />
            <h3 className="project__title">Bankist</h3>
          </li>
          <li className="project">
            <img src={guess} alt="Project img" className="project__img" />
            <h3 className="project__title">Guess My Number</h3>
          </li>
          <li className="project">
            <img src={forkify} alt="Project img" className="project__img" />
            <h3 className="project__title">Forkify</h3>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Projects;
