import React from 'react';


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
  return (
    <nav className='my-auto flex gap-8'>
      {links.map((link, index) => (
        <a key={index} href={link.path} className='text-primary text-base mx-4 '>
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
