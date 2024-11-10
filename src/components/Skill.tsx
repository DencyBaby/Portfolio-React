import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

interface HeroProps {
  skills: { name: string; percentage: number }[];
}

const Skills: React.FC<HeroProps> = ({ skills }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div
        className="container section-title"
        data-aos={inView ? 'fade-up' : ''}
      >
        <h2>Skills</h2>
      </div>
      <div
        className={`container skills-container ${inView ? 'skills-container--animate' : ''}`}
      >
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`skill-item ${inView ? 'skill-item--animate' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <SkillCircle percentage={skill.percentage} inView={inView} />
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCircle: React.FC<{ percentage: number; inView: boolean }> = ({
  percentage,
  inView,
}) => {
  const [anim, setAnim] = useState(0);
  const [color] = useState(getRandomColor());

  useEffect(() => {
    if (inView) {
      let start = 0;
      const interval = setInterval(() => {
        start++;
        setAnim(start);
        if (start >= percentage) clearInterval(interval);
      }, 10);
      return () => clearInterval(interval);
    }
  }, [inView, percentage]);

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (anim / 100) * circumference;

  return (
    <div className="circular-progress">
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#e6e6e6"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke={color}
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
        />
      </svg>
    </div>
  );
};
export default Skills;
