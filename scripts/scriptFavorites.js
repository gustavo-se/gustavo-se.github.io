const addFavorites = (gif) => {
    favorites.push(gif.outerHTML)
    let favoriteArray = JSON.stringify(favorites)
    sessionStorage.setItem('favoritos', favoriteArray)
}

links[1].addEventListener('click', () => {
    saveFavorites = JSON.parse(sessionStorage['favoritos'])

    saveFavorites.forEach(item => {
        boxGif.querySelector('.gif').outerHTML = item
        let gif = boxGif.querySelector('.fav-gifs').firstElementChild
        
        let clone = boxGif.cloneNode(true)
        fragment.appendChild(clone)
        
    })
    favoritosBox.appendChild(fragment)
    
})

favoritosBox.addEventListener('mouseover', e => {
    if(e.target.classList.contains('gif')){
        e.target.nextElementSibling.style.display = 'flex'
    }
})

favoritosBox.addEventListener('mouseout', e => {
    if(e.target.classList.contains('hover-box')){
        e.target.style.display = 'none'
    }
})

hoverFunction(favoritosBox, 'mouseover', favHoverButton, downloadHoverButton, maxHoverButton) 
hoverFunction(favoritosBox, 'mouseout', favButton, downloadButton, maxButton)      