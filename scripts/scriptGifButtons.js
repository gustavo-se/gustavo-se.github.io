for(let i = 0; i < boxGifTrendings.length; i++){
    boxGifTrendings[i].addEventListener('click', e =>{
    if(e.target.classList.contains('expand-icon')){
        header.style.display = 'none'
        main.style.display = 'none'
        footer.style.display = 'none'
        boxExpand.style.display = 'block'

        gifMax.innerHTML = `<img src=${gifOfTrendings[i].currentSrc} alt="gif">`
        dataGif.innerHTML= `${boxGifTrendings[i].childNodes[3].childNodes[3].childNodes[3].innerHTML}`
    }
    if(e.target.classList.contains('download-icon')){
        return download(gifOfTrendings[i])
    }
    if(e.target.classList.contains('fav-icon')){
        e.target.setAttribute('src', favActiveButton)
        e.target.classList.add('fav-icon-active')
        e.target.classList.remove('fav-icon')
        //insertar logica de agregar a favoritos
        console.log(e.target.classList.contains('fav-icon'))
    }else{
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