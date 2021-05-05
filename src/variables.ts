//API KEY
export let apiKey: string = "bdrONB5N1ZSySk8VvFBXF18Yut13R6tX";

//Fragment
export let fragment: DocumentFragment = document.createDocumentFragment();

//Templates
export let boxGif: unknown = (<HTMLMetaElement>(
  document.getElementById("box-gifs")
)).content;

//Logo gifos
export let logoGifos = document.querySelector(
  ".logo-gifos img"
) as HTMLImageElement;

//Seccion buscador de gif
export let searchSection = document.querySelector(
  ".buscador-de-gifs"
) as HTMLElement;

//Sliders
export let slidersRight: HTMLCollectionOf<Element> = document.getElementsByClassName(
  "slider-rigth"
);
export let slidersLeft: HTMLCollectionOf<Element> = document.getElementsByClassName(
  "slider-left"
);

//Botones
export let favButton: string = "./img/icon-fav.svg";
export let favHoverButton: string = "./img/icon-fav-hover.svg";
export let favActiveButton: string = "./img/icon-fav-active.svg";
export let downloadButton: string = "./img/icon-download.svg";
export let downloadHoverButton: string = "./img/icon-download-hover.svg";
export let maxButton: string = "./img/icon-max-normal.svg";
export let maxHoverButton: string = "./img/icon-max-hover.svg";
export let linkButton: string = "./img/icon-link-normal.svg";
export let linkHoverButton: string = "./img/icon-link-hover.svg";
export let trashButton: string = "./img/icon-trash-normal.svg";
export let trashHoverButton: string = "./img/icon-trash-hover.svg";

//Menu Hamburguesa
export let gifs: HTMLCollectionOf<Element> = document.getElementsByClassName(
  "gifs"
);
export let menu = document.querySelector(".burger") as HTMLImageElement;
export let ulDesplegado = document.getElementById(
  "menu-desplegado"
) as HTMLUListElement;
export let closeMenu = document.querySelector(".close") as HTMLImageElement;
export let hamburguesa = document.getElementById(
  "hamburguesa"
) as HTMLImageElement;

//Buscador
export let btnSearch = document.getElementById(
  "btn-search"
) as HTMLImageElement;
export let sectionSearch: HTMLElement = document.querySelector(
  ".buscador-de-gifs"
)!;
export let mainSearch = document.querySelector(
  ".main-search"
) as HTMLDivElement;
export let inputSearch = document.querySelector(
  ".imput-search"
) as HTMLDivElement;
export let input = document.querySelector(
  ".imput-search input"
) as HTMLInputElement;
export let sugestionsBox = document.querySelector(
  ".lista-sugerencias"
) as HTMLDivElement;
export let contentSearch = document.querySelector(
  ".container-buscador"
) as HTMLDivElement;
export let results: HTMLCollectionOf<Element> = document.getElementsByClassName(
  "resultados"
);
export let btnLeft: Element = document.querySelector(".imput-search i")!;
export let titleSearch = document.querySelector(
  ".titulo-search"
) as HTMLDivElement;
export let containerSearch: HTMLDivElement = document.createElement("div");
export let btnVerMas: HTMLButtonElement = document.createElement("button");
export let tittleBuscador = document.querySelector(
  ".description h2"
) as HTMLHeadingElement;

//Gif Max
export let header: HTMLElement = document.querySelector("header")!;
export let main: HTMLElement = document.querySelector("main")!;
export let footer: HTMLElement = document.querySelector("footer")!;
export let boxExpand: HTMLElement = document.querySelector(".caja-expandido")!;
export let closeExpand = document.querySelector(".cerrar") as HTMLDivElement;
export let gifMax = document.querySelector(".gif-max") as HTMLDivElement;
export let dataGif = document.querySelector(".datos-gif") as HTMLDivElement;
export let maxButtomFav = document.querySelector(
  ".acciones img"
) as HTMLImageElement;
export let maxButtomDownload = document.querySelector(
  ".acciones-buttom-download"
) as HTMLImageElement;

//Trending
export let gifOfTrendings: HTMLCollectionOf<Element> = document.getElementsByClassName(
  "trending-gif"
);
export let boxGifTrendings: HTMLCollectionOf<Element> = document.getElementsByClassName(
  "trendings-gif"
);
export let sliderLeftCarrousel = document.getElementById(
  "slider-left-carrousel"
) as HTMLImageElement;
export let sliderRigthCarrousel = document.getElementById(
  "slider-rigth-carrousel"
) as HTMLImageElement;
export let carrousel = document.querySelector(".carrousel") as HTMLDivElement;
export let trendingGifos = document.querySelector(
  ".trending"
) as HTMLDivElement;
export let trendingSection: HTMLElement = document.getElementById(
  "seccion-trending"
)!;
export let reactions = document.getElementById(
  "reactions"
) as HTMLAnchorElement;
export let entertainment = document.getElementById(
  "entertainment"
) as HTMLAnchorElement;
export let sports = document.getElementById("sports") as HTMLAnchorElement;
export let stickers = document.getElementById("stickers") as HTMLAnchorElement;
export let artists = document.getElementById("artists") as HTMLAnchorElement;
export let tittleTrending = document.querySelector(
  ".trending-gifos"
) as HTMLDivElement;

//Favoritos
export let favoritesSection = document.getElementById(
  "favoritos-section"
) as HTMLDivElement;
export let favoritosBox = document.querySelector(
  ".favoritos-box"
) as HTMLDivElement;
export let links: HTMLCollectionOf<Element> = document.getElementsByClassName(
  "links"
);

export let iconFavSinContenido: HTMLImageElement = document.createElement(
  "img"
);
export let mensaje: HTMLHeadingElement = document.createElement("h2");

//Mis Gifos
export let misGifosSection: HTMLDivElement = document.createElement("div");

//Crear Gifos
export let crearGifosSection: HTMLDivElement = document.createElement("div");
export let crearGifo = document.getElementById(
  "boton-crear-gifo"
) as HTMLImageElement;
export let misGifosUrl: string[] = [];

//otros
export let espacioAzul: HTMLCollectionOf<Element> = document.getElementsByClassName(
  "espacio-azul"
);
containerSearch.classList.add("container-search");
sectionSearch.appendChild(containerSearch);
containerSearch.before(mainSearch);
btnVerMas.classList.add("btn-ver-mas");
btnVerMas.innerHTML = "VER MÁS";
sectionSearch.appendChild(btnVerMas);
console.log(links);
