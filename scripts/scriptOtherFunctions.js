import { btnHover } from "./listeners.js";
import { download, maxGifClose, principalPage, } from "./scriptHoversAndFunctions.js";
import { closeExpand, favActiveButton, favButton, footer, gifMax, logoGifos, maxButtomDownload, maxButtomFav, } from "./variables.js";
//Eventos en botones del gif maximizado
//Fav button
maxButtomFav.addEventListener("click", () => {
    if (maxButtomFav.getAttribute("src") === favButton) {
        maxButtomFav.setAttribute("src", favActiveButton);
        maxButtomFav.classList.add("fav-icon-active");
    }
    else {
        maxButtomFav.setAttribute("src", favButton);
        maxButtomFav.classList.remove("fav-icon-active");
    }
});
//Download button
maxButtomDownload.addEventListener("click", () => {
    download(gifMax.firstElementChild);
});
//Close button
closeExpand.addEventListener("click", () => {
    maxGifClose();
});
//Pagina principal al hacer click al logo gifos
logoGifos.addEventListener("click", () => {
    principalPage();
});
//Hovers de Redes Sociales
footer.addEventListener("mouseover", e => {
    if (footer.classList.contains("fondo-noc-first")) {
        btnHover(e, "facebook", "./img/icon_facebook_noc.svg");
        btnHover(e, "twitter", "./img/icon_twitter_noc.svg");
        btnHover(e, "instagram", "./img/icon_instagram_noc.svg");
    }
    else {
        btnHover(e, "facebook", "./img/icon_facebook_hover.svg");
        btnHover(e, "twitter", "./img/icon-twitter-hover.svg");
        btnHover(e, "instagram", "./img/icon_instagram-hover.svg");
    }
});
footer.addEventListener("mouseout", e => {
    if (footer.classList.contains("fondo-noc-first")) {
        btnHover(e, "facebook", "./img/icon_facebook.svg");
        btnHover(e, "twitter", "./img/icon-tw-normal.svg");
        btnHover(e, "instagram", "./img/icon_instagram.svg");
    }
    else {
        btnHover(e, "facebook", "./img/icon_facebook.svg");
        btnHover(e, "twitter", "./img/icon-twitter.svg");
        btnHover(e, "instagram", "./img/icon_instagram.svg");
    }
});
