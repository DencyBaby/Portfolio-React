import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid d-flex align-items-center justify-content-end">
        <nav className="navmenu">
          <ul>
            <li>
              <Link to="hero" smooth>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth>
                About
              </Link>
            </li>
            <li>
              <Link to="services" smooth>
                Services
              </Link>
            </li>
            <li>
              <Link to="contact" smooth>
                Contact
              </Link>
            </li>
          </ul>
          <i
            onClick={() => setScrolled(!scrolled)}
            className="bi bi-list mobile-nav-toggle"
          ></i>
        </nav>
      </div>
    </header>
  );
}
