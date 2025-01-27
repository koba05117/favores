// Selecciona todos los botones
const buttons = document.querySelectorAll('.info-button');

// Agrega un evento de clic a cada botón
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Encuentra el contenedor de información relacionado
        const infoBox = button.nextElementSibling;

        // Alterna la visibilidad
        if (infoBox.style.display === 'block') {
            infoBox.style.display = 'none';
        } else {
            infoBox.style.display = 'block';
        }
    });
});
