function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
}

window.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const menuIcon = document.querySelector('.menu-icon');

    if (menu && menuIcon && !menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove('open');
    }
});

const homeLink = document.querySelector('.Home');
if (homeLink) {
    homeLink.addEventListener('click', function(event) {
        event.preventDefault(); // Previene la acción predeterminada del enlace
        window.location.href = 'index.html';
    });
}