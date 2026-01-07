const products = [
  { id: 1, name: "Potato", weight: "1kg", price: 40, image: "images/potato.png" },
  { id: 2, name: "Onion", weight: "1kg", price: 40, image: "images/onion.png" },
  { id: 3, name: "Tomato", weight: "500gm", price: 30, image: "images/tomato.png" }
];

const productList = document.getElementById("product-list");

products.forEach(p => {
  const div = document.createElement("div");
  div.innerHTML = `
    <img src="${p.image}" width="100">
    <h4>${p.name}</h4>
    <p>${p.weight} - ₹${p.price}</p>
  `;
  productList.appendChild(div);
});
