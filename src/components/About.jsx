import React, { useEffect } from "react";
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = ({ language }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  const about = language === 'en' ? 'About ' : 'Sobre ';
  const me = language === 'en' ? 'Me' : 'Mi';
  const years_experience = language === 'en' ? 'years of experience' : 'Años de experiencia';
  const working_hours = language === 'en' ? 'working hours' : 'Horas de trabajo';
  const projects = language === 'en' ? 'Projects' : 'Proyectos';
  const programs = language === 'en' ? 'Learning programs' : 'Programas de formación';
  const know_me = language === 'en' ? 'Would you like to know about me?' : '¿Te gustaría saber acerca de mí?';
  const description = language === 'en' ? 'I’m passionate about creating unique and engaging web experiences through responsive websites, web and mobile applications, and functional user interface designs. My objective is to innovate and customize solutions that meet each project’s needs.':'Soy apasionado por crear experiencias web únicas y atractivas a través de sitios web responsivos, aplicaciones web y móviles, y diseños de interfaz de usuario funcionales. Mi objetivo es innovar y personalizar soluciones que satisfagan las necesidades de cada proyecto en el que trabajo.';
  const contact_me = language === 'en' ? 'Contact me!':'¡Contactame!';

  return (
    <section className="about" id="about">
      <h1 className="heading" data-aos="flip-left">
        {" "}
        <span>{about}</span>{me}{" "}
      </h1>

      <div className="row">
        <div className="box-container"  data-aos="flip-up">
          <div className="box">
            <h3>2+</h3>
            <p>{years_experience}</p>
          </div>

          <div className="box">
            <h3>190+</h3>
            <p>{working_hours}</p>
          </div>
          <div className="box">
            <h3>8+</h3>
            <p>{projects}</p>
          </div>
          <div className="box">
            <h3>5+</h3>
            <p>{programs}</p>
          </div>
        </div>

        <div className="content">
          <h3 data-aos="fade-left">
            <span >{know_me}</span>
          </h3>
          <p data-aos="fade-left">
            {description}
          </p>
          <Link to="contact" smooth={true} duration={100} className="btn" data-aos="flip-up">
            {contact_me}
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="progress" data-aos="fade-right">
          <h3>
            {" "}
            HTML <span>89%</span>{" "}
          </h3>
          <div className="bar bar-1-1">
            <span></span>
          </div>
          <h3>
            {" "}
            CSS <span>83%</span>{" "}
          </h3>
          <div className="bar bar-1-2">
            <span></span>
          </div>
          <h3>
            {" "}
            TAILWIND CSS <span>85%</span>{" "}
          </h3>
          <div className="bar bar-1-3">
            <span></span>
          </div>
        </div>

        <div className="progress" data-aos="fade-left">
          <h3>
            {" "}
            JAVASCRIPT <span>82%</span>{" "}
          </h3>
          <div className="bar bar-2-1">
            <span></span>
          </div>
          <h3>
            {" "}
            REACT JS <span>79%</span>{" "}
          </h3>
          <div className="bar bar-2-2">
            <span></span>
          </div>
          <h3>
            {" "}
            NEXT JS <span>79%</span>{" "}
          </h3>
          <div className="bar bar-2-3">
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
