const menuButton = document.querySelector('.menu-button');
const navList = document.querySelector('.nav-list');

menuButton.addEventListener('click', () => {
    navList.classList.toggle('show');
});
