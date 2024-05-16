import express, { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { Products } from "../models/products";

export class ProductsController {
  //Find Retrieves multiple entities from the database based on the specified criteria.
  //This method returns an array of entities that match the criteria.
  //For students model based on the database connection using AppDataSource

  static async getAllProducts(req: Request, res: Response) {
    res.send(await AppDataSource.manager.find(Products));
  }

  static async createProduct(req: Request, res: Response) {
    const product: Products = new Products();
    product.product_name = req.body.product_name;
    product.description = req.body.description;
    product.available_Colors = req.body.available_Colors;
    product.price = req.body.price;
    product.quantity = req.body.quantity;
    product.save().then(() => {
      res.send(product);
    });
  }

  static async getByProductId(req: Request, res: Response) {
    console.log(`Recieved id = ${req.query.product_id}`);
    res.send(
      await AppDataSource.getRepository(Products).findOne({
        where: {
          product_id: req.query.product_id as any,
        },
      })
    );
  }
}
