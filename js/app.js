const products = [
  {name:"Potato", price:30, img:"images/potato.png"},
  {name:"Onion", price:35, img:"images/onion.png"},
  {name:"Tomato", price:40, img:"images/tomato.png"},
  {name:"Carrot", price:50, img:"images/carrot.png"},
  {name:"Cabbage", price:30, img:"images/cabbage.png"},
  {name:"Capsicum", price:60, img:"images/capsicum.png"},
  {name:"Cauliflower", price:45, img:"images/cauliflower.png"},
  {name:"French Bean", price:55, img:"images/french-bean.png"},
  {name:"Green Peas", price:70, img:"images/green-peas.png"},
  {name:"Coconut", price:40, img:"images/coconut.png"},

  {name:"Pulav Mix", price:80, img:"images/pulav-mix.png"},
  {name:"Drumstick", price:60, img:"images/drumstick.png"},
  {name:"Grated Coconut", price:50, img:"images/grated-coconut.png"},
  {name:"Pumpkin", price:30, img:"images/pumpkin.png"},
  {name:"Bitter Gourd", price:45, img:"images/bitter-gourd.png"},
  {name:"Garlic", price:120, img:"images/garlic.png"},
  {name:"Ginger", price:80, img:"images/ginger.png"},
  {name:"Green Chilli", price:40, img:"images/green-chilli.png"},
  {name:"Coriander", price:20, img:"images/coriander.png"},
  {name:"Mint", price:20, img:"images/mint.png"},
  {name:"Beetroot", price:45, img:"images/beetroot.png"},
  {name:"Radish", price:30, img:"images/radish.png"},
  {name:"Lemon", price:10, img:"images/lemon.png"},
  {name:"Spinach", price:25, img:"images/spinach.png"},
  {name:"Brinjal", price:35, img:"images/brinjal.png"}
];

let cart = {};

const productsDiv = document.getElementById("products");

products.forEach((p, i) => {
  productsDiv.innerHTML += `
    <div class="product">
      <img src="${p.img}" alt="${p.name}">
      <h4>${p.name}</h4>
      <p>₹ ${p.price}</p>
      <div class="qty-box">
        <button onclick="changeQty(${i}, -1)">-</button>
        <span id="qty-${i}">0</span>
        <button onclick="changeQty(${i}, 1)">+</button>
      </div>
    </div>
  `;
});

function changeQty(i, delta) {
  cart[i] = (cart[i] || 0) + delta;
  if (cart[i] < 0) cart[i] = 0;
  document.getElementById(`qty-${i}`).innerText = cart[i];
  updateTotal();
}

function updateTotal() {
  let total = 0;
  for (let i in cart) {
    total += cart[i] * products[i].price;
  }
  document.getElementById("cartTotal").innerText = total;
}

function checkout() {
  const name = document.getElementById("customerName").value;
  const mobile = document.getElementById("customerMobile").value;
  const address = document.getElementById("customerAddress").value;
  const total = document.getElementById("cartTotal").innerText;

  if (!name || !mobile || !address) {
    alert("Please fill all customer details");
    return;
  }

  if (total < 399) {
    alert("Minimum order value is ₹399");
    return;
  }

  let message = `VegX Order\n\nName: ${name}\nMobile: ${mobile}\nAddress: ${address}\n\nOrder:\n`;

  for (let i in cart) {
    if (cart[i] > 0) {
      message += `${products[i].name} x ${cart[i]}\n`;
    }
  }

  message += `\nTotal: ₹${total}`;

  window.open(`https://wa.me/917208487215?text=${encodeURIComponent(message)}`);
}
