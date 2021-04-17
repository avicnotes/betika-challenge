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
  console.log(products);
}

renderProducts();