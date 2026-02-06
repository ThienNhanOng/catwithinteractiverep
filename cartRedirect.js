// redirect page functions

function goToCart() {
  window.location.href = "cartpage.html";
}

function goToHome() {
  window.location.href = "index.html";
}

const catappendedList = [];

//add cats to cart list
function addCatToList(catList,name,price,img) {
// append cats to catList
catList.push({name: name, price: price, img: img});
return catList;
}

// Wait for DOM to load before accessing elements
window.addEventListener('DOMContentLoaded', function() {
  const cartLabel = document.getElementById('cart');
  
  if (catappendedList.length === 0) {
    cartLabel.innerHTML = `<p class="secondary-font">No items yet.</p>`;
  } 
  else {
    cartLabel.innerHTML = ""; // clear previous content first

    catappendedList.forEach(item => {
      cartLabel.innerHTML += `<p>${item.name} - $${item.price}</p>`;
    });
  }
});

  