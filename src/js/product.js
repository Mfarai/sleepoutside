import { setLocalStorage,  getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const productId = getParam('product');
const dataSource = new ProductData("tents");
console.log(dataSource.findProductById(productId));



let cartItems = [];
function addProductToCart(product) {
  cartItems.push(product);
  setLocalStorage("so-cart", cartItems);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
