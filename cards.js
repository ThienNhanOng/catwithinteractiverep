const cats = [

    {
        name: "PRIMUS", price: 319.99, img: "Assets/Primus.png", 
    },
    {
        name: "BINKY", price: 352.99, img: "Assets/Binky.png"
    },
    {
        name: "APOLLO", price: 99.99, img: "Assets/apollo.png"
    },
    {
        name: "AMBER", price: 210.00, img: "Assets/amber.png"
    },
    {
        name: "RUSTY", price: 210.00, img: "Assets/Rusty.png"
    },
    {
        name: "JUNO", price: 111.11, img: "Assets/Juno.png"
    }

]

const cardSection = document.getElementById("cards-container");

const generateCard = (name, price, imgPath) => {
    // create a div to store a card in
    const cardContainer = document.createElement("div");

    // set the card containers class to be card (for formatting)
    cardContainer.classList.add("card");

    // set up the image
    const catImg = document.createElement("img");
    catImg.src = imgPath;
    catImg.alt = "";
    catImg.style="width:300px; height:auto";

    // create the name header
    const catNameHeader = document.createElement("h3");
    catNameHeader.classList.add("primary-font");
    catNameHeader.style = "font-size:1.5rem";
    catNameHeader.textContent = name;

    // create the price caption            
    const catPrice = document.createElement("h3");
    catPrice.classList.add("primary-font");
    catPrice.style = "font-size:1rem";
    catPrice.textContent = "$" + price.toFixed(2);

    // create button
    const adoptMeButton = document.createElement("button");
    adoptMeButton.textContent = "ADOPT ME";
    
    //add cat to list on clicked
    adoptMeButton.addEventListener("click", () => {
        addCatToList(name, price);
    });

    // append components to card
    cardContainer.appendChild(catImg);
    cardContainer.appendChild(catNameHeader);
    cardContainer.appendChild(catPrice);
    cardContainer.appendChild(adoptMeButton);

    // append card to the card section
    cardSection.appendChild(cardContainer);
}

const addAllCardsToDocument = () => {
    // add all cards to the section on the document
        cats.forEach(element => {
            generateCard(element.name, element.price, element.img);
        });
}

addAllCardsToDocument();

