import {
  download,
  maxGifClose,
  principalPage,
} from "./scriptHoversAndFunctions.js";
import {
  menu,
  ulDesplegado,
  closeMenu,
  hamburguesa,
  crearGifosSection,
  downloadHoverButton,
  linkHoverButton,
  linkButton,
  downloadButton,
  crearGifo,
  slidersLeft,
  slidersRight,
  maxButtomFav,
  favButton,
  favActiveButton,
  closeExpand,
  maxButtomDownload,
  gifMax,
  footer,
  logoGifos,
} from "./variables.js";

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
      slidersLeft[i].setAttribute(
        "src",
        "./img/button-slider-left-md-noct.svg"
      );
    } else {
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
      slidersRight[i].setAttribute(
        "src",
        "./img/button-slider-right-md-noct.svg"
      );
    } else {
      slidersRight[i].setAttribute("src", "./img/Button-Slider-right.svg");
    }
  });
}
//Listener colocar hover en el box de los gif
export const boxHoverFlex = (e: MouseEvent) => {
  if (e.target && (<Element>e.target).classList.contains("gif")) {
    (<HTMLDivElement>(
      (<HTMLDivElement>e.target).nextElementSibling
    ))!.style.display = "flex";
  }
};

//Listener quitar hover en el box de los gif
export const boxHoverNone = (e: MouseEvent) => {
  if (e.target && (<Element>e.target).classList.contains("hover-box")) {
    (<HTMLDivElement>e.target).style.display = "none";
  }
  if (e.target && (<Element>e.target).classList.contains("icons-box")) {
    (<HTMLDivElement>e.target).parentElement!.style.display = "none";
  }
};

//Funcion colocar hover en los botones de los gif
export const btnHover = (e: MouseEvent, clase: string, btn: string) => {
  if (e.target && (<Element>e.target).classList.contains(clase)) {
    (<Element>e.target).setAttribute("src", btn);
  }
};

//Funcion quitar hover de los botones de los gif
export const quitBtnHover = (e: MouseEvent, clase: string, btn: string) => {
  if (e.target && (<Element>e.target).classList.contains(clase)) {
    (<Element>e.target).setAttribute("src", btn);
  }
};
//Eventos en botones del gif maximizado
//Fav button
maxButtomFav.addEventListener("click", () => {
  if (maxButtomFav.getAttribute("src") === favButton) {
    maxButtomFav.setAttribute("src", favActiveButton);
    maxButtomFav.classList.add("fav-icon-active");
  } else {
    maxButtomFav.setAttribute("src", favButton);
    maxButtomFav.classList.remove("fav-icon-active");
  }
});

//Download button
maxButtomDownload.addEventListener("click", () => {
  download(<HTMLImageElement>gifMax.firstElementChild!);
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
  } else {
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
  } else {
    btnHover(e, "facebook", "./img/icon_facebook.svg");
    btnHover(e, "twitter", "./img/icon-twitter.svg");
    btnHover(e, "instagram", "./img/icon_instagram.svg");
  }
});
