import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductListing.mjs";
// Gets all products information with URL
const dataSource = new ProductData("tents");
const listing = new ProductListing("category", dataSource, "<P>")