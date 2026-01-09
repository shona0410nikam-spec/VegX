const productsData = [
  { id: 1, name: "Tomato", price: 40, img: "images/tomato.png" },
  { id: 2, name: "Potato", price: 30, img: "images/potato.png" },
  { id: 3, name: "Onion", price: 35, img: "images/onion.png" },
  { id: 4, name: "Cabbage", price: 25, img: "images/cabbage.png" }
];

let cart = {};

function loadProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";

  productsData.forEach(p => {
    cart[p.id] = 0;

    container.innerHTML += `
      <div class="product">
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>₹ ${p.price} / kg</p>

        <div class="qty">
          <button onclick="updateQty(${p.id}, -1)">-</button>
          <span id="qty-${p.id}">0</span>
          <button onclick="updateQty(${p.id}, 1)">+</button>
        </div>
      </div>
    `;
  });
}

function updateQty(id, change) {
  cart[id] = Math.max(0, cart[id] + change);
  document.getElementById(`qty-${id}`).innerText = cart[id];
  updateTotal();
}

function updateTotal() {
  let total = 0;

  productsData.forEach(p => {
    total += cart[p.id] * p.price;
  });

  document.getElementById("cartTotal").innerText = total;
}

function checkout() {
  const name = document.getElementById("customerName").value;
  const mobile = document.getElementById("customerMobile").value;
  const address = document.getElementById("customerAddress").value;
  const slot = document.getElementById("deliverySlot").value;

  let total = 0;
  let orderText = "";

  productsData.forEach(p => {
    if (cart[p.id] > 0) {
      orderText += `${p.name} x ${cart[p.id]} kg\n`;
      total += cart[p.id] * p.price;
    }
  });

  if (total < 399) {
    alert("Minimum order ₹399 आहे");
    return;
  }

  const message =
`New VegX Order
Name: ${name}
Mobile: ${mobile}
Address: ${address}

Order:
${orderText}

Delivery Slot: ${slot}
Total: ₹${total}`;

  const whatsappUrl =
    "https://wa.me/917208487215?text=" + encodeURIComponent(message);

  window.open(whatsappUrl, "_blank");
}

loadProducts();
