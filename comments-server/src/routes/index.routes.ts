import express from "express";
import commentRouter from './comments.routes';

const routers = express.Router();

routers.use("/comments", commentRouter);

export default routers;
