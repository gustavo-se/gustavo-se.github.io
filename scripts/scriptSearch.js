let btnSearch = document.getElementById('btn-search')
let trendingGifos = document.querySelector(".trending")
let sectionSearch = document.querySelector(".buscador-de-gifs")
let mainSearch = document.querySelector(".main-search")
let input = document.querySelector('.imput-search input')
let containerSearch = document.createElement('div')
containerSearch.classList.add('container-search')
sectionSearch.appendChild(containerSearch)
containerSearch.before(mainSearch)

const buscador = (busqueda) => {
    trendingGifos.style.display = "none"

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=bdrONB5N1ZSySk8VvFBXF18Yut13R6tX&q=${busqueda}&limit=12&rating=g`)
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



btnSearch.addEventListener('click', () => {
    buscador(input.value)
})

input.addEventListener('click', (event) => {
    console.log(event.target)
})






