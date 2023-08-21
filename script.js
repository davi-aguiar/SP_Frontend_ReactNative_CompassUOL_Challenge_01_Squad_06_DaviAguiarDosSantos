"use strict";
const toggleButton = document.getElementById('toggleDarkMode');
const body = document.body;
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
