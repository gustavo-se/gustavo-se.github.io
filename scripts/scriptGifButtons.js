//Eventos en botones del gif maximizado
//Fav button
maxButtomFav.addEventListener('click',()=>{
    if(maxButtomFav.getAttribute('src') === favButton){
    maxButtomFav.setAttribute('src', favActiveButton)
    maxButtomFav.classList.add('fav-icon-active')
    }else{
        maxButtomFav.setAttribute('src', favButton)
        maxButtomFav.classList.remove('fav-icon-active')
    }
})

//Download button
maxButtomDownload.addEventListener('click', () => {
    download(gifMax.firstElementChild)
})

//Close button
closeExpand.addEventListener('click', () => {
    maxGifClose()
})

//Pagina principal al hacer click al logo gifos
logoGifos.addEventListener('click', () => {
    principalPage()
})