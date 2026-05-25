// OBTENER RESPUESTAS
const respuestas =
    JSON.parse(
        localStorage.getItem("respuestasUsuario")
    ) || {};

console.log("RESPUESTAS:", respuestas);

Object.entries(respuestas).forEach(([clave, valor]) => {
    console.log(`${clave}: ${valor}`);
});


// Variables de carreras
let carreras = {
    software: 0,
    psicologia: 0,
    diseno: 0,
    medicina: 0,
    administracion: 0,
    arquitectura: 0,
    marketing: 0,
    derecho: 0,
    comunicacion: 0,
    industrial: 0,
    enfermeria: 0,
    contabilidad: 0,
    pedagogia: 0
};

// Determinar mejor carrera según puntaje

const nombresCarreras = {
    software: "Ingeniería de Software",
    psicologia: "Psicología",
    diseno: "Diseño Gráfico",
    medicina: "Medicina",
    administracion: "Administración de Empresas",
    arquitectura: "Arquitectura",
    marketing: "Marketing Digital",
    derecho: "Derecho",
    comunicacion: "Comunicación Social",
    industrial: "Ingeniería Industrial",
    enfermeria: "Enfermería",
    contabilidad: "Contabilidad",
    pedagogia: "Pedagogía"
};

//Sistema de puntuacion
//SOFTWARE 
if (respuestas.interesPrincipal === "Tecnología")
    carreras.software += 30;

if (respuestas.programacion === "Sí")
    carreras.software += 30;

if (respuestas.numeros === "Sí")
    carreras.software += 15;

if (respuestas.problemas === "Sí")
    carreras.software += 20;

if (respuestas.modalidad === "Virtual")
    carreras.software += 10;

if (respuestas.emprender === "Sí")
    carreras.software += 10;


//PSICOLOGÍA
if (respuestas.empatia === "Sí")
    carreras.psicologia += 30;

if (respuestas.comunicacion === "Sí")
    carreras.psicologia += 20;

if (respuestas.trabajo === "Equipo")
    carreras.psicologia += 20;

if (parseInt(respuestas.ayudar || 0) >= 7)
    carreras.psicologia += 20;

if (respuestas.ambiente === "Social")
    carreras.psicologia += 15;


//DISEÑO 
if (respuestas.interesPrincipal === "Arte")
    carreras.diseno += 30;

if (respuestas.diseno === "Sí")
    carreras.diseno += 20;

if (parseInt(respuestas.creatividad || 0) >= 7)
    carreras.diseno += 25;

if (respuestas.ambiente === "Creativo")
    carreras.diseno += 15;

if (parseInt(respuestas.motivacion || 0) >= 7)
    carreras.diseno += 10;

// MEDICINA
if (respuestas.interesPrincipal === "Salud")
    carreras.medicina += 30;

if (parseInt(respuestas.ayudar || 0) >= 8)
    carreras.medicina += 20;

if (respuestas.empatia === "Sí")
    carreras.medicina += 15;

if (respuestas.estres === "Alto")
    carreras.medicina += 10;


// ADMINISTRACIÓN
if (respuestas.liderazgo === "Sí")
    carreras.administracion += 25;

if (respuestas.emprender === "Sí")
    carreras.administracion += 25;

if (respuestas.preferenciaLaboral === "Estabilidad")
    carreras.administracion += 15;


// ARQUITECTURA
if (respuestas.creatividad >= 7)
    carreras.arquitectura += 25;

if (respuestas.numeros === "Sí")
    carreras.arquitectura += 15;

if (respuestas.ambiente === "Creativo")
    carreras.arquitectura += 20;


// MARKETING
if (respuestas.comunicacion === "Sí")
    carreras.marketing += 20;

if (respuestas.creatividad >= 7)
    carreras.marketing += 25;

if (respuestas.social === "Sí")
    carreras.marketing += 15;


// DERECHO
if (respuestas.liderazgo === "Sí")
    carreras.derecho += 20;

if (respuestas.comunicacion === "Sí")
    carreras.derecho += 25;

if (respuestas.trabajo === "Equipo")
    carreras.derecho += 15;


// COMUNICACIÓN
if (respuestas.comunicacion === "Sí")
    carreras.comunicacion += 30;

if (respuestas.creatividad >= 7)
    carreras.comunicacion += 20;


// INDUSTRIAL
if (respuestas.numeros === "Sí")
    carreras.industrial += 25;

if (respuestas.problemas === "Sí")
    carreras.industrial += 20;

if (respuestas.liderazgo === "Sí")
    carreras.industrial += 15;

// NUEVAS PREGUNTAS GENERALES

if (respuestas.practicoTeorico === "Práctico") {
    carreras.software += 10;
    carreras.medicina += 10;
    carreras.arquitectura += 10;
    carreras.enfermeria += 10;
} else if (respuestas.practicoTeorico === "Teórico") {
    carreras.derecho += 10;
    carreras.psicologia += 10;
    carreras.comunicacion += 10;
} else if (respuestas.practicoTeorico === "Ambos") {
    carreras.software += 5;
    carreras.diseno += 5;
    carreras.administracion += 5;
}

if (parseInt(respuestas.estabilidad || 0) >= 7) {
    carreras.administracion += 15;
    carreras.derecho += 10;
    carreras.contabilidad += 15;
} else if (parseInt(respuestas.estabilidad || 0) <= 3) {
    carreras.diseno += 10;
    carreras.marketing += 10;
    carreras.comunicacion += 10;
}

if (respuestas.enfoque === "Trabajar con personas") {
    carreras.psicologia += 15;
    carreras.medicina += 15;
    carreras.enfermeria += 15;
    carreras.comunicacion += 10;
} else if (respuestas.enfoque === "Trabajar con datos") {
    carreras.software += 15;
    carreras.contabilidad += 15;
    carreras.administracion += 10;
} else if (respuestas.enfoque === "Crear cosas nuevas") {
    carreras.diseno += 15;
    carreras.arquitectura += 15;
    carreras.marketing += 10;
} else if (respuestas.enfoque === "Liderar equipos") {
    carreras.administracion += 15;
    carreras.derecho += 10;
    carreras.industrial += 10;
}


// Normalizar porcentajes
let total = Object.values(carreras)
    .reduce((a, b) => a + b, 0);


//Evitar division por 0
if (total <= 0) {
    for (let c in carreras) carreras[c] = 1;
    total = Object.keys(carreras).length;
}


// GENERAR PORCENTAJES DINÁMICOS
let porcentajes = {};

for (let carrera in carreras) {

    porcentajes[carrera] = Math.round(
        (carreras[carrera] / total) * 100
    );

}

console.log(porcentajes);


// Generar top 3 carreras con mas compatibilidad
const contenedorPorcentajes = document.getElementById("contenedorPorcentajes");

contenedorPorcentajes.innerHTML = "";

const topCarreras = Object.entries(
    porcentajes
)
    .sort((a, b) => b[1] - a[1])

    .slice(0, 3);


// colores para conservar el diseño
const colores = [

    "from-blue-400 to-blue-600",
    "from-teal-400 to-teal-600",
    "from-purple-400 to-purple-600"

];


topCarreras.forEach(
    ([clave, valor], index) => {

        const nombre =
            nombresCarreras[clave];

        contenedorPorcentajes.innerHTML += `

<div class="mb-10">

<div class="flex justify-between items-center mb-3">

<h3 class="
font-black
uppercase
tracking-wider
text-white/80">

${nombre}

</h3>

<p class="
font-black
text-purple-300
text-lg">

${valor}%

</p>

</div>


<div class="
w-full
bg-white/10
rounded-full
h-5
overflow-hidden">

<div
class="
h-full
rounded-full
bg-gradient-to-r
${colores[index]}
transition-all
duration-1000"

style="width:${valor}%">

</div>

</div>

</div>

`;

    });


// Obtener carrera con mayor puntaje
const carreraGanadora = Object.entries(carreras).sort((a, b) => b[1] - a[1])[0][0];

let mejorCarrera =
    nombresCarreras[carreraGanadora];

let nombreUsuario = respuestas.nombre || "";
document.getElementById("principal").innerText = nombreUsuario ? `${nombreUsuario}, tu mejor opción es ${mejorCarrera}` : mejorCarrera;

// NIVEL DE CONFIANZA

const puntajeMayor =
    Object.values(carreras)
        .sort((a, b) => b - a)[0];

let confianza = "";
let mensajeConfianza = "";

if (puntajeMayor >= 70) {

    confianza = "Alta compatibilidad";

    mensajeConfianza =
        "Tus respuestas tienen una coincidencia fuerte con esta área.";

}

else if (puntajeMayor >= 40) {

    confianza = "Compatibilidad moderada";

    mensajeConfianza =
        "Existe afinidad con esta área, aunque podrías explorar otras opciones.";

}

else {

    confianza = "Compatibilidad exploratoria";

    mensajeConfianza =
        "Todavía hay varias áreas con características similares.";

}

// document.getElementById(
//     "nivelConfianza"
// ).innerHTML = `

// <div>

// <h3 class="
// text-[10px]
// font-black
// uppercase
// tracking-[0.2em]
// text-purple-600
// mb-4">

// Nivel de coincidencia

// </h3>

// <p class="
// text-lg
// font-black
// tracking-tight
// text-slate-900
// mb-3">

// ${confianza}

// </p>

// <p class="
// text-slate-500
// font-medium
// leading-relaxed">

// ${mensajeConfianza}

// </p>

// </div>

// `;

// INFORMACIÓN DE CARRERAS
const infoCarreras = {
    "Ingeniería de Software": {
        descripcion:
            "Te destacas por el pensamiento lógico y la resolución de problemas tecnológicos.",

        habilidades: [
            "Lógica",
            "Programación",
            "Análisis",
            "Tecnología"
        ],

        campo:
            "Desarrollo web, aplicaciones móviles, IA, ciberseguridad.",

        universidades: [

            {
                nombre: "EAFIT",
                link: "https://www.eafit.edu.co"
            },

            {
                nombre: "Universidad de Antioquia",
                link: "https://www.udea.edu.co"
            },

            {
                nombre: "Pascual Bravo",
                link: "https://pascualbravo.edu.co/"
            }
        ]
    },


    "Psicología": {
        descripcion:
            "Presentas empatía y facilidad para comprender emociones.",

        habilidades: [
            "Empatía",
            "Comunicación",
            "Trabajo en equipo"
        ],

        campo:
            "Psicología clínica, educativa y organizacional.",

        universidades: [

            {
                nombre: "CES",
                link: "https://www.ces.edu.co"
            },

            {
                nombre: "UPB",
                link: "https://www.upb.edu.co"
            }
        ]
    },


    "Diseño Gráfico": {
        descripcion:
            "Tu creatividad y pensamiento visual sobresalen.",

        habilidades: [
            "Creatividad",
            "Innovación",
            "Comunicación visual"
        ],

        campo:
            "UX/UI, branding, animación y marketing.",

        universidades: [

            {
                nombre: "Bellas Artes",
                link: "https://bellasartesmed.edu.co/"
            },

            {
                nombre: "EAFIT",
                link: "https://www.eafit.edu.co"
            }
        ]
    },


    "Medicina": {
        descripcion:
            "Tienes afinidad por ayudar a otros y trabajar bajo presión.",

        habilidades: [
            "Empatía",
            "Responsabilidad",
            "Trabajo humano"
        ],

        campo:
            "Hospitales, investigación y salud.",

        universidades: [

            {
                nombre: "CES",
                link: "https://www.ces.edu.co"
            },

            {
                nombre: "Universidad de Antioquia",
                link: "https://www.udea.edu.co"
            }
        ]
    },


    "Administración de Empresas": {
        descripcion:
            "Tienes liderazgo y capacidad organizativa.",

        habilidades: [
            "Liderazgo",
            "Planeación",
            "Gestión"
        ],

        campo:
            "Empresas, emprendimiento y dirección.",

        universidades: [

            {
                nombre: "EAFIT",
                link: "https://www.eafit.edu.co"
            },

            {
                nombre: "CEIPA",
                link: "https://www.ceipa.edu.co/"
            }
        ]
    },


    "Arquitectura": {
        descripcion:
            "Combinas creatividad con pensamiento estructurado.",

        habilidades: [
            "Creatividad",
            "Diseño",
            "Resolución espacial"
        ],

        campo:
            "Construcción y diseño arquitectónico.",

        universidades: [

            {
                nombre: "UPB",
                link: "https://www.upb.edu.co"
            },

            {
                nombre: "Universidad Nacional",
                link: "https://medellin.unal.edu.co/"
            }
        ]
    },


    "Marketing Digital": {
        descripcion:
            "Tienes creatividad y habilidades comunicativas.",

        habilidades: [
            "Publicidad",
            "Comunicación",
            "Innovación"
        ],

        campo:
            "Redes sociales, publicidad y marcas.",

        universidades: [

            {
                nombre: "EAFIT",
                link: "https://www.eafit.edu.co"
            }
        ]
    },


    "Derecho": {
        descripcion:
            "Tienes liderazgo y capacidad argumentativa.",

        habilidades: [
            "Comunicación",
            "Análisis",
            "Liderazgo"
        ],

        campo:
            "Área jurídica y asesoría legal.",

        universidades: [

            {
                nombre: "Universidad de Antioquia",
                link: "https://www.udea.edu.co"
            },

            {
                nombre: "UPB",
                link: "https://www.upb.edu.co"
            }
        ]
    },


    "Comunicación Social": {
        descripcion:
            "Destacas en interacción y expresión.",

        habilidades: [
            "Comunicación",
            "Creatividad"
        ],

        campo:
            "Periodismo, medios y comunicación.",

        universidades: [

            {
                nombre: "UPB",
                link: "https://www.upb.edu.co"
            }
        ]
    },


    "Ingeniería Industrial": {
        descripcion:
            "Tienes capacidad analítica y organizacional.",

        habilidades: [
            "Procesos",
            "Liderazgo",
            "Resolución de problemas"
        ],

        campo:
            "Optimización y gestión empresarial.",

        universidades: [

            {
                nombre: "EIA",
                link: "https://www.eia.edu.co/"
            },

            {
                nombre: "Universidad Nacional",
                link: "https://medellin.unal.edu.co/"
            }
        ]
    }

};


// Recomendaciones
const carreraInfo = infoCarreras[mejorCarrera];

document.getElementById("explicacion").innerHTML = `
<div class="text-white/80">

<p class="mb-4">
${carreraInfo.descripcion}
</p>

<p class="font-bold mt-4 text-white">
Habilidades detectadas:
</p>

<ul class="mb-4 text-white/70">
${carreraInfo.habilidades
        .map(
            h => `<li>✓ ${h}</li>`
        )
        .join("")
    }
</ul>

<p class="font-bold text-white">
Campo laboral:
</p>

<p class="text-white/70">
${carreraInfo.campo}
</p>

</div>

`;


// PERFIL EMOCIONAL
let perfil = "";
let descripcionPerfil = "";

if (
    respuestas.empatia === "Sí" &&
    respuestas.trabajo === "Equipo"
) {

    perfil = "Empático y colaborativo";

    descripcionPerfil =
        "Tienes facilidad para comprender emociones, escuchar a otros y trabajar en equipo.";

}

else if (
    respuestas.enfoque === "Liderar equipos" ||
    respuestas.liderazgo === "Sí"
) {

    perfil = "Líder natural";

    descripcionPerfil =
        "Tienes habilidades para dirigir, organizar y motivar a otros hacia un objetivo común.";

}

else if (
    parseInt(respuestas.creatividad || 0) >= 7 ||
    respuestas.enfoque === "Crear cosas nuevas"
) {

    perfil = "Creativo e innovador";

    descripcionPerfil =
        "Tiendes a generar nuevas ideas y buscar formas originales de expresarte.";

}

else if (
    respuestas.problemas === "Sí" ||
    respuestas.enfoque === "Trabajar con datos"
) {

    perfil = "Analítico y estratégico";

    descripcionPerfil =
        "Disfrutas resolver situaciones complejas y encontrar soluciones basadas en datos.";

}

else {

    perfil = "Perfil equilibrado";

    descripcionPerfil =
        "Presentas características variadas y puedes adaptarte a diferentes entornos.";

}

document.getElementById(
    "perfilEmocional"
).innerHTML = `

<div>

<h3 class="
text-[10px]
font-black
uppercase
tracking-[0.2em]
text-purple-300
mb-4">

Perfil emocional detectado

</h3>

<p class="
text-lg
font-black
tracking-tight
text-white
mb-3">

${perfil}

</p>

<p class="
text-white/60
font-medium
leading-relaxed">

${descripcionPerfil}

</p>

</div>

`;


document.getElementById("recomendaciones").innerHTML = `
<div class="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl text-center">
    <p class="text-white/60 text-sm">Explora más carreras y sus universidades en la sección <a href="carreras.html" class="text-purple-300 hover:text-purple-200 underline font-bold">Carreras</a></p>
</div>
`;