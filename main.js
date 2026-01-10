const products = [
  {name:"Potato", desc:"Fresh", weight:"1kg", price:40, image:"potato.png"},
  {name:"Onion", desc:"Fresh", weight:"1kg", price:40, image:"onion.png"},
  {name:"Tomato", desc:"Fresh", weight:"500gm", price:30, image:"tomato.png"},
  {name:"Lemon", desc:"Fresh", weight:"3 pc", price:20, image:"lemon.png"},
  {name:"Methi", desc:"Cleaned", weight:"300gm", price:60, image:"methi.png"},
  {name:"Pudina", desc:"Cleaned", weight:"300gm", price:20, image:"pudina.png"},
  {name:"Palak", desc:"Cleaned", weight:"200gm", price:60, image:"palak.png"},
  {name:"Coriander", desc:"Cleaned", weight:"100gm", price:20, image:"coriander.png"},
  {name:"Drumstick", desc:"Cleaned & Chopped", weight:"300gm", price:60, image:"cleaned-chopped-drumstick.png"},
  {name:"French Beans", desc:"Cleaned & Chopped", weight:"300gm", price:60, image:"french-beans.png"},
  {name:"Capsicum", desc:"Cleaned & Chopped", weight:"300gm", price:60, image:"capsicum.png"},
  {name:"Carrot", desc:"Cleaned & Chopped", weight:"300gm", price:50, image:"carrot.png"},
  {name:"Cauliflower", desc:"Cleaned & Chopped", weight:"300gm", price:60, image:"cauliflower.png"}
];

let cart = [];

function renderProducts(){
  const list = document.getElementById("product-list");
  list.innerHTML = "";
  products.forEach((p,i)=>{
    list.innerHTML += `
      <div class="product">
        <img src="images/${p.image}">
        <h3>${p.name}</h3>
        <p>${p.desc} • ${p.weight}</p>
        <p><strong>₹${p.price}</strong></p>
        <button onclick="addToCart(${i})">Add</button>
      </div>
    `;
  });
}

function addToCart(i){
  cart.push(products[i]);
  renderCart();
}

function renderCart(){
  let total = 0;
  const div = document.getElementById("cart-items");
  div.innerHTML = "";
  cart.forEach(p=>{
    total += p.price;
    div.innerHTML += `<p>${p.name} – ₹${p.price}</p>`;
  });
  document.getElementById("cart-total").innerText = total;
}

function checkoutWhatsApp(){
  let total = cart.reduce((s,p)=>s+p.price,0);
  if(total < 399){ alert("Minimum order ₹399"); return; }

  const name = customer-name.value;
  const mobile = customer-mobile.value;
  const address = customer-address.value;

  let msg = `VegX Order\nName: ${name}\nMobile: ${mobile}\nAddress: ${address}\n\n`;
  cart.forEach(p=> msg += `${p.name} - ₹${p.price}\n`);
  msg += `\nTotal: ₹${total}`;

  window.open(`https://wa.me/917208487215?text=${encodeURIComponent(msg)}`);
}

renderProducts();
