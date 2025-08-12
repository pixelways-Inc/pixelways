// data/products.js
const products = [
  {
    name: "iPad Air 2",
    purchasingCost: 10,
    condition: "Used - Good",
    components: "Battery, Ram, SSD",
    issueDescription: "N/A",
    recommendation: "Excellent",
    estimatedCurrentValue: 150,
    currentMarketValue: 120,
    minimumSalesPrice: 100,
    status: "In Inventory",
    location: "Scarborough",
  },
  {
    name: "I phone SE",
    purchasingCost: 20,
    condition: "Used - Good",
    components: "Screen",
    issueDescription: "N/A",
    recommendation: "Good",
    estimatedCurrentValue: 120,
    currentMarketValue: 90,
    minimumSalesPrice: 60,
    status: "In Inventory",
    location: "Scarborough",
  },
  {
    name: "I Phone 8",
    purchasingCost: 25,
    condition: "Used - Good",
    components: "Battery",
    issueDescription: "N/A",
    recommendation: "Good to be sold",
    estimatedCurrentValue: 130,
    currentMarketValue: 100,
    minimumSalesPrice: 70,
    status: "In Inventory",
    location: "Scarborough",
  },
  {
    name: "I phone 7",
    purchasingCost: 20,
    condition: "Used - Good",
    components: "Screen",
    issueDescription: "N/A",
    recommendation: "Should be sold",
    estimatedCurrentValue: 100,
    currentMarketValue: 80,
    minimumSalesPrice: 70,
    status: "In Inventory",
    location: "Scarborough",
  },
  {
    name: "HP Ryzen 3",
    purchasingCost: 30,
    condition: "Used - Fair",
    components: "Battery",
    issueDescription: "Charging system and battery",
    recommendation: "This item should be sold with present condition",
    estimatedCurrentValue: 200,
    currentMarketValue: 150,
    minimumSalesPrice: 120,
    status: "In Inventory",
    location: "Scarborough",
  },
  {
    name: "MacBook Pro 2018", // Dummy product to make it 6
    purchasingCost: 500,
    condition: "Used - Excellent",
    components: "Keyboard, Trackpad",
    issueDescription: "N/A",
    recommendation: "Like new",
    estimatedCurrentValue: 800,
    currentMarketValue: 700,
    minimumSalesPrice: 600,
    status: "In Inventory",
    location: "Scarborough",
  },
];

// Function to generate slug
const generateSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphanumeric characters except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Replace multiple hyphens with a single hyphen
};

// Add slug and image to each product
const productsWithSlugsAndImages = products.map((product, index) => ({
  ...product,
  slug: generateSlug(product.name),
  image: `https://api.a0.dev/assets/image?text=${encodeURIComponent(product.name)}+device+product+image&aspect=1:1&seed=${index + 1}`,
}));

export default productsWithSlugsAndImages;
