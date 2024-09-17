import { Request, Response, NextFunction } from "express";

export const postComments = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { comment } = req.body;
    console.log(comment);
  } catch (error) {}
};
