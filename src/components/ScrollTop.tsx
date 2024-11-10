import { useState, useEffect } from 'react';

export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setShow(window.scrollY > 100);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    show && (
      <a href="#" className="scroll-top">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    )
  );
}
