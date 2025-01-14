export interface Project {
    _id: string;
    name: string;
    description: string;
    githubRepo: string;
    liveUrl: string;
}

export interface ProjectCardProps {
    project: Project;
}