import React from 'react';

const Projects: React.FC = () => {
    return (
        <>
            <div className="h-full relative">
                <div className="max-w-7xl container mx-auto h-full flex items-center justify-center">
                    <div className='text-primary text-center mt-16'>
                        <h1 className="text-6xl font-bold">Projects</h1>
                        <div className="relative mt-4">
                            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-[2px] w-[125%] bg-gradient-to-r from-transparent via-secondary to-transparent blur-sm" />
                            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-px w-[125%] bg-gradient-to-r from-transparent via-secondary to-transparent" />
                            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-[3px] w-[125%] bg-gradient-to-r from-transparent via-secondary to-transparent blur-sm" />
                            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-px w-[125%] bg-gradient-to-r from-transparent via-secondary to-transparent" />
                        </div>
                    </div>
                </div>
                <div> 
                    {/* Project Cards Here */}
                </div>
            </div>
        </>
    );
}

export default Projects;