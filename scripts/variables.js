//API KEY
export let apiKey = 'bdrONB5N1ZSySk8VvFBXF18Yut13R6tX';
//Fragment
export let fragment = document.createDocumentFragment();
//Templates
export let boxGif = (document.getElementById('box-gifs')).content;
//Logo gifos
export let logoGifos = document.querySelector('.logo-gifos img');
//Seccion buscador de gif
export let searchSection = document.querySelector('.buscador-de-gifs');
//Sliders
export let slidersRight = document.getElementsByClassName('slider-rigth');
export let slidersLeft = document.getElementsByClassName('slider-left');
//Botones
export let favButton = './img/icon-fav.svg';
export let favHoverButton = './img/icon-fav-hover.svg';
export let favActiveButton = './img/icon-fav-active.svg';
export let downloadButton = './img/icon-download.svg';
export let downloadHoverButton = './img/icon-download-hover.svg';
export let maxButton = './img/icon-max-normal.svg';
export let maxHoverButton = './img/icon-max-hover.svg';
export let linkButton = './img/icon-link-normal.svg';
export let linkHoverButton = './img/icon-link-hover.svg';
export let trashButton = './img/icon-trash-normal.svg';
export let trashHoverButton = './img/icon-trash-hover.svg';
//Menu Hamburguesa
export let gifs = document.getElementsByClassName('gifs');
export let menu = document.querySelector('.burger');
export let ulDesplegado = document.getElementById('menu-desplegado');
export let closeMenu = document.querySelector('.close');
export let hamburguesa = document.getElementById('hamburguesa');
//Buscador
export let btnSearch = document.getElementById('btn-search');
export let sectionSearch = document.querySelector('.buscador-de-gifs');
export let mainSearch = document.querySelector('.main-search');
export let inputSearch = document.querySelector('.imput-search');
export let input = document.querySelector('.imput-search input');
export let sugestionsBox = document.querySelector('.lista-sugerencias');
export let contentSearch = document.querySelector('.container-buscador');
export let results = document.getElementsByClassName('resultados');
export let btnLeft = document.querySelector('.imput-search i');
export let titleSearch = document.querySelector('.titulo-search');
export let containerSearch = document.createElement('div');
export let btnVerMas = document.createElement('button');
export let tittleBuscador = document.querySelector('.description h2');
//Gif Max
export let header = document.querySelector('header');
export let main = document.querySelector('main');
export let footer = document.querySelector('footer');
export let boxExpand = document.querySelector('.caja-expandido');
export let closeExpand = document.querySelector('.cerrar');
export let gifMax = document.querySelector('.gif-max');
export let dataGif = document.querySelector('.datos-gif');
export let maxButtomFav = document.querySelector('.acciones img');
export let maxButtomDownload = document.querySelector('.acciones-buttom-download');
//Trending
export let gifOfTrendings = document.getElementsByClassName('trending-gif');
export let boxGifTrendings = document.getElementsByClassName('trendings-gif');
export let sliderLeftCarrousel = document.getElementById('slider-left-carrousel');
export let sliderRigthCarrousel = document.getElementById('slider-rigth-carrousel');
export let carrousel = document.querySelector('.carrousel');
export let trendingGifos = document.querySelector('.trending');
export let trendingSection = document.getElementById('seccion-trending');
export let reactions = document.getElementById('reactions');
export let entertainment = document.getElementById('entertainment');
export let sports = document.getElementById('sports');
export let stickers = document.getElementById('stickers');
export let artists = document.getElementById('artists');
export let tittleTrending = document.querySelector('.trending-gifos');
//Favoritos
export let favoritesSection = document.getElementById('favoritos-section');
export let favoritosBox = document.querySelector('.favoritos-box');
export let links = document.getElementsByClassName('links');
export let iconFavSinContenido = document.createElement('img');
export let mensaje = document.createElement('h2');
//Mis Gifos
export let misGifosSection = document.createElement('div');
//Crear Gifos
export let crearGifosSection = document.createElement('div');
export let crearGifo = document.getElementById('boton-crear-gifo');
export let misGifosUrl = [];
//otros
export let espacioAzul = document.getElementsByClassName('espacio-azul');
containerSearch.classList.add('container-search');
sectionSearch.appendChild(containerSearch);
containerSearch.before(mainSearch);
btnVerMas.classList.add('btn-ver-mas');
btnVerMas.innerHTML = 'VER MÁS';
sectionSearch.appendChild(btnVerMas);
