import { loadHeaderFooter, getParam } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";
// Creates the header and footer
loadHeaderFooter();
const category = getParam("category");
// Gets all products information with URL
const dataSource = new ExternalServices();
// Finds the element location for the product cards
const element = document.querySelector(".product-list");
// Creates the listing
const listing = new ProductList(category, dataSource, element);

listing.init();
