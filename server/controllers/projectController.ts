import { Request, Response } from "express";
import Project from "../models/projectModel";

export const getProjects = async (req: Request, res: Response) => {
    try {
        console.log("Received request to get projects");
        const projects = await Project.find({});
        console.log("Projects retrieved from database");
        res.json(projects);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error retrieving projects:", error.message);
            res.status(500).json({ message: "Server Error" });
        } else {
            console.error('Unexpected error', error);
            res.status(500).json({ message: "Unexpected Server Error" });
        }
    }
};