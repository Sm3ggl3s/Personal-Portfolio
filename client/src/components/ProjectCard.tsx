import React, { useState } from 'react';
import { ProjectCardProps } from '../types/types';

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
                <p className="my-2 text-center"> Stack symbols go here. </p>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    onClick={toggleModal}
                >
                    <div
                        className="bg-secondary rounded-xl p-6 max-w-2xl w-full h-auto flex flex-col relative overflow-visible"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                    >
                        <div className="absolute -top-16 md:-top-32 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full shadow-2xl overflow-hidden z-10 md:rounded-2xl md:w-[calc(0.8*312px*16/9)] md:h-[calc(0.8*312px)] transition-all duration-300 ease-in-out">
                            <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="pt-16 md:pt-32 flex-1 relative z-20 flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 pr-4">
                                <h2 className='mt-0 mr-8 mb-3 font-normal text-2xl'> {project.name} </h2>
                                <p className='opacity text-sm font-normal mb-8 opacity-50'> {project.description}</p>
                            </div>
                            <div className="w-full md:w-1/2 pl-4 grid grid-cols-2 gap-4 my-auto">
                                <p className="text-center"> Language 1</p>
                                <p className="text-center"> Language 2</p>
                                <p className="text-center"> Language 3</p>
                                <p className="text-center"> Language 4</p>
                                <p className="text-center"> Language 5</p>
                                <p className="text-center"> Language 6</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCard;
