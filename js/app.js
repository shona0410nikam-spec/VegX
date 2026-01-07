const products = [
 {name:"Potato", price:30, img:"potato.jpg", desc:"Fresh potato"},
 {name:"Onion", price:35, img:"onion.jpg", desc:"Fresh onion"},
 {name:"Tomato", price:40, img:"tomato.jpg", desc:"Fresh tomato"},
 {name:"Carrot", price:50, img:"carrot.jpg", desc:"Fresh carrot"},
 {name:"Cabbage", price:30, img:"cabbage.jpg", desc:"Fresh cabbage"},
 {name:"Capsicum", price:60, img:"capsicum.jpg", desc:"Fresh capsicum"},
 {name:"Cauliflower", price:45, img:"cauliflower.jpg", desc:"Cleaned cauliflower"},
 {name:"French Bean", price:55, img:"french-bean.jpg", desc:"Fresh beans"},
 {name:"Green Peas", price:70, img:"green-peas.jpg", desc:"Fresh peas"},
 {name:"Coconut", price:40, img:"coconut.jpg", desc:"Fresh coconut"},
 {name:"Pulav Mix", price:80, img:"pulav-mix.jpg", desc:"Ready pulav mix"},
 {name:"Drumstick", price:60, img:"drumstick.jpg", desc:"Fresh drumstick"},
 {name:"Grated Coconut", price:50, img:"grated-coconut.jpg", desc:"Grated coconut"},
 {name:"Pumpkin", price:35, img:"pumpkin.jpg", desc:"Fresh pumpkin"},
 {name:"Bitter Gourd", price:45, img:"bitter-gourd.jpg", desc:"Fresh bitter gourd"},
 {name:"Peeled Garlic", price:90, img:"peeled-garlic.jpg", desc:"Peeled garlic"},
];

let cart = [];
let total = 0;
let quantities = {};

const productList = document.getElementById("productList");

products.forEach((p,i)=>{
  productList.innerHTML += `
  <div class="product">
    <img src="images/${p.img}" alt="${p.name}">
    <h4>${p.name}</h4>
    <p>${p.desc}</p>
    <p>₹ ${p.price}</p>

    <div class="qty-box">
      <button onclick="decreaseQty(${i})">−</button>
      <span id="qty-${i}">1</span>
      <button onclick="increaseQty(${i})">+</button>
    </div>

    <button class="add-btn" onclick="addToCart(${i})">Add</button>
  </div>
  `;
});

function increaseQty(i){
  if(!quantities[i]) quantities[i]=1;
  quantities[i]++;
  document.getElementById(`qty-${i}`).innerText = quantities[i];
}

function decreaseQty(i){
  if(!quantities[i]) quantities[i]=1;
  if(quantities[i]>1){
    quantities[i]--;
    document.getElementById(`qty-${i}`).innerText = quantities[i];
  }
}

function addToCart(i){
  const qty = quantities[i] || 1;
  total += products[i].price * qty;
  document.getElementById("cartTotal").innerText = total;

  quantities[i]=1;
  document.getElementById(`qty-${i}`).innerText = 1;
}
