const toggleButton = document.getElementById('toggleDarkMode') as HTMLElement;
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
