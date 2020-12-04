let menu = document.querySelector('.burger');
let ulDesplegado = document.getElementById('menu-desplegado');
let close = document.querySelector('.close');
let hamburguesa = document.getElementById('hamburguesa')
menu.addEventListener('click', ()=> {
    ulDesplegado.classList.toggle('ul-desplegado');
    close.classList.toggle('burger-close');
    hamburguesa.classList.toggle('close-burger')
} );
close.addEventListener('click', () => {
    ulDesplegado.classList.toggle('ul-desplegado');
    close.classList.toggle('burger-close');
    hamburguesa.classList.toggle('close-burger');
})




