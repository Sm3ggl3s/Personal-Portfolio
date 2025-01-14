// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db";

const port = process.env.PORT ||8000;
dotenv.config();
connectDB();

const app: Express = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.use("/api", require("./routes/projectRoutes"));

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});