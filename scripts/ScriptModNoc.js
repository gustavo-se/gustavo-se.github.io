links[0].addEventListener('click', () =>{

    header.classList.toggle('fondo-noc-first')
    main.classList.toggle('fondo-noc-first')
    footer.classList.toggle('fondo-noc-first')
    trendingSection.classList.toggle('fondo-noc-second')

    for (let i = 0; i < espacioAzul.length; i++) {
         espacioAzul[i].classList.toggle('espacio-negro')   
    }
    

    modoNocHeader()
    modoNocMain()
    modoNocTrending()
    modoNocCrearGifo()
})

const modoNocHeader = () =>{
    switch (logoGifos.getAttribute('src')) {
        case './img/logo-desktop.svg':
            logoGifos.setAttribute('src', './img/Logo-modo-noc.svg')
            break

        case './img/Logo-modo-noc.svg':
            logoGifos.setAttribute('src', './img/logo-desktop.svg')
            break

        case './img/logo-mobile.svg':
            logoGifos.setAttribute('src', './img/logo-mobile-modo-noct.svg')
            break
        
        case './img/logo-mobile-modo-noct.svg':
            logoGifos.setAttribute('src', './img/logo-mobile.svg')
            break
   }

   for(let i = 0; i < links.length; i++){
       links[i].classList.toggle('words-noc-first')
   }
   
   switch (crearGifo.getAttribute('src')) {
        case './img/button-crear-gifo.svg':
           crearGifo.setAttribute('src', './img/CTA-crar-gifo-modo-noc.svg')
           break;

        case './img/CTA-crar-gifo-modo-noc.svg':
            crearGifo.setAttribute('src', './img/button-crear-gifo.svg')
            break
        
        case './img/CTA-crear-gifo-active.svg':
            crearGifo.setAttribute('src', './img/CTA-crear-gifo-active-modo-noc.svg')
            break
        
        case './img/CTA-crear-gifo-active-modo-noc.svg':
            crearGifo.setAttribute('src', './img/CTA-crear-gifo-active.svg')
            break
   }
}

const modoNocMain = () => {
    contentSearch.classList.toggle('modo-noc')
    tittleBuscador.classList.toggle('words-noc-first')
    input.classList.toggle('fondo-noc-first')
    input.classList.toggle('words-noc-second')
    trendingGifos.firstElementChild.classList.toggle('words-noc-first')
    trendingGifos.lastElementChild.classList.toggle('words-noc-first')
    
    switch (btnSearch.getAttribute('src')) {
        case './img/icon-search.svg':
            btnSearch.setAttribute('src', './img/icon-search-mod-noc.svg')
            inputSearch.classList.add('border-noc-first')
            break
    
        case './img/icon-search-mod-noc.svg':
            btnSearch.setAttribute('src', './img/icon-search.svg')
            inputSearch.classList.remove('border-noc-first')
            inputSearch.style.border = '1px solid #572EE5'
            break

        case './img/close.svg':
            btnSearch.setAttribute('src', './img/close-modo-noct.svg')
            inputSearch.style.border = 'none'
            contentSearch.classList.add('border-noc-first')
            break
        
        case './img/close-modo-noct.svg':
            btnSearch.setAttribute('src', './img/close.svg')
            inputSearch.style.border = 'none'
            contentSearch.classList.remove('border-noc-first')
            contentSearch.style.border = '1px solid #572EE5'
            break
    }

    for(let i = 0; i < trendingGifos.lastElementChild.children.length; i++){
        trendingGifos.lastElementChild.children[i].classList.toggle('words-noc-first')
    }

    footer.firstElementChild.classList.toggle('words-noc-first')
    footer.lastElementChild.classList.toggle('words-noc-first')
}

const modoNocTrending = () =>{
    for (let i = 0; i < tittleTrending.children.length; i++) {
        tittleTrending.children[i].classList.toggle('words-noc-first')    
    }

    for (let i = 0; i < slidersLeft.length; i++) {
        switch (slidersLeft[i].getAttribute('src')) {
            case './img/button-slider-left.svg':
                slidersLeft[i].setAttribute('src', './img/button-slider-left-md-noct.svg')
                slidersLeft[i].classList.add('mod-noc')
                break
            
            case './img/button-slider-left-md-noct.svg':
                slidersLeft[i].setAttribute('src', './img/button-slider-left.svg')
                slidersLeft[i].classList.remove('mod-noc')
        }   
    } 

    for (let i = 0; i < slidersRight.length; i++) {
        switch (slidersRight[i].getAttribute('src')) {
            case './img/Button-Slider-right.svg':
                slidersRight[i].setAttribute('src', './img/Button-Slider-right-md-noct.svg')
                slidersRight[i].classList.add('mod-noc')
                break
            
            case './img/Button-Slider-right-md-noct.svg':
                slidersRight[i].setAttribute('src', './img/Button-Slider-right.svg')
                slidersRight[i].classList.remove('mod-noc')
        } 
        
    }
}

const modoNocCrearGifo = () =>{

    switch (crearGifo.getAttribute('src')) {
        case './img/CTA-crear-gifo-active-modo-noc.svg':
           setClassModNocCrearGifo()
            break;
        
        case './img/CTA-crear-gifo-active.svg':
            crearGifo.classList.remove('mod-noc-on')
            crearGifo.classList.add('mod-noc-off')
    }

    if(crearGifo.classList.contains('mod-noc-off')) {
        
            document.querySelector('.crear-gifo-container h3').classList.remove('words-noc-first')
            document.querySelector('.crear-gifo-container').children[1].classList.remove('words-noc-first')
            document.querySelector('.crear-gifo-container').children[2].classList.remove('words-noc-first')
            document.querySelector('.crear-gifo-container').classList.remove('border-noc-first')
            let crearGifoPasos = document.querySelector('.crear-gifo-pasos').children
            for (let i = 0; i < crearGifoPasos.length; i++) {
                crearGifoPasos[i].classList.remove('words-noc-first')
                crearGifoPasos[i].classList.remove('border-noc-first')    
            }
            document.querySelector('.crear-gifo-espacio-azul').style.backgroundColor = '#572EE5'
            document.querySelector('.crear-gifo-button').classList.remove('words-noc-first')
            document.querySelector('.crear-gifo-button').classList.remove('border-noc-first')
            document.querySelector('.crear-gifo-button').classList.remove('hover-noc')
            
    }

}

const setClassModNocCrearGifo = () => {
    crearGifo.classList.remove('mod-noc-off')
    crearGifo.classList.add('mod-noc-on')
    document.querySelector('.crear-gifo-container h3').classList.add('words-noc-first')
    document.querySelector('.crear-gifo-container').children[1].classList.add('words-noc-first')
    document.querySelector('.crear-gifo-container').children[2].classList.add('words-noc-first')
    document.querySelector('.crear-gifo-container').classList.add('border-noc-first')
    let crearGifoPasos = document.querySelector('.crear-gifo-pasos').children
    for (let i = 0; i < crearGifoPasos.length; i++) {
        crearGifoPasos[i].classList.add('words-noc-first')
        crearGifoPasos[i].classList.add('border-noc-first')    
    }
    document.querySelector('.crear-gifo-espacio-azul').style.backgroundColor = '#ffffff'
    document.querySelector('.crear-gifo-button').classList.add('words-noc-first')
    document.querySelector('.crear-gifo-button').classList.add('border-noc-first')
    document.querySelector('.crear-gifo-button').classList.add('hover-noc')
}