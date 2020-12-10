let apiKey = 'bdrONB5N1ZSySk8VvFBXF18Yut13R6tX'

let btnSearch = document.getElementById('btn-search')
let trendingGifos = document.querySelector(".trending")
let sectionSearch = document.querySelector(".buscador-de-gifs")
let mainSearch = document.querySelector(".main-search")
let inputSearch = document.querySelector(".imput-search")
let input = document.querySelector('.imput-search input')
let sugestionsBox = document.querySelector('.lista-sugerencias')
let contentSearch = document.querySelector('.container-buscador')
let results = document.getElementsByClassName('resultados')
let containerSearch = document.createElement('div')
containerSearch.classList.add('container-search')
sectionSearch.appendChild(containerSearch)
containerSearch.before(mainSearch)

const buscador = (busqueda) => {
    trendingGifos.style.display = "none"

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${busqueda}&limit=12&rating=g`)
    .then(res => res.json())
    .then(res => {
        for(let i = 0; i< res.data.length ; i++){
        let searchGifs = document.createElement('img')
        searchGifs.classList.add('search-gifs')
        containerSearch.appendChild(searchGifs)
        searchGifs.setAttribute('src', res.data[i].images.original.url)
        }
    })
}

input.addEventListener('keydown', (event) => {
    if(input.value.length >= 2){
        btnSearch.setAttribute('src', './img/close.svg')
    }else{
        btnSearch.setAttribute('src', './img/icon-search.svg')
    }
    if(event.keyCode === 13){
        buscador(input.value)
    }
})


const sugerencias = term =>{
    fetch(`http://api.giphy.com/v1/gifs/search/tags?api_key=${apiKey}&q=${term}&limit=4`)
    .then(res => res.json())
    .then(res => {
          for(let i = 0; i < 4; i++){
              results[i].innerHTML = `<i class="fas fa-search"></i>${res.data[i].name}`       
         }
     })   
}
input.addEventListener('keyup', () => {
    if(input.value.length >= 1){
        sugestionsBox.style.display = 'block'
        inputSearch.style.border = 'none'
        contentSearch.style.border = '1px solid #572EE5'
        contentSearch.style.borderRadius = '27px'
    }else{
        sugestionsBox.style.display = 'none'
    }
    sugerencias(input.value)
})