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

// Datos para cada nombre
const userDetails = {
    Danny: [
        {Deuda: "Deuda 1: 2.000 Pesos", info: "Rodar la cama (20/01/2025)//(27/01/2025)--(20/02/2025)"},

        {Deuda: "Penalización: 200%", info: "Pasaron 7 dias, la proxima penalizacion (3/02/2025)--(20/02/2025)"},

        {Deuda: "Prestamo: 16.000 Pesos", info: "Prestamo de dinero (28/01/2025)//(04/02/2025)--(28/02/2025)"},

        {Deuda: "Total: 20.000 Pesos", info: "Penalización añadida"}
    ],
    Sophia: [
        {Deuda: "Deuda 1: 0 Pesos", info:"No tiene deudas"}
    ],
    Martha: [
        {Deuda: "Prestamo 1: 10 Pesos", info:"Prestamo de dinero (30/01/2025)//(06/02/2025)--(30/02/2025)"},
        {Deuda: "Deuda 1: 800 Pesos", info: "Llevar 2 vasos de agua (01/02/2025)//(08/02/2025)--(01/03/2025)"}
    ]
};

// Mostrar las deudas al hacer clic en un nombre
document.querySelectorAll(".name-item").forEach((item) => {
    item.addEventListener("click", (event) => {
        event.stopPropagation(); // Evita que el clic cierre el contenedor

        const name = item.dataset.name;

        // Actualiza el contenido del contenedor de detalles
        const detailsContainer = document.getElementById("detailsContainer");
        detailsContainer.innerHTML = `
            <h3>Deudas de ${name}</h3>
            <ul>
                ${userDetails[name].map((debt, index) => `
                    <li>
                        ${debt.Deuda} 
                        <button class="info-button" onclick="toggleDebtDetails(event, ${index}, '${name}')">➔</button>
                        <div class="info-box" id="info-box-${name}-${index}" style="display: none;">
                            ${debt.info}  <!-- Información personalizada -->
                        </div>
                    </li>
                `).join("")}
            </ul>`;
        detailsContainer.style.display = "block";
    });
});

// Función para alternar entre mostrar/ocultar el recuadro de información
function toggleDebtDetails(event, index, name) {
    const button = event.target;
    const infoBox = document.getElementById(`info-box-${name}-${index}`);

    // Cambiar entre mostrar/ocultar el recuadro de información
    if (infoBox.style.display === "none") {
        infoBox.style.display = "block"; // Mostrar información
        button.innerHTML = "⬇️"; // Cambio a flecha hacia abajo cuando se abre
    } else {
        infoBox.style.display = "none"; // Ocultar información
        button.innerHTML = "➔"; // Flecha a la derecha cuando se cierra
    }
}

// Cerrar el menú si se hace clic fuera de él
window.addEventListener('click', function (event) {
    const menu = document.getElementById('menu');
    const menuIcon = document.querySelector('.menu-icon');

    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove('open');
    }
});
