import { boxHoverFlex, boxHoverNone, btnHover, quitBtnHover, } from "./listeners.js";
import { activeSection, callFavorites, displaySections, downloadFunction, favActive, maxGif, sinFavoritos, } from "./scriptHoversAndFunctions.js";
import { downloadButton, downloadHoverButton, favButton, favHoverButton, favoritesSection, favoritosBox, links, maxButton, maxHoverButton, misGifosSection, } from "./variables.js";
links[1].addEventListener("click", () => {
    activeSection(links[1]);
    displaySections(favoritesSection, misGifosSection);
    if (localStorage.getItem("favoritos") === null ||
        localStorage.getItem("favoritos") === "[]") {
        sinFavoritos();
    }
    else {
        while (favoritosBox.firstChild) {
            favoritosBox.removeChild(favoritosBox.firstChild);
        }
        callFavorites();
    }
});
favoritosBox.addEventListener("mouseover", e => {
    boxHoverFlex(e);
    btnHover(e, "fav-icon", favHoverButton);
    btnHover(e, "download-icon", downloadHoverButton);
    btnHover(e, "expand-icon", maxHoverButton);
});
favoritosBox.addEventListener("mouseout", e => {
    boxHoverNone(e);
    quitBtnHover(e, "fav-icon", favButton);
    quitBtnHover(e, "download-icon", downloadButton);
    quitBtnHover(e, "expand-icon", maxButton);
});
favoritosBox.addEventListener("click", e => {
    maxGif(e);
    downloadFunction(e);
    favActive(e);
});
