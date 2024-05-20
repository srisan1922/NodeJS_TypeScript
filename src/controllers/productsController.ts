import express, { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { Products } from "../models/products";

export class ProductsController {
  //Find Retrieves multiple entities from the database based on the specified criteria.
  //This method returns an array of entities that match the criteria.
  //For students model based on the database connection using AppDataSource

  static async getAllProducts(req: Request, res: Response) {
    try {
      const products = AppDataSource.manager.find(Products);
      res.status(200).json({
        status: "Succesful",
        data: products,
      });
    } catch (err: any) {
      res.status(400).json({
        status: "Failed",
        message: err.message,
      });
    }
  }

  static async createProduct(req: Request, res: Response) {
    const { product_name, description, available_Colors, price, quantity } =
      req.body;
    try {
      const addProducts = AppDataSource.manager.create(Products, {
        product_name,
        description,
        available_Colors,
        price,
        quantity,
      });

      console.log("*********Created Products*********", addProducts);

      await AppDataSource.manager.save(addProducts);

      res.status(200).send(addProducts);
    } catch (err: any) {
      res.status(400).json({
        error: err.message,
      });
    }
  }

  static async getByProductId(req: Request, res: Response) {
    res.send(
      await AppDataSource.getRepository(Products).findOne({
        where: {
          product_id: req.query.product_id as any,
        },
      })
    );
  }

  static async updateProduct(req: Request, res: Response) {
    const { product_id } = req.params;
    try {
      const updatedProducr = AppDataSource.manager.update(
        Products,
        { product_id: product_id },
        req.body
      );

      res.status(200).json({
        status: "Successfully updated",
        data: updatedProducr,
      });
    } catch (err: any) {
      res.status(400).json({
        error: err.message,
      });
    }
  }
}
