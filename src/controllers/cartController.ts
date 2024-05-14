import express, { Request, Response } from "express";

let mockCartData = [
  {
    product_name: "Wireless_Bluetooth_Earbuds",
    price: 49.99,
    available_colors: ["Black", "White", "Blue"],
    quantity: 2,
  },
  {
    product_name: "Stainless_Steel_Insulated_Water_Bottle",
    price: 19.99,
    capacity_oz: 20,
    available_colors: ["Silver", "Black", "Rose Gold"],
    quantity: 1,
  },
  {
    product_name: "Portable_External_Battery_Charger",
    price: 29.99,
    compatible_devices: ["Smartphones", "Tablets", "Cameras"],
    quantity: 3,
  },
];

const getCart = (req: Request, res: Response) => {
  console.log("Displaying all the items in the cart");
  res.json({
    successful: true,
    data: [...mockCartData],
  });
};

const postCart = (req: Request, res: Response) => {
  console.log("Updating all the cart items in the list into the database");
  res.json({
    successful: true,
    data: req.body,
  });
};

const getProductItem = (req: Request, res: Response) => {
  console.log(
    "Displaying perticular cart items in the list based on the product name"
  );
  const prodname = req.params.product_name;
  const item = mockCartData.find((item) => item.product_name === prodname);

  if (!item) {
    res.json({
      successful: false,
      errorMessage: "Item not found",
    });
  } else {
    res.json({
      successful: true,
      data: item,
    });
  }
};

const deleteProductItem = (req: Request, res: Response) => {
  console.log("Deleting the perticular item from the List");
  const prodname = req.params.product_name;
  const filterCart = mockCartData.filter(
    (item) => item.product_name !== prodname
  );
  if (filterCart.length === mockCartData.length) {
    res.json({
      successful: false,
      errorMessage: "Item not found",
    });
  } else {
    mockCartData = filterCart;
    res.json({
      successful: true,
      successMessage: "Product removed from the List",
      data: filterCart,
    });
  }
};

export { getCart, postCart, getProductItem, deleteProductItem };
