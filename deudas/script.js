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
        {Deuda: "Deuda 1: 2.000 Pesos", info: "Rodar la cama (20/01/2025)//(27/01/2025)"},
        {Deuda: "Penalización: 200%", info: "Pasaron 7 dias, la proxima penalizacion (3/02/2025)"},
        {Deuda: "Total: 4.000 Pesos", info: "Penalización añadida"}
    ],
    Sophia: [
        {Deuda: "Deuda 1: 0 Pesos", info:"No tiene deudas"}
    ],
    Martha: [
        {Deuda: "Deuda 1: 500 Pesos", info:"Lavar Platos (21/01/2025)//(28/01/2025)"},
        {Deuda: "Deuda 2: 500 Pesos", info:"Llevar PC (21/01/2025)//(28/01/2025)"},
        {Deuda: "Deuda 3: 500 Pesos", info:"Llevar Agua (21/01/2025)//(28/01/2025)"},
        {Deuda: "Total: 1.500 Pesos", info:"Sin deuda añadida"}
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
