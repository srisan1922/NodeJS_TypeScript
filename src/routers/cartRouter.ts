import express from "express";
import {
  CartCreateMiddleware,
  CartMiddleware,
} from "../middlewares/cartMiddleware";
import { CartController } from "../controllers/cartController";

export class CartRouter {
  router: express.Router;

  constructor() {
    this.router = express.Router();
    this.initialCartRouter();
  }

  initialCartRouter() {
    this.router.use(CartMiddleware);
    this.router.get("/", CartController.getAllCartItems);
    this.router.get("/cartItemId", CartController.getCartItemById);
    this.router.post("/", CartCreateMiddleware, CartController.createCartItem);
  }
}
