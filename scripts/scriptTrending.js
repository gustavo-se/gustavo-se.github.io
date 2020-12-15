let gifOfTrendings = document.getElementsByClassName('trending-gif')
let sliderLeftCarrousel = document.getElementById('slider-left-carrousel')
let sliderRigthCarrousel = document.getElementById('slider-rigth-carrousel')
let carrousel = document.querySelector('.carrousel') 

window.addEventListener('load',() => {
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=bdrONB5N1ZSySk8VvFBXF18Yut13R6tX&limit=11&rating=g')
    .then(res => res.json())
    .then(res => {
        for(let i = 0; i< gifOfTrendings.length; i++){
            gifOfTrendings[i].setAttribute('src', res.data[i].images.original.url)
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



 