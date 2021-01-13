links[1].addEventListener('click', () => {

    activeSection(links[1])

    displaySections(favoritesSection, misGifosSection)

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
