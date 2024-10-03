document.getElementById('loadGestores').addEventListener('click', loadGestores);
document.getElementById('loadSaldos').addEventListener('click', loadSaldosAsignados);

function loadGestores() {
    fetch('https://localhost:7031/api/Saldos/gestores')//dirección de ejemplo
        .then(response => response.json())
        .then(data => {
            displayGestores(data);
        })
        .catch(error => console.error('Error al cargar los gestores:', error));
}

function loadSaldosAsignados() {
    fetch('https://localhost:7031/api/Saldos')//dirección de ejemplo
    .then(response => response.json())
        .then(response => response.json())
        .then(data => {
            displaySaldos(data);
        })
        .catch(error => console.error('Error al cargar los saldos asignados:', error));
}

function displayGestores(gestores) {
    let container = document.getElementById('dataContainer');
    container.innerHTML = ''; 

    let table = '<table>';
    table += '<thead><tr><th>Gestor ID</th><th>Nombre</th></tr></thead><tbody>';

    gestores.forEach(gestor => {
        table += `<tr><td>${gestor.gestorId}</td><td>${gestor.nombre}</td></tr>`;
    });

    table += '</tbody></table>';
    container.innerHTML = table;
}

function displaySaldos(saldos) {
    let container = document.getElementById('dataContainer');
    container.innerHTML = ''; 

    let table = '<table>';
    table += '<thead><tr><th>GestorId</th><th>Saldo</th></tr></thead><tbody>';

    saldos.forEach(saldo => {
        table += `<tr><td>${saldo.gestorId}</td><td>${saldo.saldo}</td></tr>`;
    });

    table += '</tbody></table>';
    container.innerHTML = table;
}
