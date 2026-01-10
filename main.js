// js/main.js

// ========================
// 1️⃣ Product Data
// ========================
const products = [
  { name: "Potato", image: "images/Potato.png", weight: "1kg", price: 40 },
  { name: "Onion", image: "images/Onion.png", weight: "1kg", price: 40 },
  { name: "Tomato", image: "images/Tomato.png", weight: "500gm", price: 30 },
  { name: "Lemon", image: "images/Lemon.jpg", weight: "3pc", price: 20 },
  { name: "Methi", image: "images/Cleaned methi.png", weight: "300gm", price: 60, cleaned: true },
  { name: "Pudina", image: "images/Cleaned Pudina.jpg", weight: "300gm", price: 20, cleaned: true },
  { name: "Palak", image: "images/Cleaned Palak.png", weight: "200gm", price: 60, cleaned: true },
  { name: "Coriander", image: "images/Cleaned coriander.png", weight: "100gm", price: 20, cleaned: true },
  { name: "Drumstick", image: "images/Cleaned & Chopped Drumstick.png", weight: "300gm", price: 60, chopped: true },
  { name: "French Beans", image: "images/Cleaned & Chopped French Beans.jpg", weight: "300gm", price: 60, chopped: true },
  { name: "Capsicum Green", image: "images/Cleaned & Chopped Capsicum Green.jpg", weight: "300gm", price: 60, chopped: true },
  { name: "Red Pumpkin", image: "images/Cleaned and cut Red Pumpkin.png", weight: "300gm", price: 60, chopped: true },
  { name: "Sponge Gourd", image: "images/Cleaned & Cut Sponge Gourd.jpg", weight: "300gm", price: 60, chopped: true },
  { name: "Ridge Gourd", image: "images/Cleaned & Chopped Ridg Gourd.jpg", weight: "300gm", price: 60, chopped: true },
  { name: "Carrot", image: "images/Cleaned & Chopped Carrot.png", weight: "300gm", price: 50, chopped: true },
  { name: "Bottle Gourd", image: "images/Cleaned & Chopped Bottle Gourd.png", weight: "300gm", price: 60, chopped: true },
  { name: "Bitter Gourd", image: "images/Cleaned & Chopped Bitter Gourd.png", weight: "300gm", price: 60, chopped: true },
  { name: "Cauliflower", image: "images/Cleaned & Chopped Cauliflower.jpg", weight: "300gm", price: 60, chopped: true },
  { name: "Lady Finger", image: "images/Cleaned & Chopped Lady Finger.jpg", weight: "300gm", price: 50, chopped: true },
  { name: "Cluster Beans", image: "images/Cleaned & Chopped Cluster Beans.jpg", weight: "300gm", price: 60, chopped: true },
  { name: "Green Peas", image: "images/Cleaned & Shelled Green Peas .jpg", weight: "300gm", price: 60, cleaned: true },
  { name: "Mixed Pulav Vegetables", image: "images/Mixed Pulav Vegetables.png", weight: "300gm", price: 60, chopped: true },
  { name: "Fresh Coconut Grated", image: "images/Fresh coconut Grated.jpg", weight: "200gm", price: 60 },
  { name: "Green Chilli", image: "images/Green Chilli.png", weight: "100gm", price: 20 },
  { name: "Peeled Garlic", image: "images/Peeled Garlic 100gm.png", weight: "100gm", price: 30 }
];

// ========================
// 2️⃣ Cart
// ========================
let cart = {};

// ========================
// 3️⃣ Render Products
// ========================
function renderProducts() {
  const container = document.getElementById("product-container");
  container.innerHTML = "";

  products.forEach((p, index) => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}" class="product-img">
      <h3>${p.name}</h3>
      <p>${p.cleaned ? "cleaned" : p.chopped ? "cleaned & chopped" : ""} ${p.weight} ₹${p.price}</p>
      <div class="qty-container">
        <button onclick="changeQty(${index}, -1)">-</button>
        <span id="qty-${index}">0</span>
        <button onclick="changeQty(${index}, 1)">+</button>
      </div>
    `;
    container.appendChild(div);
  });
}

// ========================
// 4️⃣ Quantity Functions
// ========================
function changeQty(index, delta) {
  if (!cart[index]) cart[index] = 0;
  cart[index] += delta;
  if (cart[index] < 0) cart[index] = 0;
  document.getElementById(`qty-${index}`).innerText = cart[index];
  updateCartTotal();
}

// ========================
// 5️⃣ Cart Total
// ========================
function updateCartTotal() {
  let total = 0;
  for (let key in cart) {
    total += cart[key] * products[key].price;
  }
  document.getElementById("cart-total").innerText = total;
}

// ========================
// 6️⃣ Checkout WhatsApp
// ========================
function checkoutWhatsApp() {
  const total = Object.keys(cart).reduce((sum, key) => sum + cart[key] * products[key].price, 0);
  if (total < 399) {
    alert("Minimum order is ₹399");
    return;
  }

  const name = document.getElementById("customer-name").value.trim();
  const mobile = document.getElementById("customer-mobile").value.trim();
  const address = document.getElementById("customer-address").value.trim();

  if (!name || !mobile || !address) {
    alert("Please enter all customer details!");
    return;
  }

  let message = `VegX Order\nCustomer: ${name}\nMobile: ${mobile}\nAddress: ${address}\n\nOrder:\n`;
  for (let key in cart) {
    if (cart[key] > 0) {
      message += `${products[key].name} x ${cart[key]} = ₹${cart[key] * products[key].price}\n`;
    }
  }
  message += `\nTotal: ₹${total}\nSlot: Tomorrow 12PM - 3PM`;

  const whatsappNumber = "917208487215";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// ========================
// 7️⃣ Init
// ========================
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCartTotal();
});
