var toggleButton = document.getElementById('toggleDarkMode');
var body = document.body;
toggleButton.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
});
