import { useEffect } from 'react';
import Typed from 'typed.js';
import HeroImage from '../assets/img/hero-bg.png';
import { AiOutlineMail, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import './hero.css';

export default function Hero() {
  useEffect(() => {
    const typed = new Typed('.typed', {
      strings: ['Designer', 'Developer'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <img src={HeroImage} alt="Hero Background" data-aos="fade-in" />
      <div className="container hero-content">
        <h2>Dencymol Baby</h2>
        <p>
          I'm <span className="typed"></span>
        </p>
        <div className="social-links">
          <a href="#">
            <AiOutlineMail />
          </a>
          <a href="#">
            <AiFillInstagram />
          </a>
          <a href="#">
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
