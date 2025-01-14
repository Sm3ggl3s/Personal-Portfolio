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
                className="text-primary bg-secondary rounded-lg min-h-[200px] max-w-[400px] cursor-pointer hover:shadow-lg transition-shadow duration-300"
            >
                <div className="relative bg-secondary text-background h-48 flex items-center justify-center mb-3 rounded-t-lg overflow-hidden">
                    <span className="absolute inset-0 bg-primary z-10"></span>
                    <span className="absolute bottom-0 left-0 z-20 text-start text-primary font-bold text-lg p-2 bg-background bg-opacity-50 rounded-tr-lg"> {project.name} </span>
                </div>
                <p className="my-2 text-center">Brief project description goes here.</p>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    onClick={toggleModal}
                >
                    <div
                        className="bg-secondary rounded-xl p-6 max-w-2xl w-full items-center flex"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                    >
                        <div className="img max-w-xl w-36vw h-[300px] rounded-xl ml-[-60px] mr-[30px] object-cover shadow-lg">
                            <h1 className="text-primary">Image </h1>
                        </div>
                        <div className="details">
                            <h2 className='mt-0 mr-8 mb-3 font-normal text-2xl'> Project Name </h2>
                            <p className='opacity text-sm font-normal mb-8 opacity-50'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nemo tenetur quisquam! Error deleniti et aperiam odio reiciendis rem quasi!</p>
                            <div className="skills flex flex-row gap-8 mt-8">
                                <p> Language 1</p>
                                <p> Language 2</p>
                                <p> Language 3</p>
                                <p> Language 4</p>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </>
    );
};

export default ProjectCard;
