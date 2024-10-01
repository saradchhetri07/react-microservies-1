import { Request, Response, NextFunction } from "express";

interface Comment {
  commentId: string;
  content: string;
}

interface Post {
  postId?: string;
  title?: string;
  comments?: Comment[];
}

export const eventController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { type, data } = req.body;
    let Posts: Post[];

    console.log(`came to post the event`, type, data);
    if (type === "PostCreated") {
      const { postId, title } = data.postId;
      Posts[postId] = {
        postId,
        title,
        comments: [],
      };
    } else if (type === "CommentCreated") {
      const { postId, content, id } = data;
      const comments = Posts[postId].comments || [];
      comments.push({ commentId: id, content });
      Posts[postId].comments = comments;
    }
    console.log(Posts);

    return res.send(200).json({ Posts });
  } catch (error) {
    console.log(`gotten error is`, error);
  }
};
