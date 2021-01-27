links[0].addEventListener('click', () =>{

    header.classList.toggle('fondo-noc')
    main.classList.toggle('fondo-noc')
    footer.classList.toggle('fondo-noc')
    trendingSection.classList.toggle('fondo-noc')

    modoNocHeader()
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
       links[i].classList.toggle('words-noc')
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