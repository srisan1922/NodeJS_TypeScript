import express from "express";
import { Request, Response, NextFunction } from "express-serve-static-core";

export const AppMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Request interpetor of AppMiddleware");
  const accessToken = req.headers["access-token"];

  if (!accessToken || accessToken[0].trim() === "") {
    return res.status(400).json({ error: "AccessToken missing or empty" });
  }

  // If AccessToken is present, continue to the next middleware or route handler
  next();
};
