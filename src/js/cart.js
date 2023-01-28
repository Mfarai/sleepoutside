import {
  getLocalStorage,
  setLocalStorage,
  loadHeaderFooter,
} from "./utils.mjs";
// Creates the header and footer
loadHeaderFooter();

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
  if (getLocalStorage("so-cart").length != 0) {
    // Shows the total in the cart and IN FUTURE the checkout button
    var totalPrice = 0;
    //for (let item in cartItems){totalPrice += item.FinalPrice;}
    for (let i = 0; i < cartItems.length; i++) {
      totalPrice += cartItems[i].FinalPrice;
    }
    var shippingEst = 2.5;
    var taxPercent = 0.06;
    var taxAmount = totalPrice * taxPercent;
    var orderTotal = shippingEst + taxAmount + totalPrice;

    document.querySelector(".cart-total").innerHTML =
      `
    <section class="checkoutForm">
    <form>
    <h3> Customer Name </h3>
    <div>
      <label for="fname">First name:</label><br>
      <input type="text" id="fname" name="fname" required><br>
      <label for="lname">Last name:</label><br>
      <input type="text" id="lname" name="lname" required>
    </div>
    <h3> Address </h3>
    <div>
      <label for="sAddress">Street Address:</label><br>
      <input type="text" id="sAddress" name="sAddress" required><br>
      <label for="city">City:</label><br>
      <input type="text" id="city" name="city" required><br>
      <label for="state">State:</label><br>
      <input type="text" id="state" name="state" required><br>
      <label for="zipCode">Zip Code</label><br>
      <input type="text" id="zipCode" name="zipCode" required>
    </div>
    <h3> Payment </h3>
    <div>
      <label for="ccNum">Credit Card Number:</label><br>
      <input type="text" pattern="[0-9]{16}" id="ccNum" name="ccNum" required><br>
      <label for="exDate">Expiration Date:</label><br>
      <input type="month" id="exDate" name="exDate" required><br>
      <label for="secCode">Security Code:</label><br>
      <input type="text" pattern="[0-9]{3}" id="secCode" name="secCode"><br>
    </div>
    </form>
  </section> 
  <section class="orderSummary">
  <p>Subtotal: ` +
      Math.round((totalPrice + Number.EPSILON) * 100) / 100 +
      `</p>
  <p>Shipping Estimate: ` +
      Math.round((shippingEst + Number.EPSILON) * 100) / 100 +
      `</p>
  <p>Tax: ` +
      Math.round((taxAmount + Number.EPSILON) * 100) / 100 +
      `</p>
  <p>Order Total: ` +
      Math.round((orderTotal + Number.EPSILON) * 100) / 100 +
      `</p>
  <button class="checkOutButton" type="button">Check Out</button>
  </section>`;
  }
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <button onclick="removeFromCart(${item.Id})"><img src="/images/x_button.png" alt="X icon" width="30"> </button>
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimarySmall}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
  </li>`;
  /* +
    "<button id='delete' onclick= 'delElement(" + item++ +
    ")'>delete</button>";
  */
  return newItem;
}
function delElement(cartItems) {
  let cart = getLocalStorage("so-cart");
  cart.splice(cartItems, 1);
  setLocalStorage("so-cart", cart);
}

document.getElementById("delete");
document.addEventListener("click", delElement);

renderCartContents();
