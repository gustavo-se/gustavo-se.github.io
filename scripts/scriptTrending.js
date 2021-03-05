window.addEventListener('load',() => {
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=bdrONB5N1ZSySk8VvFBXF18Yut13R6tX&limit=11&rating=g')
    .then(res => res.json())
    .then(res => {

        res.data.forEach(item =>{

            boxGif.querySelector('.gif').setAttribute('src', item.images.original.url)
            boxGif.querySelector('.gif').dataset.id =  item.id
            boxGif.querySelector('.gif-box').classList.add('trendings-gif')
            boxGif.querySelector('.gif').classList.add('trending-gif')
            boxGif.querySelector('.titulo-gif').textContent = item.title

            let clone = boxGif.cloneNode(true)
            fragment.appendChild(clone)
        })
        carrousel.appendChild(fragment)
    })

    if(localStorage.getItem('favoritos') === null || localStorage.getItem('favoritos') === '[]'){
        favorites = []
    }else{
        let datosLocal = JSON.parse(localStorage['favoritos'])
        favorites = datosLocal
    }
})

carrousel.addEventListener('mouseover', (e) =>{
    boxHoverFlex(e)
    btnHover(e, 'download-icon', downloadHoverButton)
    btnHover(e, 'expand-icon', maxHoverButton)
})

carrousel.addEventListener('mouseout', (e) =>{
    boxHoverNone(e)
    quitBtnHover(e, 'download-icon', downloadButton)
    quitBtnHover(e, 'expand-icon', maxButton)
})

carrousel.addEventListener('click', (e) =>{
    maxGif(e)
    downloadFunction(e)
    favActive(e)
})

let counter = 1
const size = 357

carrousel.style.transform = 'translateX(' + (-size * counter) + 'px)'

sliderRigthCarrousel.addEventListener('click', () => {
    if(counter >= gifOfTrendings.length - 1 ) return
    carrousel.style.transition = "transform 0.4s ease-in-out"
    counter++
    carrousel.style.transform = 'translateX(' + (-size * counter) + 'px)'
})

sliderLeftCarrousel.addEventListener('click', () => {
    if(counter<=0) return
    carrousel.style.transition = "transform 0.4s ease-in-out"
    counter--
    carrousel.style.transform = 'translateX(' + (-size * counter) + 'px)'
})

carrousel.addEventListener('transitionend', ()=>{
    if(gifOfTrendings[counter].id === 'last-clone'){
        carrousel.style.transition = "none"
        counter = gifOfTrendings.length -2 
        carrousel.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
    if(gifOfTrendings[counter].id === 'first-clone'){
        carrousel.style.transition = "none"
        counter = gifOfTrendings.length - counter
        carrousel.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
})

callTrendings(reactions)
callTrendings(entertainment)
callTrendings(sports)
callTrendings(stickers)
callTrendings(artists)


 