import "./Footer.css";

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
                  src="./img/icons/gitHub.svg"
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
