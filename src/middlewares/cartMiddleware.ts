import { NextFunction, Request, Response } from "express-serve-static-core";

const cartMiddleware = (req: Request, res: Response, next: NextFunction) => {
  return res.send({
    successful: false,
    errorMessage: { text: "text is required" },
  });
  next();
};

export default cartMiddleware;
