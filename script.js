/* Código não está funcional (olhar fim do projeto)
const menuButton = document.querySelector('.menu-button');
const navList = document.querySelector('.nav-list');

menuButton.addEventListener('click', () => {
    navList.classList.toggle('show');
});
*/

const toggleButton = document.getElementById('toggleDarkMode');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});