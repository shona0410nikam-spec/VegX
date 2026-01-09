const products = [
  { name: "Potato", weight: "1kg", price: 40, image: "images/potato.png" },
  { name: "Onion", weight: "1kg", price: 40, image: "images/onion.png" },
  { name: "Tomato", weight: "500gm", price: 30, image: "images/tomato.png" },
  { name: "Lemon", weight: "3 pc", price: 20, image: "images/lemon.png" },

  { name: "Methi", weight: "300gm (cleaned)", price: 60, image: "images/methi.png" },
  { name: "Pudina", weight: "300gm (cleaned)", price: 20, image: "images/pudina.png" },
  { name: "Palak", weight: "200gm (cleaned)", price: 60, image: "images/palak.png" },
  { name: "Coriander", weight: "100gm (cleaned)", price: 20, image: "images/coriander.png" },

  { name: "Drumstick", weight: "300gm (cleaned & chopped)", price: 60, image: "images/drumstick.png" },
  { name: "French Beans", weight: "300gm (cleaned & chopped)", price: 60, image: "images/frenchbeans.png" },
  { name: "Capsicum Green", weight: "300gm (cleaned & chopped)", price: 60, image: "images/capsicum.png" },
  { name: "Carrot", weight: "300gm (cleaned & chopped)", price: 50, image: "images/carrot.png" }
];

let cart = [];

const list = document.getElementById("product-list");

products.forEach((p, i) => {
  list.innerHTML += `
    <div class="product">
      <div class="product-left">
        <h4>${p.name}</h4>
        <small>${p.weight}</small>
        <div class="price">₹${p.price}</div>
      </div>

      <div class="product-right">
        <img src="${p.image}">
        <div id="box-${i}">
          <button class="add-btn" onclick="addItem(${i})">ADD</button>
        </div>
      </div>
    </div>
  `;
});

function addItem(i) {
  cart.push({ ...products[i], qty: 1 });
  document.getElementById(`box-${i}`).innerHTML = `
    <div class="qty-box">
      <button onclick="changeQty(${i}, -1)">-</button>
      <span id="qty-${i}">1</span>
      <button onclick="changeQty(${i}, 1)">+</button>
    </div>
  `;
  updateTotal();
}

function changeQty(i, change) {
  const item = cart.find(x => x.name === products[i].name);
  item.qty += change;
  if (item.qty <= 0) {
    cart = cart.filter(x => x.name !== item.name);
    document.getElementById(`box-${i}`).innerHTML =
      `<button class="add-btn" onclick="addItem(${i})">ADD</button>`;
  } else {
    document.getElementById(`qty-${i}`).innerText = item.qty;
  }
  updateTotal();
}

function updateTotal() {
  let total = cart.reduce((s, x) => s + x.price * x.qty, 0);
  document.getElementById("cart-total").innerText = total;
}

function checkoutWhatsApp() {
  const name = document.getElementById("name").value;
  const mobile = document.getElementById("mobile").value;
  const address = document.getElementById("address").value;

  let total = cart.reduce((s, x) => s + x.price * x.qty, 0);
  if (!name || !mobile || !address) {
    alert("Please fill customer details");
    return;
  }
  if (total < 399) {
    alert("Minimum order ₹399");
    return;
  }

  let msg = `VegX Order\nName: ${name}\nMobile: ${mobile}\nAddress: ${address}\n\nOrder:\n`;
  cart.forEach(x => {
    msg += `${x.name} (${x.weight}) x ${x.qty}\n`;
  });
  msg += `\nTotal: ₹${total}`;

  window.open(`https://wa.me/917208482715?text=${encodeURIComponent(msg)}`);
}
