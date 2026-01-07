const products = [
  {name:"Potato", price:30, img:"images/potato.png"},
  {name:"Onion", price:35, img:"images/onion.png"},
  {name:"Tomato", price:40, img:"images/tomato.png"},
  {name:"Carrot", price:50, img:"images/carrot.png"},
  {name:"Cabbage", price:30, img:"images/cabbage.png"},
  {name:"Capsicum", price:60, img:"images/capsicum.png"},
  {name:"Cauliflower", price:45, img:"images/cauliflower.png"},
  {name:"French Beans", price:55, img:"images/french-beans.png"},
  {name:"Green Peas", price:70, img:"images/green-peas.png"},
  {name:"Fresh Coconut", price:40, img:"images/fresh-coconut.png"},

  {name:"Pulav Mix", price:80, img:"images/mixed-pulav-vegetables.png"},
  {name:"Drumstick", price:60, img:"images/cleaned-chopped-drumstick.png"},
  {name:"Pumpkin", price:30, img:"images/red-pumpkin.png"},
  {name:"Bitter Gourd", price:45, img:"images/bitter-gourd.png"},
  {name:"Bottle Gourd", price:35, img:"images/bottle-gourd.png"},
  {name:"Ridge Gourd", price:35, img:"images/ridge-gourd.png"},
  {name:"Sponge Gourd", price:35, img:"images/sponge-gourd.png"},
  {name:"Lady Finger", price:40, img:"images/lady-finger.png"},
  {name:"Cluster Beans", price:45, img:"images/cluster-beans.png"},
  {name:"Peeled Garlic", price:120, img:"images/peeled-garlic.png"},

  {name:"Ginger", price:80, img:"images/ginger.png"},
  {name:"Green Chilli", price:40, img:"images/green-chilli.png"},
  {name:"Coriander", price:20, img:"images/coriander.png"},
  {name:"Mint", price:20, img:"images/pudina.png"},
  {name:"Spinach", price:25, img:"images/palak.png"}
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
  const name = document.getElementById("customerName").value.trim();
  const mobile = document.getElementById("customerMobile").value.trim();
  const address = document.getElementById("customerAddress").value.trim();
  const total = Number(document.getElementById("cartTotal").innerText);

  if (!name || !mobile || !address) {
    alert("Please fill all customer details");
    return;
  }

  if (total < 399) {
    alert("Minimum order value is ₹399");
    return;
  }

  let msg = `VegX Order%0AName: ${name}%0AMobile: ${mobile}%0AAddress: ${address}%0A%0AOrder:%0A`;

  for (let i in cart) {
    if (cart[i] > 0) {
      msg += `${products[i].name} x ${cart[i]}%0A`;
    }
  }

  msg += `%0ATotal: ₹${total}`;

  window.open(`https://wa.me/917208487215?text=${msg}`, "_blank");
}
