
import "./style.css";
import { pageLoad } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";
console.log("Bro!");
console.log(pageLoad);
pageLoad();
// menu(); 

const nav = document.querySelector("nav");
const content = document.querySelector("#content");
nav.addEventListener("click", (e) => {

    if (e.target.classList.contains("menu")) {
        content.innerHTML = '';
        menu();
    } else if (e.target.classList.contains("about")) {
        content.innerHTML = '';
        about();
    } else {
        content.innerHTML = '';
        pageLoad();
    }
})