const whatsappNumber = "917208487215";
const MIN_ORDER = 399;

const products = [
  { name:"Drumstick", price:60, desc:"cleaned & chopped drumstick weight 300gm ₹60", img:"images/cleaned-chopped-drumstick.png" },
  { name:"Potato", price:40, desc:"potato weight 1kg ₹40", img:"images/potato.png" },
  { name:"Onion", price:40, desc:"onion weight 1kg ₹40", img:"images/onion.png" },
  { name:"Tomato", price:30, desc:"tomato weight 500gm ₹30", img:"images/tomato.png" },
  { name:"Lemon", price:20, desc:"lemon 3pc ₹20", img:"images/lemon.png" },
  { name:"Methi", price:60, desc:"cleaned methi weight 300gm ₹60", img:"images/methi.png" },
  { name:"French Beans", price:60, desc:"cleaned & chopped french beans weight 300gm ₹60", img:"images/french-beans.png" },
  { name:"Mixed Pulav Vegetables", price:60, desc:"mixed pulav vegetables weight 300gm ₹60", img:"images/mixed-pulav-vegetables.png" },
  { name:"Pudina", price:20, desc:"cleaned pudina weight 300gm ₹20", img:"images/pudina.png" },
  { name:"Palak", price:60, desc:"cleaned palak weight 200gm ₹60", img:"images/palak.png" },
  { name:"Coriander", price:20, desc:"cleaned coriander weight 100gm ₹20", img:"images/coriander.png" },
  { name:"Capsicum Green", price:60, desc:"cleaned & chopped capsicum green weight 300gm ₹60", img:"images/capsicum.png" },
  { name:"Red Pumpkin", price:60, desc:"cleaned and cut red pumpkin weight 300gm ₹60", img:"images/red-pumpkin.png" },
  { name:"Sponge Gourd", price:60, desc:"cleaned & cut sponge gourd weight 300gm ₹60", img:"images/sponge-gourd.png" },
  { name:"Ridge Gourd", price:60, desc:"cleaned & chopped ridge gourd weight 300gm ₹60", img:"images/ridge-gourd.png" },
  { name:"Green Peas", price:60, desc:"cleaned & shelled green peas weight 300gm ₹60", img:"images/green-peas.png" },
  { name:"Carrot", price:50, desc:"cleaned & chopped carrot weight 300gm ₹50", img:"images/carrot.png" },
  { name:"Bottle Gourd", price:60, desc:"cleaned & chopped bottle gourd weight 300gm ₹60", img:"images/bottle-gourd.png" },
  { name:"Bitter Gourd", price:60, desc:"cleaned & chopped bitter gourd weight 300gm ₹60", img:"images/bitter-gourd.png" },
  { name:"Cauliflower", price:60, desc:"cleaned & chopped cauliflower weight 300gm ₹60", img:"images/cauliflower.png" },
  { name:"Lady Finger", price:50, desc:"cleaned & chopped lady finger weight 300gm ₹50", img:"images/lady-finger.png" },
  { name:"Cluster Beans", price:60, desc:"cleaned & chopped cluster beans weight 300gm ₹60", img:"images/cluster-beans.png" },
  { name:"Fresh Coconut Grated", price:60, desc:"fresh coconut grated 200gm ₹60", img:"images/fresh-coconut.png" },
  { name:"Green Chilli", price:20, desc:"green chilli weight 100gm ₹20", img:"images/green-chilli.png" },
  { name:"Peeled Garlic", price:30, desc:"peeled garlic weight 100gm ₹30", img:"images/peeled-garlic.png" }
];

let cart = {};

function renderProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";
  products.forEach((p, i) => {
    cart[i] = 0;
    container.innerHTML += `
      <div class="product">
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="qty">
          <button onclick="changeQty(${i},-1)">-</button>
          <span id="qty${i}">0</span>
          <button onclick="changeQty(${i},1)">+</button>
        </div>
      </div>
    `;
  });
}

function changeQty(index, delta) {
  cart[index] = Math.max(0, cart[index] + delta);
  document.getElementById("qty" + index).innerText = cart[index];
  updateTotal();
}

function updateTotal() {
  let total = 0;
  products.forEach((p, i) => {
    total += p.price * cart[i];
  });
  document.getElementById("cartTotal").innerText = total;
}

function checkout() {
  const total = Number(document.getElementById("cartTotal").innerText);

  if (total < MIN_ORDER) {
    alert("Minimum order ₹399 required");
    return;
  }

  const name = document.getElementById("customerName").value.trim();
  const mobile = document.getElementById("customerMobile").value.trim();
  const address = document.getElementById("customerAddress").value.trim();
  const slot = document.getElementById("deliverySlot").value;

  if (!name || !mobile || !address) {
    alert("Please fill all customer details");
    return;
  }

  let message = `VegX Order\n\nName: ${name}\nMobile: ${mobile}\nAddress: ${address}\nSlot: ${slot}\n\nItems:\n`;

  products.forEach((p, i) => {
    if (cart[i] > 0) {
      message += `${p.name} x ${cart[i]} = ₹${p.price * cart[i]}\n`;
    }
  });

  message += `\nTotal: ₹${total}`;

  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}

document.addEventListener("DOMContentLoaded", renderProducts);
