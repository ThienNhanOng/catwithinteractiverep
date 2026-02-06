// email validation source: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript

// regex to test email validation against
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// the subscribe button
const subscribeButton = document.getElementById("subscribe-button");

// update the text displayed when the user presses the subscribe button
const updateRecentlyEnteredEmail = (textContent) => {
    const displayedEmail = document.getElementById("recently-entered-email");

    displayedEmail.textContent = textContent;
}

// validate the email using the regex
const validateEmail = (email) => {
    return String(email).toLowerCase().match(re);
}

// function to be called when the subscribe button is clicked
function subscribeButtonClicked() {
    const email = document.getElementById("email");

    if (validateEmail(email.value)){
        updateRecentlyEnteredEmail("Thanks for subscribing, " + email.value + "!");
    } else {
        updateRecentlyEnteredEmail("That's not a validate email address!");
    }
}

// if subscribe button is not null, add the listener to it
if (subscribeButton){
    subscribeButton.addEventListener("click", subscribeButtonClicked);
}