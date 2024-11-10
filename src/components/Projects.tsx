import { AiOutlineLink } from 'react-icons/ai';
import './projects.css';

interface Service {
  title: string;
  desc: string;
  img?: string | undefined;
  link?: string | undefined;
}

interface ProjectsProps {
  servicesData: Service[];
}

const Projects: React.FC<ProjectsProps> = ({ servicesData }) => {
  return (
    <section id="services" className="services section">
      <div className="container section-title">
        <h2>Projects</h2>
      </div>
      <div className="container services-container">
        <div className="row">
          {servicesData.map((service, index) => (
            <div key={index} className="card">
              <div className="card__face card__face--front">
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </div>
              <div className="card__face card__face--back">
                {service.img ? (
                  <>
                    <img src={service.img} alt={service.title} />
                    {service.link ? (
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <AiOutlineLink /> View Project
                      </a>
                    ) : null}
                  </>
                ) : (
                  <>
                    <div className="fallback">No Image Available</div>
                    {service.link ? (
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <AiOutlineLink /> View Project
                      </a>
                    ) : null}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
