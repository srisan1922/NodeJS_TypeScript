import { NextFunction, Request, Response } from "express";

const productMiddleware = (req: Request, res: Response, next: NextFunction) => {
  return res.send({
    successful: false,
    errorMessage: { text: "text is required" },
  });
  next();
};

export default productMiddleware;
