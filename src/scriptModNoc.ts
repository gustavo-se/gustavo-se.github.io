import {
  btnSearch,
  contentSearch,
  crearGifo,
  espacioAzul,
  footer,
  header,
  input,
  inputSearch,
  links,
  logoGifos,
  main,
  slidersLeft,
  slidersRight,
  tittleBuscador,
  tittleTrending,
  trendingGifos,
  trendingSection,
} from "./variables.js";

links[0].addEventListener("click", e => {
  header.classList.toggle("fondo-noc-first");
  main.classList.toggle("fondo-noc-first");
  footer.classList.toggle("fondo-noc-first");
  trendingSection.classList.toggle("fondo-noc-second");
  for (let i = 0; i < espacioAzul.length; i++) {
    espacioAzul[i].classList.toggle("espacio-negro");
  }
  modoNocHeader();
  modoNocMain();
  modoNocTrending();
  ModoNocFooter();
  modoNocCrearGifo();
});

const modoNocHeader = () => {
  switch (logoGifos.getAttribute("src")) {
    case "./img/logo-desktop.svg":
      logoGifos.setAttribute("src", "./img/Logo-modo-noc.svg");
      break;

    case "./img/Logo-modo-noc.svg":
      logoGifos.setAttribute("src", "./img/logo-desktop.svg");
      break;

    case "./img/logo-mobile.svg":
      logoGifos.setAttribute("src", "./img/logo-mobile-modo-noct.svg");
      break;

    case "./img/logo-mobile-modo-noct.svg":
      logoGifos.setAttribute("src", "./img/logo-mobile.svg");
      break;
  }

  for (let i = 0; i < links.length; i++) {
    links[i].classList.toggle("words-noc-first");
  }

  switch (crearGifo.getAttribute("src")) {
    case "./img/button-crear-gifo.svg":
      crearGifo.setAttribute("src", "./img/CTA-crar-gifo-modo-noc.svg");
      break;

    case "./img/CTA-crar-gifo-modo-noc.svg":
      crearGifo.setAttribute("src", "./img/button-crear-gifo.svg");
      break;

    case "./img/CTA-crear-gifo-active.svg":
      crearGifo.setAttribute("src", "./img/CTA-crear-gifo-active-modo-noc.svg");
      break;

    case "./img/CTA-crear-gifo-active-modo-noc.svg":
      crearGifo.setAttribute("src", "./img/CTA-crear-gifo-active.svg");
      break;
  }
};

const modoNocMain = () => {
  contentSearch.classList.toggle("modo-noc");
  tittleBuscador.classList.toggle("words-noc-first");
  input.classList.toggle("fondo-noc-first");
  input.classList.toggle("words-noc-second");
  trendingGifos.firstElementChild!.classList.toggle("words-noc-first");
  trendingGifos.lastElementChild!.classList.toggle("words-noc-first");

  switch (btnSearch.getAttribute("src")) {
    case "./img/icon-search.svg":
      btnSearch.setAttribute("src", "./img/icon-search-mod-noc.svg");
      inputSearch.classList.add("border-noc-first");
      break;

    case "./img/icon-search-mod-noc.svg":
      btnSearch.setAttribute("src", "./img/icon-search.svg");
      inputSearch.classList.remove("border-noc-first");
      inputSearch.style.border = "1px solid #572EE5";
      break;

    case "./img/close.svg":
      btnSearch.setAttribute("src", "./img/close-modo-noct.svg");
      inputSearch.style.border = "none";
      contentSearch.classList.add("border-noc-first");
      break;

    case "./img/close-modo-noct.svg":
      btnSearch.setAttribute("src", "./img/close.svg");
      inputSearch.style.border = "none";
      contentSearch.classList.remove("border-noc-first");
      contentSearch.style.border = "1px solid #572EE5";
      break;
  }

  for (let i = 0; i < trendingGifos.lastElementChild!.children.length; i++) {
    trendingGifos.lastElementChild!.children[i].classList.toggle(
      "words-noc-first"
    );
  }
};

const modoNocTrending = () => {
  for (let i = 0; i < tittleTrending.children.length; i++) {
    tittleTrending.children[i].classList.toggle("words-noc-first");
  }

  for (let i = 0; i < slidersLeft.length; i++) {
    switch (slidersLeft[i].getAttribute("src")) {
      case "./img/button-slider-left.svg":
        slidersLeft[i].setAttribute(
          "src",
          "./img/button-slider-left-md-noct.svg"
        );
        slidersLeft[i].classList.add("mod-noc");
        break;

      case "./img/button-slider-left-md-noct.svg":
        slidersLeft[i].setAttribute("src", "./img/button-slider-left.svg");
        slidersLeft[i].classList.remove("mod-noc");
    }
  }

  for (let i = 0; i < slidersRight.length; i++) {
    switch (slidersRight[i].getAttribute("src")) {
      case "./img/Button-Slider-right.svg":
        slidersRight[i].setAttribute(
          "src",
          "./img/Button-Slider-right-md-noct.svg"
        );
        slidersRight[i].classList.add("mod-noc");
        break;

      case "./img/Button-Slider-right-md-noct.svg":
        slidersRight[i].setAttribute("src", "./img/Button-Slider-right.svg");
        slidersRight[i].classList.remove("mod-noc");
    }
  }
};
const ModoNocFooter = () => {
  footer.firstElementChild!.classList.toggle("words-noc-first");
  footer.lastElementChild!.classList.toggle("words-noc-first");

  if (footer.classList.contains("fondo-noc-first")) {
    footer.children[1].children[1].setAttribute(
      "src",
      "./img/icon-tw-normal.svg"
    );
  } else {
    footer.children[1].children[1].setAttribute(
      "src",
      "./img/icon-twitter.svg"
    );
  }
};
const modoNocCrearGifo = () => {
  let btnComenzar = document.querySelector(
    ".crear-gifo-button"
  ) as HTMLDivElement;
  let crearGifoPasos = document.querySelector(
    ".crear-gifo-pasos"
  ) as HTMLDivElement;
  let container = document.querySelector(
    ".crear-gifo-container"
  ) as HTMLDivElement;
  if (btnComenzar !== null) {
    if (btnComenzar.classList.contains("comenzar")) {
      setClassModNocCrearGifo(btnComenzar, crearGifoPasos, container);
    } else {
      setClassModNocRecord(btnComenzar, crearGifoPasos, container);
    }
  }
};

//Funcion setear clases para modo nocturno en primera parte de Crear Gifo
export const setClassModNocCrearGifo = (
  btnComenzar: HTMLDivElement,
  crearGifoPasos: HTMLDivElement,
  container: HTMLDivElement
) => {
  btnComenzar.classList.toggle("mod-noc-on");
  for (let i = 0; i < container.children.length; i++) {
    container.children[i].classList.toggle("words-noc-first");
  }
  container.classList.toggle("border-noc-first");

  for (let i = 0; i < crearGifoPasos.children.length; i++) {
    crearGifoPasos.children[i].classList.toggle("words-noc-first");
    crearGifoPasos.children[i].classList.toggle("border-noc-first");
  }
  if (crearGifoPasos.classList.contains("rechazado")) {
    crearGifoPasos.children[0].classList.toggle("fondo-azul");
    crearGifoPasos.children[0].classList.toggle("fondo-noc-third");
  }

  if (
    crearGifo.getAttribute("src") === "./img/CTA-crear-gifo-active-modo-noc.svg"
  ) {
    (<HTMLDivElement>(
      document.querySelector(".crear-gifo-espacio-azul")!
    )).style.backgroundColor = "#ffffff";
  } else {
    (<HTMLDivElement>(
      document.querySelector(".crear-gifo-espacio-azul")!
    )).style.backgroundColor = "#572EE5";
  }

  btnComenzar.classList.toggle("words-noc-first");
  btnComenzar.classList.toggle("border-noc-first");
  btnComenzar.classList.toggle("hover-noc");
};

//Funcion setear clases despues de "comenzar"
const setClassModNocRecord = (
  btnGrabar: HTMLDivElement,
  crearGifoPasos: HTMLDivElement,
  container: HTMLDivElement
) => {
  btnGrabar.classList.toggle("mod-noc-on-grabar");
  container.classList.toggle("border-noc-first");

  if (crearGifoPasos.children.length === 3) {
    for (const hijos of crearGifoPasos.children) {
      hijos.classList.toggle("words-noc-first");
      hijos.classList.toggle("border-noc-first");
      console.log(hijos);
    }
  } else {
    for (const hijos of crearGifoPasos.children) {
      hijos.classList.toggle("words-noc-first");
    }
    for (let i = 0; i < crearGifoPasos.children.length - 1; i++) {
      crearGifoPasos.children[i].classList.toggle("border-noc-first");
    }
  }

  if (
    btnGrabar.classList.contains("grabar") ||
    btnGrabar.classList.contains("finalizar") ||
    btnGrabar.classList.contains("subir-gifo")
  ) {
    crearGifoPasos.children[1].classList.toggle("fondo-noc-third");
  } else if (btnGrabar.classList.contains("subir-gifo-on")) {
    crearGifoPasos.children[2].classList.toggle("fondo-noc-third");
  }

  if (
    crearGifo.getAttribute("src") === "./img/CTA-crear-gifo-active-modo-noc.svg"
  ) {
    (<HTMLDivElement>(
      document.querySelector(".crear-gifo-espacio-azul")!
    )).style.backgroundColor = "#ffffff";
  } else {
    (<HTMLDivElement>(
      document.querySelector(".crear-gifo-espacio-azul")!
    )).style.backgroundColor = "#572EE5";
  }

  btnGrabar.classList.toggle("words-noc-first");
  btnGrabar.classList.toggle("border-noc-first");
  btnGrabar.classList.toggle("hover-noc");
};
