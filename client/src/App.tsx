import React from 'react';

// components
import Header from './components/Header';
import Home from './pages/Home';


const App: React.FC = () => {
  return (
    <>
      <Header />
      <div id="home" style={{ height: '100vh' }} className='bg-background min-h-[70vh] lg:min-h-screen'>
        <Home />
      </div>
      <div id="projects" style={{ height: '100vh', backgroundColor: '#e0e0e0' }}>
        <h1>Projects</h1>
      </div>
      <div id="resume" style={{ height: '100vh', backgroundColor: '#d0d0d0' }}>
        <h1>Resume</h1>
      </div>
    </>
  );
};

export default App;
