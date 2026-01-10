// product.js
const products = [
  // Normal Vegetables
  { id: 1, name: "Potato", description: "weight 1kg", price: 40, image: "Potato.png" },
  { id: 2, name: "Onion", description: "weight 1kg", price: 40, image: "Onion.png" },
  { id: 3, name: "Tomato", description: "weight 500gm", price: 30, image: "Tomato.png" },
  { id: 4, name: "Lemon", description: "3 pc", price: 20, image: "Lemon.jpg" },

  // Leafy Vegetables (cleaned only)
  { id: 5, name: "Methi", description: "cleaned – weight 300gm", price: 60, image: "Cleaned methi.png" },
  { id: 6, name: "Pudina", description: "cleaned – weight 300gm", price: 20, image: "Cleaned Pudina.jpg" },
  { id: 7, name: "Palak", description: "cleaned – weight 200gm", price: 60, image: "Cleaned Palak.png" },
  { id: 8, name: "Coriander", description: "cleaned – weight 100gm", price: 20, image: "Cleaned coriander.png" },

  // Cleaned & Chopped Vegetables
  { id: 9, name: "Drumstick", description: "cleaned & chopped – weight 300gm", price: 60, image: "Cleaned & Chopped Drumstick.png" },
  { id: 10, name: "French Beans", description: "cleaned & chopped – weight 300gm", price: 60, image: "Cleaned & Chopped French Beans.jpg" },
  { id: 11, name: "Capsicum (Green)", description: "cleaned & chopped – weight 300gm", price: 60, image: "Cleaned & Chopped Capsicum Green.jpg" },
  { id: 12, name: "Red Pumpkin", description: "cleaned & cut – weight 300gm", price: 60, image: "Cleaned and cut Red Pumpkin.png" },
  { id: 13, name: "Sponge Gourd", description: "cleaned & cut – weight 300gm", price: 60, image: "Cleaned & Cut Sponge Gourd.jpg" },
  { id: 14, name: "Ridge Gourd", description: "cleaned & chopped – weight 300gm", price: 60, image: "Cleaned & Chopped Ridg Gourd.jpg" },
  { id: 15, name: "Carrot", description: "cleaned & chopped – weight 300gm", price: 50, image: "Cleaned & Chopped Carrot.png" },
  { id: 16, name: "Bottle Gourd", description: "cleaned & chopped – weight 300gm", price: 60, image: "Cleaned & Chopped Bottle Gourd.png" },
  { id: 17, name: "Bitter Gourd", description: "cleaned & chopped – weight 300gm", price: 60, image: "Cleaned & Chopped Bitter Gourd.png" },
  { id: 18, name: "Cauliflower", description: "cleaned & chopped – weight 300gm", price: 60, image: "Cleaned & Chopped Cauliflower.jpg" },
  { id: 19, name: "Lady Finger", description: "cleaned & chopped – weight 300gm", price: 50, image: "Cleaned & Chopped Lady Finger.jpg" },
  { id: 20, name: "Cluster Beans", description: "cleaned & chopped – weight 300gm", price: 60, image: "Cleaned & Chopped Cluster Beans.jpg" },

  // Special
  { id: 21, name: "Green Peas", description: "cleaned & shelled – weight 300gm", price: 60, image: "Cleaned & Shelled Green Peas.jpg" },
  { id: 22, name: "Mixed Pulav Vegetables", description: "cleaned & chopped – weight 300gm", price: 60, image: "Mixed Pulav Vegetables.png" },
  { id: 23, name: "Fresh Coconut (Grated)", description: "200gm", price: 60, image: "Fresh coconut Grated.jpg" },
  { id: 24, name: "Green Chilli", description: "100gm", price: 20, image: "Green Chilli.png" },
  { id: 25, name: "Garlic", description: "peeled – 100gm", price: 30, image: "Peeled Garlic 100gm.png" }
];

// Exporting if using modules, else ignore
// export default products;
