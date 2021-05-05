import { menu, ulDesplegado, closeMenu, hamburguesa, crearGifosSection, downloadHoverButton, linkHoverButton, linkButton, downloadButton, crearGifo, slidersLeft, slidersRight, } from "./variables.js";
//Listener del menu Hamburguesa
menu.addEventListener("click", () => {
    ulDesplegado.classList.toggle("ul-desplegado");
    closeMenu.classList.toggle("burger-close");
    hamburguesa.classList.toggle("close-burger");
});
closeMenu.addEventListener("click", () => {
    ulDesplegado.classList.toggle("ul-desplegado");
    closeMenu.classList.toggle("burger-close");
    hamburguesa.classList.toggle("close-burger");
});
//Listener de hover de botones en Crear Gifo
crearGifosSection.addEventListener("mouseover", e => {
    btnHover(e, "download-icon", downloadHoverButton);
    btnHover(e, "link-icon", linkHoverButton);
});
crearGifosSection.addEventListener("mouseout", e => {
    quitBtnHover(e, "download-icon", downloadButton);
    quitBtnHover(e, "link-icon", linkButton);
});
//Listener Hover boton crear gifos
crearGifo.addEventListener("mouseover", () => {
    switch (crearGifo.getAttribute("src")) {
        case "./img/button-crear-gifo.svg":
            crearGifo.setAttribute("src", "./img/CTA-crear-gifo-hover.svg");
            break;
        case "./img/CTA-crar-gifo-modo-noc.svg":
            crearGifo.setAttribute("src", "./img/CTA-crear-gifo-hover-modo-noc.svg");
            break;
        case "./img/CTA-crear-gifo-active.svg":
            crearGifo.setAttribute("src", "./img/CTA-crear-gifo-active.svg");
            break;
        case "./img/CTA-crear-gifo-active-modo-noc.svg":
            crearGifo.setAttribute("src", "./img/CTA-crear-gifo-active-modo-noc.svg");
            break;
    }
});
crearGifo.addEventListener("mouseout", () => {
    switch (crearGifo.getAttribute("src")) {
        case "./img/CTA-crear-gifo-hover.svg":
            crearGifo.setAttribute("src", "./img/button-crear-gifo.svg");
            break;
        case "./img/CTA-crear-gifo-hover-modo-noc.svg":
            crearGifo.setAttribute("src", "./img/CTA-crar-gifo-modo-noc.svg");
            break;
        case "./img/CTA-crear-gifo-active.svg":
            crearGifo.setAttribute("src", "./img/CTA-crear-gifo-active.svg");
            break;
        case "./img/CTA-crear-gifo-active-modo-noc.svg":
            crearGifo.setAttribute("src", "./img/CTA-crear-gifo-active-modo-noc.svg");
            break;
    }
});
//Listener hover todos los sliders modo diurno y nocturno
for (let i = 0; i < slidersLeft.length; i++) {
    slidersLeft[i].addEventListener("mouseover", () => {
        slidersLeft[i].setAttribute("src", "./img/button-slider-left-hover.svg");
    });
    slidersLeft[i].addEventListener("mouseout", () => {
        if (slidersLeft[i].classList.contains("mod-noc")) {
            slidersLeft[i].setAttribute("src", "./img/button-slider-left-md-noct.svg");
        }
        else {
            slidersLeft[i].setAttribute("src", "./img/button-slider-left.svg");
        }
    });
}
for (let i = 0; i < slidersRight.length; i++) {
    slidersRight[i].addEventListener("mouseover", () => {
        slidersRight[i].setAttribute("src", "./img/Button-Slider-right-hover.svg");
    });
    slidersRight[i].addEventListener("mouseout", () => {
        if (slidersRight[i].classList.contains("mod-noc")) {
            slidersRight[i].setAttribute("src", "./img/button-slider-right-md-noct.svg");
        }
        else {
            slidersRight[i].setAttribute("src", "./img/Button-Slider-right.svg");
        }
    });
}
//Listener colocar hover en el box de los gif
export const boxHoverFlex = (e) => {
    if (e.target && e.target.classList.contains("gif")) {
        (e.target.nextElementSibling).style.display = "flex";
    }
};
//Listener quitar hover en el box de los gif
export const boxHoverNone = (e) => {
    if (e.target && e.target.classList.contains("hover-box")) {
        e.target.style.display = "none";
    }
};
//Funcion colocar hover en los botones de los gif
export const btnHover = (e, clase, btn) => {
    if (e.target && e.target.classList.contains(clase)) {
        e.target.setAttribute("src", btn);
    }
};
//Funcion quitar hover de los botones de los gif
export const quitBtnHover = (e, clase, btn) => {
    if (e.target && e.target.classList.contains(clase)) {
        e.target.setAttribute("src", btn);
    }
};
