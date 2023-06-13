import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from "../public/assets/projects/gotoxy.webp";
import img2 from "../public/assets/projects/fake_portfolio.webp";
import img3 from "../public/assets/projects/url_shortener.webp";
import img4 from "../public/assets/projects/dolar.webp"
import img5 from "../public/assets/projects/pomodoro.webp"
import img6 from "../public/assets/projects/todo.webp"
import img7 from "../public/assets/projects/pokeapi.webp"
import img8 from "../public/assets/projects/algen.webp"
import Image from 'next/image';


const projectsData = [
  {
    id: 1,
    titleEn: 'ABM - GoRest API',
    titleEs: 'ABM - GoRest API',
    imageSrc: img1,
    demoUrl: 'https://gotoxy-challenge.netlify.app/',
    repoUrl: 'https://github.com/martingp1991/gotoxy.git',
  },
  {
    id: 2,
    titleEn: 'Fake Portfolio',
    titleEs: 'Portfolio falso',
    imageSrc: img2,
    demoUrl: 'https://martingp1991.github.io/',
    repoUrl: 'https://github.com/martingp1991/martingp1991.github.io.git',
  },
  {
    id: 3,
    titleEn: 'Url Shortener',
    titleEs: 'Acortador de Url',
    imageSrc: img3,
    demoUrl: 'https://shorturl2023.netlify.app/',
    repoUrl: 'https://github.com/martingp1991/url_shortener',
  },
  {
    id: 4,
    titleEn: 'Dollar in Argentina',
    titleEs: 'Dolar en Argentina',
    imageSrc: img4,
    demoUrl: 'https://dolar-arg.netlify.app/',
    repoUrl: 'https://github.com/martingp1991/dolar',
  },
  {
    id: 5,
    titleEn: 'Pomodoro Clock',
    titleEs: 'Reloj Pomodoro',
    imageSrc: img5,
    demoUrl: 'https://pomodoroclock4.netlify.app/',
    repoUrl: 'https://github.com/martingp1991/pomodoro',
  },
  {
    id: 6,
    titleEn: 'Todo List',
    titleEs: 'lista de tareas',
    imageSrc: img6,
    demoUrl: 'https://todo-list-app100.netlify.app/',
    repoUrl: 'https://github.com/martingp1991/todo',
  },
  {
    id: 7,
    titleEn: 'PokeApp',
    titleEs: 'PokeApp',
    imageSrc: img7,
    demoUrl: 'https://pokeapi22.netlify.app/',
    repoUrl: 'https://github.com/martingp1991/pokeapi',
  },
  {
    id: 8,
    titleEn: 'Algen: Recording studio',
    titleEs: 'Algen: Estudio de Grabación',
    imageSrc: img8,
    demoUrl: 'https://algen1.netlify.app/',
    repoUrl: 'https://github.com/martingp1991/algen',
  },
];


const Projects = ({ language }) => {
  const my = language === 'en' ? 'My ' : 'Mis ';
  const projects = language === 'en' ? 'Projects' : 'Proyectos';

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="projects" id="projects">
      <h1 className="heading" data-aos="flip-left">
        {my} <span>{projects}</span>{" "}
      </h1>
      <div className="box-container">
        {projectsData.map((project, index) => (
          <div className="box" key={index} data-aos="flip-down">
            <Image src={project.imageSrc} alt="project" />
            <div className="content">
              <h3>{language === 'en' ? project.titleEn : project.titleEs}</h3>
              <div>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className='btn' style={{ marginRight: '2rem' }}>
                  DEMO
                </a>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className='btn'>
                  REPO
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
