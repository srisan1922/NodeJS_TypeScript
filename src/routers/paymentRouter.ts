import express from "express";
import {
  paymentFailed,
  paymentSuccess,
} from "../controllers/paymentController";
import paymentMiddleware from "../middlewares/paymentMiddleware";

const paymentRouter = express();

paymentRouter.post("/paymentSuccess", paymentMiddleware, paymentSuccess);

paymentRouter.get("/paymentFailed", paymentFailed);

export default paymentRouter;
