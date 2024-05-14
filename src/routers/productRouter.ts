import { Router } from "express";
import {
  deleteProductItem,
  getProductItem,
  getProducts,
  postProducts,
} from "../controllers/productController";
import productMiddleware from "../middlewares/productMiddleware";

const productRouter = Router();

productRouter.get("/", getProducts);

productRouter.get("/:product_name", getProductItem);

productRouter.post("/", productMiddleware, postProducts);

productRouter.delete("/:product_name", deleteProductItem);

export default productRouter;
