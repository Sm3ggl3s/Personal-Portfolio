export interface Project {
    _id: string;
    name: string;
    description: string;
    githubRepo: string;
    image: string;
}

export interface ProjectCardProps {
    project: Project;
}