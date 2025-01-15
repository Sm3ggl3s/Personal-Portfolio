export interface Project {
    _id: string;
    name: string;
    description: string;
    githubRepo: string;
    image: string;
    techStack: string[];
}

export interface ProjectCardProps {
    project: Project;
}