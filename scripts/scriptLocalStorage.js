const addFavorites = (gif) => {
    favorites.push(gif)
    localStorage.setItem('favoritos', favorites)
}

console.log(localStorage.getItem('favoritos'))