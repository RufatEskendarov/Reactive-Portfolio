import "./Footer.css";

import gitHub from "./../../img/logo/gitHub.svg";
import linkedIn from "./../../img/logo/linkedIn.svg";
import twitter from "./../../img/logo/twitter.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="#!">
                <img
                  src="./img/icons/twitter.svg"
                  alt="logo with the link to direct mailing"
                />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/RufatEskendarov?tab=repositories">
                <img
                  src={gitHub}
                  alt="logo with the link to github repository"
                />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.linkedin.com/in/rufat-eskendarov/">
                <img
                  src="./img/icons/linkedIn.svg"
                  alt="logo with the link to linked in page"
                />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2023 Rufat Eskendarov</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
