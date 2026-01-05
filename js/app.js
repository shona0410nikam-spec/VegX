// ================= VegX App JS =================

const WHATSAPP_NUMBER = "7208487215";
const MIN_ORDER = 399;

const products = [
  { id:"potato", name:"Potato 1kg", price:40, image:"images/potato.png" },
  { id:"onion", name:"Onion 1kg", price:40, image:"images/onion.png" },
  { id:"tomato", name:"Tomato 500gm", price:30, image:"images/tomato.png" },
  { id:"carrot", name:"Carrot 300gm", price:50, image:"images/carrot.png" },
  { id:"cabbage", name:"Cabbage 1pc", price:40, image:"images/cabbage.png" },
  { id:"cauliflower", name:"Cauliflower 1pc", price:50, image:"images/cauliflower.jpg" },
  { id:"capsicum", name:"Capsicum 300gm", price:60, image:"images/capsicum.png" },
  { id:"ladyfinger", name:"Lady Finger 300gm", price:50, image:"images/lady-finger.jpg" },
  { id:"frenchbeans", name:"French Beans 300gm", price:60, image:"images/french-beans.jpg" },
  { id:"clusterbeans", name:"Cluster Beans 300gm", price:60, image:"images/cluster-beans.jpg" },
  { id:"greenpeas", name:"Green Peas 300gm", price:60, image:"images/green-peas.jpg" },
  { id:"drumstick", name:"Drumstick 300gm", price:60, image:"images/drumstick.png" },
  { id:"bittergourd", name:"Bitter Gourd 300gm", price:50, image:"images/bitter-gourd.png" },
  { id:"ridgegourd", name:"Ridge Gourd 300gm", price:50, image:"images/ridge-gourd.jpg" },
  { id:"spongegourd", name:"Sponge Gourd 300gm", price:50, image:"images/sponge-gourd.jpg" },
  { id:"pumpkin", name:"Pumpkin 500gm", price:40, image:"images/pumpkin.png" },
  { id:"palak", name:"Palak 300gm", price:30, image:"images/palak.png" },
  { id:"methi", name:"Methi 300gm", price:30, image:"images/methi.png" },
  { id:"coriander", name:"Coriander", price:20, image:"images/coriander.png" },
  { id:"pudina", name:"Pudina", price:20, image:"images/pudina.jpg" },
  { id:"greenchilli", name:"Green Chilli", price:20, image:"images/green-chilli.png" },
  { id:"garlic", name:"Garlic 250gm", price:60, image:"images/garlic.jpg" },
  { id:"lemon", name:"Lemon (3 pcs)", price:20, image:"images/lemon.jpg" },
  { id:"coconut", name:"Coconut", price:40, image:"images/coconut.jpg" }
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
  if (!cart[id]) cart[id] = { qty: 0, price: price };
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

  let message = "🥬 VegX Order\n\n";

  for (let key in cart) {
    if (cart[key].qty > 0) {
      message += `${key} x ${cart[key].qty}\n`;
    }
  }

  message += `\nTotal: ₹${totalAmount}\nPayment: COD / UPI`;

  window.open(
    `https://wa.me/91${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}
