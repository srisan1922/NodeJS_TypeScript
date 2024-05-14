import { NextFunction, Request, Response } from "express";

const cartMiddleware = (req: Request, res: Response, next: NextFunction) => {
  return res.send({
    successful: false,
    errorMessage: { text: "text is required" },
  });
  next();
};

export default cartMiddleware;
