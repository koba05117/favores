function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
}


window.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const menuIcon = document.querySelector('.menu-icon');


    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove('open');
    }

});

    document.getElementById('homeLink').addEventListener('click', function() {
        window.location.href = '../index.html';
});

