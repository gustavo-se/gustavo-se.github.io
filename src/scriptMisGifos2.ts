import { Gif } from './interfaces';
import {
  activeSection,
  boxHoverFlex,
  boxHoverNone,
  btnHover,
  displaySections,
  downloadFunction,
  maxGif,
  onlyUnique,
  quitBtnHover,
  trash,
} from './scriptHoversAndFunctions2';

links[2].addEventListener('click', () => {
  misGifosSection.classList.add('mis-gifos');
  misGifosSection.id = 'mis-gifos-section';

  activeSection(<HTMLAnchorElement>links[2]);

  displaySections(misGifosSection, favoritesSection);

  if (
    localStorage.getItem('misGifos') === null ||
    localStorage.getItem('misGifos') === '[]'
  ) {
    misGifosSection.innerHTML = `<img src="./img/icon-mis-gifos.svg" alt="-mis-gifos">
     <div class="mis-gifos-titulo"><h3>Mis GIFOS</h3></div>
     <div class="mis-gifos-box">
     <img src="./img/icon-mis-gifos-sin-contenido.svg" alt="sin-contenido">
     <h2>¡Anímate a crear tu primer GIFO! </h2>
     </div>`;
  } else {
    misGifosSection.innerHTML = `<img src="./img/icon-mis-gifos.svg" alt="mis-gifos">
 <div class="mis-gifos-titulo"><h3>Mis GIFOS</h3></div>
 <div class="mis-gifos-box"></div>`;

    let misGifosBox = document.querySelector('.mis-gifos-box');

    while (misGifosBox!.firstChild) {
      misGifosBox!.removeChild(misGifosBox!.firstChild);
    }
    callMisGifos();
  }
});

const callMisGifos = () => {
  let saveMisGifos: any = JSON.parse(localStorage['misGifos']);
  let save: Array<Gif> = <[]>saveMisGifos.filter(onlyUnique);

  (<HTMLDivElement>(
    document.querySelector('.mis-gifos-box')!
  )).style.flexDirection = 'row';

  save.forEach(item => {
    (<Element>boxGif).querySelector('.gif')!.setAttribute('src', item.gif);
    (<Element>boxGif)
      .querySelector('.icon-fav img')!
      .setAttribute('src', trashButton);
    (<Element>boxGif).querySelector('.icon-fav img')!.className =
      'trash-icon pointer';
    (<Element>boxGif).querySelector('.titulo-gif')!.innerHTML = 'Mi gifo';

    let clone = (<Element>boxGif).cloneNode(true);
    fragment.appendChild(clone);
  });

  document.querySelector('.mis-gifos-box')!.appendChild(fragment);
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
