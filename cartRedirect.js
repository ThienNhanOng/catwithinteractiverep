// redirect page functions

function goToCart() {
  window.location.href = "cartpage.html";
}

function goToHome() {
  window.location.href = "index.html";
}

//local storage for cart list
const catappendedList = JSON.parse(localStorage.getItem('cart')) || [];

//add cats to cart list
function addCatToList(cart, name, price) {
  // Check if cat is already in cart
  if(cart.some(checkcat => checkcat.name === name)) {
    alert("This cat is already in your cart!");
    return;
  }
  //if cat is not in cart, add it and update
  cart.push({name, price});
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} has been added to your cart!`);
  updateCart();
}

function updateCart() {
  const cartLabel = document.getElementById('cart');
  cartLabel.innerHTML = ""; // clear cart first

  if (catappendedList.length === 0) {
    cartLabel.innerHTML = `<p class="secondary-font">No items yet.</p>`;
    return;
  }

  //display each cat
  for (let i = 0; i < catappendedList.length; i++) {
    cartLabel.innerHTML += `<p>${catappendedList[i].name} - $${catappendedList[i].price.toFixed(2)}</p>`;
  }
}

// Load and display cart when page loads 
window.addEventListener('DOMContentLoaded', updateCart);
  