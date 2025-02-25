import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const externalLinks = [
    {
        icon: faGithub,
        link: 'https://github.com/Sm3ggl3s'
    },
    {
        icon: faLinkedin,
        link: 'https://www.linkedin.com/in/janderson2429/'
    },
]


interface SocialsProps {
    containerStyles?: string;
    iconStyles?: React.CSSProperties;
}

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles as string}>
            {externalLinks.map((link, index) => (
                <a key={index} href={link.link} className={iconStyles as string} target="_blank">
                    <FontAwesomeIcon icon={link.icon} />
                </a>
            ))}
        </div>
    );
}

export default Socials