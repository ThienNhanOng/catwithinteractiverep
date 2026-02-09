const cartContainer = document.getElementById("CartDisplay");

const generateLabel = (name, price, imgPath) =>{
    const labelContainer = document.createElement("div");

    labelContainer.classList.add("label");

    // set up the image
    const catImg = document.createElement("img");
    catImg.src = imgPath;
    catImg.alt = "";
    catImg.style="width:100px; height:auto";

    // create the name header
    const catNameHeader = document.createElement("h3");
    catNameHeader.classList.add("primary-font");
    catNameHeader.style = "font-size:2rem";
    catNameHeader.textContent = name;

    // create the price caption            
    const catPrice = document.createElement("h3");
    catPrice.classList.add("primary-font");
    catPrice.style = "font-size:2rem";
    catPrice.textContent = "$" + price.toFixed(2);

    labelContainer.appendChild(catImg);
    labelContainer.appendChild(catNameHeader);
    labelContainer.appendChild(catPrice);

    return labelContainer;

    //container.appendChild(labelContainer);
}

const addAllLabelsToCart = (catList) => {
    // add all cards to the section on the document
        catList.forEach(element => {
            generateCard(element.name, element.price, element.img);
        });
}

