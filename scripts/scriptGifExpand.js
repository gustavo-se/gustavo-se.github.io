let header = document.querySelector('header')
let main = document.querySelector('main')
let footer = document.querySelector('footer')
let boxExpand = document.querySelector('.caja-expandido')
let btnExpand = document.querySelector('.btn-expand')
let closeExpand = document.querySelector('.cerrar')
let gifMax = document.querySelector('.gif-max')

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
