import React from 'react';

// components
import Header from './components/Header';
import Home from './pages/Home';
import ParticleBg from './components/ParticleBg';
import Projects from './pages/Projects';

const App: React.FC = () => {
  return (
    <div className='relative'>
      {/* Particles in the background */}
      <ParticleBg />

      {/* Main content */}
      <div className='relative z-10'>
        <Header />
        <div id='home' className='text-primary pt-16 min-h-screen'>
          <Home />
        </div>
        <div id='projects' className='min-h-screen '>
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default App;
