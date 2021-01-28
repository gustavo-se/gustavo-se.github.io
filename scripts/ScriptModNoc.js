links[0].addEventListener('click', () =>{

    header.classList.toggle('fondo-noc-first')
    main.classList.toggle('fondo-noc-first')
    footer.classList.toggle('fondo-noc-first')
    trendingSection.classList.toggle('fondo-noc-second')

    modoNocHeader()
    modoNocMain()
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
    tittle.classList.toggle('words-noc-first')
    input.classList.toggle('fondo-noc-first')
    input.classList.toggle('words-noc-second')
    inputSearch.classList.toggle('border-noc')
    trendingGifos.firstElementChild.classList.toggle('words-noc-first')
    trendingGifos.lastElementChild.classList.toggle('words-noc-first')
    
    switch (btnSearch.getAttribute('src')) {
        case './img/icon-search.svg':
            btnSearch.setAttribute('src', './img/icon-search-mod-noc.svg')
            break;
    
        case './img/icon-search-mod-noc.svg':
            btnSearch.setAttribute('src', './img/icon-search.svg')
    }

    for(let i = 0; i < trendingGifos.lastElementChild.children.length; i++){
        trendingGifos.lastElementChild.children[i].classList.toggle('words-noc-first')
    }
}