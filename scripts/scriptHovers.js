let slidersRight = document.getElementsByClassName('slider-rigth')
let slidersLeft = document.getElementsByClassName('slider-left')
let trendingsGif = document.getElementsByClassName('trendings-gif')
let hoverBox = document.createElement('div')
hoverBox.classList.add('hover-box')

const contentHover = (iconOne, iconTwo, iconThree ) => {
    hoverBox.innerHTML = `<div class="icons-box"><img src=${iconOne} class="fav-icon" alt="fav" /><img class="download-icon" src=${iconTwo} alt="download"/><img src=${iconThree} class="expand-icon" alt="expand" /> </div><div class="info"><p>User</p><p>Titulo GIFO </p>`
}

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

for(let i = 0; i < trendingsGif.length; i++){
    trendingsGif[i].addEventListener('mouseover',() =>{
        hoverBox.style.display = 'flex'
    trendingsGif[i].appendChild(hoverBox)
    contentHover('./img/icon-fav.svg', './img/icon-download.svg','./img/icon-max-normal.svg')
    })
    trendingsGif[i].addEventListener('mouseout', ()=>{
        hoverBox.style.display = 'none'
    })
}
