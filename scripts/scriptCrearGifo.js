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
    <div class="crear-gifo-button pointer comenzar">COMENZAR</div>`

    main.appendChild(crearGifosSection)
})

crearGifosSection.addEventListener('click', (e) => {
    crearGifoContainer = document.querySelector('.crear-gifo-container')
    crearGifoPasos = document.querySelector('.crear-gifo-pasos')
    crearGifoBtn = document.querySelector('.crear-gifo-button')

    if(e.target.classList.contains('comenzar')){
        camaraAccess(crearGifoContainer, crearGifoPasos, crearGifoBtn)
    }
    if(e.target.classList.contains('grabar')){
        startRecord(crearGifoPasos, crearGifoBtn)
        record(streamGlobal)
    }
    if(e.target.classList.contains('finalizar')){
        endRecord(crearGifoBtn, crearGifoContainer, crearGifoPasos)
    }
    if(e.target.classList.contains('subir-gifo')){
        uploadGif(crearGifoContainer, crearGifoPasos, crearGifoBtn, url)
    }
})

crearGifosSection.addEventListener('mouseover', (e) =>{
    btnHover(e, 'download-icon', downloadHoverButton)
    btnHover(e, 'link-icon', linkHoverButton)
})
crearGifosSection.addEventListener('mouseout', (e) =>{
    quitBtnHover(e, 'download-icon', downloadButton)
    quitBtnHover(e, 'link-icon', linkButton)
})

const camaraAccess = (container, pasos, btn) => {

    container.innerHTML = `<h3>¿Nos das acceso a tu cámara?</h3>
    <p>El acceso a tu camara será válido sólo</p>
    <p>por el tiempo en el que estés creando el GIFO.</p>`

    pasos.innerHTML = `<div class="fondo-azul">1</div>
    <div>2</div>
    <div>3</div>`

    btn.style.visibility = 'hidden'
    captureCamera(container, pasos, btn)
}

const startRecord = (pasos, btn) =>{
    let seg = 0
    cronometro = setInterval(() => {
        seg++ 
        pasos.innerHTML = `<div>1</div>
        <div class="fondo-azul">2</div>
        <div>3</div>
        <span class="temporizador">00:00:0${ seg }</span>`
    }, 1000);


    btn.innerHTML = 'FINALIZAR'
    setTimeout(() => {
        btn.classList = 'crear-gifo-button pointer finalizar'
    }, 1000);
    
}

const endRecord = (btn, container, pasos) =>{
    let temporizador = document.querySelector('.temporizador')
    btn.innerHTML = 'SUBIR GIFO'
    temporizador.innerHTML = 'REPETIR CAPTURA'
    temporizador.style.fontSize = '13px'
    temporizador.style.borderBottom = '2px solid #5ED7C6'
    temporizador.classList.add('pointer')

    setTimeout(() => {
        btn.classList = 'crear-gifo-button pointer subir-gifo'
    }, 1000);

    recordStop(container)

    temporizador.addEventListener('click', () => {
        captureCamera(container, pasos, btn)
    })

    clearInterval(cronometro)
}

const uploadGif = (container, pasos, btn, url ) =>{
    container.innerHTML = `<video src="${ url }" playsinline autoplay muted loop></video>
    <div class="crear-gifo-container-hover">
    <div class="crear-gifo-container-hover-icons">
        <img src="./img/icon-download.svg" class="download-icon pointer"  alt="download"/>
        <img src="./img/icon-link-normal.svg" class="link-icon pointer" alt="link" />
    </div>
    <div class="crear-gifo-container-hover-descripcion">
        <img src="./img/loader.svg" class="icono"></img>
        <p class="descripcion">Estamos subiendo tu GIFO</p>
    </div>
    </div>`

    pasos.innerHTML = `<div>1</div>
    <div>2</div>
    <div class="fondo-azul">3</div>`

    btn.style.visibility = 'hidden'

    setTimeout(() => {
        finUpload(container)
    }, 3000);
}

const finUpload = (container)=>{
    container.firstChild.nextElementSibling.firstElementChild.style.visibility = 'visible'
    container.firstChild.nextElementSibling.firstElementChild.nextElementSibling.lastElementChild.innerText = 'GIFO subido con éxito'
    container.firstChild.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.setAttribute('src', './img/check.svg')
}



const captureCamera = (container, pasos, btn) => {
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false 
        })
        .then(async(stream) => {
            container.innerHTML = `<video id="video"playsinline autoplay muted></video>`
            container.style.width = 'auto'
            container.style.height = 'auto'
            pasos.innerHTML =`<div>1</div>
            <div class="fondo-azul">2</div>
            <div>3</div>`

            btn.innerHTML = `GRABAR`
            btn.style.visibility = 'visible'
            btn.classList ='crear-gifo-button pointer grabar'
            
            document.getElementById('video').srcObject = stream
            streamGlobal = stream


    }).catch(error => {
        alert('No podemos grabar');
        console.error(error);
    });
}

const record = (stream) =>{
    recorder = RecordRTC(stream,{
        type: 'video'
    })
    recorder.startRecording()
}

const recordStop = (container) => {
    recorder.stopRecording(()=> {
        let blob = recorder.blob
        url = URL.createObjectURL(blob)
        container.innerHTML  = `<video src="${url}" playsinline autoplay muted loop></video>`
    })
}