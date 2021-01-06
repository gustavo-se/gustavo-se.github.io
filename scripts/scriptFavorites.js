links[1].addEventListener('click', () => {

    links[1].style.color = '#9CAFC3'
    searchSection.replaceWith(favoritesSection)
    favoritesSection.style.display = 'flex'

    if(sessionStorage.getItem('favoritos') === null){

        sinFavoritos()

    }else{

    while(favoritosBox.firstChild){
        favoritosBox.removeChild(favoritosBox.firstChild)
    }
    
    callFavorites()
    }
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
