import { useState, useEffect, useRef } from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import sun from "./../../img/logo/sun.svg";
import moon from "./../../img/logo/moon.svg";

function Navigation() {
  const [darkMode, setDarkMode] = useState("light");
  const btnRef = useRef(null);

  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
      btnRef.current.classList.add("dark-mode-btn--active");
    } else {
      document.body.classList.remove("dark");
      btnRef.current.classList.remove("dark-mode-btn--active");
    }
  }, [darkMode]);

  const activLink = "nav-list__link nav-list__link--active";
  const inactivLink = "nav-list__link";

  const toggleDarkMode = () => {
    setDarkMode((currentMode) => {
      return currentMode === "light" ? "dark" : "light";
    });
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Reactive</strong> portfolio
          </NavLink>

          <button
            ref={btnRef}
            className="dark-mode-btn"
            onClick={toggleDarkMode}
          >
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
          </button>

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activLink : inactivLink
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? activLink : inactivLink
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="./contacts"
                className={({ isActive }) =>
                  isActive ? activLink : inactivLink
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
