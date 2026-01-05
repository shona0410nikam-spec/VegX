// ===== VegX App JS =====

const WHATSAPP_NUMBER = "7208487215";
const MIN_ORDER = 399;

let cart = {};
let totalAmount = 0;

function updateQty(id, price, change) {
  if (!cart[id]) cart[id] = { qty: 0, price };
  cart[id].qty += change;
  if (cart[id].qty < 0) cart[id].qty = 0;
  document.getElementById(`qty-${id}`).innerText = cart[id].qty;
  calculateTotal();
}

function calculateTotal() {
  totalAmount = 0;
  for (let key in cart) {
    totalAmount += cart[key].qty * cart[key].price;
  }
  document.getElementById("totalAmount").innerText = totalAmount;
}

function placeOrder() {
  if (totalAmount < MIN_ORDER) {
    alert(`Minimum order ₹${MIN_ORDER} आहे`);
    return;
  }

  let name = document.getElementById("custName").value.trim();
  let phone = document.getElementById("custPhone").value.trim();
  let address = document.getElementById("custAddress").value.trim();
  let payment = document.getElementById("paymentMethod").value;

  if (!name || !phone || !address) {
    alert("सर्व delivery details भरा");
    return;
  }

  let message = `🛒 VegX Order\n\n`;
  message += `Name: ${name}\n`;
  message += `Phone: ${phone}\n`;
  message += `Address: ${address}\n\n`;
  message += `Items:\n`;

  for (let key in cart) {
    if (cart[key].qty > 0) {
      message += `${key} x ${cart[key].qty} = ₹${cart[key].qty * cart[key].price}\n`;
    }
  }

  message += `\nTotal: ₹${totalAmount}\n`;
  message += `Payment: ${payment}`;

  let url = `https://wa.me/91${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
