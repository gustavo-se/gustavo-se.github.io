let gifOfTrendings = document.getElementsByClassName('trending-gif')
let sliders = document.getElementsByClassName('slider')
let carrousel = document.querySelector('.carrousel') //xarrousel-slide

window.addEventListener('load',() => {
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=bdrONB5N1ZSySk8VvFBXF18Yut13R6tX&limit=9&rating=g')
    .then(res => res.json())
    .then(res => {
        for(let i = 1; i< (gifOfTrendings.length - 1) ; i++){
            gifOfTrendings[i].setAttribute('src', res.data[i].images.original.url)
        }
        gifOfTrendings[0].setAttribute('src', res.data[9].images.original.url )
        gifOfTrendings[10].setAttribute('src', res.data[0].images.original.url )
    })
    })


let counter = 1
const size = gifOfTrendings[0].clientWidth


carrousel.style.transform = 'translateX(' + (-size * counter) + 'px)'

sliders[1].addEventListener('click', () => {
    if(counter >= gifOfTrendings.length - 1 ) return
    carrousel.style.transition = "transform 0.4s ease-in-out"
    counter++
    carrousel.style.transform = 'translateX(' + (-size * counter) + 'px)'
})

sliders[0].addEventListener('click', () => {
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

sliders[0].addEventListener('mouseover',() => {
     sliders[0].setAttribute('src', './img/button-slider-left-hover.svg')})
 sliders[0].addEventListener('mouseout', () => {
     sliders[0].setAttribute('src', './img/button-slider-left.svg')
 })

 sliders[1].addEventListener('mouseover',() => {
     sliders[1].setAttribute('src', './img/Button-Slider-right-hover.svg')})
 sliders[1].addEventListener('mouseout', () => {
     sliders[1].setAttribute('src', './img/Button-Slider-right.svg')
 })

 