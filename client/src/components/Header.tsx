import React from 'react'

// components
import Navbar from './Navbar'


const Header: React.FC = () => {
    return (
        <header className='py-2 xl:py-4 text-primary h-16 fixed top-0 container z-50'>
            <div className='max-w-7xl flex flex-row mx-auto container justify-between items-center'>
                {/* Logo */}
                <h1 className="text-4xl font-sans font-semibold">
                    <a href='#home'>James L<span className="text-secondary">.</span></a>
                </h1>

                {/* Desktop Navbar */}
                <div className="hidden xl:flex items-center gap-8">
                    <Navbar />
                </div>

                {/* Mobile Navbar */}
                <div className="xl:hidden">
                    <div>Mobile Nav</div>
                </div>
            </div>
        </header>
    );
}

export default Header