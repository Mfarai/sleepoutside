
  import {setLocalStorage}
  export default class ProductDetails {
    constructor(productId, dataSource){
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
      }
      addProductToCart(product) {
        cartItems.push(product);
        setLocalStorage("so-cart", cartItems);
      }
      renderProductDetails() {
        // Method to generate the HTML to display our product

        // IN PROGRESS CURRENTLY ON THE IMG
        const main = document.getElementById("main");
        const section = document.createElement("section");
        const h3 = document.createElement("h3");
        const h2 = document.createElement("h2");
        const img = document.createElement("img");
        const price = document.createElement("p");
        const color = document.createElement("p");
        const description = document.createElement("p");
        const div = document.createElement("div");
        const button = document.createElement("button");
        section.setAttribute("class", "product-detail");
        h3.innerHTML = this.product.Brand.Name;
        h2.setAttribute("class", "divider");
        h2.innerHTML = this.product.NameWithoutBrand;
        img.setAttribute("class", "divider");
        img.setAttribute("src", this.product.Image);
        img.setAttribute("alt", this.product.NameWithoutBrand);
        price.setAttribute("class", "product-card__price");

        section.appendChild(h3);
        section.appendChild(h2);
        section.appendChild(mainImg);
        section.appendChild(price);
        section.appendChild(color);
        section.appendChild(description);
        section.appendChild(div);
        div.appendChild(button);
        main.appendChild(section);

        <section class="product-detail">
        <h3>The North Face</h3>

        <h2 class="divider">Alpine Guide Tent - 3-Person, 4-Season</h2>

        <img
          class="divider"
          src="../images/tents/the-north-face-alpine-guide-tent-3-person-4-season-in-canary-yellow-high-rise-grey~p~985pr_01~320.jpg"
          alt="Alpine Guide Tent - 3-Person, 4-Season"
        />

        <p class="product-card__price">$349.99</p>

        <p class="product__color">Canary Yellow/High Rise Grey</p>

        <p class="product__description">
          Be ready for any outdoor adventure in low elevations and high-alpine
          environments alike with the hybrid design of The North Face&#39;s
          Alpine Guide four-season tent. It is made from durable, waterproof
          Featherlite NSL pole system and an easy to pitch design.
        </p>

        <div class="product-detail__add">
          <button id="addToCart" data-id="985PR">Add to Cart</button>
        </div>
      </section>
      }
     
  }
  



  