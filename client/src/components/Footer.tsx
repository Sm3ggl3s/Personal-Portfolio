import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
    const socialLinks = [
        { href: '#', icon: faLinkedin, label: 'LinkedIn' },
        { href: '#', icon: faGithub, label: 'GitHub' },
    ];

    return (
        <footer className="text-primary py-6">
            <div className="container mx-auto flex flex-row items-left justify-between">
                <p className="text-sm mb-4">&copy; {new Date().getFullYear()} James Anderson. All rights reserved.</p>
                <div className="flex space-x-6">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                            className="text-primary hover:text-secondary transition-colors duration-200"
                        >
                            <FontAwesomeIcon icon={link.icon} size="lg" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
