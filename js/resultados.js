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
    industrial: 0
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


// Normalizar porcentajes
let total = Object.values(carreras)
    .reduce((a, b) => a + b, 0);


//Evitar division por 0
if (total <= 0) {
    carreras.software = 1;
    carreras.psicologia = 1;
    carreras.diseno = 1;

    total = 3;
}


// GENERAR PORCENTAJES DINÁMICOS
let porcentajes = {};

for (let carrera in carreras) {

    porcentajes[carrera] = Math.round(
        (carreras[carrera] / total) * 100
    );

}

console.log(porcentajes);


// UI Barras
document.getElementById("bar1").style.width = `${porcentajes.software || 0}%`;

document.getElementById("bar2").style.width = `${porcentajes.psicologia || 0}%`;

document.getElementById("bar3").style.width = `${porcentajes.diseno || 0}%`;

document.getElementById("textoSoftware").innerText = `${porcentajes.software || 0}%`;

document.getElementById("textoPsicologia").innerText = `${porcentajes.psicologia || 0}%`;

document.getElementById("textoDiseno").innerText = `${porcentajes.diseno || 0}%`;


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
    industrial: "Ingeniería Industrial"
};

// Obtener carrera con mayor puntaje
const carreraGanadora = Object.entries(carreras).sort((a, b) => b[1] - a[1])[0][0];

let mejorCarrera =
    nombresCarreras[carreraGanadora];

document.getElementById("principal").innerText = mejorCarrera;


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
<div>

<p class="mb-4">
${carreraInfo.descripcion}
</p>

<p class="font-bold mt-4">
Habilidades detectadas:
</p>

<ul class="mb-4">
${carreraInfo.habilidades
        .map(
            h => `<li>✓ ${h}</li>`
        )
        .join("")
    }
</ul>

<p class="font-bold">
Campo laboral:
</p>

<p>
${carreraInfo.campo}
</p>

</div>

`;



document.getElementById("recomendaciones").innerHTML = `

<div class="bg-gray-100 p-5 rounded-xl">

<h3 class="font-bold text-lg mb-4">

Universidades recomendadas

</h3>

${carreraInfo.universidades
        .map(
            u => `

<div class="mb-4">

<p class="font-semibold">

${u.nombre}

</p>

<a
href="${u.link}"
target="_blank"
class="text-purple-600 hover:underline"
>

Ver programa →

</a>

</div>

`
        )
        .join("")
    }

</div>

`;