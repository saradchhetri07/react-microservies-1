import { Request, Response, NextFunction } from "express";

interface Comment {
  commentId: string;
  content: string;
  postId: string;
}

interface Post {
  postId: string;
  title: string;
  comments?: [Comment];
}

export const eventController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { type, data } = req.body;
    const Post = {};

    if (type === "PostCreated") {
      const { postId, title } = data;
      Post[postId] = {
        postId,
        title,
      };
    } else if (type === "CommentCreated") {
      const { postId, content, id } = data;
      const comments = Post[postId].comments || [];
      comments.push({ commentId: id, content });
      Post[postId].comments = comments;
    } else if (type === "CommentUpdated") {
      const { postId, content, id } = data;
      const comments = Post[postId].comments || [];
      const comment = comments.find((comment) => comment.commentId === id);
      comment.content = content;
    }
    console.log(Post);

    return res.status(200).json({ Post });
  } catch (error) {}
};
