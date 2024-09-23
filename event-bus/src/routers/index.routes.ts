import express from "express";
import { eventController } from "../controllers/event.controller";

const routers = express.Router();

console.log(`came to posts server index routes`);

routers.post("/events", eventController);

export default routers;
