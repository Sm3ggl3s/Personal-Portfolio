import React, { useState } from 'react';
import { ProjectCardProps } from '../types/types';
import { SiBootstrap, SiSvelte, SiTypescript, SiBlender, SiFlask, SiPostgresql, SiJupyter, SiGamemaker, SiGooglecloud,SiSqlalchemy, SiDocker, SiJavascript, SiExpress, SiReact, SiCss3, SiTailwindcss, SiPython, SiMongodb} from 'react-icons/si';
import { FaNodeJs, FaHtml5, FaFigma, FaUnity, FaImages} from "react-icons/fa";
import { PiFileCSharp } from "react-icons/pi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';



const techIcons: { [key: string]: any } = {
    'React': SiReact,
    'Node.js': FaNodeJs,
    'SvelteKit': SiSvelte,
    'Express': SiExpress,
    'MongoDB': SiMongodb,
    'TypeScript': SiTypescript,
    'JavaScript': SiJavascript,
    'HTML': FaHtml5,
    'CSS': SiCss3,
    'Tailwind': SiTailwindcss,
    'Bootstrap': SiBootstrap,
    'Figma': FaFigma,
    'Blender': SiBlender,
    'Unity': FaUnity,
    'C#': PiFileCSharp,
    'Python': SiPython,
    'ImageKit': FaImages, 
    'PostgreSQL': SiPostgresql,
    'GCP': SiGooglecloud,
    'Docker': SiDocker,
    'SQLAlchemy': SiSqlalchemy,
    'GameMakerStudio': SiGamemaker,  
    'Jupyter Notebook': SiJupyter,
    'Flask': SiFlask,
};


const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            {/* Card */}
            <div
                onClick={toggleModal}
                className="text-secondary bg-background rounded-lg min-h-[200px] max-w-[400px] cursor-pointer hover:shadow-lg transition-shadow duration-300"
            >
                <div className="relative bg-secondary text-background h-48 flex items-center justify-center mb-3 rounded-t-lg overflow-hidden">
                    <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover z-10" />
                    <span className="absolute bottom-0 left-0 z-20 text-start text-primary font-bold text-lg p-2 bg-background bg-opacity-50 rounded-tr-lg"> {project.name} </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 my-2">
                    {project.techStack.map((tech: string, index: number) => {
                        const IconComponent = techIcons[tech];
                        return (
                            <div key={index} className="flex justify-center">
                                {IconComponent ? (
                                    <IconComponent className="text-2xl" /> // Adjust the size here
                                ) : (
                                    <SiJavascript className="text-2xl" /> // Default icon if tech is not found
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    onClick={toggleModal}
                >
                    <div
                        className="bg-background rounded-xl p-6 max-w-2xl w-full h-auto flex flex-col relative overflow-visible"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                    >
                        <div className="absolute -top-16 md:-top-32 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full shadow-2xl overflow-hidden z-10 md:rounded-2xl md:w-[calc(0.8*312px*16/9)] md:h-[calc(0.8*312px)] transition-all duration-300 ease-in-out">
                            <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="pt-16 md:pt-32 flex-1 relative z-20 flex flex-col md:flex-row text-primary">
                            <div className="w-full md:w-1/2 pr-4">
                                <h2 className='mt-0 mr-8 font-normal text-2xl'> {project.name} </h2>
                                <a href={project.githubRepo} target="_blank" rel="noopener noreferrer" className='text-lg font-normal mb-8 text-secondary'>
                                    <FontAwesomeIcon icon= {faGithub} />
                                </a>
                                <p className='opacity text-sm font-normal mb-8 opacity-50'> {project.description}</p>
                            </div>
                            <div className="w-full md:w-1/2 pl-4 grid grid-cols-2 sm:grid-cols-3 gap-4 my-auto text-secondary">
                                {project.techStack.map((tech: string, index: number) => {
                                    const IconComponent = techIcons[tech];
                                    return (
                                        <div key={index} className="flex flex-col items-center">
                                            {IconComponent ? (
                                                <IconComponent className="text-2xl mb-2" /> // Adjust the size here
                                            ) : (
                                                <SiJavascript className="text-2xl mb-2" /> // Default icon if tech is not found
                                            )}
                                            <p className="text-center text-sm">{tech}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCard;
