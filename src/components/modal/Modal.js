import React from "react";
import { NavLink } from "react-router-dom";
import "./Modal.css";
import gitHub from "./../../img/logo/gitHub-black.svg";
import gmail from "./../../img/logo/gmail-black.svg";
import linkedIn from "./../../img/logo/linkedIn-black.svg";

export default function Modal({ setOpenModal }) {
  return (
    <div className="overlay">
      <div className="container-modal">
        <div className="response">
          <div className="titleCloseBtn">
            <button
              className="btn-close"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <h1>Message successfully sent!</h1>
          </div>
          <div className="body-modal">
            <p>
              Thank you for your message I will try to answer you as soon as
              possible. For a faster response, please use the contacts below.
            </p>
            <ul className="social">
              <li className="social__item">
                <a href="mailto: rufat.eskendarov@gmail.com">
                  <img src={gmail} alt="logo with the link to direct mailing" />
                </a>
              </li>
              <li className="social__item">
                <a
                  target="_blank"
                  href="https://github.com/RufatEskendarov?tab=repositories"
                  rel="noreferrer"
                >
                  <img
                    src={gitHub}
                    alt="logo with the link to github repository"
                  />
                </a>
              </li>
              <li className="social__item">
                <a
                  href="https://www.linkedin.com/in/rufat-eskendarov/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={linkedIn}
                    alt="logo with the link to linked in page"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-modal">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Close
            </button>
            <NavLink className="modal-btn" to="/">
              Return
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
