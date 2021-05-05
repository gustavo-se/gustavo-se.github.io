import { boxHoverFlex, boxHoverNone, btnHover, quitBtnHover, } from "./listeners.js";
import { callTrendings, downloadFunction, favActive, maxGif, } from "./scriptHoversAndFunctions.js";
import { artists, carrousel, downloadButton, downloadHoverButton, entertainment, gifOfTrendings, maxButton, maxHoverButton, reactions, sliderLeftCarrousel, sliderRigthCarrousel, sports, stickers, } from "./variables.js";
carrousel.addEventListener("mouseover", e => {
    boxHoverFlex(e);
    btnHover(e, "download-icon", downloadHoverButton);
    btnHover(e, "expand-icon", maxHoverButton);
});
carrousel.addEventListener("mouseout", e => {
    boxHoverNone(e);
    quitBtnHover(e, "download-icon", downloadButton);
    quitBtnHover(e, "expand-icon", maxButton);
});
carrousel.addEventListener("click", e => {
    maxGif(e);
    downloadFunction(e);
    favActive(e);
});
let counter = 1;
const size = 357;
window.addEventListener("resize", () => {
    if (window.innerWidth < 901) {
        carrousel.style.transform = "translateX(0px)";
    }
});
sliderRigthCarrousel.addEventListener("click", () => {
    if (counter >= gifOfTrendings.length - 1)
        return;
    carrousel.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carrousel.style.transform = "translateX(" + -size * counter + "px)";
});
sliderLeftCarrousel.addEventListener("click", () => {
    if (counter <= 0)
        return;
    carrousel.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carrousel.style.transform = "translateX(" + -size * counter + "px)";
});
carrousel.addEventListener("transitionend", () => {
    if (gifOfTrendings[counter].id === "last-clone") {
        carrousel.style.transition = "none";
        counter = gifOfTrendings.length - 2;
        carrousel.style.transform = "translateX(" + -size * counter + "px)";
    }
    if (gifOfTrendings[counter].id === "first-clone") {
        carrousel.style.transition = "none";
        counter = gifOfTrendings.length - counter;
        carrousel.style.transform = "translateX(" + -size * counter + "px)";
    }
});
callTrendings(reactions);
callTrendings(entertainment);
callTrendings(sports);
callTrendings(stickers);
callTrendings(artists);
