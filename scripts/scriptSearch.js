const buscador = (busqueda) => {
    trendingGifos.style.display = "none"
    contador = 1
    while (containerSearch.firstChild) {
        containerSearch.removeChild(containerSearch.firstChild);
    }
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${busqueda}&limit=12&rating=g`)
    .then(res => res.json())
    .then(res => {
        for(let i = 0; i< res.data.length ; i++){
        let containerSearchGif = document.createElement('div')
        containerSearchGif.classList.add('search-gifs', 'gif-box')
        containerSearch.appendChild(containerSearchGif)

        let searchedGifs = document.createElement('img')
        searchedGifs.classList.add('searched-gifs', 'gif')
        containerSearchGif.appendChild(searchedGifs)

        let hoverBox = document.createElement('div')
        hoverBox.classList.add('hover-box')
        containerSearchGif.appendChild(hoverBox)

        templateHover.querySelector('.titulo-gif').textContent = res.data[i].title

        let clone = templateHover.cloneNode(true)
        fragment.appendChild(clone)
    
        searchedGifs.setAttribute('src', res.data[i].images.original.url)
        searchedGifs.dataset.id = res.data[i].id
       
        hoverBox.appendChild(fragment)

        searchedGifs.addEventListener('mouseover', () => {
            hoverBox.style.display = 'flex'
        })

        hoverBox.addEventListener('mouseout', () => {
            hoverBox.style.display = 'none'
        })
        
        hoverFunction(hoverBox, 'mouseover', favHoverButton, downloadHoverButton, maxHoverButton)
           
        hoverFunction(hoverBox, 'mouseout', favButton, downloadButton, maxButton)
        
        searchButtons(containerSearchGif, searchedGifs)
        }
    })
}

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
    }
})


const sugerencias = term =>{
    fetch(`http://api.giphy.com/v1/gifs/search/tags?api_key=${apiKey}&q=${term}&limit=4`)
    .then(res => res.json())
    .then(res => {
          for(let i = 0; i < 4; i++){
              results[i].innerHTML = res.data[i].name 
         }
     })   
}
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
    titleSearch.innerHTML= `<h3>${input.value}</h3>`
    })
}

btnSearch.addEventListener('click', () => {
    input.value = ''
    sugestionsBox.style.display = 'none'
    btnLeft.style.visibility = 'hidden'
    btnSearch.setAttribute('src', './img/icon-search.svg')
})

btnVerMas.addEventListener('click',()=>{
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${input.value}&limit=12&offset=${ 12 * contador}&rating=g`)
    .then(res => res.json())
    .then(res => {
        for(let i = 0; i< res.data.length ; i++){
            let containerSearchGif = document.createElement('div')
            containerSearchGif.classList.add('search-gifs', 'gif-box')
            containerSearch.appendChild(containerSearchGif)
            let searchedGifs = document.createElement('img')
            searchedGifs.classList.add('searched-gifs', 'gif')
            containerSearchGif.appendChild(searchedGifs)
            
            let hoverBox = document.createElement('div')
            hoverBox.classList.add('hover-box')
            containerSearchGif.appendChild(hoverBox)

            templateHover.querySelector('.titulo-gif').textContent = res.data[i].title
            let clone = templateHover.cloneNode(true)
            fragment.appendChild(clone)
        
            searchedGifs.setAttribute('src', res.data[i].images.original.url)
            searchedGifs.dataset.id = res.data[i].id
            
            hoverBox.appendChild(fragment)

            searchedGifs.addEventListener('mouseover', () => {
                hoverBox.style.display = 'flex'
            })

            hoverBox.addEventListener('mouseout', () => {
                hoverBox.style.display = 'none'
            })

            hoverFunction(hoverBox, 'mouseover', favHoverButton, downloadHoverButton, maxHoverButton)
           
            hoverFunction(hoverBox, 'mouseout', favButton, downloadButton, maxButton)
            
            searchButtons(containerSearchGif, searchedGifs)

            }
    })
    contador++
})
