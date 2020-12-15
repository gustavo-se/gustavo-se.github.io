let slidersRight = document.getElementsByClassName('slider-rigth')
let slidersLeft = document.getElementsByClassName('slider-left')
let gifsBox = document.getElementsByClassName('gif-box')
let hoverBox = document.createElement('div')
hoverBox.classList.add('hover-box')


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

for(let i = 0; i < gifsBox.length; i++){
    gifsBox[i].addEventListener('mouseover',() =>{
        hoverBox.style.display = 'block'
        gifsBox[i].appendChild(hoverBox)
    })
    gifsBox[i].addEventListener('mouseout', ()=>{
        hoverBox.style.display = 'none'
    })
}
