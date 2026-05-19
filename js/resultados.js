//OBTENER LAS RESPUESTAS
const respuestas = JSON.parse(localStorage.getItem("respuestasUsuario")) || {};
console.log("RESPUESTAS:", respuestas);

//VARIABLES DE CARRERAS
let carreras = {
    software: 0,
    psicologia: 0,
    diseno: 0
}

//SISTEMA DE PUNTUACION 

//Tecnologia
if (respuestas.interesPrincipal === "Tecnología") {
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
    carreras.diseno += 40;
}

if (respuestas.diseno === "Sí") {
    carreras.diseno += 40;
}

if (parseInt(respuestas.creatividad) >= 7) {
    carreras.diseno += 20;
}


//NORMALIZAR PORCENTAJES
let total =
    carreras.software +
    carreras.psicologia +
    carreras.diseno;


// Evitar división por 0
if (total <= 0) {
    carreras.software = 1;
    carreras.psicologia = 1;
    carreras.diseno = 1;
    total = 3;
}

// PORCENTAJES
let porcentajeSoftware = Math.round((carreras.software / total) * 100);
let porcentajePsicologia = Math.round((carreras.psicologia / total) * 100);
let porcentajeDiseno = Math.round((carreras.diseno / total) * 100);

console.log({
    software: porcentajeSoftware,
    psicologia: porcentajePsicologia,
    diseno: porcentajeDiseno
});

//MOSTRAR BARRAS 
document.getElementById("bar1").style.width = `${porcentajeSoftware}%`;
document.getElementById("bar2").style.width = `${porcentajePsicologia}%`;
document.getElementById("bar3").style.width = `${porcentajeDiseno}%`;

document.getElementById("textoSoftware").innerText = porcentajeSoftware + "%";
document.getElementById("textoPsicologia").innerText = porcentajePsicologia + "%";
document.getElementById("textoDiseno").innerText = porcentajeDiseno + "%";


//DETERMINAR MEJOR CARRERA
let mejorCarrera = "";
let explicacion = "";

let maximo =
    Math.max(
        porcentajeSoftware,
        porcentajePsicologia,
        porcentajeDiseno
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


// RECOMENDACIONES
let recomendaciones = "";

if (mejorCarrera === "Ingeniería de Software") {
    recomendaciones = `
        <div class="bg-gray-100 p-4 rounded-lg mt-4">
            <h3 class="text-xl font-bold mb-2">
                Universidades recomendadas
            </h3>
            <ul class="space-y-2">
                <li>
                    <a href="https://www.eafit.edu.co"
                        target="_blank"
                        class="text-purple-600 hover:underline">
                        EAFIT
                    </a>
                </li>
                <li>
                    <a href="https://www.udea.edu.co"
                        target="_blank"
                        class="text-purple-600 hover:underline">
                        Universidad de Antioquia
                    </a>
                </li>
            </ul>
        </div>
    `;
}

else if (mejorCarrera === "Psicología") {
    recomendaciones = `
        <div class="bg-gray-100 p-4 rounded-lg mt-4">
            <h3 class="text-xl font-bold mb-2">
                Universidades recomendadas
            </h3>
            <ul class="space-y-2">
                <li>
                    <a href="https://www.upb.edu.co"
                        target="_blank"
                        class="text-purple-600 hover:underline">
                        UPB
                    </a>
                </li>
                <li>
                    <a href="https://www.ces.edu.co"
                        target="_blank"
                        class="text-purple-600 hover:underline">
                        Universidad CES
                    </a>
                </li>
            </ul>
        </div>
    `;
}

else {
    recomendaciones = `
        <div class="bg-gray-100 p-4 rounded-lg mt-4">
            <h3 class="text-xl font-bold mb-2">
                Universidades recomendadas
            </h3>
            <ul class="space-y-2">
                <li>
                    <a href="https://www.bellasartesmed.edu.co"
                        target="_blank"
                        class="text-purple-600 hover:underline">
                        Bellas Artes
                    </a>
                </li>
                <li>
                    <a href="https://www.tdea.edu.co"
                        target="_blank"
                        class="text-purple-600 hover:underline">
                        TdeA
                    </a>
                </li>
            </ul>
        </div>
    `;
}

document.getElementById("recomendaciones").innerHTML = recomendaciones;