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

        {Deuda: "Penalización (deuda1): 200%", info: "Pasaron 7 dias, la proxima penalizacion (3/02/2025)--(20/02/2025)"},

        {Deuda: "Penalización (deuda1): 150%", info: "Pasaron 2 semanas (14 dias), la proxima penalizacion (10/02/2025)--(20/02/2025)"},

        {Deuda: "Penalización (deuda1): 150%", info: "Pasaron 3 semanas (21 dias), la ultima penalización (20/02/2025)"},

        {Deuda: "Deuda 2: 10.000 Pesos", info: "Ir al sao a sacar dinero (05/02/2025)//(12/02/2025)--(05/03/2025)"},

        {Deuda: "Penalización (deuda2): 200%", info: "Pasaron 7 dias, la proxima penalización (19/02/2025)--(05/03/2025)"},

        {Deuda: "Penalización (deuda2): 150%", info: "Pasaron 2 semanas (14 dias), la proxima penalización (26/02/2025)--(05/03/2025)"},

        {Deuda: "Adelantó 40 mil pesos", info: "Fue para estudio pero igual se lo agrego acá-."},

        {Deuda: "Total: 17 mil Pesos", info: "Penalización añadida + 40k"}
    ],
    Sophia: [
        {Deuda: "No ha solicitado", info:"N/A"}
    ],
    Martha: [
        {Deuda: "Sin deuda", info:"Total pagado"}
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
