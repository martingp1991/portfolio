import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';

const experienceData = [
  {
    id: 1,
    icon: faBriefcase,
    titleEn: "Grill & Chill Burgers",
    titleEs: "Grill & Chill Burgers",
    descriptionEn: "I designed an intuitive and attractive interface that allows users to explore the various hamburger options, thus providing a dynamic and appealing experience for customers.",
    descriptionEs: "Diseñé una interfaz intuitiva y atractiva que permita a los usuarios explorar las diversas opciones de hamburguesas, brindando así una experiencia dinámica y atractiva para los clientes.",
    date: "(2023)"
  },
  {
    id: 2,
    icon: faBriefcase,
    titleEn: "Algen Studio Recording",
    titleEs: "Algen: Estudio de grabación",
    descriptionEn: "Using the combination of Vite JS and Tailwind CSS, I created a modern and fast website with an elegant and contemporary design that reflects the quality of the experience it offers.",
    descriptionEs: "Usando la combinación de Vite JS y Tailwind CSS, creé un sitio web moderno y rápido con un diseño elegante y contemporáneo que refleja la calidad de los servicios que ofrece.",
    date: "(2023)"
  },
  {
    id: 3,
    icon: faBriefcase,
    titleEn: "Studios Pit Design",
    titleEs: "Studios Pit Design",
    descriptionEn: "I worked as a Community manager and designer for regional businesses, handling administrative tasks and creating engaging content to build their online presence.",
    descriptionEs: "Trabajé como Community Manager y diseñador para empresas regionales, manejando tareas administrativas y creando contenido atractivo para construir su presencia en línea.",
    date: "(2022)"
  },
  {
    id: 4,
    icon: faBriefcase,
    titleEn: "Front-End Development (Gotoxy)",
    titleEs: "Desarrollo Front-End (Gotoxy)",
    descriptionEn: "I Developed a Web App with React/Next, built a Filtering and Searching System and used Git, Trello to collaborate. Implemented REST API, and created CRUD functionality.",
    descriptionEs: "Desarrollé una aplicación web con React/Next, construí un sistema de filtrado y búsqueda y utilicé Git y Trello para colaborar. Implementé una API REST y creé funcionalidad CRUD.",
    date: "(2021 - 2022)"
  },
  {
    id: 5,
    icon: faBriefcase,
    titleEn: "Front-End Development (Freelance)",
    titleEs: "Desarrollo Front-End (Freelance)",
    descriptionEn: "I created an ABM system using an API to display users in a table with respective POST, PUT, and DELETE options. I also integrated a search function to filter users by their first and last names..",
    descriptionEs: "Creé un sistema ABM utilizando una API para mostrar usuarios en una tabla con opciones respectivas de POST, PUT y DELETE. También integré una función de búsqueda para filtrar usuarios por sus nombres y apellidos.",
    date: "(2021)"
  },
];


const Experience = ({ language }) => {
  const my = language === 'en' ? 'My ' : 'Mi ';
  const experience = language === 'en' ? 'Experience' : 'Experiencia';

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="experience" id="experience">
      <h1 className="heading" data-aos="flip-left">
        {my} <span>{experience}</span>{" "}
      </h1>
      <div className="box-container">
        {experienceData.map((experience) => (
          <div key={experience.id} className="box" data-aos="flip-up">
            <FontAwesomeIcon icon={experience.icon} className="work-icon"/>
            <h3>{language === 'en' ? experience.titleEn : experience.titleEs}</h3>
            <h3>{experience.date}</h3>
            <p>{language === 'en' ? experience.descriptionEn : experience.descriptionEs}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
