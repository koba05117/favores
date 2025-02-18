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
        //Deuda1

        {Deuda: "Deuda 1: 10.000 Pesos", info: "Ir al sao a sacar dinero (05/02/2025)//(12/02/2025)--(05/03/2025)"},

        {Deuda: "Penalización: 2,500 Pesos", info: "Pasaron 7 dias, la proxima penalización (19/02/2025)--(05/03/2025)"},

        {Deuda: "Penalización: 150%", info: "Pasaron 2 semanas (14 dias), la proxima penalización (26/02/2025)--(05/03/2025)"},

        {Deuda: "Penalización (TOTAL): 18.750 Pesos", info: "total de deuda + penalización"},

        //Deuda2

        {Deuda: "Deuda 2: 2.000 Pesos", info: "Me despertó para quitarle los tornillos a la licuadora (17/02/2025)//(24/01/2025)--(17/03/2025)"},

        //Deuda3

        {Deuda: "Deuda 3: 18.000 Pesos", info: "10k + 8k por fila de espera (25Minutos)"},

        //TOTAL DE TODO
        {Deuda: "Total: 38.750 Pesos", info: "Penalización añadida"}
    ],
    Sophia: [
        {Deuda: "No ha solicitado", info:"N/A"}
    ],
    Martha: [
        {Deuda: "Sin deuda", info:"Total pagado"}
    ]
};

// Mostrar las deudas agrupadas al hacer clic en un nombre
document.querySelectorAll(".name-item").forEach((item) => {
    item.addEventListener("click", (event) => {
        event.stopPropagation(); // Evita que el clic cierre el contenedor

        const name = item.dataset.name;
        const detailsContainer = document.getElementById("detailsContainer");
        
        // Agrupar deudas: cada deuda "normal" se asocia con las penalizaciones que le siguen
        let groups = [];
        let i = 0;
        const debts = userDetails[name];
        while (i < debts.length) {
            // Si el elemento NO es una penalización, es el inicio de un grupo
            if (!debts[i].Deuda.includes("Penalización")) {
                let group = { normal: debts[i], penalties: [] };
                i++;
                // Mientras los siguientes elementos sean penalizaciones, agrégalos al grupo
                while (i < debts.length && debts[i].Deuda.includes("Penalización")) {
                    group.penalties.push(debts[i]);
                    i++;
                }
                groups.push(group);
            } else {
                // En caso poco probable de encontrar una penalización sin deuda normal previa
                groups.push({ normal: debts[i], penalties: [] });
                i++;
            }
        }
        
        // Construir el HTML para cada grupo
        let html = `<h3>Deudas de ${name}</h3>`;
        groups.forEach((group, index) => {
            html += `<div class="debt-group" style="margin-bottom: 15px; padding: 10px; border: 1px solid #ccc; border-radius: 5px;">
                        <div class="normal-debt">
                            <strong>${group.normal.Deuda}</strong><br>
                            <span>${group.normal.info}</span>
                        </div>`;
            if (group.penalties.length > 0) {
                html += `<button class="penalty-toggle-button" onclick="toggleGroupPenalties(${index}, '${name}', this)" style="margin-top: 5px;">Mostrar Penalizaciones</button>
                         <div class="penalties-container" id="penalties-container-${name}-${index}" style="display: none; margin-top: 5px; padding: 5px; background-color: #f9f9f9; border-radius: 5px;">
                            <ul style="margin: 0; padding-left: 20px;">
                                ${group.penalties.map(p => `<li><strong>${p.Deuda}</strong><br><span>${p.info}</span></li>`).join('')}
                            </ul>
                         </div>`;
            }
            html += `</div>`;
        });
        detailsContainer.innerHTML = html;
        detailsContainer.style.display = "block";
    });
});

// Función para alternar la visualización de las penalizaciones de cada deuda
function toggleGroupPenalties(groupIndex, name, button) {
    const penaltiesContainer = document.getElementById(`penalties-container-${name}-${groupIndex}`);
    if (penaltiesContainer.style.display === "none") {
        penaltiesContainer.style.display = "block";
        button.innerText = "Ocultar Penalizaciones";
    } else {
        penaltiesContainer.style.display = "none";
        button.innerText = "Mostrar Penalizaciones";
    }
}

// Conservamos la función para alternar el recuadro de información individual (si se requiere en otros contextos)
function toggleDebtDetails(event, index, name) {
    const button = event.target;
    const infoBox = document.getElementById(`info-box-${name}-${index}`);

    if (infoBox.style.display === "none") {
        infoBox.style.display = "block";
        button.innerHTML = "⬇️";
    } else {
        infoBox.style.display = "none";
        button.innerHTML = "➔";
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
