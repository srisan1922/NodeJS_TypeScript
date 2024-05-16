import express from "express";

export const ProductsMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log("Request intercepted by ProductsMiddleware");
  next();
};

export const ProductsCreateMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log("Request intercepted by ProductsCreateMiddleware");
  next();
};
