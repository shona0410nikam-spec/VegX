
const products = [
  { name:"Potato", desc:"Fresh Potato 1kg", price:30, img:"potato.png" },
  { name:"Onion", desc:"Fresh Onion 1kg", price:35, img:"onion.png" },
  { name:"Tomato", desc:"Fresh Tomato 1kg", price:40, img:"tomato.png" },
  { name:"Carrot", desc:"Fresh Carrot", price:50, img:"carrot.png" },
  { name:"Cabbage", desc:"Fresh Cabbage", price:30, img:"cabbage.png" },
  { name:"Capsicum", desc:"Fresh Capsicum", price:60, img:"capsicum.png" },
  { name:"Cauliflower", desc:"Cleaned Cauliflower", price:45, img:"cauliflower.png" },
  { name:"French Bean", desc:"Fresh Beans", price:55, img:"french-beans.png" },
  { name:"Green Peas", desc:"Fresh Peas", price:70, img:"green-peas.png" },
  { name:"Coconut", desc:"Fresh Coconut", price:40, img:"fresh-coconut.png" },
];

let cartTotal = 0;

const list = document.getElementById("product-list");
const totalSpan = document.getElementById("cart-total");

products.forEach(p => {
  let qty = 0;

  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <img src="images/${p.img}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>${p.desc}</p>
    <strong>₹${p.price}</strong>

    <div class="qty">
      <button>-</button>
      <span>0</span>
      <button>+</button>
    </div>
  `;

  const [minus, span, plus] = card.querySelectorAll("button, span");

  plus.onclick = () => {
    qty++;
    span.textContent = qty;
    cartTotal += p.price;
    totalSpan.textContent = cartTotal;
  };

  minus.onclick = () => {
    if(qty > 0){
      qty--;
      span.textContent = qty;
      cartTotal -= p.price;
      totalSpan.textContent = cartTotal;
    }
  };

  list.appendChild(card);
});

// WhatsApp Checkout
document.getElementById("checkout").onclick = () => {
  const name = document.getElementById("cust-name").value;
  const mobile = document.getElementById("cust-mobile").value;
  const address = document.getElementById("cust-address").value;

  const msg = `Order from VegX%0AName: ${name}%0AMobile: ${mobile}%0AAddress: ${address}%0ATotal: ₹${cartTotal}`;

  window.open(`https://wa.me/917208487215?text=${msg}`, "_blank");
};
