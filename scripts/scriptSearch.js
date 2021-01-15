const buscador = () => {
    trendingGifos.style.display = "none"
    contador = 0
    while (containerSearch.firstChild) {
        containerSearch.removeChild(containerSearch.firstChild);
    }
    callGif(0)
}

//Funcion llamar gifs
const callGif = (offset) => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${input.value}&limit=12&offset=${offset}&rating=g`)
    .then(res => res.json())
    .then(res => {
        res.data.forEach(item => {

            boxGif.querySelector('.gif').setAttribute('src', item.images.original.url)
            boxGif.querySelector('.gif').dataset.id = item.id
            boxGif.querySelector('.gif-box').classList.add('search-gifs')
            boxGif.querySelector('.titulo-gif').textContent = item.title
    
            let clone = boxGif.cloneNode(true)
            fragment.appendChild(clone)
            
            })
            containerSearch.appendChild(fragment)
        })}

containerSearch.addEventListener('mouseover', e => {
    boxHoverFlex(e)
    btnHover(e, 'fav-icon', favHoverButton)
    btnHover(e, 'download-icon', downloadHoverButton)
    btnHover(e, 'expand-icon', maxHoverButton)
})

containerSearch.addEventListener('mouseout', e => {
    boxHoverNone(e)
    quitBtnHover(e, 'fav-icon', favButton)
    quitBtnHover(e, 'download-icon', downloadButton)
    quitBtnHover(e, 'expand-icon', maxButton)
})

containerSearch.addEventListener('click', e => {
    maxGif(e)
    downloadFunction(e)
    favActive(e)
})

input.addEventListener('keyup', (event) => {
    if(input.value.length >= 1){
        btnSearch.setAttribute('src', './img/close.svg')
    }else{
        btnSearch.setAttribute('src', './img/icon-search.svg')
    }
    if(event.keyCode === 13){
        buscador(input.value)
        titleSearch.style.display = 'block'
        titleSearch.innerHTML= `<h3>${input.value}</h3>`
        btnVerMas.style.display = 'block'
    }})

const sugerencias = term =>{
    fetch(`http://api.giphy.com/v1/gifs/search/tags?api_key=${apiKey}&q=${term}&limit=4`)
    .then(res => res.json())
    .then(res => {
          for(let i = 0; i < 4; i++){
              results[i].innerHTML = res.data[i].name 
    }}
)}

input.addEventListener('keyup', () => {
    if(input.value.length >= 1){
        sugestionsBox.style.display = 'block'
        inputSearch.style.border = 'none'
        contentSearch.style.border = '1px solid #572EE5'
        contentSearch.style.borderRadius = '27px'
        btnLeft.style.visibility = 'visible'
    }else{
        sugestionsBox.style.display = 'none'
        btnLeft.style.visibility = 'hidden'
    }
    sugerencias(input.value)
})

for(let i = 0; i < 4; i++ ){
    results[i].addEventListener('click', () =>{
    buscador(results[i].innerHTML)
    input.value = results[i].innerHTML
    sugestionsBox.style.display = 'none'
    titleSearch.style.display = 'block'
    btnVerMas.style.display = 'block'
    titleSearch.innerHTML= `<h3>${input.value}</h3>`
    })}

btnSearch.addEventListener('click', () => {
    input.value = ''
    sugestionsBox.style.display = 'none'
    btnLeft.style.visibility = 'hidden'
    btnSearch.setAttribute('src', './img/icon-search.svg')
})

btnVerMas.addEventListener('click',() =>{
    contador= contador + 12
    callGif(contador)
})