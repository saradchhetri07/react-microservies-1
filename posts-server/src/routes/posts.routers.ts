import express from "express";
import { postPost } from "../controllers/post.controllers";
const routers = express.Router();
routers.post("/", postPost);

export default routers;
