//API KEY
let apiKey = 'bdrONB5N1ZSySk8VvFBXF18Yut13R6tX'

//Fragment
let fragment = document.createDocumentFragment()

//Templates
let boxGif = document.getElementById('box-gifs').content

//Logo gifos
let logoGifos = document.querySelector('.logo-gifos img')

//Seccion buscador de gif
let searchSection = document.querySelector('.buscador-de-gifs')

//Sliders
let slidersRight = document.getElementsByClassName('slider-rigth')
let slidersLeft = document.getElementsByClassName('slider-left')

//Botones
let favButton = './img/icon-fav.svg'
let favHoverButton = './img/icon-fav-hover.svg'
let favActiveButton = './img/icon-fav-active.svg'
let downloadButton = './img/icon-download.svg'
let downloadHoverButton = './img/icon-download-hover.svg'
let maxButton = './img/icon-max-normal.svg'
let maxHoverButton = './img/icon-max-hover.svg'
let linkButton = './img/icon-link-normal.svg'
let linkHoverButton = './img/icon-link-hover.svg'

//Menu Hamburguesa
let gifs = document.getElementsByClassName('gifs')
let menu = document.querySelector('.burger');
let ulDesplegado = document.getElementById('menu-desplegado');
let close = document.querySelector('.close');
let hamburguesa = document.getElementById('hamburguesa')

//Buscador
let contador = 1
let btnSearch = document.getElementById('btn-search')
let sectionSearch = document.querySelector(".buscador-de-gifs")
let mainSearch = document.querySelector(".main-search")
let inputSearch = document.querySelector(".imput-search")
let input = document.querySelector('.imput-search input')
let sugestionsBox = document.querySelector('.lista-sugerencias')
let contentSearch = document.querySelector('.container-buscador')
let results = document.getElementsByClassName('resultados')
let btnLeft = document.querySelector('.imput-search i')
let titleSearch = document.querySelector('.titulo-search')
let containerSearch = document.createElement('div')
containerSearch.classList.add('container-search')
sectionSearch.appendChild(containerSearch)
containerSearch.before(mainSearch)
let searchGif = document.querySelector('.buscador-de-gifs')
let btnVerMas = document.createElement('button')
btnVerMas.classList.add('btn-ver-mas')
btnVerMas.innerHTML = 'VER MÁS'
searchGif.appendChild(btnVerMas)

//Gif Max
let header = document.querySelector('header')
let main = document.querySelector('main')
let footer = document.querySelector('footer')
let boxExpand = document.querySelector('.caja-expandido')
let closeExpand = document.querySelector('.cerrar')
let gifMax = document.querySelector('.gif-max')
let dataGif = document.querySelector('.datos-gif')
let maxButtomFav = document.querySelector('.acciones img')
let maxButtomDownload = document.querySelector('.acciones-buttom-download')

//Carrousel
let gifOfTrendings = document.getElementsByClassName('trending-gif')
let boxGifTrendings = document.getElementsByClassName('trendings-gif')
let sliderLeftCarrousel = document.getElementById('slider-left-carrousel')
let sliderRigthCarrousel = document.getElementById('slider-rigth-carrousel')
let carrousel = document.querySelector('.carrousel') 
let trendingGifos = document.querySelector(".trending")
let trendingSection = document.getElementById('seccion-trending')

//Favoritos
let favoritesSection = document.getElementById('favoritos-section')
let favoritosBox = document.querySelector('.favoritos-box')
let links = document.getElementsByClassName('links')
let favorites = []
let iconFavSinContenido = document.createElement('img')
let mensaje = document.createElement('h2')

//Mis Gifos
let misGifosSection = document.createElement('div')
let iconMisGifosSinContenido = document.createElement('img')
//let mensaje = document.createElement('h2')

//Crear Gifos
let crearGifosSection = document.createElement('div')
let crearGifo = document.getElementById('boton-crear-gifo')
let streamGlobal
let recorder
let url
let cronometro