const products = [
  { name: "Potato", weight: "1kg", price: 40, image: "images/potato.png" },
  { name: "Onion", weight: "1kg", price: 40, image: "images/onion.png" },
  { name: "Tomato", weight: "500gm", price: 30, image: "images/tomato.png" },
  { name: "Lemon", weight: "3 pc", price: 20, image: "images/lemon.png" },

  { name: "Methi", weight: "300gm (cleaned)", price: 60, image: "images/methi.png" },
  { name: "Pudina", weight: "300gm (cleaned)", price: 20, image: "images/pudina.png" },
  { name: "Palak", weight: "200gm (cleaned)", price: 60, image: "images/palak.png" },
  { name: "Coriander", weight: "100gm (cleaned)", price: 20, image: "images/coriander.png" },

  { name: "Drumstick", weight: "300gm (cleaned & chopped)", price: 60, image: "images/cleaned-chopped-drumstick.png" },
  { name: "French Beans", weight: "300gm (cleaned & chopped)", price: 60, image: "images/frenchbeans.png" },
  { name: "Capsicum Green", weight: "300gm (cleaned & chopped)", price: 60, image: "images/capsicum.png" },
  { name: "Red Pumpkin", weight: "300gm (cleaned & cut)", price: 60, image: "images/red-pumpkin.png" },
  { name: "Sponge Gourd", weight: "300gm (cleaned & cut)", price: 60, image: "images/sponge-gourd.png" },
  { name: "Ridge Gourd", weight: "300gm (cleaned & chopped)", price: 60, image: "images/ridge-gourd.png" },
  { name: "Carrot", weight: "300gm (cleaned & chopped)", price: 50, image: "images/carrot.png" },
  { name: "Bottle Gourd", weight: "300gm (cleaned & chopped)", price: 60, image: "images/bottle-gourd.png" },
  { name: "Bitter Gourd", weight: "300gm (cleaned & chopped)", price: 60, image: "images/bitter-gourd.png" },
  { name: "Cauliflower", weight: "300gm (cleaned & chopped)", price: 60, image: "images/cauliflower.png" },
  { name: "Lady Finger", weight: "300gm (cleaned & chopped)", price: 50, image: "images/lady-finger.png" },
  { name: "Cluster Beans", weight: "300gm (cleaned & chopped)", price: 60, image: "images/cluster-beans.png" },

  { name: "Green Peas", weight: "300gm (shelled)", price: 60, image: "images/green-peas.png" },
  { name: "Mixed Pulav Vegetables", weight: "300gm", price: 60, image: "images/mixed-pulav-vegetables.png" },
  { name: "Fresh Coconut (Grated)", weight: "200gm", price: 60, image: "images/fresh-coconut.png" },
  { name: "Green Chilli", weight: "100gm", price: 20, image: "images/green-chilli.png" },
  { name: "Garlic (Peeled)", weight: "100gm", price: 30, image: "images/peeled-garlic.png" }
];

let cart = [];

const productsDiv = document.getElementById("products");

products.forEach((p, i) => {
  productsDiv.innerHTML += `
    <div class="product">
      <img src="${p.image}" alt="${p.name}">
      <h4>${p.name}</h4>
      <small>${p.weight}</small>
      <p>₹${p.price}</p>
      <div class="qty-box">
        <button onclick="updateQty(${i}, -1)">-</button>
        <span id="qty-${i}">0</span>
        <button onclick="updateQty(${i}, 1)">+</button>
      </div>
    </div>
  `;
});

function updateQty(i, change) {
  let qtyEl = document.getElementById(`qty-${i}`);
  let qty = parseInt(qtyEl.innerText) + change;
  if (qty < 0) qty = 0;
  qtyEl.innerText = qty;

  let item = cart.find(x => x.name === products[i].name);
  if (item) {
    item.qty = qty;
    if (qty === 0) cart = cart.filter(x => x.qty > 0);
  } else if (qty > 0) {
    cart.push({ ...products[i], qty });
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

  if (!name || !mobile || !address) {
    alert("Please fill customer details");
    return;
  }

  let total = cart.reduce((s, x) => s + x.price * x.qty, 0);
  if (total < 399) {
    alert("Minimum order ₹399");
    return;
  }

  let msg = `VegX Order\nName: ${name}\nMobile: ${mobile}\nAddress: ${address}\n\nOrder:\n`;
  cart.forEach(x => {
    msg += `${x.name} (${x.weight}) x ${x.qty}\n`;
  });
  msg += `\nTotal: ₹${total}`;

  window.open(`https://wa.me/917208487215?text=${encodeURIComponent(msg)}`, "_blank");
}
