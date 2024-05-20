import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { Cart } from "../models/cart";

export class CartController {
  static async getAllCartItems(req: Request, res: Response) {
    try {
      const cartsData = await AppDataSource.manager.find(Cart);
      res.status(200).json({
        status: "Successfull",
        data: cartsData,
      });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
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
    const { product_id, product_name, color, quantity, total_price } = req.body;
    try {
      //Fetching the data to be created in the DB, but this create will store the Data in entity level
      const addCartItems = AppDataSource.manager.create(Cart, {
        product_id,
        product_name,
        color,
        quantity,
        total_price,
      });

      console.log("*********Added cart item*********", addCartItems);

      //the saved Enitity data will be merged into the DB once the .save callback/method is called
      await AppDataSource.manager.save(addCartItems);
      //Sending the saved data to the resposne with OK status
      res.status(200).send(addCartItems);
    } catch (err: any) {
      res.status(400).json({
        error: err.message,
      });
    }
  }

  static async updateCartItem(req: Request, res: Response) {
    const { product_id } = req.params;
    try {
      const updatedCartItem = AppDataSource.manager.update(
        Cart,
        { product_id: product_id },
        req.body
      );
      res.status(200).json({
        status: "Successfully updated",
        data: updatedCartItem,
      });
    } catch {}
  }
}
