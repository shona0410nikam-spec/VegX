const productsData = [
  {
    id: 1,
    name: "Onion",
    desc: "Cleaned & Chopped",
    price: 35,
    img: "images/onion.png"
  },
  {
    id: 2,
    name: "Potato",
    desc: "Cleaned & Chopped",
    price: 30,
    img: "images/potato.png"
  },
  {
    id: 3,
    name: "Tomato",
    desc: "Cleaned & Chopped",
    price: 40,
    img: "images/tomato.png"
  },
  {
    id: 4,
    name: "Cabbage",
    desc: "Cleaned & Chopped",
    price: 25,
    img: "images/cabbage.png"
  }
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
        <div class="desc">${p.desc}</div>
        <p>₹ ${p.price} / kg</p>

        <div class="qty">
          <button onclick="updateQty(${p.id}, -1)">−</button>
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
  const name = customerName.value;
  const mobile = customerMobile.value;
  const address = customerAddress.value;
  const slot = deliverySlot.value;

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
`VegX Order
Name: ${name}
Mobile: ${mobile}
Address: ${address}

${orderText}
Delivery Slot: ${slot}
Total: ₹${total}`;

  window.open(
    "https://wa.me/91XXXXXXXXXX?text=" + encodeURIComponent(message),
    "_blank"
  );
}

loadProducts();
