let total = 0;
const catappendedList = JSON.parse(localStorage.getItem('cart')) || [];


function addCatToList(name, price) {
    //flag cat not already in cart.
    let alreadyInCart = false;

    for (let i = 0; i < catappendedList.length; i++) {
        if (catappendedList[i].name === name) {
            //flag cat is in cart.
            alreadyInCart = true;
            break; //
        }
    }
    //if cat is not in cart.
    if (alreadyInCart) {
        alert("This cat is already in your cart!");
        return;
    }

    //if cat is not in cart, add to list.
    catappendedList.push({name,price});
    localStorage.setItem('cart', JSON.stringify(catappendedList));
    updateCart();
}

function updateCart() {
    const cartLabel = document.getElementById('cart');
    const totalLabel = document.getElementById('total');
    total = 0;
    // Clear previous content
    cartLabel.innerHTML = "";

    //If cart is empy, Default Label
    if (catappendedList.length === 0) {
    cartLabel.innerHTML = `<p class="secondary-font">No items yet.</p>`;
    totalLabel.innerHTML = `<p>Total: $0.00</p>`;
    return;
  }

    //Display each cat in cart
    for (let i = 0; i < catappendedList.length; i++) {
      const cat = catappendedList[i];
      cartLabel.innerHTML += `<p>${catappendedList[i].name} - $${catappendedList[i].price}</p>`;
      total += parseFloat(cat.price);
    }

    //Display total
    totalLabel.innerHTML = `<p style="font-size: 32px;"><b>Total:</b> $${total}</p>`;
}
//clear list and set storage to empty list
function clearCart() {
    catappendedList.length = 0;
    localStorage.setItem('cart', JSON.stringify(catappendedList));
    updateCart();
    alert("Thank you for adopting");
}

// Load page
window.addEventListener('DOMContentLoaded', updateCart);