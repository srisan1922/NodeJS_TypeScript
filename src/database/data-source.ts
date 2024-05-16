import "reflect-metadata";
import { DataSource } from "typeorm";
import { Products } from "../models/products";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3307,
  database: "typeormdb",
  username: "Srisan GJ",
  password: "Srisan@1234",
  synchronize: true,
  logging: true,
  entities: [Products],
  subscribers: [],
  migrations: [],
});
