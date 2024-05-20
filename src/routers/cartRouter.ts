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
    //gets all the cartItems from the DB
    this.router.get("/", CartController.getAllCartItems);
    //gets perticular product item from cartItems from the DB
    this.router.get("/cartItemId", CartController.getCartItemById);
    this.router.post("/", CartCreateMiddleware, CartController.createCartItem);
    this.router.put(
      "/updateCartItem/:product_id",
      CartController.updateCartItem
    );
  }
}
