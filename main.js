const products = [
  { name: "Potato", price: 40, image: "images/potato.png" },
  { name: "Onion", price: 40, image: "images/onion.png" },
  { name: "Tomato", price: 30, image: "images/tomato.png" },
  { name: "Lemon", price: 20, image: "images/lemon.png" },

  { name: "Methi", price: 60, image: "images/methi.png" },
  { name: "Pudina", price: 20, image: "images/pudina.png" },
  { name: "Palak", price: 60, image: "images/palak.png" },
  { name: "Coriander", price: 20, image: "images/coriander.png" },

  { name: "Drumstick", price: 60, image: "images/cleaned-chopped-drumstick.png" },
  { name: "French Beans", price: 60, image: "images/french-beans.png" },
  { name: "Capsicum", price: 60, image: "images/capsicum.png" },
  { name: "Red Pumpkin", price: 60, image: "images/red-pumpkin.png" },
  { name: "Sponge Gourd", price: 60, image: "images/sponge-gourd.png" },
  { name: "Ridge Gourd", price: 60, image: "images/ridge-gourd.png" },
  { name: "Carrot", price: 50, image: "images/carrot.png" },
  { name: "Bottle Gourd", price: 60, image: "images/bottle-gourd.png" },
  { name: "Bitter Gourd", price: 60, image: "images/bitter-gourd.png" },
  { name: "Cauliflower", price: 60, image: "images/cauliflower.png" },
  { name: "Lady Finger", price: 50, image: "images/lady-finger.png" },
  { name: "Cluster Beans", price: 60, image: "images/cluster-beans.png" },

  { name: "Green Peas", price: 60, image: "images/green-peas.png" },
  { name: "Mixed Pulav Vegetables", price: 60, image: "images/mixed-pulav-vegetables.png" },
  { name: "Fresh Coconut (Grated)", price: 60, image: "images/fresh-coconut.png" },
  { name: "Green Chilli", price: 20, image: "images/green-chilli.png" },
  { name: "Garlic", price: 30, image: "images/peeled-garlic.png" }
];

let cart = [];

/* =====================
   RENDER PRODUCTS
===================== */
function renderProducts() {
  const list = document.getElementById("product-list");
  list.innerHTML = "";

  products.forEach((p, i) => {
    list.innerHTML += `
      <div class="product">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
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
   WHATSAPP CHECKOUT
===================== */
function checkoutWhatsApp() {
  const total = cart.reduce((sum, p) => sum + p.price, 0);

  if (total < 399) {
    alert("Minimum order ₹399");
    return;
  }

  const name = document.getElementById("customer-name").value.trim();
  const mobile = document.getElementById("customer-mobile").value.trim();
  const address = document.getElementById("customer-address").value.trim();

  if (!name || !mobile || !address) {
    alert("Please fill all details");
    return;
  }

  let msg = `VegX Order\n\n`;
  msg += `Name: ${name}\n`;
  msg += `Mobile: ${mobile}\n`;
  msg += `Address: ${address}\n\nItems:\n`;

  cart.forEach(p => {
    msg += `${p.name} - ₹${p.price}\n`;
  });

  msg += `\nTotal: ₹${total}`;

  const phone = "917208487215";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

  window.location.href = url;
}

/* =====================
   INIT
===================== */
renderProducts();
