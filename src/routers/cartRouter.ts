import { Router } from "express";
import {
  deleteProductItem,
  getCart,
  getProductItem,
  postCart,
} from "../controllers/cartController";
import cartMiddleware from "../middlewares/cartMiddleware";

const cartRouter = Router();

cartRouter.get("/", getCart);

cartRouter.get("/:product_name", getProductItem);

cartRouter.post("/", cartMiddleware, postCart);

cartRouter.delete("/:product_name", deleteProductItem);

export default cartRouter;
