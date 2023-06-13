import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


function Home({ language }) {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollPercentage(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const cv1 = language === 'en' ? 'CV SPANISH' : 'CV ESPAÑOL';
  const cv2 = language === 'en' ? 'CV ENGLISH' : 'CV INGLÉS';
  const position = language === 'en' ? 'Front-End Developer' : 'Desarrollador Front-End';


  return (
    <section className="home" id="home">
      <div className="content">
        <h3 data-aos="flip-up">Martín Gómez Palacio</h3>
        <p data-aos="flip-up">{position}</p>
        <br />
        <div className="box" data-aos="flip-up">
        <a href="https://www.dropbox.com/s/zel1ppamuv9vkdu/CV%20ESPA%C3%91OL.pdf?dl=0" target="_blank" className="btn">{cv1}</a>
        <a href="https://www.dropbox.com/s/oq5oddtosnavm74/CV%20INGLES.pdf?dl=0" target="_blank" className="btn" >{cv2}</a>
        </div>
      </div>
      <div className="share" data-aos="flip-down">
        <a href="mailto:margingp1991@gmail.com" target="_blank">
        <FontAwesomeIcon icon={faEnvelope} className="fab"/>
        </a>
        <a href="https://wa.me/+543437440308" target="_blank">
          <FontAwesomeIcon icon={faWhatsapp} className="fab"/>
        </a>
        <a href="https://t.me/Tinchodelapipol" target="_blank">
          <FontAwesomeIcon icon={faTelegram} className="fab"/>
        </a>
        <a href="https://www.linkedin.com/in/martin-gomez-palacio/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className="fab"/>
        </a>
        <a href="https://github.com/martingp1991" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="fab"/>
        </a>
      </div>
      <div className="progress-bar" style={{ width: `${scrollPercentage}%` }} />
    </section>
  );
}

export default Home;
