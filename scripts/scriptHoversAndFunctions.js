//Hover left y rigth sliders

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

//Funcion download
async function download(imgTrend){
    let a = document.createElement('a')
    let response = await fetch(imgTrend.src)
    let file = await response.blob()
    a.download = 'MiNuevoGif.gif'
    a.href = window.URL.createObjectURL(file)
    a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':')
    a.click()
}

//Funcion hover de los botones de los Gif

const hoverFunction = (hoverbox, listener, srcOne, srcTwo, srcThree, classChange = 'fav-icon') =>{
    hoverbox.addEventListener(listener, e =>{
        if(e.target.classList.contains(classChange)){
            e.target.setAttribute('src', srcOne)
        }
        if(e.target.classList.contains('download-icon')){
            e.target.setAttribute('src', srcTwo)
        }
        if(e.target.classList.contains('expand-icon')){
            e.target.setAttribute('src', srcThree)
        }
        e.stopPropagation()
    })
}