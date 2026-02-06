// redirect page functions
let total = 0;


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
  if(cart.some(checkcat => checkcat.name == name)) {
    alert("This cat is already in your cart!");
    return;
  }
  //if cat is not in cart, add the cat name and price to cart
  cart.push({name, price});
  //update the local storage
  localStorage.setItem('cart', JSON.stringify(cart));

  updateCart();
}

function updateCart() {
  const cartLabel = document.getElementById('cart');
  const totalLabel = document.getElementById('total');
  cartLabel.innerHTML = ""; // clear cart first

  if (catappendedList.length === 0) {
    cartLabel.innerHTML = `<p class="secondary-font">No items yet.</p>`;
    return;
  }

  //display each cat
  for (let i = 0; i < catappendedList.length; i++) {
      cartLabel.innerHTML += `<p>${catappendedList[i].name} - $${catappendedList[i].price}</p>`;
      //calculate and display total
    }

    catappendedList.forEach(cat => {
            total = total + parseFloat(cat.price);
    });

  totalLabel.innerHTML = `<p>Total: $${total}</p>`;
}
  


// Load and display cart when page loads 
window.addEventListener('DOMContentLoaded', updateCart);
  