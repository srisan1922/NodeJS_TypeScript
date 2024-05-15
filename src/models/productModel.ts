interface MockData {
  product_name: string;
  description: string;
  price: number;
  available_colors?: string[];
  capacity_oz?: number;
  capacity_mah?: number;
  compatible_devices?: string[];
  compatibility?: string;
  features?: string[];
  waterproof_rating?: string;
  battery_life?: string;
  input?: string;
  output?: string;
}

export let mockData: MockData[] = [
  {
    product_name: "Wireless_Bluetooth_Earbuds",
    description:
      "Enjoy crystal-clear sound with these sleek wireless earbuds. They feature Bluetooth 5.0 connectivity, noise-canceling technology, and a long-lasting battery life of up to 8 hours on a single charge.",
    price: 49.99,
    available_colors: ["Black", "White", "Blue"],
  },
  {
    product_name: "Stainless_Steel_Insulated_Water_Bottle",
    description:
      "Stay hydrated on the go with this durable insulated water bottle. Made from high-quality stainless steel, it keeps your drinks cold for up to 24 hours or hot for up to 12 hours. Perfect for outdoor activities and commuting.",
    price: 19.99,
    capacity_oz: 20,
    available_colors: ["Silver", "Black", "Rose Gold"],
  },
  {
    product_name: "Portable_External_Battery_Charger",
    description:
      "Never run out of battery again with this portable external charger. It's compact and lightweight, making it perfect for travel or everyday use. With a capacity of 10000mAh, it can charge your smartphone multiple times on a single charge.",
    price: 29.99,
    capacity_mah: 10000,
    compatible_devices: ["Smartphones", "Tablets", "Cameras"],
  },
  {
    product_name: "Wireless_Charging_Pad",
    description:
      "Say goodbye to tangled cables with this sleek wireless charging pad. Simply place your Qi-enabled device on the pad to start charging instantly. Its non-slip design ensures your device stays in place while charging.",
    price: 24.99,
    compatibility:
      "Qi-enabled smartphones (iPhone 8 and newer, Samsung Galaxy S6 and newer, etc.)",
    input: "5V/2A, 9V/1.67A",
    output: "5W/7.5W/10W",
  },
  {
    product_name: "Fitness_Tracker_Smartwatch",
    description:
      "Keep track of your health and fitness goals with this stylish smartwatch. It features a heart rate monitor, step counter, sleep tracker, and notifications for calls and messages. With its IP68 waterproof rating, you can wear it while swimming or showering.",
    price: 79.99,
    features: [
      "Heart Rate Monitor",
      "Step Counter",
      "Sleep Tracker",
      "Notifications",
    ],
    waterproof_rating: "IP68",
    battery_life: "Up to 7 days",
  },
];
