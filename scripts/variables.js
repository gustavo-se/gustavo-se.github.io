//API KEY
let apiKey = 'bdrONB5N1ZSySk8VvFBXF18Yut13R6tX'

//Fragment
let fragment = document.createDocumentFragment()

//Templates
let templateHover = document.getElementById('caja-hover').content

//Sliders
let slidersRight = document.getElementsByClassName('slider-rigth')
let slidersLeft = document.getElementsByClassName('slider-left')

// Menu Hamburguesa
let gifs = document.getElementsByClassName('gifs')
let menu = document.querySelector('.burger');
let ulDesplegado = document.getElementById('menu-desplegado');
let close = document.querySelector('.close');
let hamburguesa = document.getElementById('hamburguesa')

//Buscador
let contador = 1
let btnSearch = document.getElementById('btn-search')
let trendingGifos = document.querySelector(".trending")
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
let btnExpand = document.querySelector('.btn-expand')
let closeExpand = document.querySelector('.cerrar')
let gifMax = document.querySelector('.gif-max')

//Carrousel
let gifOfTrendings = document.getElementsByClassName('trending-gif')
let boxGifTrendings = document.getElementsByClassName('trendings-gif')
let sliderLeftCarrousel = document.getElementById('slider-left-carrousel')
let sliderRigthCarrousel = document.getElementById('slider-rigth-carrousel')
let carrousel = document.querySelector('.carrousel') 