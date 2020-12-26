//Botones en trending
for(let i = 0; i < boxGifTrendings.length; i++){
    boxGifTrendings[i].addEventListener('click', e =>{
    if(e.target.classList.contains('expand-icon')){
        header.style.display = 'none'
        main.style.display = 'none'
        footer.style.display = 'none'
        boxExpand.style.display = 'block'

        gifMax.innerHTML = `<img src=${gifOfTrendings[i].currentSrc} alt="gif" data-id=${gifOfTrendings[i].dataset.id}>>`
        dataGif.innerHTML= `${boxGifTrendings[i].childNodes[3].childNodes[3].childNodes[3].innerHTML}`
    }
    // if(favorites[i].dataset.id === gifMax.childNodes[0].dataset.id){
    //      maxButtomFav.setAttribute('src', favActiveButton)
    //  }
    if(e.target.classList.contains('download-icon')){
        return download(gifOfTrendings[i])
    }
    if(e.target.classList.contains('fav-icon')){
        e.target.setAttribute('src', favActiveButton)
        e.target.classList.add('fav-icon-active')
        e.target.classList.remove('fav-icon')
        addFavorites(gifOfTrendings[i])
    }else{
        e.target.setAttribute('src', favButton)
        e.target.classList.remove('fav-icon-active')
        e.target.classList.add('fav-icon')  
        //agregar logica de sacar de favoritos
    }
    e.stopPropagation()
})
}
closeExpand.addEventListener('click', () => {
    boxExpand.style.display = 'none'
    header.style.display = 'block'
    main.style.display = 'block'
    footer.style.display = 'flex'
})

//Botones en search
const searchButtons = (container, img) => {
container.addEventListener('click', e =>{
    if(e.target.classList.contains('expand-icon')){
        header.style.display = 'none'
        main.style.display = 'none'
        footer.style.display = 'none'
        boxExpand.style.display = 'block'

        gifMax.innerHTML = `<img src=${img.currentSrc} alt="gif" data-id=${img.dataset.id}>`
        dataGif.innerHTML= `${container.childNodes[1].childNodes[3].childNodes[3].innerHTML}`
    }
    if(e.target.classList.contains('download-icon')){
        return download(container)
    }
    if(e.target.classList.contains('fav-icon')){
        e.target.setAttribute('src', favActiveButton)
        e.target.classList.add('fav-icon-active')
        e.target.classList.remove('fav-icon')
        addFavorites(img)
        
    }else{
        e.target.classList.remove('fav-icon-active')
        e.target.classList.add('fav-icon')  
        //agregar logica de sacar de favoritos
    }
    e.stopPropagation()

    })
}
maxButtomFav.addEventListener('click',()=>{
    if(maxButtomFav.getAttribute('src') === favButton){
    maxButtomFav.setAttribute('src', favActiveButton)
    maxButtomFav.classList.add('fav-icon-active')
    }else{
        maxButtomFav.setAttribute('src', favButton)
        maxButtomFav.classList.remove('fav-icon-active')
    }
})

maxButtomDownload.addEventListener('click', () => {
    download(gifMax.firstElementChild)
})