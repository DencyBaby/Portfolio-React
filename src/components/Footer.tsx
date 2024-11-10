import './footer.css';
import { AiOutlineMail, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer id="contact" className="footer  light-background">
      <div className="container">
        <h3 className="sitename">Contact</h3>
        <div className="social-links">
          <a href="#">
            <AiOutlineMail />
          </a>
          <a href="#">
            <AiFillLinkedin />
          </a>
          <a href="#">
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
