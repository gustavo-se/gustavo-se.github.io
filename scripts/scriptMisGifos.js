import { activeSection, boxHoverFlex, boxHoverNone, btnHover, displaySections, downloadFunction, maxGif, onlyUnique, quitBtnHover, trash, } from './scriptHoversAndFunctions.js';
import { boxGif, downloadButton, downloadHoverButton, favoritesSection, fragment, links, maxButton, maxHoverButton, misGifosSection, trashButton, trashHoverButton, } from './variables.js';
links[2].addEventListener('click', () => {
    misGifosSection.classList.add('mis-gifos');
    misGifosSection.id = 'mis-gifos-section';
    activeSection(links[2]);
    displaySections(misGifosSection, favoritesSection);
    if (localStorage.getItem('misGifos') === null ||
        localStorage.getItem('misGifos') === '[]') {
        misGifosSection.innerHTML = `<img src="./img/icon-mis-gifos.svg" alt="-mis-gifos">
     <div class="mis-gifos-titulo"><h3>Mis GIFOS</h3></div>
     <div class="mis-gifos-box">
     <img src="./img/icon-mis-gifos-sin-contenido.svg" alt="sin-contenido">
     <h2>¡Anímate a crear tu primer GIFO! </h2>
     </div>`;
    }
    else {
        misGifosSection.innerHTML = `<img src="./img/icon-mis-gifos.svg" alt="mis-gifos">
 <div class="mis-gifos-titulo"><h3>Mis GIFOS</h3></div>
 <div class="mis-gifos-box"></div>`;
        let misGifosBox = document.querySelector('.mis-gifos-box');
        while (misGifosBox.firstChild) {
            misGifosBox.removeChild(misGifosBox.firstChild);
        }
        callMisGifos();
    }
});
const callMisGifos = () => {
    let saveMisGifos = JSON.parse(localStorage['misGifos']);
    let save = saveMisGifos.filter(onlyUnique);
    (document.querySelector('.mis-gifos-box')).style.flexDirection = 'row';
    save.forEach(item => {
        boxGif.querySelector('.gif').setAttribute('src', item.gif);
        boxGif
            .querySelector('.icon-fav img')
            .setAttribute('src', trashButton);
        boxGif.querySelector('.icon-fav img').className =
            'trash-icon pointer';
        boxGif.querySelector('.titulo-gif').innerHTML = 'Mi gifo';
        let clone = boxGif.cloneNode(true);
        fragment.appendChild(clone);
    });
    document.querySelector('.mis-gifos-box').appendChild(fragment);
};
misGifosSection.addEventListener('mouseover', e => {
    boxHoverFlex(e);
    btnHover(e, 'trash-icon', trashHoverButton);
    btnHover(e, 'download-icon', downloadHoverButton);
    btnHover(e, 'expand-icon', maxHoverButton);
});
misGifosSection.addEventListener('mouseout', e => {
    boxHoverNone(e);
    quitBtnHover(e, 'trash-icon', trashButton);
    quitBtnHover(e, 'download-icon', downloadButton);
    quitBtnHover(e, 'expand-icon', maxButton);
});
misGifosSection.addEventListener('click', e => {
    maxGif(e);
    downloadFunction(e);
    trash(e);
});
