export const pageLoad = function() {

    const textConatainer = document.createElement("div");
    textConatainer.classList.add("textConatainer");
    
    const heroText = document.createElement("div");
    heroText.classList.add("hero", "text");
    heroText.textContent = "Enjoy Authentic Moroccan Food";

    const descriptionText = document.createElement("div");
    descriptionText.classList.add("description", "text");
    descriptionText.textContent = "Now order dilicious maghrebi cuisine whithout going to Morocco. We have the famous and delicious foods in our menu.";

    textConatainer.append(heroText, descriptionText);

    const orderContainer = document.createElement("div");
    orderContainer.classList.add("orderContainer");

    const orderBtn = document.createElement("button");
    orderBtn.textContent  = "Order Now";

    orderContainer.appendChild(orderBtn);

    const content = document.querySelector("#content");
    content.append(textConatainer, orderContainer);
}

// return pageLoad();