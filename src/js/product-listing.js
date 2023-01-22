import { loadHeaderFooter } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
// Gets all products information with URL
const dataSource = new ProductData("tents");
// Finds the element location for the product cards
const element = document.querySelector(".product-list");
// Creates the listing
const listing = new ProductList("Tents", dataSource, element);

listing.init();

// Creates the header and footer
loadHeaderFooter();s