import express from "express";
import { getComments, postComments } from "../controllers/comments.controllers";
const router = express.Router();

router.post("/comments/:postId", postComments);
router.get("/comments/:postId", getComments);
export default router;
