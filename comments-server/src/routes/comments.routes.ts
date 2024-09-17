import express from "express";
import { postComments } from "../controllers/comments.controllers";
const router = express.Router();

router.post("/comment", postComments);
export default router;
