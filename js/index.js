// ITERATION 1

function updateSubtotal(productElem) {
  console.log('Calculating subtotal, yey!');
  let priceElem = productElem.querySelector('.price span');
  let quantityElem = productElem.querySelector('.quantity input');

  let price = +(priceElem.innerText);
  let quantity = +(quantityElem.value);

  let subtotal = price * quantity;
  let subtotalElem = productElem.querySelector('.subtotal span')

  subtotalElem.innerText = subtotal;
  return subtotalElem.innerText;
}
updateSubtotal(singleProductElem);

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const productsElem = document.querySelectorAll('.product');
  let subtotal = updateSubtotal(productsElem[0]);
  let totalElem = document.querySelector('#total-value span');
  totalElem.innerText = subtotal;

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
