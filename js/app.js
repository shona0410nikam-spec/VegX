// ================= VegX App JS =================

const WHATSAPP_NUMBER = "7208487215";
const MIN_ORDER = 399;

const products = [
  { id: "drumstick", name: "Drumstick 300gm", price: 60, image: "images/drumstick.png" },
  { id: "potato", name: "Potato 1kg", price: 40, image: "images/potato.png" },
  { id: "onion", name: "Onion 1kg", price: 40, image: "images/onion.png" },
  { id: "tomato", name: "Tomato 500gm", price: 30, image: "images/tomato.png" },
  { id: "lemon", name: "Lemon (3 pcs)", price: 20, image: "images/lemon.jpg" },
  { id: "methi", name: "Methi 300gm", price: 60, image: "images/methi.png" },
  { id: "frenchbeans", name: "French Beans 300gm", price: 60, image: "images/french-beans.jpg" },
  { id: "capsicum", name: "Capsicum 300gm", price: 60, image: "images/capsicum.png" },
  { id: "carrot", name: "Carrot 300gm", price: 50, image: "images/carrot.png" },
  { id: "ladyfinger", name: "Lady Finger 300gm", price: 50, image: "images/lady-finger.jpg" }
];

let cart = {};
let totalAmount = 0;

// ---------- Render Products ----------
const productList = document.getElementById("product-list");

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p class="price">₹${p.price}</p>

    <div class="qty">
      <button onclick="updateQty('${p.id}', ${p.price}, -1)">−</button>
      <span id="qty-${p.id}">0</span>
      <button onclick="updateQty('${p.id}', ${p.price}, 1)">+</button>
    </div>
  `;

  productList.appendChild(card);
});

// ---------- Quantity Update ----------
function updateQty(id, price, change) {
  if (!cart[id]) {
    cart[id] = { qty: 0, price: price };
  }

  cart[id].qty += change;
  if (cart[id].qty < 0) cart[id].qty = 0;

  document.getElementById(`qty-${id}`).innerText = cart[id].qty;
  calculateTotal();
}

// ---------- Total ----------
function calculateTotal() {
  totalAmount = 0;
  for (let key in cart) {
    totalAmount += cart[key].qty * cart[key].price;
  }
  document.getElementById("totalAmount").innerText = totalAmount;
}

// ---------- Place Order ----------
function placeOrder() {
  if (totalAmount < MIN_ORDER) {
    alert(`Minimum order ₹${MIN_ORDER} आहे`);
    return;
  }

  let message = `🥬 VegX Order\n\nItems:\n`;

  for (let key in cart) {
    if (cart[key].qty > 0) {
      message += `${key} x ${cart[key].qty} = ₹${cart[key].qty * cart[key].price}\n`;
    }
  }

  message += `\nTotal: ₹${totalAmount}\nPayment: COD / UPI`;

  const url = `https://wa.me/91${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
