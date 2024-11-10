import { AiOutlineDoubleRight } from 'react-icons/ai';
import AboutImage from '../assets/img/profile-img.png';
import './About.css';

export default function About() {
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
          <h3>
            I'm a developer with a passion for creating applications in React
            and Next.js. I enjoy working with clean, simple code and building
            unique projects. I also love collaborating with diverse teams and
            sharing ideas to create innovative solutions.
          </h3>
          <p>
            I have worked with a variety of technologies including MySQL,
            PostgreSQL, and MongoDB for database management. For styling, I have
            used Material UI, Bootstrap, CSS, and Chakra UI to create responsive
            and user-friendly interfaces. I have experience developing
            full-stack applications with Node.js, React.js, and Next.js.
          </p>
          <ul>
            <li>
              <AiOutlineDoubleRight className="bullet-icon" />
              <span>
                Developed full-stack applications using React, Next.js, and
                Node.js.
              </span>
            </li>
            <li>
              <AiOutlineDoubleRight className="bullet-icon" />
              <span>
                Worked with MySQL, PostgreSQL, and MongoDB for efficient data
                management.
              </span>
            </li>
            <li>
              <AiOutlineDoubleRight className="bullet-icon" />
              <span>
                Used Material UI, Bootstrap, and Chakra UI for building
                beautiful and responsive user interfaces.
              </span>
            </li>
            <li>
              <AiOutlineDoubleRight className="bullet-icon" />
              <span>
                Completed my BTech in Computer Science and interned at IIT
                Palakkad.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
