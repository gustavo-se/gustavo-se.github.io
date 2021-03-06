let cronometro: number;
let streamGlobal: MediaStream;
let recorder: any;
let url: string;
import {
  updateClipboard,
  downloadFunction,
} from "./scriptHoversAndFunctions.js";
import { setClassModNocCrearGifo } from "./scriptModNoc.js";
import {
  crearGifo,
  crearGifosSection,
  sectionSearch,
  trendingSection,
  favoritesSection,
  misGifosSection,
  main,
  downloadHoverButton,
  linkHoverButton,
  downloadButton,
  linkButton,
  apiKey,
  misGifosUrl,
} from "./variables.js";
crearGifo.addEventListener("click", () => {
  crearGifosSection.classList.add("crear-gifo");

  switch (crearGifo.getAttribute("src")) {
    case "./img/CTA-crear-gifo-hover.svg":
      crearGifo.setAttribute("src", "./img/CTA-crear-gifo-active.svg");
      break;

    case "./img/CTA-crear-gifo-hover-modo-noc.svg":
      crearGifo.setAttribute("src", "./img/CTA-crear-gifo-active-modo-noc.svg");
      break;
  }

  sectionSearch.style.display = "none";
  trendingSection.style.display = "none";
  favoritesSection.style.display = "none";
  misGifosSection.style.display = "none";
  crearGifosSection.style.display = "flex";

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
    <div class="crear-gifo-button pointer comenzar">COMENZAR</div>`;

  setTimeout(() => {
    let btnComenzar = document.querySelector(
      ".crear-gifo-button"
    ) as HTMLDivElement;
    let crearGifoPasos = document.querySelector(
      ".crear-gifo-pasos"
    ) as HTMLDivElement;
    let container = document.querySelector(
      ".crear-gifo-container"
    ) as HTMLDivElement;
    if (
      btnComenzar.classList.contains("comenzar") &&
      crearGifo.getAttribute("src") ===
        "./img/CTA-crear-gifo-active-modo-noc.svg"
    ) {
      setClassModNocCrearGifo(btnComenzar, crearGifoPasos, container);
    }
  }, 50);

  main.appendChild(crearGifosSection);
});

crearGifosSection.addEventListener("click", e => {
  let crearGifoContainer = document.querySelector(
    ".crear-gifo-container"
  ) as HTMLDivElement;
  let crearGifoPasos = document.querySelector(
    ".crear-gifo-pasos"
  ) as HTMLDivElement;
  let crearGifoBtn = document.querySelector(
    ".crear-gifo-button"
  ) as HTMLDivElement;

  if (e.target && (<Element>e.target).classList.contains("comenzar")) {
    camaraAccess(crearGifoContainer, crearGifoPasos, crearGifoBtn);
  }
  if (e.target && (<Element>e.target).classList.contains("grabar")) {
    startRecord(crearGifoPasos, crearGifoBtn);
    record(streamGlobal);
  }
  if (e.target && (<Element>e.target).classList.contains("finalizar")) {
    endRecord(crearGifoBtn, crearGifoContainer, crearGifoPasos);
  }
  if (e.target && (<Element>e.target).classList.contains("subir-gifo")) {
    uploadGif(crearGifoContainer, crearGifoPasos, crearGifoBtn, url);
  }
});

const camaraAccess = (
  container: HTMLDivElement,
  pasos: HTMLDivElement,
  btn: HTMLDivElement
) => {
  switch (crearGifo.getAttribute("src")) {
    case "./img/CTA-crear-gifo-active-modo-noc.svg":
      container.innerHTML = `<h3 class="words-noc-first">¿Nos das acceso a tu cámara?</h3>
            <p class="words-noc-first">El acceso a tu camara será válido sólo</p>
            <p class="words-noc-first">por el tiempo en el que estés creando el GIFO.</p>`;

      pasos.innerHTML = `<div class="fondo-noc-third words-noc-first border-noc-first">1</div>
            <div class="words-noc-first border-noc-first">2</div>
            <div class="words-noc-first border-noc-first"> 3</div>`;
      break;

    case "./img/CTA-crear-gifo-active.svg":
      pasos.innerHTML = `<div class="fondo-azul">1</div>
            <div>2</div>
            <div>3</div>`;
      break;
  }

  btn.style.visibility = "hidden";
  captureCamera(container, pasos, btn);
};

const startRecord = (pasos: HTMLDivElement, btn: HTMLDivElement) => {
  let seg: number = 0;
  cronometro = setInterval(() => {
    seg++;
    switch (crearGifo.getAttribute("src")) {
      case "./img/CTA-crear-gifo-active-modo-noc.svg":
        pasos.innerHTML = `<div class="words-noc-first border-noc-first">1</div>
                <div class="fondo-noc-third words-noc-first border-noc-first">2</div>
                <div class="words-noc-first border-noc-first"> 3</div>
                <span class="temporizador words-noc-first">00:00:0${seg}</span>`;

        setTimeout(() => {
          btn.classList.value =
            "crear-gifo-button pointer finalizar mod-noc-on-grabar words-noc-first border-noc-first hover-noc";
        }, 1000);
        break;

      case "./img/CTA-crear-gifo-active.svg":
        pasos.innerHTML = `<div>1</div>
                <div class="fondo-azul">2</div>
                <div>3</div>
                <span class="temporizador">00:00:0${seg}</span>`;

        setTimeout(() => {
          btn.classList.value = "crear-gifo-button pointer finalizar";
        }, 1000);
        break;
    }
  }, 1000);

  btn.innerHTML = "FINALIZAR";
};

const endRecord = (
  btn: HTMLDivElement,
  container: HTMLDivElement,
  pasos: HTMLDivElement
) => {
  clearInterval(cronometro);
  let temporizador = document.querySelector(".temporizador") as HTMLSpanElement;
  btn.innerHTML = "SUBIR GIFO";
  temporizador.innerHTML = "REPETIR CAPTURA";
  temporizador.style.fontSize = "13px";
  temporizador.style.borderBottom = "2px solid #5ED7C6";
  temporizador.classList.add("pointer");

  switch (crearGifo.getAttribute("src")) {
    case "./img/CTA-crear-gifo-active-modo-noc.svg":
      setTimeout(() => {
        btn.classList.value =
          "crear-gifo-button pointer subir-gifo words-noc-first border-noc-first hover-noc mod-noc-on-grabar";
      }, 1000);
      break;

    case "./img/CTA-crear-gifo-active.svg":
      setTimeout(() => {
        btn.classList.value = "crear-gifo-button pointer subir-gifo";
      }, 1000);
      break;
  }

  recordStop(container);

  temporizador.addEventListener("click", () => {
    captureCamera(container, pasos, btn);
  });
};

const uploadGif = (
  container: HTMLDivElement,
  pasos: HTMLDivElement,
  btn: HTMLDivElement,
  url: string
) => {
  switch (crearGifo.getAttribute("src")) {
    case "./img/CTA-crear-gifo-active-modo-noc.svg":
      container.classList.add("border-noc-first");
      btn.classList.value = "crear-gifo-button mod-noc-on-grabar";
      container.innerHTML = `<img class="crear-gifo-container-gif" src="${url}">
            <div class="crear-gifo-container-hover">
            <div class="crear-gifo-container-hover-icons">
                <img src="./img/icon-download.svg" class="download-icon pointer"  alt="download"/>
                <img src="./img/icon-link-normal.svg" class="link-icon pointer" alt="link" />
            </div>
            <div class="crear-gifo-container-hover-descripcion">
                <img src="./img/loader.svg" class="icono"></img>
                <p class="descripcion">Estamos subiendo tu GIFO</p>
            </div>
            </div>`;

      pasos.innerHTML = `<div class="words-noc-first border-noc-first">1</div>
            <div class="words-noc-first border-noc-first">2</div>
            <div class="words-noc-first border-noc-first fondo-noc-third">3</div>`;
      break;

    case "./img/CTA-crear-gifo-active.svg":
      container.innerHTML = `<img class="crear-gifo-container-gif" src="${url}">
            <div class="crear-gifo-container-hover">
            <div class="crear-gifo-container-hover-icons">
                <img src="./img/icon-download.svg" class="download-icon pointer" id="download-crear-gif" alt="download"/>
                <img src="./img/icon-link-normal.svg" class="link-icon pointer" alt="link" />
            </div>
            <div class="crear-gifo-container-hover-descripcion">
                <img src="./img/loader.svg" class="icono"></img>
                <p class="descripcion">Estamos subiendo tu GIFO</p>
            </div>
            </div>`;

      pasos.innerHTML = `<div>1</div>
            <div>2</div>
            <div class="fondo-azul">3</div>`;

      btn.classList.value = "crear-gifo-button subir-gifo-on";
      break;
  }

  btn.style.visibility = "hidden";

  subirGif(recorder);
};

const finUpload = (url: string) => {
  (<HTMLDivElement>(
    document.querySelector(".crear-gifo-container-hover-icons")!
  )).style.visibility = "visible";
  document.querySelector(
    ".crear-gifo-container-hover-descripcion p"
  )!.textContent = "GIFO subido con éxito";

  (<HTMLImageElement>(
    document.querySelector(".crear-gifo-container-hover-descripcion img")!
  )).setAttribute("src", "./img/check.svg");

  (<HTMLImageElement>document.querySelector(".link-icon")!).addEventListener(
    "click",
    () => {
      updateClipboard(url);
    }
  );

  (<HTMLImageElement>(
    document.getElementById("download-crear-gif")!
  )).addEventListener("click", e => {
    downloadFunction(e);
  });
};

const captureCamera = (
  container: HTMLDivElement,
  pasos: HTMLDivElement,
  btn: HTMLDivElement
) => {
  navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: false,
    })
    .then(async stream => {
      container.innerHTML = `<video id="video"playsinline autoplay muted></video>`;
      container.style.width = "auto";
      container.style.height = "auto";

      switch (crearGifo.getAttribute("src")) {
        case "./img/CTA-crear-gifo-active-modo-noc.svg":
          pasos.innerHTML = `<div class="words-noc-first border-noc-first">1</div>
                    <div class="fondo-noc-third words-noc-first border-noc-first">2</div>
                    <div class="words-noc-first border-noc-first"> 3</div>`;

          btn.classList.value =
            "crear-gifo-button pointer grabar mod-noc-on-grabar words-noc-first border-noc-first hover-noc ";
          break;

        case "./img/CTA-crear-gifo-active.svg":
          pasos.innerHTML = `<div>1</div>
                    <div class="fondo-azul">2</div>
                    <div>3</div>`;

          btn.classList.value = "crear-gifo-button pointer grabar";
          break;
      }

      btn.innerHTML = `GRABAR`;
      btn.style.visibility = "visible";

      (<HTMLVideoElement>document.getElementById("video")!).srcObject = stream;
      streamGlobal = stream;
    })
    .catch(error => {
      alert("No podemos grabar");
      switch (crearGifo.getAttribute("src")) {
        case "./img/CTA-crear-gifo-active-modo-noc.svg":
          pasos.innerHTML = `<div class="fondo-noc-third words-noc-first border-noc-first">1</div>
                <div class="words-noc-first border-noc-first">2</div>
                <div class="words-noc-first border-noc-first"> 3</div>`;
          pasos.classList.add("rechazado");
          break;

        case "./img/CTA-crear-gifo-active.svg":
          pasos.innerHTML = `<div class="fondo-azul">1</div>
                <div>2</div>
                <div>3</div>`;
          pasos.classList.add("rechazado");
          break;
      }
      console.error(error);
    });
};

const record = (stream: MediaStream) => {
  recorder = RecordRTC(stream, {
    type: "gif",
  });
  recorder.startRecording();
  recorder.stream = stream;
};

const recordStop = (container: HTMLDivElement) => {
  recorder.stopRecording(() => {
    let blob = recorder.blob;
    url = URL.createObjectURL(blob);
    container.innerHTML = `<img class="crear-gifo-container-gif" src="${url}">`;

    recorder.stream.stop();
  });
};

const subirGif = (recorder: any) => {
  let form = new FormData();
  form.set("file", recorder.getBlob(), "myGif.gif");

  fetch(`https://upload.giphy.com/v1/gifs?api_key=${apiKey}`, {
    method: "POST",
    body: form,
  })
    .then(res => {
      return res.json();
    })
    .then(data => {
      let dataId: string = data.data.id;
      crearGifLocalStorage(dataId);
    });
};

const crearGifLocalStorage = (dataId: string) => {
  fetch(`https://api.giphy.com/v1/gifs/${dataId}?api_key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      misGifosUrl.push(data.data.images.original.url);
      let misGifosUrlArray = JSON.stringify(misGifosUrl);
      localStorage.setItem("misGifos", misGifosUrlArray);

      finUpload(data.data.images.original.url);
    });
};
