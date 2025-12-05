import express from "express";
import { getData, createData, updateData, deleteData } from "../controllers/user.controller.js";

const route = express.Router();

route.get("/data", getData);
route.post("/postData", createData);
route.put("/updateData/:id", updateData);
route.delete("/deleteData/:id", deleteData);

export default route;
