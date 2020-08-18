// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
    const price = product.querySelector('.price span');
    const quantity = product.querySelector('.quantity input').value
    const netPrice = price.innerText;
    console.log(quantity);
    const subtotal = netPrice*quantity;
    product.querySelector('.subtotal span').innerText = subtotal; 
    return subtotal;
  }

  //... your code goes here

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 // const singleProduct = document.querySelector('.product');
 //const subTotalArr = [];
 let subTotal = 0;
 document.querySelectorAll('.product').forEach(function(product) {
  subTotal+= updateSubtotal(product); 
 })
 document.querySelector('#total-value span').innerText = subTotal;
//console.log(subTotal)
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const parent = target.parentNode.parentNode;
  parent.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const name = document.querySelector('.create-product td input').value
  const npriceame = document.querySelectorAll('.create-product td input')[1].value
  //... your code goes here
  const parentNode = document.querySelector('#cart tbody')
  const newProduct = document.querySelector('.product').cloneNode(true);
  newProduct.querySelector('.name').innerHTML = name;
  newProduct.querySelector('.price').innerHTML = `<span>$${price}</span>`;
  newProduct.querySelector('.quantity').innerHTML = `<input type="number" value="0" min="0" placeholder="Quantity" />`;
  newProduct.querySelector('.subtotal').innerHTML =`$<span>0</span>`; 
  newProduct.querySelector('.btn-remove').addEventListener('click', removeProduct)
  parentNode.append(newProduct)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeProductBtn = document.querySelectorAll('.btn-remove');
  removeProductBtn.forEach(function(item){
    item.addEventListener('click',removeProduct);
  })

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click',AddItem);
});
