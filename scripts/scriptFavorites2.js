"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scriptHoversAndFunctions2_1 = require("./scriptHoversAndFunctions2");
links[1].addEventListener('click', () => {
    scriptHoversAndFunctions2_1.activeSection(links[1]);
    scriptHoversAndFunctions2_1.displaySections(favoritesSection, misGifosSection);
    if (localStorage.getItem('favoritos') === null ||
        localStorage.getItem('favoritos') === '[]') {
        scriptHoversAndFunctions2_1.sinFavoritos();
    }
    else {
        while (favoritosBox.firstChild) {
            favoritosBox.removeChild(favoritosBox.firstChild);
        }
        scriptHoversAndFunctions2_1.callFavorites();
    }
});
favoritosBox.addEventListener('mouseover', e => {
    scriptHoversAndFunctions2_1.boxHoverFlex(e);
    scriptHoversAndFunctions2_1.btnHover(e, 'fav-icon', favHoverButton);
    scriptHoversAndFunctions2_1.btnHover(e, 'download-icon', downloadHoverButton);
    scriptHoversAndFunctions2_1.btnHover(e, 'expand-icon', maxHoverButton);
});
favoritosBox.addEventListener('mouseout', e => {
    scriptHoversAndFunctions2_1.boxHoverNone(e);
    scriptHoversAndFunctions2_1.quitBtnHover(e, 'fav-icon', favButton);
    scriptHoversAndFunctions2_1.quitBtnHover(e, 'download-icon', downloadButton);
    scriptHoversAndFunctions2_1.quitBtnHover(e, 'expand-icon', maxButton);
});
favoritosBox.addEventListener('click', e => {
    scriptHoversAndFunctions2_1.maxGif(e);
    scriptHoversAndFunctions2_1.downloadFunction(e);
    scriptHoversAndFunctions2_1.favActive(e);
});
