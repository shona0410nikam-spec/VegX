const products = [
  { name: "Potato", price: 40, image: "images/potato.png" },
  { name: "Onion", price: 40, image: "images/onion.png" },
  { name: "Tomato", price: 30, image: "images/tomato.png" },
  { name: "Lemon", price: 20, image: "images/lemon.png" },
  { name: "Methi", price: 60, image: "images/methi.png" },
  { name: "Pudina", price: 20, image: "images/pudina.png" },
  { name: "Palak", price: 60, image: "images/palak.png" },
  { name: "Coriander", price: 20, image: "images/coriander.png" },
  { name: "Drumstick", price: 60, image: "images/drumstick.png" },
  { name: "French Beans", price: 60, image: "images/frenchbeans.png" },
  { name: "Capsicum", price: 60, image: "images/capsicum.png" },
  { name: "Red Pumpkin", price: 60, image: "images/pumpkin.png" },
  { name: "Sponge Gourd", price: 60, image: "images/spongegourd.png" },
  { name: "Ridge Gourd", price: 60, image: "images/ridgegourd.png" },
  { name: "Carrot", price: 50, image: "images/carrot.png" },
  { name: "Bottle Gourd", price: 60, image: "images/bottlegourd.png" },
  { name: "Bitter Gourd", price: 60, image: "images/bittergourd.png" },
  { name: "Cauliflower", price: 60, image: "images/cauliflower.png" },
  { name: "Lady Finger", price: 50, image: "images/ladyfinger.png" },
  { name: "Cluster Beans", price: 60, image: "images/clusterbeans.png" },
  { name: "Green Peas", price: 60, image: "images/greenpeas.png" },
  { name: "Mixed Pulav Vegetables", price: 60, image: "images/mixedveg.png" },
  { name: "Fresh Coconut (Grated)", price: 60, image: "images/coconut.png" },
  { name: "Green Chilli", price: 20, image: "images/chilli.png" },
  { name: "Garlic", price: 30, image: "images/garlic.png" }
];

let cart = [];

// ✅ Render products
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

// ✅ Add to cart
function addToCart(index) {
  cart.push(products[index]);
  renderCart();
}

// ✅ Render cart
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

// ✅ WhatsApp checkout FIXED
function checkoutWhatsApp() {
  let total = cart.reduce((sum, p) => sum + p.price, 0);

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

  const phone = "917208487215"; // तुमचा नंबर
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

  // 🔥 MAIN FIX
  window.location.href = url;
}

// ✅ VERY IMPORTANT
renderProducts();
