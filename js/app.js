const products = [
  { id: 1, name: "Cleaned & Chopped Drumstick", weight: "300gm", price: 60, image: "images/drumstick.png" },
  { id: 2, name: "Potato", weight: "1kg", price: 40, image: "images/potato.png" },
  { id: 3, name: "Onion", weight: "1kg", price: 40, image: "images/onion.png" },
  { id: 4, name: "Tomato", weight: "500gm", price: 30, image: "images/tomato.png" },
  { id: 5, name: "Lemon", weight: "3 pc", price: 20, image: "images/lemon.jpg" },
  { id: 6, name: "Cleaned Methi", weight: "300gm", price: 60, image: "images/methi.png" },
  { id: 7, name: "French Beans (Chopped)", weight: "300gm", price: 60, image: "images/french-beans.jpg" },
  { id: 8, name: "Mixed Pulav Vegetables", weight: "300gm", price: 60, image: "images/pulav-mix.png" },
  { id: 9, name: "Cleaned Pudina", weight: "300gm", price: 20, image: "images/pudina.jpg" },
  { id: 10, name: "Cleaned Palak", weight: "200gm", price: 60, image: "images/palak.png" },
  { id: 11, name: "Cleaned Coriander", weight: "100gm", price: 20, image: "images/coriander.png" },
  { id: 12, name: "Capsicum Green (Chopped)", weight: "300gm", price: 60, image: "images/capsicum.jpg" },
  { id: 13, name: "Red Pumpkin (Cut)", weight: "300gm", price: 60, image: "images/pumpkin.png" },
  { id: 14, name: "Sponge Gourd (Cut)", weight: "300gm", price: 60, image: "images/sponge-gourd.jpg" },
  { id: 15, name: "Ridge Gourd (Chopped)", weight: "300gm", price: 60, image: "images/ridge-gourd.jpg" },
  { id: 16, name: "Green Peas (Shelled)", weight: "300gm", price: 60, image: "images/green-peas.jpg" },
  { id: 17, name: "Carrot (Chopped)", weight: "300gm", price: 50, image: "images/carrot.png" },
  { id: 18, name: "Bottle Gourd (Chopped)", weight: "300gm", price: 60, image: "images/bottle-gourd.png" },
  { id: 19, name: "Bitter Gourd (Chopped)", weight: "300gm", price: 60, image: "images/bitter-gourd.png" },
  { id: 20, name: "Cauliflower (Chopped)", weight: "300gm", price: 60, image: "images/cauliflower.jpg" },
  { id: 21, name: "Lady Finger (Chopped)", weight: "300gm", price: 50, image: "images/ladyfinger.jpg" },
  { id: 22, name: "Cluster Beans (Chopped)", weight: "300gm", price: 60, image: "images/cluster-beans.jpg" },
  { id: 23, name: "Fresh Coconut Grated", weight: "200gm", price: 60, image: "images/coconut.jpg" },
  { id: 24, name: "Green Chilli", weight: "100gm", price: 20, image: "images/green-chilli.png" },
  { id: 25, name: "Peeled Garlic", weight: "100gm", price: 30, image: "images/garlic.png" }
];

const productList = document.getElementById("product-list");

products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";

  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.weight}</p>
    <p>₹${product.price}</p>
    <div class="qty">
      <button>-</button>
      <span>0</span>
      <button>+</button>
    </div>
  `;

  productList.appendChild(div);
});
