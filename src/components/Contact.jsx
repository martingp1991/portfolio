import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact({ language }) {
  const contactme = language === "en" ? "Contact" : "Contacta";
  const me = language === "en" ? " me" : "me";
  const your_name = language === "en" ? "Your name" : "Tu nombre";
  const your_email = language === "en" ? "Your e-mail" : "Tu e-mail";
  const your_message = language === "en" ? "Your message" : "Tu mensaje";
  const send_message = language === "en" ? "Send Message" : "Enviar Mensaje";
  const close = language === "en" ? "Close" : "Cerrar";
  const message_sent = language === "en" ? "Message Sent!" : "¡Mensaje Enviado!";
  const thanks =
    language === "en"
      ? "Thank you for contacting me!"
      : "¡Gracias por contactarme!";
  const message_close =
    language === "en"
      ? "This message will close in "
      : "Este mensaje se va a cerrar en ";
  const seconds = language === "en" ? " seconds" : " segundos";

  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const [modalCloseTime, setModalCloseTime] = useState(1000);
  const [timeLeft, setTimeLeft] = useState(modalCloseTime / 100);

  const sendEmail = (e) => {
    e.preventDefault();
    const alert =
      language === "en"
        ? "Are you sure you want to send this message?"
        : "¿Estás seguro de mandar este mensaje?";
    const confirmed = window.confirm(alert);
    if (confirmed) {
      emailjs
        .sendForm("service_07h4zsm", "template_vsj2r7e", form.current, "8qKsa0C-trMJGBmMd")
        .then(
          (result) => {
            console.log(result.text);
            setTimeout(() => {
              setShowModal(true);
              setModalCloseTime(10000);
              setTimeLeft(modalCloseTime / 100);
            }, 10); //tiempo de aparición del modal
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
    }
  };
  

  const handleShowModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    let timerId;
    if (showModal) {
      timerId = setTimeout(() => {
        setShowModal(false);
      }, 10000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [showModal]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    let intervalId;
    if (showModal) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [showModal]);

  return (
    <section className="contact" id="contact">
      <h1 className="heading" data-aos="flip-left">
        <span>{contactme}</span>
        {me}{" "}
      </h1>
      <form action="" ref={form} onSubmit={sendEmail} data-aos="fade-up">
        <input
          type="text"
          placeholder={your_name}
          className="box"
          name="name"
          required
          data-aos="fade-up"
          autoComplete="nombre"
        />
        <input
          type="email"
          placeholder={your_email}
          className="box"
          name="email"
          required
          data-aos="fade-up"
          autoComplete="email"
        />
        <textarea
          placeholder={your_message}
          className="box"
          name="message"
          required
          data-aos="fade-up"
        ></textarea>
        <button type="submit" className="btn" data-aos="flip-left">
          {send_message}
        </button>
      </form>
      {showModal && (
        <div className="modal-container" data-aos="zoom-in">
          <div className="modal">
            <div className="modal-header">
              <h2>{message_sent}</h2>
              <button className="btn" onClick={handleShowModal}>
                <p>{close}</p>
              </button>
            </div>
            <br />
            <div className="modal-body">
              <p>{thanks}</p>
              <p>
                {message_close}
                <span>{timeLeft}</span>
                {seconds}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
