import dotenv from "dotenv";
import morgan from "morgan";
import express from "express";
import route from "./routes/route.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use("/", route);

export default app;
