import express from "express";
import bodyParser from "body-parser";
import { Request, Response, NextFunction } from "express-serve-static-core";
import "reflect-metadata";
import { AppMiddleware } from "./middlewares/appMiddleware";
import { AppDataSource } from "./database/data-source";
import { ProductsRouter } from "./routers/productsRouter";
import { CartRouter } from "./routers/cartRouter";

class App {
  app: express.Express;
  constructor() {
    this.app = express();
    this.configureMiddleware();
    this.setupRouter();
  }

  configureMiddleware() {
    //Mounts bodyParser middleware to parse req.body into json format
    this.app.use(express.json());
    //Parses incoming request bodies containing URL-encoded data
    this.app.use(bodyParser.urlencoded({ extended: true }));
    //Middleware common to all requests
    this.app.use(AppMiddleware);

    //Error handling Middleware
    this.app.use(
      (err: any, req: Request, res: Response, next: NextFunction) => {
        console.log(err);
      }
    );
  }

  setupRouter() {
    //Handling home page request
    this.app.use("/", (req: Request, res: Response) => {
      console.log("Welcome to the Home Page!!!");
    });

    this.app.use("/products", new ProductsRouter().router);
    this.app.use("/carts", new CartRouter().router);
  }

  start() {
    const port = process.env.PORT || 27017;
    AppDataSource.initialize()
      .then(() => {
        //Mongo Db connection started
        console.log(`MongoDB server connected`);
      })
      .catch((err) => {
        console.log(err);
      });

    this.app.listen(port, () => {
      console.log(`Server connected in port: ${port}`);
    });
  }
}

const app = new App();
app.start();
