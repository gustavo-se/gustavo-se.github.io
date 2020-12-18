btnExpand.addEventListener('click', () => {
    header.style.display = 'none'
    main.style.display = 'none'
    footer.style.display = 'none'
    boxExpand.style.display = 'block'

    for(let i = 0; i < gifs.length; i++){
        gifMax.innerHTML = `<img src=${gifs[i].src} alt="gif">`
        //gifMax.setAttribute('src', gifs[i].src)
    }
})

closeExpand.addEventListener('click', () => {
    boxExpand.style.display = 'none'
    header.style.display = 'block'
    main.style.display = 'block'
    footer.style.display = 'flex'
})
