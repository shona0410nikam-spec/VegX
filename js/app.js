/* ===============================
   VegX – FINAL SCRIPT.JS
   =============================== */

const products = [
  { name: "Potato", price: 40, image: "images/potato.png" },
  { name: "Onion", price: 40, image: "images/onion.png" },
  { name: "Tomato", price: 30, image: "images/tomato.png" },
  { name: "Lemon (3 pc)", price: 20, image: "images/lemon.png" },

  { name: "Methi (cleaned)", price: 60, image: "images/methi.png" },
  { name: "Pudina (cleaned)", price: 20, image: "images/pudina.png" },
  { name: "Palak (cleaned)", price: 60, image: "images/palak.png" },
  { name: "Coriander (cleaned)", price: 20, image: "images/coriander.png" },

  { name: "Drumstick (cleaned & chopped)", price: 60, image: "images/cleaned-chopped-drumstick.png" },
  { name: "French Beans (cleaned & chopped)", price: 60, image: "images/frenchbeans.png" },
  { name: "Capsicum Green (cleaned & chopped)", price: 60, image: "images/capsicum.png" },
  { name: "Red Pumpkin (cleaned & cut)", price: 60, image: "images/red-pumpkin.png" },
  { name: "Sponge Gourd (cleaned & cut)", price: 60, image: "images/sponge-gourd.png" },
  { name: "Ridge Gourd (cleaned & chopped)", price: 60, image: "images/ridge-gourd.png" },
  { name: "Carrot (cleaned & chopped)", price: 50, image: "images/carrot.png" },
  { name: "Bottle Gourd (cleaned & chopped)", price: 60, image: "images/bottle-gourd.png" },
  { name: "Bitter Gourd (cleaned & chopped)", price: 60, image: "images/bitter-gourd.png" },
  { name: "Cauliflower (cleaned & chopped)", price: 60, image: "images/cauliflower.png" },
  { name: "Lady Finger (cleaned & chopped)", price: 50, image: "images/lady-finger.png" },
  { name: "Cluster Beans (cleaned & chopped)", price: 60, image: "images/cluster-beans.png" },

  { name: "Green Peas (cleaned & shelled)", price: 60, image: "images/green-peas.png" },
  { name: "Mixed Pulav Vegetables", price: 60, image: "images/mixed-pulav-vegetables.png" },
  { name: "Fresh Coconut (grated)", price: 60, image: "images/fresh-coconut.png" },
  { name: "Green Chilli", price: 20, image: "images/green-chilli.png" },
  { name: "Garlic (peeled)", price: 30, image: "images/peeled-garlic.png" }
];

let cart = [];

/* ---------- Render Products ---------- */
const productsDiv = document.getElementById("products");

products.forEach((p, index) => {
  productsDiv.innerHTML += `
    <div class="product">
      <img src="${p.image}" alt="${p.name}">
      <h4>${p.name}</h4>
      <p>₹ ${p.price}</p>
      <div class="qty-box">
        <button onclick="changeQty(${index}, -1)">-</button>
        <span id="qty-${index}">0</span>
        <button onclick="changeQty(${index}, 1)">+</button>
      </div>
    </div>
  `;
});

/* ---------- Quantity Change ---------- */
function changeQty(index, delta) {
  const qtySpan = document.getElementById(`qty-${index}`);
  let qty = parseInt(qtySpan.innerText) + delta;
  if (qty < 0) qty = 0;
  qtySpan.innerText = qty;

  const product = products[index];
  const existing = cart.find(item => item.name === product.name);

  if (existing) {
    existing.qty = qty;
    if (qty === 0) {
      cart = cart.filter(item => item.name !== product.name);
    }
  } else if (qty > 0) {
    cart.push({ ...product, qty });
  }

  updateCartTotal();
}

/* ---------- Cart Total ---------- */
function updateCartTotal() {
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.qty;
  });
  document.getElementById("cart-total").innerText = total;
}

/* ---------- WhatsApp Checkout ---------- */
function checkoutWhatsApp() {
  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const address = document.getElementById("address").value.trim();

  if (!name || !mobile || !address) {
    alert("Please fill all customer details");
    return;
  }

  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  let orderText = "";
  let total = 0;

  cart.forEach(item => {
    orderText += `${item.name} x ${item.qty}\n`;
    total += item.price * item.qty;
  });

  if (total < 399) {
    alert("Minimum order value ₹399");
    return;
  }

  const message =
`VegX Order
Name: ${name}
Mobile: ${mobile}
Address: ${address}

Order:
${orderText}
Total: ₹${total}`;

  const url = `https://wa.me/917208487215?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
