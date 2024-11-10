import { useEffect } from 'react';
import Typed from 'typed.js';
import HeroImage from '../assets/img/hero-bg.png';
import { AiOutlineMail, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import './hero.css';

interface HeroProps {
  socialmedia: { linkedin: string; instagram: string; mail: string };
}

const Hero: React.FC<HeroProps> = ({ socialmedia }) => {
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
          <a href={socialmedia.mail}>
            <AiOutlineMail />
          </a>
          <a href={socialmedia.instagram}>
            <AiFillInstagram />
          </a>
          <a href={socialmedia.linkedin}>
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
