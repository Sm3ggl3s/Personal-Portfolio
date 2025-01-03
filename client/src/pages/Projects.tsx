import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
    const totalProjects = 8; // Total number of projects
    const projectsPerPage = 6; // Number of projects per page
    const totalPages = Math.ceil(totalProjects / projectsPerPage);

    const [currentPage, setCurrentPage] = useState(1);

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    // Calculate the indices of projects to display
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const currentProjects = Array.from({ length: totalProjects }).slice(startIndex, endIndex);

    return (
        <>
            <div className="h-full relative">
                <div className="max-w-7xl container mx-auto h-full flex items-center justify-center mb-8">
                    <div className="text-primary text-center mt-16">
                        <h1 className="text-6xl font-bold">Projects</h1>
                        <div className="relative mt-4">
                            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-[2px] w-[125%] bg-gradient-to-r from-transparent via-secondary to-transparent blur-sm" />
                            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-px w-[125%] bg-gradient-to-r from-transparent via-secondary to-transparent" />
                            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-[3px] w-[125%] bg-gradient-to-r from-transparent via-secondary to-transparent blur-sm" />
                            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-px w-[125%] bg-gradient-to-r from-transparent via-secondary to-transparent" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 my-auto">
                    {currentProjects.map((_, index) => (
                        <ProjectCard key={startIndex + index} />
                    ))}
                </div>
                <div className="flex flex-col items-center justify-center mt-8">
                    <div className="flex">
                        <button
                            className={`px-4 py-2 mx-2 rounded ${currentPage === 1 ? 'bg-gray-400' : 'bg-primary text-white'}`}
                            onClick={handlePrevious}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <div className="flex items-center justify-center text-primary text-center px-4">
                            Page {currentPage} of {totalPages}
                        </div>
                        <button
                            className={`px-4 py-2 mx-2 rounded ${currentPage === totalPages ? 'bg-background-400' : 'bg-primary text-secondary'}`}
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>z
                </div>
            </div>
        </>
    );
};

export default Projects;
