import React, { useEffect, useState } from 'react';


const links = [
  {
    name: 'Home',
    path: '#home',
  },
  {
    name: 'Projects',
    path: '#projects',
  },
  {
    name: 'Resume',
    path: '#resume',
  }
]

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

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
  
  return (
    <nav className='my-auto flex gap-8'>
      {links.map((link, index) => (
          <a
            key={index}
            href={link.path}
            className={`text-base ${
              activeSection === link.path.substring(1)
                ? 'text-secondary border-b-2 border-secondary'
                : 'text-primary'
            }`}
          >
            {link.name}
          </a>
        ))}
    </nav>
  );
};

export default Navbar;
