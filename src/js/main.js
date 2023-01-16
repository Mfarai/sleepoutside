import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

// Gets all products information with URL
const dataSource = new ProductData("tents");
console.log("DATASOURCE:");
console.log(dataSource);
const listing = new ProductListing("tents", dataSource, "<section>")
console.log("Listing:");
console.log(listing);