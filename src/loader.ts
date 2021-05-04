import { boxGif, carrousel, fragment } from './variables.js';
export let favorites: [] = [];
window.addEventListener('load', () => {
  fetch(
    'https://api.giphy.com/v1/gifs/trending?api_key=bdrONB5N1ZSySk8VvFBXF18Yut13R6tX&limit=11&rating=g'
  )
    .then(res => res.json())
    .then(res => {
      res.data.forEach((item: any) => {
        (<Element>boxGif)
          .querySelector('.gif')!
          .setAttribute('src', item.images.original.url);
        (<HTMLImageElement>(
          (<Element>boxGif).querySelector('.gif')!
        )).dataset.id = item.id;
        (<Element>boxGif)
          .querySelector('.gif-box')!
          .classList.add('trendings-gif');
        (<Element>boxGif).querySelector('.gif')!.classList.add('trending-gif');
        (<Element>boxGif).querySelector('.titulo-gif')!.textContent =
          item.title;

        let clone = (<Element>boxGif).cloneNode(true);
        fragment.appendChild(clone);
      });
      carrousel.appendChild(fragment);
    });

  if (
    localStorage.getItem('favoritos') === null ||
    localStorage.getItem('favoritos') === '[]'
  ) {
    favorites = [];
  } else {
    let datosLocal = JSON.parse(localStorage['favoritos']);
    favorites = datosLocal;
  }
});
