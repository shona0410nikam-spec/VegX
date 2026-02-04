const products = [
  { name: "Potato", weight: "1kg", price: 40, image: "images/potato.png" },
  { name: "Onion", weight: "1kg", price: 40, image: "images/onion.png" },
  { name: "Tomato", weight: "500gm", price: 30, image: "images/tomato.png" },
  { name: "Lemon", weight: "3 pcs", price: 20, image: "images/lemon.png" },

  { name: "Cleaned Methi", weight: "300gm", price: 60, image: "images/methi.png" },
  { name: "Cleaned Pudina", weight: "300gm", price: 20, image: "images/pudina.png" },
  { name: "Cleaned Palak", weight: "200gm", price: 60, image: "images/palak.png" },
  { name: "Cleaned Coriander", weight: "100gm", price: 20, image: "images/coriander.png" },

  { name: "Cleaned & Chopped Drumstick", weight: "300gm", price: 60, image: "images/cleaned-chopped-drumstick.png" },
  { name: "Cleaned & Chopped French Beans", weight: "300gm", price: 60, image: "images/french-beans.png" },
  { name: "Cleaned & Chopped Capsicum (Green)", weight: "300gm", price: 60, image: "images/capsicum.png" },
  { name: "Cleaned & Cut Red Pumpkin", weight: "300gm", price: 60, image: "images/red-pumpkin.png" },
  { name: "Cleaned & Cut Sponge Gourd", weight: "300gm", price: 60, image: "images/sponge-gourd.png" },
  { name: "Cleaned & Chopped Ridge Gourd", weight: "300gm", price: 60, image: "images/ridge-gourd.png" },

  { name: "Cleaned & Shelled Green Peas", weight: "300gm", price: 60, image: "images/green-peas.png" },
  { name: "Cleaned & Chopped Carrot", weight: "300gm", price: 50, image: "images/carrot.png" },
  { name: "Cleaned & Chopped Bottle Gourd", weight: "300gm", price: 60, image: "images/bottle-gourd.png" },

  { name: "Cleaned & Chopped Bitter Gourd", weight: "300gm", price: 60, image: "images/bitter-gourd.png" },

  { name: "Cleaned & Chopped Cauliflower", weight: "300gm", price: 60, image: "images/cauliflower.png" },
  { name: "Cleaned & Chopped Lady Finger", weight: "300gm", price: 50, image: "images/lady-finger.png" },
  { name: "Cleaned & Chopped Cluster Beans", weight: "300gm", price: 60, image: "images/cluster-beans.png" },

  { name: "Mixed Pulav Vegetables", weight: "300gm", price: 60, image: "images/mixed-pulav-vegetables.png" },
  { name: "Fresh Coconut (Grated)", weight: "200gm", price: 60, image: "images/fresh-coconut.png" },
  { name: "Green Chilli", weight: "100gm", price: 20, image: "images/green-chilli.png" },
  { name: "Peeled Garlic", weight: "100gm", price: 30, image: "images/peeled-garlic.png" }
];

let cart = [];

/* =====================
   COUPON SETTINGS
===================== */

const VALID_COUPON = "VEGX100";   // 👉 इथे coupon बदलू शकतोस
const COUPON_DISCOUNT = 100;     // 👉 Flat ₹100 OFF

/* =====================
   RENDER PRODUCTS
===================== */

function renderProducts() {
  const list = document.getElementById("product-list");
  list.innerHTML = "";

  products.forEach((p, i) => {
    list.innerHTML += `
      <div class="product">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>${p.weight}</p>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${i})">Add</button>
      </div>
    `;
  });
}

/* =====================
   CART
===================== */

function addToCart(index) {
  cart.push(products[index]);
  renderCart();
}

function renderCart() {
  const cartDiv = document.getElementById("cart-items");
  const totalSpan = document.getElementById("cart-total");

  cartDiv.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    cartDiv.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
    total += item.price;
  });

  totalSpan.innerText = total;
}

/* =====================
   CHECKOUT
===================== */

function checkoutWhatsApp() {

  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  let total = cart.reduce((sum, i) => sum + i.price, 0);

  if (total < 399) {
    alert("Minimum order ₹399");
    return;
  }

  const coupon = document.getElementById("coupon-code")?.value
    .trim()
    .toUpperCase();

  let discount = 0;
  let discountText = "";

  const used = localStorage.getItem("vegx_coupon_used");

  /* =====================
     COUPON LOGIC
  ===================== */

  if (coupon) {

    if (coupon !== VALID_COUPON) {
      alert("Invalid Coupon Code ❌");
      return;
    }

    if (used === "yes") {
      alert("Coupon Already Used ❌");
      return;
    }

    // ✅ Apply Coupon
    discount = COUPON_DISCOUNT;
    discountText = `🎁 Coupon Discount: -₹${discount}`;

    localStorage.setItem("vegx_coupon_used", "yes");

  } else {

    // ✅ Only if NO coupon → 10%
    discount = Math.round(total * 0.10);
    discountText = `🎉 10% Discount: -₹${discount}`;
  }

  let finalAmount = total - discount;
  if (finalAmount < 0) finalAmount = 0;

  /* ===================== */

  const name = document.getElementById("customer-name").value.trim();
  const mobile = document.getElementById("customer-mobile").value.trim();
  const address = document.getElementById("customer-address").value.trim();

  if (!name || !mobile || !address) {
    alert("Fill all details");
    return;
  }

  /* ===================== */

  let msg = `🛒 *VegX Order*\n\n`;

  msg += `👤 ${name}\n`;
  msg += `📞 ${mobile}\n`;
  msg += `📍 ${address}\n\n`;

  msg += `🧾 Items:\n`;

  cart.forEach(i => {
    msg += `- ${i.name} : ₹${i.price}\n`;
  });

  msg += `\nSubtotal: ₹${total}\n`;
  msg += `${discountText}\n`;
  msg += `Final: ₹${finalAmount}\n\n`;

  msg += `🚚 Delivery: Next Day\n`;
  msg += `💳 COD / UPI\n`;

  const number = "917208487215";

  window.open(
    `https://wa.me/${number}?text=${encodeURIComponent(msg)}`,
    "_blank"
  );
}

/* =====================
   INIT
===================== */

renderProducts();
