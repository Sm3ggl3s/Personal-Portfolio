import React, { useState } from 'react';

const ProjectCard: React.FC = () => {
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
                    <span className="absolute bottom-0 left-0 z-20 text-start text-primary font-bold text-lg p-2 bg-background bg-opacity-50 rounded-tr-lg">Project Title</span>
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
                        className="bg-secondary rounded-lg p-6 max-w-2xl w-full text-center relative"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                    >
                        <div className="relative bg-secondary text-background h-96 flex items-center justify-center mb-3 rounded-t-lg overflow-hidden">
                            <span className="absolute inset-0 bg-primary z-10"></span>
                            <span className="absolute bottom-0 left-0 z-20 text-start text-primary font-bold text-lg p-2 bg-background bg-opacity-50 rounded-tr-lg">Project Title</span>
                            </div>
                        <p className="my-4 text-lg text-start">
                            Detailed information about the project goes here. Explain the tools,
                            technologies, or objectives of the project.
                        </p>
                        <button
                            onClick={toggleModal}
                            className="px-4 py-2 bg-primary text-background rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCard;
