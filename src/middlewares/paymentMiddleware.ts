import { NextFunction, Request, Response } from "express-serve-static-core";

const paymentMiddleware = (req: Request, res: Response, next: NextFunction) => {
  return res.send({
    successful: false,
    errorMessage: { text: "text is required" },
  });
  next();
};

export default paymentMiddleware;
