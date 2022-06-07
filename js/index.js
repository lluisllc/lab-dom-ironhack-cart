// ITERATION 1

function updateSubtotal(productElem) {
  console.log('Calculating subtotal, yey!');
  debugger
  let priceElem = productElem.querySelector('.price span');
  let quantityElem = productElem.querySelector('.quantity input');
  let price = priceElem.innerText;
  console.log(price);
  console.log(typeof (price));
  let quantity = quantityElem.value;
  console.log(quantity);
  console.log(typeof (quantity))
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProductElem = document.querySelector('.product');
  updateSubtotal(singleProductElem);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
