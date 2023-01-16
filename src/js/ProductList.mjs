import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate (product) {
    return `<li class="product-card">
        <a href="product_pages/?product=">
          <img
            src=""
            alt="Image of"
          />
          <h3 class="card__brand"></h3>
          <h2 class="card__name"></h2>
          <p class="product-card__price"></p></a
        >
      </li>`
}

export default class ProductList {
    // We passed in this information to make our class as reusable as possible.
            // Being able to define these things when we use the class will make it very flexible
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;

    }
    async init () {
        // our dataSource will return a Promise...so we can use await to resolve it.
        const list = await this.dataSource.getData();
        // render the list - to be completed
        this.renderList(list);
      }
    renderProductDetails(selector) {
        renderListWithTemplate(productCardTemplate, this.listElement, list);
      }
    
}