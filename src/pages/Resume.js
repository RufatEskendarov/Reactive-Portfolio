import { workExpirience } from "../helpers/workExperience";
import location from "./../img/logo/location.svg";
import locaGrey from "./../img/logo/location-grey.svg";
import phone from "./../img/logo/phone.svg";
import email from "./../img/logo/emailBlack.svg";

function Resume() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Resume</h2>
        <div className="container resume-container">
          <div className="resume-section resume-section2">
            <div className="section-skill">
              <h1 className="skill-title">Education</h1>
              <hr className="skill-line" />
              <div className="education-section">
                <h2 className="education-title">Full-Stack Coding Boot Camp</h2>
                <h3 className="education-place">University of New Brunswick</h3>
                <p className="education-location">
                  2022-2023 Saint John, NB, CA
                </p>
              </div>
              <div className="education-section">
                <h2 className="education-title">Full-Stack Coding Boot Camp</h2>
                <h3 className="education-place">University of New Brunswick</h3>
                <p>2022-2023 Saint John, NB, CA</p>
              </div>
            </div>
            <div className="section-skill">
              <h1 className="skill-title">Courses</h1>
              <hr className="skill-line" />
              <div className="education-section">
                <h2 className="education-title">
                  JavaScript from Zero to Expert 70 hours
                </h2>
                <h3 className="education-place">www.udemy.com</h3>
                <p className="education-location">2022 Jonas Schmedtmann</p>
              </div>
              <div className="education-section">
                <h2 className="education-title">
                  React - The Complete Guide 49 hours
                </h2>
                <h3 className="education-place">www.udemy.com</h3>
                <p className="education-location">
                  2022 Maximilian Schwarzmuller
                </p>
              </div>
              <div className="education-section">
                <h2 className="education-title">Python course 20 hours</h2>
                <h3 className="education-place">www.datacamp.com</h3>
                <p className="education-location">2021 Hugo Bowne-Anderson</p>
              </div>
            </div>

            <div className="section-skill">
              <h1 className="skill-title">Skills</h1>
              <hr className="skill-line" />
              <h2 className="education-title">Front-end</h2>
              <ul className="skill-list">
                <li className="skill-row">
                  <div className="skill-element">HTML5</div>
                  <div className="skill-element">CSS3</div>
                  <div className="skill-element">SASS</div>
                  <div className="skill-element">JQUERY</div>
                  <div className="skill-element">PWA</div>
                </li>
                <li className="skill-row">
                  <div className="skill-element">JavaScript</div>
                  <div className="skill-element">NPM</div>
                  <div className="skill-element">BABEL</div>
                  <div className="skill-element">REACT</div>
                  <div className="skill-element">SPA</div>
                </li>
                <li className="skill-row">
                  <div className="skill-element">HANDELBARS</div>
                </li>
              </ul>

              <h2 className="education-title">Back-end</h2>
              <ul className="skill-list">
                <li className="skill-row">
                  <div className="skill-element">NODE.JS</div>

                  <div className="skill-element">SEQUELIZE</div>
                  <div className="skill-element">REST</div>
                </li>
                <li className="skill-row">
                  <div className="skill-element">MONGOOSE</div>
                  <div className="skill-element">APOLLO</div>
                  <div className="skill-element">EXPRESS</div>
                </li>
              </ul>

              <h2 className="education-title">Database</h2>
              <ul className="skill-list">
                <li className="skill-row">
                  <div className="skill-element">MYSQL</div>
                  <div className="skill-element">GRAPHQL</div>
                  <div className="skill-element">NOSQL</div>
                  <div className="skill-element">MONGO</div>
                </li>
              </ul>

              <h2 className="education-title">Operation Systems</h2>
              <ul className="skill-list">
                <li className="skill-row">
                  <div className="skill-element">WINDOWS</div>
                  <div className="skill-element">LINUX</div>
                  <div className="skill-element">OSX</div>
                </li>
              </ul>
            </div>
            <div className="section-skill">
              <h1 className="skill-title">Languages</h1>
              <hr className="skill-line" />
              <ul className="language-section">
                <li className="language-row">
                  <div className="language">English</div>
                  <div>Fluent</div>
                </li>
                <li className="language-row">
                  <div className="language">Russian</div>
                  <div>Native</div>
                </li>
                <li className="language-row">
                  <div className="language">Azerbaijani</div>
                  <div>Fluent</div>
                </li>
                <li className="language-row">
                  <div className="language">Lezginian</div>
                  <div>Fluent</div>
                </li>
                <li className="language-row">
                  <div className="language">Turkish</div>
                  <div>Intermediate</div>
                </li>
                <li className="language-row">
                  <div className="language">Ukrainian</div>
                  <div>Intermediate</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="resume-section">
            <h1 className="resume-title">RUFAT ESKENDAROV</h1>
            <h2 className="resume-subtitle">Full Stack JavaScript Developer</h2>
            <p>
              <img src={phone} alt="phone icon" />
              &nbsp; +1 506 343 0903
            </p>
            <p>
              <img src={location} alt="location icon" />
              &nbsp; Saint John, NB, Canada
            </p>
            <p>
              <img src={email} alt="envelop icon" />
              &nbsp;&nbsp; rufat.eskendarov@gmail.com
            </p>
            <div className="sub-section">
              <h1 className="resume-subtitle"> Professional Background</h1>
              <hr className="line" />
              <p>
                I am a beginner developer and I have previous work
                EXPERIENCE!!!!! in quality control and engineering. More than a
                year ago I started education in the field of programming and
                working on the improvement in this field every day. I am
                currently completing my studies at the Full-Stack Coding Boot
                Camp of the University of New Brunswick. Here is the link (
                <a
                  href="https://github.com/RufatEskendarov"
                  target="_blank"
                  rel="noreferrer"
                >
                  https:// github.com/RufatEskendarov
                </a>
                ) to my GitHub repository. I am able to develop good working
                relations with clients and third parties, capable of building
                communication on the level aimed to organize and successfully
                complete complex tasks in a tight timescale and safely manner. I
                have corporate culture experience and possess ability to
                perform/organize complex industrial operations and manage
                unexpected difficulties. I am a proactive person who works hard
                and pays attention to details. I am flexible, quick to pick up
                new skills and eager to learn from others.
              </p>
            </div>

            <div className="sub-section">
              <h1 className="resume-subtitle"> Work Experience</h1>
              <hr className="line" />
              {workExpirience.map((exp) => {
                return (
                  <div className="expirience">
                    <h2 className="company-title">{exp.company}</h2>
                    <div className="position">
                      <p>{exp.position}</p>
                      <p>{exp.date}</p>
                    </div>

                    <p className="location-title">
                      <img src={locaGrey} alt="location icon" />
                      {exp.location}
                    </p>
                    <ul className="list">
                      {exp.responsibilities.map((resp) => {
                        return <li className="responsibilities">{resp}</li>;
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
            <div className="sub-section">
              <h1 className="resume-subtitle">Outside Interests</h1>
              <hr className="line" />
              <p style={{ marginTop: 20 }}>
                I am interested in healthy lifestyle, hiking, gym, art,
                intelectual games and different syles music.
              </p>
            </div>
          </div>
        </div>
        <div className="btn-div">
          <button className="btn">Download CV</button>
        </div>
      </div>
    </main>
  );
}

export default Resume;
