const products = [

  // 🥔 Normal Vegetables
  { name: "Potato", price: 40, img: "images/potato.png" },
  { name: "Onion", price: 40, img: "images/onion.png" },
  { name: "Tomato", price: 30, img: "images/tomato.png" },
  { name: "Lemon", price: 20, img: "images/lemon.png" },

  // 🌿 Leafy Vegetables (cleaned only)
  { name: "Methi (cleaned)", price: 60, img: "images/methi.png" },
  { name: "Pudina (cleaned)", price: 20, img: "images/pudina.png" },
  { name: "Palak (cleaned)", price: 60, img: "images/palak.png" },
  { name: "Coriander (cleaned)", price: 20, img: "images/coriander.png" },

  // 🥕 Cleaned & Chopped Vegetables
  { name: "Drumstick (cleaned & chopped)", price: 60, img: "images/cleaned-chopped-drumstick.png" },
  { name: "French Beans (cleaned & chopped)", price: 60, img: "images/frenchbeans.png" },
  { name: "Capsicum Green (cleaned & chopped)", price: 60, img: "images/capsicum.png" },
  { name: "Red Pumpkin (cleaned & cut)", price: 60, img: "images/red-pumpkin.png" },
  { name: "Sponge Gourd (cleaned & cut)", price: 60, img: "images/sponge-gourd.png" },
  { name: "Ridge Gourd (cleaned & chopped)", price: 60, img: "images/ridge-gourd.png" },
  { name: "Carrot (cleaned & chopped)", price: 50, img: "images/carrot.png" },
  { name: "Bottle Gourd (cleaned & chopped)", price: 60, img: "images/bottle-gourd.png" },
  { name: "Bitter Gourd (cleaned & chopped)", price: 60, img: "images/bitter-gourd.png" },
  { name: "Cauliflower (cleaned & chopped)", price: 60, img: "images/cauliflower.png" },
  { name: "Lady Finger (cleaned & chopped)", price: 50, img: "images/lady-finger.png" },
  { name: "Cluster Beans (cleaned & chopped)", price: 60, img: "images/cluster-beans.png" },

  // 🌱 Special
  { name: "Green Peas (cleaned & shelled)", price: 60, img: "images/green-peas.png" },
  { name: "Mixed Pulav Vegetables", price: 60, img: "images/mixed-pulav-vegetables.png" },
  { name: "Fresh Coconut (grated)", price: 60, img: "images/fresh-coconut.png" },
  { name: "Green Chilli", price: 20, img: "images/green-chilli.png" },
  { name: "Garlic (peeled)", price: 30, img: "images/peeled-garlic.png" }

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
        <button onclick="changeQty(${i}, -1)">−</button>
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
