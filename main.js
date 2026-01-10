const products = [
  { name:"Potato", price:40 },
  { name:"Onion", price:40 },
  { name:"Tomato", price:30 },
  { name:"Lemon", price:20 },

  { name:"Methi", price:60 },
  { name:"Pudina", price:20 },
  { name:"Palak", price:60 },
  { name:"Coriander", price:20 },

  { name:"Drumstick", price:60 },
  { name:"French Beans", price:60 },
  { name:"Capsicum", price:60 },
  { name:"Red Pumpkin", price:60 },
  { name:"Sponge Gourd", price:60 },
  { name:"Ridge Gourd", price:60 },
  { name:"Carrot", price:50 },
  { name:"Bottle Gourd", price:60 },
  { name:"Bitter Gourd", price:60 },
  { name:"Cauliflower", price:60 },
  { name:"Lady Finger", price:50 },
  { name:"Cluster Beans", price:60 },

  { name:"Green Peas", price:60 },
  { name:"Mixed Pulav Vegetables", price:60 },
  { name:"Fresh Coconut (Grated)", price:60 },
  { name:"Green Chilli", price:20 },
  { name:"Garlic", price:30 }
];

let cart = [];

function renderProducts(){
  const list = document.getElementById("product-list");
  list.innerHTML = "";

  products.forEach((p, i) => {
    list.innerHTML += `
      <div class="product">
        <h3>${p.name}</h3>
        <p><strong>₹${p.price}</strong></p>
        <button onclick="addToCart(${i})">Add</button>
      </div>
    `;
  });
}

function addToCart(index){
  cart.push(products[index]);
  renderCart();
}

function renderCart(){
  const cartDiv = document.getElementById("cart-items");
  const totalSpan = document.getElementById("cart-total");

  cartDiv.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    cartDiv.innerHTML += `<p>${item.name} – ₹${item.price}</p>`;
    total += item.price;
  });

  totalSpan.innerText = total;
}

function checkoutWhatsApp(){

  let total = cart.reduce((sum, p) => sum + p.price, 0);

  if(total < 399){
    alert("Minimum order ₹399");
    return;
  }

  const name = document.getElementById("customer-name").value.trim();
  const mobile = document.getElementById("customer-mobile").value.trim();
  const address = document.getElementById("customer-address").value.trim();

  if(!name || !mobile || !address){
    alert("Please fill all details");
    return;
  }

  let msg = `VegX Order\n`;
  msg += `Name: ${name}\n`;
  msg += `Mobile: ${mobile}\n`;
  msg += `Address: ${address}\n\n`;
  msg += `Items:\n`;

  cart.forEach(p => {
    msg += `${p.name} - ₹${p.price}\n`;
  });

  msg += `\nTotal: ₹${total}`;

  const phone = "917208487215";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

  window.open(url, "_blank");
}

renderProducts();
