//Hover left y rigth sliders
for(let i = 0; i < slidersLeft.length; i++ ){
    slidersLeft[i].addEventListener('mouseover',() => {
        slidersLeft[i].setAttribute('src', './img/button-slider-left-hover.svg')})
    slidersLeft[i].addEventListener('mouseout', () => {
        slidersLeft[i].setAttribute('src', './img/button-slider-left.svg')
    })
}

for(let i = 0; i < slidersRight.length; i++){
    slidersRight[i].addEventListener('mouseover',() => {
        slidersRight[i].setAttribute('src', './img/Button-Slider-right-hover.svg')})
    slidersRight[i].addEventListener('mouseout', () => {
        slidersRight[i].setAttribute('src', './img/Button-Slider-right.svg')
    })
}

//Funcion de display flex a la caja hover de los gifs
const boxHoverFlex = (e) => {
    if(e.target.classList.contains('gif')){
        e.target.nextElementSibling.style.display = 'flex'
}}

//Funcion quitar el hover box de los gif
const boxHoverNone = (e) => {
    if(e.target.classList.contains('hover-box')){
       e.target.style.display = 'none'
}}

//Funcion hover de los botones de los Gif
//Hover en el boton Fav
const buttonHoverFav = (e) =>{
    if(e.target.classList.contains('fav-icon')){
        e.target.setAttribute('src', favHoverButton)
}}

//Hover en el boton Download
const buttonHoverDownload = (e) =>{
    if(e.target.classList.contains('download-icon')){
        e.target.setAttribute('src',downloadHoverButton)
}}

//Hover en el boton max
const buttonHoverMax = (e) =>{
    if(e.target.classList.contains('expand-icon')){
        e.target.setAttribute('src', maxHoverButton)
}}

//Mouseout en el boton fav
const buttonNormalFav = (e) =>{
    if(e.target.classList.contains('fav-icon')){
        e.target.setAttribute('src', favButton)
}}

//Mouseout en el boton Download
const buttonNormalDownload = (e) =>{
    if(e.target.classList.contains('download-icon')){
        e.target.setAttribute('src', downloadButton)
}}

//Mouseout en el boton Max
const buttonNormalMax = (e) =>{
    if(e.target.classList.contains('expand-icon')){
        e.target.setAttribute('src', maxButton)
}}

//Funcion de boton expandir gif
const maxGif = (e) => {
    if(e.target.classList.contains('expand-icon')){
        header.style.display = 'none'
        main.style.display = 'none'
        footer.style.display = 'none'
        boxExpand.style.display = 'block'
        
        let img = e.target.parentElement.parentElement.previousElementSibling
        gifMax.innerHTML = `<img src=${img.getAttribute('src')} alt="gif" data-id=${img.dataset.id}>`
        let info = e.target.parentElement.nextElementSibling
        dataGif.innerHTML= info.lastElementChild.innerHTML
}}

//Funcion cerrar expandir gif
const maxGifClose = () => {
    boxExpand.style.display = 'none'
    header.style.display = 'block'
    main.style.display = 'block'
    footer.style.display = 'flex'
}

//Funcion download
async function download(imgTrend){
    let a = document.createElement('a')
    let response = await fetch(imgTrend.src)
    let file = await response.blob()
    a.download = 'MiNuevoGif.gif'
    a.href = window.URL.createObjectURL(file)
    a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':')
    a.click()
}

//Llamando a la funcion download
const downloadFunction = (e) =>{
    if(e.target.classList.contains('download-icon')){
        let img = e.target.parentElement.parentElement.previousElementSibling
        return download(img)
}}

//Funcion favorito activado/desactivado
const favActive = (e) => {
    if(e.target.classList.contains('fav-icon')){
        e.target.setAttribute('src', favActiveButton)
        e.target.classList.add('fav-icon-active')
        e.target.classList.remove('fav-icon')
        let img = e.target.parentElement.parentElement.parentElement.previousElementSibling
        addFavorites(img)
    }else if(e.target.classList.contains('fav-icon-active')){
        e.target.setAttribute('src', favButton)
        e.target.classList.remove('fav-icon-active')
        e.target.classList.add('fav-icon')  
        let img = e.target.parentElement.parentElement.parentElement.previousElementSibling
        quitFavorites(img)
}}

//Funcion agregar favoritos
const addFavorites = (gif) => {
    favorites.push(gif.outerHTML)
    console.log(favorites)
    let favoriteArray = JSON.stringify(favorites)
    sessionStorage.setItem('favoritos', favoriteArray)
}

//Funcion llamar a favoritos
const callFavorites = () =>{
    let saveFavorites = JSON.parse(sessionStorage['favoritos'])
    favoritosBox.style.flexDirection = 'row'

    let save = saveFavorites.filter(onlyUnique)
    
    save.forEach(item => {
        boxGif.querySelector('.gif').outerHTML = item
        boxGif.querySelector('.gif-box').classList.add('fav-gifs')
        boxGif.querySelector('.icon-fav img').setAttribute('src', favActiveButton)
        boxGif.querySelector('.icon-fav img').className = 'fav-icon-active pointer'
        
        let clone = boxGif.cloneNode(true)
        fragment.appendChild(clone)
        
    })

    favoritosBox.appendChild(fragment)
}

//Funcion evitar repetidos
const onlyUnique = (value, index, self) =>{
    return self.indexOf(value) === index
}

//Funcion sin favoritos aun
const sinFavoritos = () =>{
    let iconFavSinContenido = document.createElement('img')
   iconFavSinContenido.setAttribute('src', './img/icon-fav-sin-contenido.svg')

    let mensaje = document.createElement('h2')
    mensaje.textContent = '¡Guarda tu primer GIFO en Favoritos para que se muestre aquí!'

    favoritosBox.style.flexDirection = 'column'
    favoritosBox.appendChild(iconFavSinContenido)
    favoritosBox.appendChild(mensaje)
}

//Funcion quitar de favoritos
const quitFavorites = (gif) =>{
    let saveFavorites = JSON.parse(sessionStorage['favoritos'])

    let save = saveFavorites.filter(onlyUnique)

    if(save.indexOf(gif.outerHTML) >= 0){
        let i = save.indexOf(gif.outerHTML)
        save.splice(i,1)
    }
    if(favorites.indexOf(gif) >= 0){
        let i = favorites.indexOf(gif.outerHTML)
        favorites.splice(i,1)
    }

    let favoriteArray = JSON.stringify(save)
    sessionStorage.setItem('favoritos', favoriteArray)
    console.log(favorites)

}

//Funcion volver a pagina principal
const principalPage = () =>{
        favoritesSection.style.display = 'none'
        main.appendChild(searchSection)
        searchSection.after(trendingSection)
        linksColorBlue()
}

//Funcion cambiar el color de los links
const linksColorBlue = () => {
    for(let i = 0; i< links.length ; i++){
        if(links[i].className === 'links link-active'){
            links[i].style.color = '#572EE5'
        }
    }
}