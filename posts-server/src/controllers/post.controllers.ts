import { Request, Response, NextFunction } from "express";
import { randomBytes } from "crypto";
import axios from "axios";

export const postPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const postId = randomBytes(4).toString("hex");

    const { title } = req.body;
    const posts = {};

    posts[postId] = {
      postId,
      title,
    };

    await axios.post("http://event-bus-srv:4004/events", {
      type: "PostCreated",
      data: {
        postId: {
          postId,
          title,
        },
      },
    });

    return res.status(200).send(posts);
  } catch (error) {
    console.log(error);
  }
};
