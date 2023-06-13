import React, { useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faTimes, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import Image from 'next/image';
import User from "../public/assets/user.webp"
import AOS from 'aos';
import 'aos/dist/aos.css';



function Navbar({language, setLanguage}) {
  const [isActive, setActive] = useState(false);
  const [isLightMode, setLightMode] = useState(true);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const work = language === 'en' ? 'Front-End Developer' : 'Desarrollador Front-End';
  const home = language === 'en' ? 'Home' : 'Inicio';
  const about = language === 'en' ? 'About me' : 'Sobre mi';
  const experience = language === 'en' ? 'Experience' : 'Experiencia';
  const projects = language === 'en'? 'Projects':'Proyectos';
  const contact = language === 'en' ? 'Contact':'Contacto';
  const languageText = language === 'en' ? 'Español' : 'English';

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setActive(!isActive);
    document.querySelector('.navbar').classList.toggle('active');
  };

  const handleScroll = () => {
    setActive(false);
    setMenuOpen(false);
  };

  const toggleMode = () => {
    setLightMode(!isLightMode);
    document.body.classList.toggle('active');
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const changeLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
  };

  return (
    <header className={isMenuOpen ? "header active" : "header"}>
      <nav className="navbar">
        <div className="user">
          <Image src={User} alt="user" width={200} height={200}/>
          <h3 data-aos="fade-right">Martín Gómez Palacio</h3>
          <p data-aos="fade-right">{work}</p>
        </div>
        <Link to="home" smooth={true} duration={100} onClick={handleScroll} data-aos="fade-right">{home}</Link>
        <Link to="about" smooth={true} duration={100} onClick={handleScroll} data-aos="fade-right">{about}</Link>
        <Link to="experience" smooth={true} duration={100} onClick={handleScroll} data-aos="fade-right">{experience}</Link>
        <Link to="projects" smooth={true} duration={100} onClick={handleScroll} data-aos="fade-right">{projects}</Link>
        <Link to="contact" smooth={true} duration={100} onClick={handleScroll} data-aos="fade-right">{contact}</Link>
        <br />
        <div className="btn" data-aos="fade-right" onClick={changeLanguage}>{languageText}</div>
      </nav>

      <div id="menu-btn" onClick={toggleMenu} data-aos="flip-left">
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faCaretDown} className="menu-icon"/>
      </div>
      <div id="theme-toggler"  onClick={toggleMode} data-aos="flip-left">
        <FontAwesomeIcon icon={isLightMode ? faMoon : faSun} className="theme-icon"/>
      </div>
    </header>
  );
}

export default Navbar;
