import React, { useState } from 'react';
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
    {
        name: 'Resume',
        path: '#resume',
    }
]


const MobileNavbar: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark', !isDarkMode);
        document.body.classList.toggle('light', isDarkMode);
    };

    return (
        <div>
            <nav>
                <FontAwesomeIcon
                    icon={isDarkMode ? solidMoon : regularMoon}
                    className='text-secondary text-2xl cursor-pointer mr-4'
                    onClick={toggleTheme}
                />
            </nav>
        </div>
    )
}

export default MobileNavbar