import { Request, Response, NextFunction } from "express";
import axios from "axios";
import { randomBytes } from "crypto";
const commentsByPostId = {};

export const postComments = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { postId } = req.params;
    const { content } = req.body;
    const commentId = randomBytes(4).toString("hex");
    const comments = commentsByPostId[postId] || [];

    comments.push({ id: commentId, content: content });
    commentsByPostId[postId] = comments;
    await axios.post("http://event-bus-srv:4004/events", {
      type: "CommentCreated",
      data: {
        id: commentId,
        content,
        postId,
      },
    });
    return res.status(200).json(commentsByPostId);
  } catch (error) {
    console.log(error);
  }
};

export const getComments = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { postId } = req.params;
  const comments = commentsByPostId[postId] || [];
  res.status(200).json(comments);
};
