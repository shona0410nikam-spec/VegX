const products = [
  {name:"Drumstick", desc:"cleaned & chopped", weight:"300gm", price:60, image:"Drumstick.png"},
  {name:"Potato", desc:"", weight:"1kg", price:40, image:"Potato.png"},
  {name:"Onion", desc:"", weight:"1kg", price:40, image:"Onion.png"},
  {name:"Tomato", desc:"", weight:"500gm", price:30, image:"Tomato.png"},
  {name:"Lemon", desc:"", weight:"3pc", price:20, image:"Lemon.jpg"},
  {name:"Methi", desc:"cleaned", weight:"300gm", price:60, image:"Methi.png"},
  {name:"French Beans", desc:"cleaned & chopped", weight:"300gm", price:60, image:"FrenchBeans.jpg"},
  {name:"Mixed Pulav Vegetables", desc:"cleaned & chopped", weight:"300gm", price:60, image:"MixedPulavVegetables.png"},
  {name:"Pudina", desc:"cleaned", weight:"300gm", price:20, image:"Pudina.jpg"},
  {name:"Palak", desc:"cleaned", weight:"200gm", price:60, image:"Palak.png"},
  {name:"Coriander", desc:"cleaned", weight:"100gm", price:20, image:"Coriander.png"},
  {name:"Capsicum Green", desc:"cleaned & chopped", weight:"300gm", price:60, image:"CapsicumGreen.jpg"},
  {name:"Red Pumpkin", desc:"cleaned & cut", weight:"300gm", price:60, image:"RedPumpkin.png"},
  {name:"Sponge Gourd", desc:"cleaned & cut", weight:"300gm", price:60, image:"SpongeGourd.jpg"},
  {name:"Ridge Gourd", desc:"cleaned & chopped", weight:"300gm", price:60, image:"RidgeGourd.jpg"},
  {name:"Carrot", desc:"cleaned & chopped", weight:"300gm", price:50, image:"Carrot.png"},
  {name:"Bottle Gourd", desc:"cleaned & chopped", weight:"300gm", price:60, image:"BottleGourd.png"},
  {name:"Bitter Gourd", desc:"cleaned & chopped", weight:"300gm", price:60, image:"BitterGourd.png"},
  {name:"Cauliflower", desc:"cleaned & chopped", weight:"300gm", price:60, image:"Cauliflower.jpg"},
  {name:"Lady Finger", desc:"cleaned & chopped", weight:"300gm", price:50, image:"LadyFinger.jpg"},
  {name:"Cluster Beans", desc:"cleaned & chopped", weight:"300gm", price:60, image:"ClusterBeans.jpg"},
  {name:"Green Peas", desc:"cleaned & shelled", weight:"300gm", price:60, image:"GreenPeas.jpg"},
  {name:"Fresh Coconut Grated", desc:"", weight:"200gm", price:60, image:"FreshCoconutGrated.jpg"},
  {name:"Green Chilli", desc:"", weight:"100gm", price:20, image:"GreenChilli.png"},
  {name:"Peeled Garlic", desc:"peeled", weight:"100gm", price:30, image:"PeeledGarlic.png"}
];

let cart = [];

function renderProducts(){
  const list = document.getElementById('product-list');
  list.innerHTML = '';
  products.forEach((p, index)=>{
    list.innerHTML += `
    <div class="product">
      <img src="images/${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.desc ? p.desc + ' – ' : ''}${p.weight} – ₹${p.price}</p>
      <button onclick="addToCart(${index})">Add</button>
    </div>
    `;
  });
}

function addToCart(index){
  const product = products[index];
  let cartItem = cart.find(c => c.name===product.name);
  if(cartItem) cartItem.qty +=1;
  else cart.push({...product, qty:1});
  renderCart();
}

function renderCart(){
  const cartDiv = document.getElementById('cart-items');
  cartDiv.innerHTML = '';
  let total = 0;
  cart.forEach(item=>{
    total += item.price*item.qty;
    cartDiv.innerHTML += `<p>${item.name} x ${item.qty} = ₹${item.price*item.qty}</p>`;
  });
  document.getElementById('cart-total').innerText = total;
}

function checkoutWhatsApp(){
  const total = cart.reduce((a,b)=>a+b.price*b.qty,0);
  if(total<399){ alert("Minimum order ₹399"); return; }
  const name = document.getElementById('customer-name').value;
  const mobile = document.getElementById('customer-mobile').value;
  const address = document.getElementById('customer-address').value;
  if(!name || !mobile || !address){ alert("Enter all details"); return; }
  let msg = `Hello, I want to order:\n`;
  cart.forEach(item=> msg+=`${item.name} x ${item.qty} = ₹${item.price*item.qty}\n`);
  msg += `Total: ₹${total}\nName: ${name}\nMobile: ${mobile}\nAddress: ${address}`;
  const waLink = `https://wa.me/917208487215?text=${encodeURIComponent(msg)}`;
  window.open(waLink,'_blank');
}

renderProducts();
