import express from "express";
import { getData, createData } from "../controllers/user.controller.js";

const route = express.Router();

route.get("/data", getData);
route.post("/postData", createData);

export default route;
