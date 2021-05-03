import {
  boxHoverFlex,
  boxHoverNone,
  btnHover,
  downloadFunction,
  favActive,
  maxGif,
  quitBtnHover,
} from './scriptHoversAndFunctions2';

const buscador = (key: string) => {
  trendingGifos.style.display = 'none';
  contador = 0;
  while (containerSearch.firstChild) {
    containerSearch.removeChild(containerSearch.firstChild);
  }
  callGif('0', key);
};

//Funcion render gif de search
const callGif = (offset: string | number, key: string) => {
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${key}&limit=12&offset=${offset}&rating=g`
  )
    .then(res => res.json())
    .then(res => {
      res.data.forEach((item: any) => {
        (<Element>boxGif)
          .querySelector('.gif')!
          .setAttribute('src', item.images.original.url);
        (<HTMLImageElement>(
          (<Element>boxGif).querySelector('.gif')
        ))!.dataset.id = item.id;
        (<Element>boxGif).querySelector('.gif')!.classList.value =
          'gif searched-gifs';
        (<Element>boxGif)
          .querySelector('.icon-fav img')!
          .setAttribute('src', favButton);
        (<Element>boxGif).querySelector('.gif-box')!.classList.value =
          'gif-box search-gifs';
        (<Element>boxGif).querySelector('.titulo-gif')!.textContent =
          item.title;

        let clone = (<Element>boxGif).cloneNode(true);
        fragment.appendChild(clone);
      });
      containerSearch.appendChild(fragment);
    });
};

containerSearch.addEventListener('mouseover', e => {
  boxHoverFlex(e);
  btnHover(e, 'fav-icon', favHoverButton);
  btnHover(e, 'download-icon', downloadHoverButton);
  btnHover(e, 'expand-icon', maxHoverButton);
});

containerSearch.addEventListener('mouseout', e => {
  boxHoverNone(e);
  quitBtnHover(e, 'fav-icon', favButton);
  quitBtnHover(e, 'download-icon', downloadButton);
  quitBtnHover(e, 'expand-icon', maxButton);
});

containerSearch.addEventListener('click', e => {
  maxGif(e);
  downloadFunction(e);
  favActive(e);
});

const sugerencias = (term: string) => {
  fetch(
    `http://api.giphy.com/v1/gifs/search/tags?api_key=${apiKey}&q=${term}&limit=4`
  )
    .then(res => res.json())
    .then(res => {
      for (let i = 0; i < 4; i++) {
        results[i].innerHTML = res.data[i].name;
      }
    });
};

input.addEventListener('keyup', event => {
  if (input.value.length >= 1) {
    if (contentSearch.classList.contains('modo-noc')) {
      btnSearch.setAttribute('src', './img/close-modo-noct.svg');
      contentSearch.classList.add('border-noc-first');
    } else {
      btnSearch.setAttribute('src', './img/close.svg');
      contentSearch.style.border = '1px solid #572EE5';
    }

    sugestionsBox.style.display = 'block';
    inputSearch.classList.remove('border-noc-first');
    inputSearch.style.border = 'none';
    contentSearch.style.borderRadius = '27px';
    (<HTMLImageElement>btnLeft).style.visibility = 'visible';
  } else {
    sugestionsBox.style.display = 'none';
    (<HTMLImageElement>btnLeft).style.visibility = 'hidden';

    if (contentSearch.classList.contains('modo-noc')) {
      btnSearch.setAttribute('src', './img/icon-search-mod-noc.svg');
      inputSearch.classList.add('border-noc-first');
      contentSearch.classList.remove('border-noc-first');
      contentSearch.style.border = 'none';
    } else {
      btnSearch.setAttribute('src', './img/icon-search.svg');
      contentSearch.style.border = 'none';
      inputSearch.style.border = '1px solid #572EE5';
    }
  }

  if (event.keyCode === 13) {
    buscador(input.value);
    titleSearch.style.display = 'block';
    titleSearch.innerHTML = `<h3>${input.value}</h3>`;
    btnVerMas.style.display = 'block';
    input.value = '';
    sugestionsBox.style.display = 'none';
    (<HTMLImageElement>btnLeft).style.visibility = 'hidden';
    btnSearch.setAttribute('src', './img/icon-search.svg');
  }
  sugerencias(input.value);
});

for (let i = 0; i < 4; i++) {
  results[i].addEventListener('click', () => {
    buscador(results[i].innerHTML);
    input.value = results[i].innerHTML;
    sugestionsBox.style.display = 'none';
    titleSearch.style.display = 'block';
    btnVerMas.style.display = 'block';
    titleSearch.innerHTML = `<h3>${input.value}</h3>`;
  });
}

btnVerMas.addEventListener('click', () => {
  contador = contador + 12;
  callGif(contador, titleSearch.innerHTML);
});
