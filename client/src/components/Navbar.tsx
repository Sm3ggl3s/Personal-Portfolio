import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as solidMoon } from '@fortawesome/free-solid-svg-icons';
import { faMoon as regularMoon } from '@fortawesome/free-regular-svg-icons';

const links = [
  {
    name: 'Home',
    path: '#home',
  },
  {
    name: 'Projects',
    path: '#projects',
  },
]

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Toggle navbar shrinking on scroll
      setIsScrolled(scrollPosition > 50);

      // Detect current section
      const sections = links.map(link => document.querySelector(link.path));
      sections.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 50 && rect.bottom >= 50) {
            setActiveSection(links[index].path.substring(1));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark', !isDarkMode);
    document.body.classList.toggle('light', isDarkMode);
  };

  return (
    <nav className='my-auto flex gap-8 items-center'>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.path}
          className={`text-base transition duration-500  ${activeSection === link.path.substring(1)
              ? 'text-secondary border-b-2 border-secondary'
              : 'text-primary'} hover:text-secondary hover:scale-110`}
        >
          {link.name}
        </a>
      ))}
      <FontAwesomeIcon
        icon={isDarkMode ? solidMoon : regularMoon}
        className='text-secondary text-xl cursor-pointer'
        onClick={toggleTheme}
      />
    </nav>
  );
};

export default Navbar;