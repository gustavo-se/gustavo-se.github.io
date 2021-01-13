links[2].addEventListener('click', () => {
    misGifosSection.classList.add('mis-gifos')
    misGifosSection.id = 'mis-gifos-section'

    activeSection(links[2])

    displaySections(misGifosSection, favoritesSection)
    
    misGifosSection.innerHTML = `<img src="./img/icon-mis-gifos.svg" alt="">
    <div class="mis-gifos-titulo"><h3>Mis GIFOS</h3></div>
    <div class="mis-gifos-box"></div>`
    
})


