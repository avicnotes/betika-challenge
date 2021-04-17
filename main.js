const productsHolder = document.getElementById('products-holder');

// Fetch products data
async function getProducts() {
  let url = 'https://storage.googleapis.com/wineshop-assets/wine-shop.json';
  try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}

// Do something with the data
async function firstRenderProducts() {
  let products = await getProducts();
  console.log(products);
  let html = '';
  products.forEach(product => {
    let productHolder = `<div class="column is-4">
	<!-- Card -->
	<div class="columns is-mobile">
		<div class="column is-4">
			<figure>
				<img src="https://storage.googleapis.com/wineshop-assets/wine-bottles/${product.image}">
			</figure>
		</div>
		<div class="column is-8">
      <h2 class="title">${product.no}</h2>
      <h3 class="subtitle">${product.name}</h3>
      <div class="columns is-mobile">
      	<div class="column">
      		<p>Bottle</p>
          <p>$ <span>${product.cost.bottle}</span></p>
          <div class="field is-grouped">
					  <p class="control">
					    <input class="input" size="1" type="text" placeholder="">
					  </p>
					  <p class="control">
					    QTY
					  </p>
					</div>
      	</div>
      	<div class="column">
      		<p>Case</p>
          <p>$ <span>${product.cost.case}</span></p>
          <div class="field is-grouped">
					  <p class="control">
					    <input class="input" size="1" type="text" placeholder="">
					  </p>
					  <p class="control">
					    QTY
					  </p>
					</div>
      	</div>
      </div>
      <div class="columns is-mobile">
      	<div class="column">
      		<button class="button">Details</button>
      	</div>
	      <div class="column">
	      	<button class="button">Add To Cart</button>
      	</div>
      </div>
	  </div>
	</div>
	<!-- End of card -->
</div>`;
			html += productHolder;
  });
  productsHolder.innerHTML = html;


}

// filter products based on tags
async function filterByTags(filterTag){
  let products = await getProducts();
  let filteredProduct = products.filter(product => product.tags == filterTag);
  console.log(filteredProduct);
}

filterByTags("white");
filterByTags("red");
filterByTags("sparkling");

async function filterByPrice(){
  let products = await getProducts();

  products.sort(function (x, y) {
      return x.cost.bottle - y.cost.bottle;
  });
console.table(products);

}

filterByPrice();
// filterByTags("red");
// filterByTags("sparkling");

function moreDetails(){

}

function shoppingCart(){
// Add products to shopping cart
//  
}

function viewShoppingCart(){

}

function customerDataForm(){
  
}


firstRenderProducts();


// Clears the whole DOM list waiting to update it with current content
function removeAllChildren(parent){
  while(parent.firstChild){
    parent.removeChild(parent.firstChild);
  }
}

// removeAllChildren(productsHolder);
