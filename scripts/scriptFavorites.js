links[1].addEventListener('click', () => {

    links[1].style.color = '#9CAFC3'
    searchSection.replaceWith(favoritesSection)
    favoritesSection.style.display = 'flex'

    saveFavorites = JSON.parse(sessionStorage['favoritos'])

    saveFavorites.forEach(item => {
        boxGif.querySelector('.gif').outerHTML = item
        boxGif.querySelector('.gif-box').classList.add('fav-gifs')
        
        let clone = boxGif.cloneNode(true)
        fragment.appendChild(clone)
        
    })
    favoritosBox.appendChild(fragment)
    
})

favoritosBox.addEventListener('mouseover', e => {
    boxHoverFlex(e)
    buttonHoverFav(e)
    buttonHoverDownload(e)
    buttonHoverMax(e)
})

favoritosBox.addEventListener('mouseout', e => {
    boxHoverNone(e)
    buttonNormalFav(e)
    buttonNormalDownload(e)
    buttonNormalMax(e)
})

favoritosBox.addEventListener('click', (e)=>{
    maxGif(e)
    downloadFunction(e)
    favActive(e)
})
