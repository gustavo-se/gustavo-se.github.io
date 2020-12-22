window.addEventListener('load',() => {
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=bdrONB5N1ZSySk8VvFBXF18Yut13R6tX&limit=11&rating=g')
    .then(res => res.json())
    .then(res => {
        for(let i = 0; i< gifOfTrendings.length; i++){
            
            let hoverBox = document.createElement('div')
            hoverBox.classList.add('hover-box')
            boxGifTrendings[i].appendChild(hoverBox)

            templateHover.querySelector('.titulo-gif').textContent = res.data[i].title
            let clone = templateHover.cloneNode(true)
            fragment.appendChild(clone)
            
            gifOfTrendings[i].setAttribute('src', res.data[i].images.original.url)
            // gifOfTrendings[i].dataset.id = res.data[i].id
            
            hoverBox.appendChild(fragment)
            
            gifOfTrendings[i].addEventListener('mouseover', () => {
                hoverBox.style.display = 'flex'
            })
            
            hoverBox.addEventListener('mouseout', () => {
                hoverBox.style.display = 'none'
            })
            
            hoverFunction(hoverBox, 'mouseover', favHoverButton, downloadHoverButton, maxHoverButton)
           
            hoverFunction(hoverBox, 'mouseout', favButton, downloadButton, maxButton)
        
        }
    })
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



 