
export const about = function() {
    const content = document.querySelector("#content");

    const descriptionText = document.createElement("div");
    descriptionText.classList.add("description", "text");
    descriptionText.textContent = "Bro it's a fake website to practice webpackking";

    content.appendChild(descriptionText);
}