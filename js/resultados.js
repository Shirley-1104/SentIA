// OBTENER RESPUESTAS
const respuestas =
    JSON.parse(
        localStorage.getItem("respuestasUsuario")
    ) || {};

console.log("RESPUESTAS:", respuestas);

Object.entries(respuestas).forEach(([clave,valor])=>{
console.log(`${clave}: ${valor}`);
});


// Variables de carreras
let carreras = {
    software: 0,
    psicologia: 0,
    diseno: 0
};

//Sistema de puntuacion
//SOFTWARE 

if(respuestas.interesPrincipal==="Tecnología")
carreras.software+=30;

if(respuestas.programacion==="Sí")
carreras.software+=30;

if(respuestas.numeros==="Sí")
carreras.software+=15;

if(respuestas.problemas==="Sí")
carreras.software+=20;

if(respuestas.modalidad==="Virtual")
carreras.software+=10;

if(respuestas.emprender==="Sí")
carreras.software+=10;


//PSICOLOGÍA

if(respuestas.empatia==="Sí")
carreras.psicologia+=30;

if(respuestas.comunicacion==="Sí")
carreras.psicologia+=20;

if(respuestas.trabajo==="Equipo")
carreras.psicologia+=20;

if(parseInt(respuestas.ayudar || 0)>=7)
carreras.psicologia+=20;

if(respuestas.ambiente==="Social")
carreras.psicologia+=15;


//DISEÑO 

if(respuestas.interesPrincipal==="Arte")
carreras.diseno+=30;

if(respuestas.diseno==="Sí")
carreras.diseno+=20;

if(parseInt(respuestas.creatividad || 0)>=7)
carreras.diseno+=25;

if(respuestas.ambiente==="Creativo")
carreras.diseno+=15;

if(parseInt(respuestas.motivacion || 0)>=7)
carreras.diseno+=10;


// Normalizar porcentajes
let total =
    carreras.software +
    carreras.psicologia +
    carreras.diseno;

//Evitar division por 0
if (total <= 0) {
    carreras.software = 1;
    carreras.psicologia = 1;
    carreras.diseno = 1;

    total = 3;
}


// PORCENTAJES
let porcentajeSoftware = Math.round(
        (carreras.software / total) * 100
    );

let porcentajePsicologia = Math.round(
        (carreras.psicologia / total) * 100
    );

let porcentajeDiseno = Math.round(
        (carreras.diseno / total) * 100
    );


console.log({
    software: porcentajeSoftware,
    psicologia: porcentajePsicologia,
    diseno: porcentajeDiseno
});


// UI Barras
document.getElementById("bar1").style.width = `${porcentajeSoftware}%`;

document.getElementById("bar2").style.width = `${porcentajePsicologia}%`;

document.getElementById("bar3").style.width = `${porcentajeDiseno}%`;

document.getElementById("textoSoftware").innerText = `${porcentajeSoftware}%`;

document.getElementById("textoPsicologia").innerText = `${porcentajePsicologia}%`;

document.getElementById("textoDiseno").innerText = `${porcentajeDiseno}%`;


// Determinar mejor carrera segun puntaje
let mejorCarrera = "";
let explicacion = "";

const maximo = Math.max(
    porcentajeSoftware,
    porcentajePsicologia,
    porcentajeDiseno
);


// SOFTWARE
if (maximo === porcentajeSoftware) {
    mejorCarrera = "Ingeniería de Software";

    explicacion =
        `Tus respuestas muestran afinidad con lógica, resolución de problemas y tecnología.`;
}


// PSICOLOGÍA
else if (maximo === porcentajePsicologia) {
    mejorCarrera = "Psicología";

    explicacion =
        `Tus respuestas reflejan empatía y habilidades sociales.`;
}


// DISEÑO
else {
    mejorCarrera = "Diseño Gráfico";

    explicacion =
        `Tus respuestas muestran creatividad y expresión visual.`;
}


// Mostrar resultados
document.getElementById("principal").innerText = mejorCarrera;

document.getElementById("explicacion").innerText = explicacion;


// Recomendaciones
let recomendaciones = "";


if (mejorCarrera === "Ingeniería de Software") {
    recomendaciones = `
<div class="bg-gray-100 p-4 rounded-lg mt-4">

<h3 class="font-bold mb-3">
Universidades recomendadas
</h3>

<ul class="space-y-2">

<li>
<a href="https://www.eafit.edu.co"
target="_blank"
class="text-purple-600">

EAFIT
</a>
</li>

<li>
<a href="https://www.udea.edu.co"
target="_blank"
class="text-purple-600">

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

<h3 class="font-bold mb-3">
Universidades recomendadas
</h3>

<ul class="space-y-2">

<li>UPB</li>

<li>CES</li>

</ul>

</div>
`;

}
else {
    recomendaciones = `
<div class="bg-gray-100 p-4 rounded-lg mt-4">

<h3 class="font-bold mb-3">
Universidades recomendadas
</h3>

<ul class="space-y-2">

<li>Bellas Artes</li>

<li>TdeA</li>

</ul>

</div>
`;

}


document.getElementById("recomendaciones").innerHTML = recomendaciones;