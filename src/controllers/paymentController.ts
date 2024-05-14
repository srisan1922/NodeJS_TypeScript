import { Request, Response } from "express";

const paymentSuccess = (req: Request, res: Response) => {
  console.log("The payment received Successfully");
  res.json({
    successful: true,
    successMessage: "Payment is successfull",
  });
};

const paymentFailed = (req: Request, res: Response) => {
  console.log(
    "Displaying all the cart items in the list based on the product name"
  );
  res.json({
    successful: false,
    errorMessage: "Payment is not successfull",
  });
};

export { paymentSuccess, paymentFailed };
