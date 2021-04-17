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
async function renderProducts() {
  let products = await getProducts();
  // console.log(products);
  let html = '';
  products.forEach(product => {
    let productHolder = `<div class="column is-4">
	<!-- Card -->
	<div class="columns is-mobile">
		<div class="column is-one-fifth">
			<figure>
				<img src="https://storage.googleapis.com/wineshop-assets/wine-bottles/${product.image}">
			</figure>
		</div>
		<div class="column is-four-fifths">
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


renderProducts();