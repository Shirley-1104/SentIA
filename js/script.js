let pasoActual = 0;
let pasos = document.querySelectorAll(".paso");


function mostrarPaso() {
    pasos.forEach((paso, index) => {
        paso.classList.toggle("hidden", index !== pasoActual);
    });

    let progreso = ((pasoActual + 1) / pasos.length) * 100;
    document.getElementById("progreso").style.width = progreso + "%";
}

function siguiente() {
    if (pasoActual < pasos.length - 1) {
        pasoActual++;
        mostrarPaso();
    } else {
        calcularResultado();
    }
}

function anterior() {
    if (pasoActual > 0) {
        pasoActual--;
        mostrarPaso();
    }
}

let respuestas = {
    tecnologia: 0,
    social: 0,
    creativo: 0
};

function calcularResultado() {

    let p1 = document.querySelector('input[name="p1"]:checked');
    let p2 = document.querySelector('input[name="p2"]:checked');

    if (p1 && p1.value == "1") respuestas.tecnologia++;
    if (p2 && p2.value == "0") respuestas.social++;
    if (p2 && p2.value == "1") respuestas.creativo++;

    localStorage.setItem("respuestas", JSON.stringify(respuestas));

    window.location.href = "resultados.html";
}

mostrarPaso();

function mostrarResultados() {

    let datos = JSON.parse(localStorage.getItem("respuestas"));

    let resultado = "";
    let explicacion = "";

    if (datos.tecnologia >= datos.social && datos.tecnologia >= datos.creativo) {
        resultado = "Ingeniería de Software";
        explicacion = "Te gusta la tecnología y resolver problemas, lo que indica afinidad con carreras lógicas.";
    } 
    else if (datos.social >= datos.tecnologia) {
        resultado = "Psicología";
        explicacion = "Tienes habilidades sociales y empatía, lo cual es clave en áreas humanas.";
    } 
    else {
        resultado = "Diseño Gráfico";
        explicacion = "Tu creatividad y forma de expresión destacan en áreas visuales.";
    }

    document.getElementById("principal").innerText = resultado;
    document.getElementById("explicacion").innerText = explicacion;
}

// Ejecutar solo en resultados.html
if (window.location.pathname.includes("resultados.html")) {
    mostrarResultados();
}