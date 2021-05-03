//API KEY
let apiKey: string = 'bdrONB5N1ZSySk8VvFBXF18Yut13R6tX';

//Fragment
let fragment: DocumentFragment = document.createDocumentFragment();

//Templates
let boxGif = (<HTMLMetaElement>document.getElementById('box-gifs')).content;

//Logo gifos
let logoGifos = document.querySelector('.logo-gifos img') as HTMLImageElement;

//Seccion buscador de gif
let searchSection = document.querySelector('.buscador-de-gifs') as HTMLElement;

//Sliders
let slidersRight: HTMLCollectionOf<Element> = document.getElementsByClassName(
  'slider-rigth'
);
let slidersLeft: HTMLCollectionOf<Element> = document.getElementsByClassName(
  'slider-left'
);

//Botones
let favButton: string = './img/icon-fav.svg';
let favHoverButton: string = './img/icon-fav-hover.svg';
let favActiveButton: string = './img/icon-fav-active.svg';
let downloadButton: string = './img/icon-download.svg';
let downloadHoverButton: string = './img/icon-download-hover.svg';
let maxButton: string = './img/icon-max-normal.svg';
let maxHoverButton: string = './img/icon-max-hover.svg';
let linkButton: string = './img/icon-link-normal.svg';
let linkHoverButton: string = './img/icon-link-hover.svg';
let trashButton: string = './img/icon-trash-normal.svg';
let trashHoverButton: string = './img/icon-trash-hover.svg';

//Menu Hamburguesa
let gifs: HTMLCollectionOf<Element> = document.getElementsByClassName('gifs');
let menu = document.querySelector('.burger') as HTMLImageElement;
let ulDesplegado = document.getElementById(
  'menu-desplegado'
) as HTMLUListElement;
let closeMenu = document.querySelector('.close') as HTMLImageElement;
let hamburguesa = document.getElementById('hamburguesa') as HTMLImageElement;

//Buscador
let contador: number = 1;
let btnSearch = document.getElementById('btn-search') as HTMLImageElement;
let sectionSearch: HTMLElement = document.querySelector('.buscador-de-gifs')!;
let mainSearch = document.querySelector('.main-search') as HTMLDivElement;
let inputSearch = document.querySelector('.imput-search') as HTMLDivElement;
let input = document.querySelector('.imput-search input') as HTMLInputElement;
let sugestionsBox = document.querySelector(
  '.lista-sugerencias'
) as HTMLDivElement;
let contentSearch = document.querySelector(
  '.container-buscador'
) as HTMLDivElement;
let results: HTMLCollectionOf<Element> = document.getElementsByClassName(
  'resultados'
);
let btnLeft: Element = document.querySelector('.imput-search i')!;
let titleSearch = document.querySelector('.titulo-search') as HTMLDivElement;
let containerSearch: HTMLDivElement = document.createElement('div');
let btnVerMas: HTMLButtonElement = document.createElement('button');
let tittleBuscador = document.querySelector(
  '.description h2'
) as HTMLHeadingElement;

//Gif Max
let header: HTMLElement = document.querySelector('header')!;
let main: HTMLElement = document.querySelector('main')!;
let footer: HTMLElement = document.querySelector('footer')!;
let boxExpand: HTMLElement = document.querySelector('.caja-expandido')!;
let closeExpand = document.querySelector('.cerrar') as HTMLDivElement;
let gifMax = document.querySelector('.gif-max') as HTMLDivElement;
let dataGif = document.querySelector('.datos-gif') as HTMLDivElement;
let maxButtomFav = document.querySelector('.acciones img') as HTMLImageElement;
let maxButtomDownload = document.querySelector(
  '.acciones-buttom-download'
) as HTMLImageElement;

//Trending
let sliderLeftCarrousel = document.getElementById(
  'slider-left-carrousel'
) as HTMLImageElement;
let sliderRigthCarrousel = document.getElementById(
  'slider-rigth-carrousel'
) as HTMLImageElement;
let carrousel = document.querySelector('.carrousel') as HTMLDivElement;
let trendingGifos = document.querySelector('.trending') as HTMLDivElement;
let trendingSection: HTMLElement = document.getElementById('seccion-trending')!;
let reactions = document.getElementById('reactions') as HTMLAnchorElement;
let entertainment = document.getElementById(
  'entertainment'
) as HTMLAnchorElement;
let sports = document.getElementById('sports') as HTMLAnchorElement;
let stickers = document.getElementById('stickers') as HTMLAnchorElement;
let artists = document.getElementById('artists') as HTMLAnchorElement;
let tittleTrending = document.querySelector(
  '.trending-gifos'
) as HTMLDivElement;

//Favoritos
let favoritesSection = document.getElementById(
  'favoritos-section'
) as HTMLDivElement;
let favoritosBox = document.querySelector('.favoritos-box') as HTMLDivElement;
let links: HTMLCollectionOf<Element> = document.getElementsByClassName('links');
let favorites: [] = [];
let iconFavSinContenido: HTMLImageElement = document.createElement('img');
let mensaje: HTMLHeadingElement = document.createElement('h2');

//Mis Gifos
let misGifosSection: HTMLDivElement = document.createElement('div');

//Crear Gifos
let crearGifosSection: HTMLDivElement = document.createElement('div');
let crearGifo = document.getElementById('boton-crear-gifo') as HTMLImageElement;
let streamGlobal: MediaStream;
let recorder: any;
let url: string;
let cronometro: number;
let misGifosUrl: string[] = [];

//otros
let espacioAzul: HTMLCollectionOf<Element> = document.getElementsByClassName(
  'espacio-azul'
);
containerSearch.classList.add('container-search');
sectionSearch.appendChild(containerSearch);
containerSearch.before(mainSearch);
btnVerMas.classList.add('btn-ver-mas');
btnVerMas.innerHTML = 'VER MÁS';
sectionSearch.appendChild(btnVerMas);
