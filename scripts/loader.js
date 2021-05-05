import { boxGif, carrousel, fragment, sectionSearch } from "./variables.js";
export let favorites = [];
//Llamado a los gifs de trending y verificacion de local storage
window.addEventListener("load", () => {
    fetch("https://api.giphy.com/v1/gifs/trending?api_key=bdrONB5N1ZSySk8VvFBXF18Yut13R6tX&limit=11&rating=g")
        .then(res => res.json())
        .then(res => {
        res.data.forEach((item) => {
            boxGif
                .querySelector(".gif")
                .setAttribute("src", item.images.original.url);
            (boxGif.querySelector(".gif")).dataset.id = item.id;
            boxGif
                .querySelector(".gif-box")
                .classList.add("trendings-gif");
            boxGif.querySelector(".gif").classList.add("trending-gif");
            boxGif.querySelector(".titulo-gif").textContent =
                item.title;
            let clone = boxGif.cloneNode(true);
            fragment.appendChild(clone);
        });
        carrousel.appendChild(fragment);
    });
    if (localStorage.getItem("favoritos") === null ||
        localStorage.getItem("favoritos") === "[]") {
        favorites = [];
    }
    else {
        let datosLocal = JSON.parse(localStorage["favoritos"]);
        favorites = datosLocal;
    }
});
//Creacion del container para los gif buscados
export let containerSearch = document.createElement("div");
export let btnVerMas = document.createElement("button");
containerSearch.classList.add("container-search");
sectionSearch.appendChild(containerSearch);
btnVerMas.classList.add("btn-ver-mas");
btnVerMas.innerHTML = "VER MÁS";
sectionSearch.appendChild(btnVerMas);
