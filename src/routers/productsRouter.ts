import express from "express";
import {
  ProductsCreateMiddleware,
  ProductsMiddleware,
} from "../middlewares/productsMiddleware";
import { ProductsController } from "../controllers/productsController";

export class ProductsRouter {
  router: express.Router;

  constructor() {
    this.router = express.Router();
    this.initialProductsRouter();
  }

  initialProductsRouter() {
    this.router.use(ProductsMiddleware);
    this.router.get("/", ProductsController.getAllProducts);
    this.router.get("/byProductId", ProductsController.getByProductId);
    this.router.post(
      "/",
      ProductsCreateMiddleware,
      ProductsController.createProduct
    );
  }
}
