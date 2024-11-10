import { AiOutlineDoubleRight } from 'react-icons/ai';
import AboutImage from '../assets/img/profile-img.png';
import './About.css';

interface AboutProps {
  aboutContent: {
    main: string;
    sub: string;
    bullet: string[];
  };
}

const About: React.FC<AboutProps> = ({ aboutContent }) => {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
      </div>
      <div
        className="container about-content"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="profile-img">
          <img src={AboutImage} className="img-fluid" alt="Profile" />
        </div>
        <div className="content">
          <h3>{aboutContent.main}</h3>
          <p>{aboutContent.sub}</p>
          <ul>
            {aboutContent.bullet.map((about) => (
              <li>
                <AiOutlineDoubleRight className="bullet-icon" />
                <span>{about}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
