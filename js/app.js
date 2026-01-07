alert("app.js loaded ✅");

const WHATSAPP_NUMBER = "7208487215";
const MIN_ORDER = 399;

const products = [
  { id: 1, name: "Potato", price: 40, image: "./images/potato.png" },
  { id: 2, name: "Onion", price: 40, image: "./images/onion.png" },
  { id: 3, name: "Tomato", price: 30, image: "./images/tomato.png" },
  { id: 4, name: "Carrot", price: 50, image: "./images/carrot.png" },
  { id: 5, name: "Cabbage", price: 40, image: "./images/cabbage.png" },
  { id: 6, name: "Capsicum", price: 60, image: "./images/capsicum.png" },
  { id: 7, name: "Cauliflower", price: 40, image: "./images/cauliflower.png" },
  { id: 8, name: "French Beans", price: 60, image: "./images/french-beans.png" },
  { id: 9, name: "Green Peas", price: 60, image: "./images/green-peas.png" },
  { id: 10, name: "Fresh Coconut", price: 60, image: "./images/fresh-coconut.png" },
  { id: 11, name: "Pulav Mix", price: 60, image: "./images/mixed-pulav-vegetables.png" }
];

let cart = {};
let totalAmount = 0;

const productList = document.getElementById("product-list");

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>₹${p.price}</p>
    <div class="qty">
      <button onclick="updateQty(${p.id}, ${p.price}, -1)">-</button>
      <span id="qty-${p.id}">0</span>
      <button onclick="updateQty(${p.id}, ${p.price}, 1)">+</button>
    </div>
  `;

  productList.appendChild(card);
});

function updateQty(id, price, change) {
  if (!cart[id]) cart[id] = { qty: 0, price };
  cart[id].qty += change;
  if (cart[id].qty < 0) cart[id].qty = 0;

  document.getElementById(`qty-${id}`).innerText = cart[id].qty;
  calculateTotal();
}

function calculateTotal() {
  totalAmount = 0;
  for (let id in cart) {
    totalAmount += cart[id].qty * cart[id].price;
  }
  document.getElementById("total").innerText = totalAmount;
}

function checkout() {
  if (totalAmount < MIN_ORDER) {
    alert("Minimum order ₹" + MIN_ORDER);
    return;
  }

  let name = document.getElementById("name").value;
  let mobile = document.getElementById("mobile").value;
  let address = document.getElementById("address").value;

  let message = `VegX Order%0AName: ${name}%0AMobile: ${mobile}%0AAddress: ${address}%0A%0A`;

  for (let id in cart) {
    if (cart[id].qty > 0) {
      const p = products.find(x => x.id == id);
      message += `${p.name} x ${cart[id].qty}%0A`;
    }
  }

  message += `%0ATotal: ₹${totalAmount}`;

  window.open(
    `https://wa.me/91${WHATSAPP_NUMBER}?text=${message}`,
    "_blank"
  );
}
