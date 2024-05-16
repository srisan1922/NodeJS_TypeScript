import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { Cart } from "../models/cart";

export class CartController {
  static async getAllCartItems(req: Request, res: Response) {
    res.send(await AppDataSource.manager.find(Cart));
  }

  static async getCartItemById(req: Request, res: Response) {
    res.send(
      await AppDataSource.getRepository(Cart).findOne({
        where: {
          product_id: req.query.product_id as any,
        },
      })
    );
  }

  static async createCartItem(req: Request, res: Response) {
    const cartItem: Cart = new Cart();
    cartItem.product_name = req.body.product_name;
    cartItem.color = req.body.color;
    cartItem.no_of_items = req.body.no_of_items;
    cartItem.total_price = req.body.total_price;
    cartItem.save().then(() => {
      res.send(cartItem);
    });
  }
}
