var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { favorites } from './loader.js';
import { buscador } from './scriptSearch.js';
import { boxExpand, boxGif, crearGifo, crearGifosSection, dataGif, favActiveButton, favButton, favoritesSection, favoritosBox, footer, fragment, gifMax, header, iconFavSinContenido, links, logoGifos, main, mensaje, misGifosSection, misGifosUrl, searchSection, slidersLeft, slidersRight, titleSearch, trendingSection, } from './variables.js';
for (let i = 0; i < slidersLeft.length; i++) {
    slidersLeft[i].addEventListener('mouseover', () => {
        slidersLeft[i].setAttribute('src', './img/button-slider-left-hover.svg');
    });
    slidersLeft[i].addEventListener('mouseout', () => {
        if (slidersLeft[i].classList.contains('mod-noc')) {
            slidersLeft[i].setAttribute('src', './img/button-slider-left-md-noct.svg');
        }
        else {
            slidersLeft[i].setAttribute('src', './img/button-slider-left.svg');
        }
    });
}
for (let i = 0; i < slidersRight.length; i++) {
    slidersRight[i].addEventListener('mouseover', () => {
        slidersRight[i].setAttribute('src', './img/Button-Slider-right-hover.svg');
    });
    slidersRight[i].addEventListener('mouseout', () => {
        if (slidersRight[i].classList.contains('mod-noc')) {
            slidersRight[i].setAttribute('src', './img/button-slider-right-md-noct.svg');
        }
        else {
            slidersRight[i].setAttribute('src', './img/Button-Slider-right.svg');
        }
    });
}
//Hover boton crear gifos
crearGifo.addEventListener('mouseover', () => {
    switch (crearGifo.getAttribute('src')) {
        case './img/button-crear-gifo.svg':
            crearGifo.setAttribute('src', './img/CTA-crear-gifo-hover.svg');
            break;
        case './img/CTA-crar-gifo-modo-noc.svg':
            crearGifo.setAttribute('src', './img/CTA-crear-gifo-hover-modo-noc.svg');
            break;
        case './img/CTA-crear-gifo-active.svg':
            crearGifo.setAttribute('src', './img/CTA-crear-gifo-active.svg');
            break;
        case './img/CTA-crear-gifo-active-modo-noc.svg':
            crearGifo.setAttribute('src', './img/CTA-crear-gifo-active-modo-noc.svg');
            break;
    }
});
crearGifo.addEventListener('mouseout', () => {
    switch (crearGifo.getAttribute('src')) {
        case './img/CTA-crear-gifo-hover.svg':
            crearGifo.setAttribute('src', './img/button-crear-gifo.svg');
            break;
        case './img/CTA-crear-gifo-hover-modo-noc.svg':
            crearGifo.setAttribute('src', './img/CTA-crar-gifo-modo-noc.svg');
            break;
        case './img/CTA-crear-gifo-active.svg':
            crearGifo.setAttribute('src', './img/CTA-crear-gifo-active.svg');
            break;
        case './img/CTA-crear-gifo-active-modo-noc.svg':
            crearGifo.setAttribute('src', './img/CTA-crear-gifo-active-modo-noc.svg');
            break;
    }
});
//Funcion de display flex a la caja hover de los gifs
export const boxHoverFlex = (e) => {
    if (e.target && e.target.classList.contains('gif')) {
        (e.target.nextElementSibling).style.display = 'flex';
    }
};
//Funcion quitar el hover box de los gif
export const boxHoverNone = (e) => {
    if (e.target && e.target.classList.contains('hover-box')) {
        e.target.style.display = 'none';
    }
};
//Funcion hover de los botones de los Gif
export const btnHover = (e, clase, btn) => {
    if (e.target && e.target.classList.contains(clase)) {
        e.target.setAttribute('src', btn);
    }
};
//Funcion quitar hover
export const quitBtnHover = (e, clase, btn) => {
    if (e.target && e.target.classList.contains(clase)) {
        e.target.setAttribute('src', btn);
    }
};
//Funcion de boton expandir gif
export const maxGif = (e) => {
    if (e.target && e.target.classList.contains('expand-icon')) {
        header.style.display = 'none';
        main.style.display = 'none';
        footer.style.display = 'none';
        boxExpand.style.display = 'block';
        let img = (e.target.parentElement.parentElement.previousElementSibling);
        gifMax.innerHTML = `<img src=${img.getAttribute('src')} alt="gif" data-id=${img.dataset.id}>`;
        let info = e.target.parentElement.nextElementSibling;
        dataGif.innerHTML = info.lastElementChild.innerHTML;
    }
};
//Funcion cerrar expandir gif
export const maxGifClose = () => {
    boxExpand.style.display = 'none';
    header.style.display = 'block';
    main.style.display = 'block';
    footer.style.display = 'flex';
};
//Funcion download
export function download(imgTrend) {
    return __awaiter(this, void 0, void 0, function* () {
        let a = document.createElement('a');
        let response = yield fetch(imgTrend.src);
        let file = yield response.blob();
        a.download = 'MiNuevoGif.gif';
        a.href = window.URL.createObjectURL(file);
        a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
        a.click();
    });
}
//Llamando a la funcion download
export const downloadFunction = (e) => {
    if (e.target && e.target.classList.contains('download-icon')) {
        let img = (e.target.parentElement.parentElement.previousElementSibling);
        return download(img);
    }
};
//Funcion favorito activado/desactivado
export const favActive = (e) => {
    if (e.target && e.target.classList.contains('fav-icon')) {
        e.target.setAttribute('src', favActiveButton);
        e.target.classList.add('fav-icon-active');
        e.target.classList.remove('fav-icon');
        let img = (e.target).parentElement.parentElement.parentElement.previousElementSibling.getAttribute('src');
        let title = e.target.parentElement.parentElement
            .nextElementSibling.lastElementChild.textContent;
        let id = (e.target.parentElement.parentElement.parentElement
            .previousElementSibling).dataset.id;
        addFavorites(img, title, id);
    }
    else if (e.target &&
        e.target.classList.contains('fav-icon-active')) {
        e.target.setAttribute('src', favButton);
        e.target.classList.remove('fav-icon-active');
        e.target.classList.add('fav-icon');
        let id = (e.target.parentElement.parentElement.parentElement
            .previousElementSibling).dataset.id;
        quitFavorites(id);
    }
};
//Funcion agregar favoritos
const addFavorites = (gif, title, id) => {
    let indice = favorites.findIndex((elemento) => {
        if (elemento.id === id) {
            return true;
        }
    });
    if (indice < 0) {
        let favoritesGif = { gif, title, id };
        favorites.push(favoritesGif);
    }
    let favoriteArray = JSON.stringify(favorites);
    localStorage.setItem('favoritos', favoriteArray);
};
//Funcion llamar a favoritos
export const callFavorites = () => {
    favoritosBox.style.flexDirection = 'row';
    let saveFavorites = JSON.parse(localStorage['favoritos']);
    saveFavorites.forEach(item => {
        boxGif.querySelector('.gif').setAttribute('src', item.gif);
        boxGif.querySelector('.gif').classList.value = 'gif fav-gif';
        boxGif.querySelector('.gif').dataset.id =
            item.id;
        boxGif.querySelector('.gif-box').classList.value =
            ' gif-box fav-gifs';
        boxGif
            .querySelector('.icon-fav img')
            .setAttribute('src', favActiveButton);
        boxGif.querySelector('.icon-fav img').className =
            'fav-icon-active pointer';
        boxGif.querySelector('.titulo-gif').textContent = item.title;
        let clone = boxGif.cloneNode(true);
        fragment.appendChild(clone);
    });
    favoritosBox.appendChild(fragment);
};
//Funcion evitar repetidos
export const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
};
//Funcion sin favoritos aun
export const sinFavoritos = () => {
    while (favoritosBox.firstChild) {
        favoritosBox.removeChild(favoritosBox.firstChild);
    }
    iconFavSinContenido.setAttribute('src', './img/icon-fav-sin-contenido.svg');
    mensaje.textContent =
        '¡Guarda tu primer GIFO en Favoritos para que se muestre aquí!';
    favoritosBox.style.flexDirection = 'column';
    favoritosBox.appendChild(iconFavSinContenido);
    favoritosBox.appendChild(mensaje);
};
//Funcion quitar de favoritos
const quitFavorites = (id) => {
    let saveFavorites = JSON.parse(localStorage['favoritos']);
    let indice = saveFavorites.findIndex((elemento) => {
        if (elemento.id === id) {
            return true;
        }
    });
    if (indice >= 0) {
        saveFavorites.splice(indice, 1);
    }
    if (indice >= 0) {
        favorites.splice(indice, 1);
    }
    let favoriteArray = JSON.stringify(saveFavorites);
    localStorage.setItem('favoritos', favoriteArray);
};
//Funcion volver a pagina principal
export const principalPage = () => {
    favoritesSection.style.display = 'none';
    misGifosSection.style.display = 'none';
    crearGifosSection.style.display = 'none';
    searchSection.style.display = 'flex';
    trendingSection.style.display = 'flex';
    switch (crearGifo.getAttribute('src')) {
        case './img/CTA-crear-gifo-active.svg':
            crearGifo.setAttribute('src', './img/button-crear-gifo.svg');
            break;
        case './img/CTA-crear-gifo-active-modo-noc.svg':
            crearGifo.setAttribute('src', './img/CTA-crar-gifo-modo-noc.svg');
            break;
    }
    linksColorBlue();
};
//Funcion cambiar el color de los links
const linksColorBlue = () => {
    for (let i = 0; i < links.length; i++) {
        if (links[i].className === 'links link-active') {
            links[i].style.color = '#572EE5';
            links[i].className = 'links';
        }
    }
};
//Funcion mostrar las secciones fav y mis gifos
export const displaySections = (section, otherSection) => {
    searchSection.style.display = 'none';
    crearGifosSection.style.display = 'none';
    otherSection.style.display = 'none';
    main.appendChild(section);
    section.after(trendingSection);
    section.style.display = 'flex';
};
//Funcion de los links activados (color)
export const activeSection = (link) => {
    link.style.color = '#9CAFC3';
    linksColorBlue();
    link.classList.add('link-active');
};
//Funcion llamar a los trendings
export const callTrendings = (wordKey) => {
    wordKey.addEventListener('click', () => {
        buscador(wordKey.textContent);
        titleSearch.style.display = 'block';
        titleSearch.innerHTML = `<h3>${wordKey.textContent}</h3>`;
    });
};
//Cambiar el logo
window.addEventListener('load', () => {
    if (window.innerWidth > 901) {
        logoGifos.setAttribute('src', './img/logo-desktop.svg');
    }
    else {
        logoGifos.setAttribute('src', './img/logo-mobile.svg');
    }
});
window.addEventListener('resize', () => {
    if (window.innerWidth > 901 &&
        logoGifos.getAttribute('src') === './img/logo-desktop.svg') {
        logoGifos.setAttribute('src', './img/logo-desktop.svg');
    }
    else if (window.innerWidth > 901 &&
        logoGifos.getAttribute('src') === './img/Logo-modo-noc.svg') {
        logoGifos.setAttribute('src', './img/Logo-modo-noc.svg');
    }
    else if (window.innerWidth > 901 &&
        logoGifos.getAttribute('src') === './img/logo-mobile.svg') {
        logoGifos.setAttribute('src', './img/logo-desktop.svg');
    }
    else if (window.innerWidth > 901 &&
        logoGifos.getAttribute('src') === './img/logo-mobile-modo-noct.svg') {
        logoGifos.setAttribute('src', './img/Logo-modo-noc.svg');
    }
    else if (window.innerWidth < 901 &&
        logoGifos.getAttribute('src') === './img/logo-desktop.svg') {
        logoGifos.setAttribute('src', './img/logo-mobile.svg');
    }
    else if (window.innerWidth < 901 &&
        logoGifos.getAttribute('src') === './img/logo-mobile.svg') {
        logoGifos.setAttribute('src', './img/logo-mobile.svg');
    }
    else if (window.innerWidth < 901 &&
        logoGifos.getAttribute('src') === './img/logo-mobile-modo-noct.svg') {
        logoGifos.setAttribute('src', './img/logo-mobile-modo-noct.svg');
    }
    else if (window.innerWidth < 901 &&
        logoGifos.getAttribute('src') === './img/Logo-modo-noc.svg') {
        logoGifos.setAttribute('src', './img/logo-mobile-modo-noct.svg');
    }
});
//Funcion copiar a portapapeles url de mis gifos
export function updateClipboard(urlGif) {
    navigator.clipboard.writeText(urlGif).then(function () {
        alert('URL copiada en el portapapeles');
    }, function () {
        alert('no se a podido copiar');
    });
}
//Funcion trash de seccion mis gifos
export const trash = (e) => {
    let saveMisGifos = JSON.parse(localStorage['misGifos']);
    let save = saveMisGifos.filter(onlyUnique);
    let img = (e.target.parentElement.parentElement.parentElement
        .previousElementSibling);
    if (save.indexOf(img.getAttribute('src')) >= 0) {
        let i = save.indexOf(img.getAttribute('src'));
        save.splice(i, 1);
    }
    if (misGifosUrl.indexOf(img.getAttribute('src')) >= 0) {
        let i = favorites.indexOf(img.getAttribute('src'));
        misGifosUrl.splice(i, 1);
    }
    let misGifosArray = JSON.stringify(save);
    localStorage.setItem('misGifos', misGifosArray);
};
