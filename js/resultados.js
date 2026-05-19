//OBTENER LAS RESPUESTAS
const respuestas = JSON.parse(localStorage.getItem("respuestasUsuario"));

//VARIABLES DE CARRERAS
let carreras = {
    software: 0,
    psicologia: 0,
    diseño: 0
}

//SISTEMA DE PUNTUACION 

//Tecnologia
if (respuestas.interesPrincipal === "Tecnologia") {
    carreras.software += 30;
}

if (respuestas.programacion === "Sí") {
    carreras.software +=40;
}

if (parseInt(respuestas.matematicas) >=7) {
    carreras.software += 20;
}

if (respuestas.problemas === "Sí") {
    carreras.software +=20;
}


//Psicologia
if (respuestas.empatia === "Sí") {
    carreras.psicologia += 40;
}

if (respuestas.trabajo === "Equipo") {
    carreras.psicologia += 20;
}

if (respuestas.interesPrincipal === "Salud") {
    carreras.psicologia += 30;
}


//Diseño
if (respuestas.interesPrincipal === "Arte") {
    carreras.diseño += 40;
}

if (respuestas.diseño === "Sí") {
    carreras.diseño += 40;
}

if (parseInt(respuestas.creatividad) >= 7) {
    carreras.diseño += 20;
}


//NORMALIZAR PORCENTAJES
let total =
    carreras.software +
    carreras.psicologia +
    carreras.diseño;

let porcentajeSoftware =
    Math.round((carreras.software / total)*100);

let porcentajePsicologia =
    Math.round((carreras.psicologia / total)*100);

let porcentajeDiseño =
    Math.round((carreras.diseño / total)*100);


//MOSTRAR BARRAS 
document.getElementById("bar1").style.width = porcentajeSoftware+"%";
document.getElementById("bar2").style.width = porcentajePsicologia + "%";
document.getElementById("bar3").style.width = porcentajeDiseño + "%";


//DETERMINAR MEJOR CARRERA
let mejorCarrera = "";
let explicacion = "";

let maximo =
    Math.max(
        porcentajeSoftware,
        porcentajePsicologia,
        porcentajeDiseño
    );

    // SOFTWARE
if (maximo === porcentajeSoftware) {
    mejorCarrera = "Ingenieria de Software";
    explicacion = `
    Tus respuestas muestran afinidad con la logica,
    la resolución de problemas y la tecnologia.
    
    Ademas, presentas interes en programación y
    habilidades analíticas que son fundamentales
    para áreas de desarrollo de software.
    `;
}


// PSICOLOGÍA
else if (maximo === porcentajePsicologia) {
    mejorCarrera = "Psicología";
    explicacion = `
    Tus respuestas reflejan empatía,
    habilidades sociales y preferencia
    por el trabajo colaborativo.
    
    Esto indica afinidad con áreas humanas
    y de acompañamiento emocional.
    `;
}


// DISEÑO
else {
    mejorCarrera = "Diseño Gráfico";
    explicacion = `
    Tus respuestas muestran creatividad,
    interés artístico y afinidad por
    la expresión visual.
    
    Esto puede ayudarte a desarrollarte
    en áreas relacionadas con diseño,
    comunicación visual y contenido digital.
    `;
}


// MOSTRAR RESULTADOS
document.getElementById("principal").innerText = mejorCarrera;

document.getElementById("explicacion").innerText = explicacion;
