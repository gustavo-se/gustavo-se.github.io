import { boxGif, carrousel, fragment, sectionSearch } from "./variables.js";
import { GifFetch } from "./interfaces";
export let favorites: [] = [];
//Llamado a los gifs de trending y verificacion de local storage
window.addEventListener("load", () => {
  fetch(
    "https://api.giphy.com/v1/gifs/trending?api_key=bdrONB5N1ZSySk8VvFBXF18Yut13R6tX&limit=11&rating=g"
  )
    .then(res => res.json())
    .then(res => {
      res.data.forEach((item: GifFetch) => {
        (<Element>boxGif)
          .querySelector(".gif")!
          .setAttribute("src", item.images.original.url);
        (<HTMLImageElement>(
          (<Element>boxGif).querySelector(".gif")!
        )).dataset.id = item.id;
        (<Element>boxGif)
          .querySelector(".gif-box")!
          .classList.add("trendings-gif");
        (<Element>boxGif).querySelector(".gif")!.classList.add("trending-gif");
        (<Element>boxGif).querySelector(".titulo-gif")!.textContent =
          item.title;

        let clone = (<Element>boxGif).cloneNode(true);
        fragment.appendChild(clone);
      });
      carrousel.appendChild(fragment);
    });

  if (
    localStorage.getItem("favoritos") === null ||
    localStorage.getItem("favoritos") === "[]"
  ) {
    favorites = [];
  } else {
    let datosLocal = JSON.parse(localStorage["favoritos"]);
    favorites = datosLocal;
  }
});

//Creacion del container para los gif buscados
export let containerSearch: HTMLDivElement = document.createElement("div");
export let btnVerMas: HTMLButtonElement = document.createElement("button");

containerSearch.classList.add("container-search");
sectionSearch.appendChild(containerSearch);
btnVerMas.classList.add("btn-ver-mas");
btnVerMas.innerHTML = "VER MÁS";
sectionSearch.appendChild(btnVerMas);
