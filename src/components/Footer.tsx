import './footer.css';
import { AiOutlineMail, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

interface FooterProps {
  socialmedia: { linkedin: string; instagram: string; mail: string };
}

const Footer: React.FC<FooterProps> = ({ socialmedia }) => {
  return (
    <footer id="contact" className="footer  light-background">
      <div className="container">
        <h3 className="sitename">Contact</h3>
        <div className="social-links">
          <a href={socialmedia.mail}>
            <AiOutlineMail />
          </a>
          <a href={socialmedia.linkedin}>
            <AiFillLinkedin />
          </a>
          <a href={socialmedia.instagram}>
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
