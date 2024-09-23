import express from "express";
import postRouter from "./posts.routers";

const routers = express.Router();

console.log(`came to posts server index routes`);
routers.use("/posts", postRouter);

export default routers;
