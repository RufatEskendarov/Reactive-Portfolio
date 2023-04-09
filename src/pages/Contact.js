import { useState, useEffect } from "react";
import Modal from "../components/modal/Modal";
import { emailValidator, phoneValidator } from "./../helpers/regexValidator";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [messageErr, setMessageErr] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  function nameHandler(e) {
    let item = e.target.value;
    setName(item);
    if (item.length < 1) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }
  }

  function phoneHandler(e) {
    let item = e.target.value.trim();
    setPhone(item);
    if (!phoneValidator.test(item)) {
      setPhoneErr(true);
    } else {
      setPhoneErr(false);
    }
  }

  function emailHandler(e) {
    let item = e.target.value.trim();
    setEmail(item);
    if (!emailValidator.test(item)) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
  }

  function messageHandler(e) {
    let item = e.target.value.trim();
    setMessage(item);
    if (item.length < 1) {
      setMessageErr(true);
    } else {
      setMessageErr(false);
    }
  }

  const submitHandler = function (e) {
    e.preventDefault();

    return (
      <div>
        <div className="overlay"></div>
        <div className="response">
          <button className="btn-x">X</button>
          <h1>Your message was sent successfuly!</h1>
        </div>
      </div>
    );
  };

  function modalHandler() {
    if (
      !emailErr &&
      !phoneErr &&
      !nameErr &&
      !messageErr &&
      name !== "" &&
      phone !== "" &&
      email !== "" &&
      message !== ""
    ) {
      const textarea = (document.getElementById("textarea").value = "");
      const nameInput = (document.getElementById("name").value = "");
      const phoneInput = (document.getElementById("phone").value = "");
      const emailInput = (document.getElementById("email").value = "");
      setEmail("");
      setName("");
      setMessage("");
      setPhone("");
      setOpenModal(true);
    } else {
      return;
    }
  }

  return (
    <main className="section">
      <section id="contact-me" className="container">
        <h3 className="title-1">Contact Me</h3>

        <form className="contact-me--form" onSubmit={submitHandler}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Please enter your full name ..."
              onChange={nameHandler}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>

            <input
              id="phone"
              type="text"
              placeholder="ex: (555)555-5555"
              onChange={phoneHandler}
            />
          </div>
          <div>
            <label htmlFor="#email">E-mail</label>

            <input
              id="email"
              type="email"
              placeholder="example@mail.ca"
              onChange={emailHandler}
            />
          </div>
          <div>
            <label htmlFor="textarea">Message</label>
            <input
              id="textarea"
              type="textaria"
              placeholder="Please add your message here..."
              onChange={messageHandler}
            />
          </div>
          <div className="div-error">
            {nameErr ? <p>Name field can not be empty</p> : ""}
            {phoneErr ? (
              <p>Wrong phone number format (example: (555)555-5555)</p>
            ) : (
              ""
            )}

            {messageErr ? <p>Message field can not be empty </p> : ""}
            {emailErr ? (
              <p>
                Wrong format for e-mail address (example: example@email.com)
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="div-btn">
            <button className="btn" type="submit" onClick={modalHandler}>
              SEND
            </button>
          </div>
        </form>
      </section>

      {openModal && <Modal setOpenModal={setOpenModal} />}
    </main>
  );
}
export default Contact;
