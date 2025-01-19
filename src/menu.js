import zaaloukImage from "./image/Zaalouk.webp";
import couscousImage from "./image/Couscous.webp";
import keftaTangineImage from "./image/keftaTangine.webp";

export const menu = function() {
    const addItem = (sourceLink, titleContent, descriptionContent) => {
        const content = document.querySelector("#content");
        const foodCard = document.createElement("div");
        foodCard.classList.add("foodCard");

        const img = document.createElement("img");
        img.src = sourceLink; // Use the imported image URL
        img.alt = titleContent;

        const textHolder = document.createElement("div");
        textHolder.classList.add("textHolder");

        const title = document.createElement("div");
        title.classList.add("title");
        title.textContent = titleContent;

        const description = document.createElement("div");
        description.classList.add("description");
        description.textContent = descriptionContent;

        textHolder.append(title, description);
        foodCard.append(img, textHolder);
        content.appendChild(foodCard);
    };

    addItem(zaaloukImage, "Zaalouk", "Zaalouk is a smoked aubergine dip...");
    addItem(couscousImage, "Couscous", "Seksu' or couscous...");
    addItem(keftaTangineImage, "Kefta", "Bro just eat Kefta!");
};
