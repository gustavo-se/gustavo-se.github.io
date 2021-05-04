import { menu, ulDesplegado, closeMenu, hamburguesa } from './variables.js';

menu.addEventListener('click', () => {
  ulDesplegado.classList.toggle('ul-desplegado');
  closeMenu.classList.toggle('burger-close');
  hamburguesa.classList.toggle('close-burger');
});
closeMenu.addEventListener('click', () => {
  ulDesplegado.classList.toggle('ul-desplegado');
  closeMenu.classList.toggle('burger-close');
  hamburguesa.classList.toggle('close-burger');
});
