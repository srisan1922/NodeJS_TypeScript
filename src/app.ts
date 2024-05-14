import express, { Application, Request, Response } from "express";
import productRouter from "./routers/productRouter";
import cartRouter from "./routers/cartRouter";
import paymentRouter from "./routers/paymentRouter";

const app: Application = express();
const PORT: number = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome To Amazon Shopping Cart");
});

app.use("/products", productRouter);
app.use("/carts", cartRouter);
app.use("/payments", paymentRouter);

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
