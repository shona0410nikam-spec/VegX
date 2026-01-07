const products = [
  {
    id: 1,
    title: "Potato",
    desc: "Fresh Potato 1kg",
    price: 40,
    image: "./images/potato.png"
  },
  {
    id: 2,
    title: "Onion",
    desc: "Fresh Onion 1kg",
    price: 40,
    image: "./images/onion.png"
  },
  {
    id: 3,
    title: "Tomato",
    desc: "Fresh Tomato 500gm",
    price: 30,
    image: "./images/tomato.png"
  },
  {
    id: 4,
    title: "Carrot",
    desc: "Cleaned & Chopped 300gm",
    price: 50,
    image: "./images/carrot.png"
  },
  {
    id: 5,
    title: "Cabbage",
    desc: "Fresh Cabbage",
    price: 40,
    image: "./images/cabbage.png"
  },
  {
    id: 6,
    title: "Capsicum",
    desc: "Cleaned & Chopped 300gm",
    price: 60,
    image: "./images/capsicum.png"
  },
  {
    id: 7,
    title: "Cauliflower",
    desc: "Cleaned & Chopped 300gm",
    price: 60,
    image: "./images/cauliflower.png"
  },
  {
    id: 8,
    title: "French Beans",
    desc: "Cleaned & Chopped 300gm",
    price: 60,
    image: "./images/french-beans.png"
  },
  {
    id: 9,
    title: "Green Peas",
    desc: "Cleaned & Shelled 300gm",
    price: 60,
    image: "./images/green-peas.png"
  },
  {
    id: 10,
    title: "Fresh Coconut",
    desc: "Grated Coconut 200gm",
    price: 60,
    image: "./images/coconut.png"
  },
  {
    id: 11,
    title: "Pulav Mix",
    desc: "Mixed Pulav Vegetables 300gm",
    price: 60,
    image: "./images/pulav-mix.png"
  },
  {
    id: 12,
    title: "Drumstick",
    desc: "Cleaned & Chopped 300gm",
    price: 60,
    image: "./images/drumstick.png"
  },
  {
    id: 13,
    title: "Methi",
    desc: "Cleaned Methi 300gm",
    price: 60,
    image: "./images/methi.png"
  },
  {
    id: 14,
    title: "Pudina",
    desc: "Cleaned Pudina 300gm",
    price: 20,
    image: "./images/pudina.png"
  },
  {
    id: 15,
    title: "Palak",
    desc: "Cleaned Palak 200gm",
    price: 60,
    image: "./images/palak.png"
  },
  {
    id: 16,
    title: "Coriander",
    desc: "Cleaned Coriander 100gm",
    price: 20,
    image: "./images/coriander.png"
  },
  {
    id: 17,
    title: "Pumpkin",
    desc: "Cleaned & Cut Red Pumpkin 300gm",
    price: 60,
    image: "./images/pumpkin.png"
  },
  {
    id: 18,
    title: "Sponge Gourd",
    desc: "Cleaned & Chopped 300gm",
    price: 60,
    image: "./images/sponge-gourd.png"
  },
  {
    id: 19,
    title: "Ridge Gourd",
    desc: "Cleaned & Chopped 300gm",
    price: 60,
    image: "./images/ridge-gourd.png"
  },
  {
    id: 20,
    title: "Bottle Gourd",
    desc: "Cleaned & Chopped 300gm",
    price: 60,
    image: "./images/bottle-gourd.png"
  },
  {
    id: 21,
    title: "Bitter Gourd",
    desc: "Cleaned & Chopped 300gm",
    price: 60,
    image: "./images/bitter-gourd.png"
  },
  {
    id: 22,
    title: "Lady Finger",
    desc: "Cleaned & Chopped 300gm",
    price: 50,
    image: "./images/lady-finger.png"
  },
  {
    id: 23,
    title: "Cluster Beans",
    desc: "Cleaned & Chopped 300gm",
    price: 60,
    image: "./images/cluster-beans.png"
  },
  {
    id: 24,
    title: "Green Chilli",
    desc: "Fresh Green Chilli 100gm",
    price: 20,
    image: "./images/green-chilli.png"
  },
  {
    id: 25,
    title: "Garlic",
    desc: "Peeled Garlic 100gm",
    price: 30,
    image: "./images/garlic.png"
  }
];

const productContainer = document.getElementById("product-list");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <img src="${product.image}" alt="${product.title}">
    <h3>${product.title}</h3>
    <p>${product.desc}</p>
    <div class="price">₹${product.price}</div>
    <div class="qty">
      <button>-</button>
      <span>0</span>
      <button>+</button>
    </div>
  `;

  productContainer.appendChild(card);
});
