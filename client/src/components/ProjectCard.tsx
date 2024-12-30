import React from 'react'

const ProjectCard: React.FC = () => {
    return (
        <>
            <div className='text-primary bg-secondary rounded-lg p-4 min-h-[300px] max-w-[400px]'>
                <h1 className='text-2xl font-bold text-center justify-center'>Project Name</h1>
                <div className='bg-primary text-background h-48 flex items-center justify-center my-3 rounded-lg'>
                    <span>Image Placeholder</span>
                </div>
                <p className='mt-2'>Project Description</p>
                <div className='mt-4'>
                    <a href='#' className='text-primary bg-secondary px-4 py-2 rounded-lg'>View Project</a>
                </div>
            </div>
        </>
    )
}

export default ProjectCard