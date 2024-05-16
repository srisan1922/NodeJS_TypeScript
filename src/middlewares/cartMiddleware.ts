import express, { NextFunction, Request, Response } from "express";

export const CartMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Request Intercepted by CartMiddleware");
  next();
};

export const CartCreateMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Request Intercepted by CartCreateMiddleware");
  next();
};
