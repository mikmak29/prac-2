import express from "express";
import { getData, createData, updateData } from "../controllers/user.controller.js";

const route = express.Router();

route.get("/data", getData);
route.post("/postData", createData);
route.put("/updateData/:id", updateData);

export default route;
