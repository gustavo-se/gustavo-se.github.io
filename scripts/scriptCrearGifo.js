crearGifo.addEventListener('click', () =>{
    crearGifosSection.classList.add('crear-gifo')
    crearGifo.setAttribute('src', './img/CTA-crear-gifo-active.svg')

    searchGif.style.display = 'none'
    trendingSection.style.display = 'none'
    favoritesSection.style.display = 'none'
    misGifosSection.style.display = 'none'

    crearGifosSection.innerHTML = `<div class="crear-gifo-container">
    <h3>Aqui podras crear tus propios <span>GIFOS</span></h3>
    <p>Crea tu GIFO en solo 3 pasos</p>
    <p>(solo necesitaras una camara para grabar tu video)</p>
    </div>
    <div class="crear-gifo-pasos">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </div>
    <div class="crear-gifo-espacio-azul"></div>
    <div class="crear-gifo-button">Comenzar</div>`

    main.appendChild(crearGifosSection)
})