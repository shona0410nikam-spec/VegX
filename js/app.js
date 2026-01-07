const products = [
  { name: "Potato", desc: "Fresh Potato 1kg", price: 40, img: "potato.png" },
  { name: "Onion", desc: "Fresh Onion 1kg", price: 40, img: "onion.png" },
  { name: "Tomato", desc: "Fresh Tomato 500gm", price: 30, img: "tomato.png" },
  { name: "Carrot", desc: "Cleaned & Chopped 300gm", price: 50, img: "carrot.png" },
  { name: "Cabbage", desc: "Fresh Cabbage", price: 40, img: "cabbage.png" },
  { name: "Capsicum", desc: "Cleaned & Chopped 300gm", price: 60, img: "capsicum.png" },
  { name: "Cauliflower", desc: "Cleaned & Chopped 300gm", price: 60, img: "cauliflower.png" },
  { name: "French Beans", desc: "Cleaned & Chopped 300gm", price: 60, img: "french-beans.png" },
  { name: "Green Peas", desc: "Cleaned & Shelled 300gm", price: 60, img: "green-peas.png" },
  { name: "Fresh Coconut", desc: "Grated Coconut 200gm", price: 60, img: "coconut.png" },
  { name: "Pulav Mix", desc: "Mixed Pulav Vegetables 300gm", price: 60, img: "pulav-mix.png" },

  { name: "Drumstick", desc: "Cleaned & Chopped 300gm", price: 60, img: "drumstick.png" },
  { name: "Methi", desc: "Cleaned Methi 300gm", price: 60, img: "methi.png" },
  { name: "Pudina", desc: "Cleaned Pudina 300gm", price: 20, img: "pudina.png" },
  { name: "Palak", desc: "Cleaned Palak 200gm", price: 60, img: "palak.png" },
  { name: "Coriander", desc: "Cleaned Coriander 100gm", price: 20, img: "coriander.png" },
  { name: "Pumpkin", desc: "Cleaned & Cut 300gm", price: 60, img: "pumpkin.png" },
  { name: "Sponge Gourd", desc: "Cleaned & Chopped 300gm", price: 60, img: "sponge-gourd.png" },
  { name: "Ridge Gourd", desc: "Cleaned & Chopped 300gm", price: 60, img: "ridge-gourd.png" },
  { name: "Bottle Gourd", desc: "Cleaned & Chopped 300gm", price: 60, img: "bottle-gourd.png" },
  { name: "Bitter Gourd", desc: "Cleaned & Chopped 300gm", price: 60, img: "bitter-gourd.png" },
  { name: "Lady Finger", desc: "Cleaned & Chopped 300gm", price: 50, img: "lady-finger.png" },
  { name: "Cluster Beans", desc: "Cleaned & Chopped 300gm", price: 60, img: "cluster-beans.png" },
  { name: "Green Chilli", desc: "Fresh Green Chilli 100gm", price: 20, img: "green-chilli.png" },
  { name: "Garlic", desc: "Peeled Garlic 100gm", price: 30, img: "garlic.png" }
];

const container = document.getElementById("product-list");

products.forEach(p => {
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

  container.appendChild(card);
});
