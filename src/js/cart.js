import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}


function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
  </li>`+
  "<button id='delete' onclick= 'delElement("+(item++)+")'>delete</button>";

  return newItem;
}
function delElement(cartItems) {
  let cart = getLocalStorage("so-cart");
  cart.splice(cartItems, 1);
  setLocalStorage("so-cart", cart)
}

  document.getElementById("delete")
  document.addEventListener("click", delElement)
  
renderCartContents();
