import express, { Express, Request, Response } from "express";

const { getProjects } = require("../controllers/projectController");

const router = express.Router();    // Create a new router

router.get("/projects", getProjects);    // Create a new route for getting all projects

module.exports = router;    // Export the router