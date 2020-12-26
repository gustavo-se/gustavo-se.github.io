const addFavorites = (gif) => {
    favorites.push(gif.outerHTML)
    let favoriteArray = JSON.stringify(favorites)
    sessionStorage.setItem('favoritos', favoriteArray)
}

links[1].addEventListener('click', () => {
    saveFavorites = JSON.parse(sessionStorage['favoritos'])
    
    saveFavorites.forEach(item => {
        let containerFavGif = document.createElement('div')
        containerFavGif.classList.add('fav-gifs', 'gif-box')
        favoritosBox.appendChild(containerFavGif)
        
        containerFavGif.innerHTML =  item

        let hoverBox = document.createElement('div')
        hoverBox.classList.add('hover-box')
        containerFavGif.appendChild(hoverBox)

        templateHover.querySelector('.titulo-gif').textContent = "Titulo"
        let clone = templateHover.cloneNode(true)
        fragment.appendChild(clone)
       
        hoverBox.appendChild(fragment)
        containerFavGif.addEventListener('mouseover', () => {
            hoverBox.style.display = 'flex'
        })

        hoverBox.addEventListener('mouseout', () => {
            hoverBox.style.display = 'none'
        })

        hoverFunction(hoverBox, 'mouseover', favHoverButton, downloadHoverButton, maxHoverButton)
       
        hoverFunction(hoverBox, 'mouseout', favButton, downloadButton, maxButton)
        
        searchButtons(containerFavGif, containerFavGif.firstElementChild )
    })

   
    //con favorites.children[i] podemos recorrer el id
})