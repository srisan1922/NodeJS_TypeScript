interface MockCartData {
  product_name: string;
  price: number;
  available_colors?: string[];
  capacity_oz?: number;
  compatible_devices?: string[];
  quantity: number;
}

export let mockCartData: MockCartData[] = [
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
