# MINI PROJECT 02 - SOFTWARE ENGINEERING NCF SPRING 2026

Izzy Carlson & Thien Ong

# GLEEBUS CAT SHELTER
*** See to-do 1 in separate folder. Rest of project addresses to-do 2.

## Live link:

## Files

- cards.js
Handles creating the cards dynamically using java script instead of manually copy-pasting code in html.

- cartHandler.js
Handles cart logic, like updating the cart when cats are added or removed.

- cartLabels.js
Handles creating nicely formatted labels for each cat in the cart.

- screenHandler.js
Assists with changing the websites page from the cart back to the home page and vice versa.

- index.html
The main page.

- cartpage.html
The cart page.

- style.css
The style used for the html pages. 

## Important DOM Items

### Individual cats
Each individual cat has an "adopt" button. Pressing this button adds the cat to the cart. Each cat can only be added once. If the user tries to add a cat to their cart that is already in their cart, an alert will appear and they will not be allowed to do so. getElementById was used to do this, and an event listener was also added to each button in order to determine what should be done when the user clicks the adopt button. 

### Cart
The cart exists on a separate page, and the user can view the history of the cats they have added to the cart here. The user can also press the "Adopt" button to 'adopt' their cats (clear the history). getElementById, appendChild, and createElement were used in order to create the cat labels on this page.

### Newsletter
The user can enter their email into the newsletter textbox. Pressing "subscribe" will validate the email address. If the email is valid, it will update the message beneath the textbox to say "Thanks for subscribing, user@gmail.com!" if the email is validly formatted or "That's not a valid email address!" if the email is invalidly formatted. getElementById was used to accomplish this.


