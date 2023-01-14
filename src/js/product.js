// Import needed code from modules
import { setLocalStorage, getParam} from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
// Get the Id of our product
const productId = getParam("product");
// Gets all products information with URL 
const dataSource = new ProductData("tents");
// Gets the specific product information
const product = new ProductDetails(productId, dataSource);
product.init();




let cartItems = [];

  
  // add to cart button event handler
  async function addToCartHandler(e) {
    const product = await dataSource.findProductById(e.target.dataset.id);
    addProductToCart(product);
  }
  
  // add listener to Add to Cart button
  document
    .getElementById("addToCart")
    .addEventListener("click", addToCartHandler);
  