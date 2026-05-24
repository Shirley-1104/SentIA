const preguntas = [

    //Datos personales
    {
        pregunta: "¿Cuál es tu nombre?",
        variable: "nombre",
        tipo: "text"
    },

    {
        pregunta: "¿Qué edad tienes?",
        variable: "edad",
        tipo: "number"
    },

    {
        pregunta: "¿Cuál es tu interés principal?",
        variable: "interesPrincipal",
        tipo: "select",
        opciones: [
            "Tecnología",
            "Salud",
            "Arte",
            "Negocios",
            "Comunicación"
        ]
    },


    // TECNOLOGÍA
    {
        pregunta: "¿Te gusta programar?",
        variable: "programacion",
        tipo: "radio",
        opciones: ["Sí", "No"],

        condicion: {
            variable: "interesPrincipal",
            valor: "Tecnología"
        }
    },

    {
        pregunta: "¿Qué tan bueno eres en matemáticas? (1-10)",
        variable: "matematicas",
        tipo: "range",
        min: 1,
        max: 10,

        condicion: {
            variable: "interesPrincipal",
            valor: "Tecnología"
        }
    },

    {
        pregunta: "¿Te gusta resolver problemas complejos?",
        variable: "problemas",
        tipo: "radio",
        opciones: ["Sí", "No"],

        condicion: {
            variable: "interesPrincipal",
            valor: "Tecnología"
        }
    },


    // SALUD
    {
        pregunta: "¿Te gusta ayudar a otras personas?",
        variable: "ayudar",
        tipo: "radio",
        opciones: ["Sí", "No"],

        condicion: {
            variable: "interesPrincipal",
            valor: "Salud"
        }
    },

    {
        pregunta: "¿Toleras situaciones de estrés?",
        variable: "estres",
        tipo: "select",
        opciones: [
            "Bajo",
            "Regular",
            "Alto"
        ],

        condicion: {
            variable: "interesPrincipal",
            valor: "Salud"
        }
    },

    {
        pregunta: "¿Tienes empatía con otros?",
        variable: "empatia",
        tipo: "radio",
        opciones: ["Sí", "No"],

        condicion: {
            variable: "interesPrincipal",
            valor: "Salud"
        }
    },


    // ARTE
    {
        pregunta: "¿Te gusta dibujar?",
        variable: "diseno",
        tipo: "radio",
        opciones: ["Sí", "No"],

        condicion: {
            variable: "interesPrincipal",
            valor: "Arte"
        }
    },

    {
        pregunta: "¿Qué tan creativo te consideras?",
        variable: "creatividad",
        tipo: "range",
        min: 1,
        max: 10,

        condicion: {
            variable: "interesPrincipal",
            valor: "Arte"
        }
    },

    {
        pregunta: "¿Te gusta crear contenido visual?",
        variable: "contenido",
        tipo: "radio",
        opciones: ["Sí", "No"],

        condicion: {
            variable: "interesPrincipal",
            valor: "Arte"
        }
    },


    // NEGOCIOS
    {
        pregunta: "¿Te gusta liderar grupos?",
        variable: "liderazgo",
        tipo: "radio",
        opciones: ["Sí", "No"],

        condicion: {
            variable: "interesPrincipal",
            valor: "Negocios"
        }
    },

    {
        pregunta: "¿Te gustaria emprender?",
        variable: "emprender",
        tipo: "radio",
        opciones: ["Sí", "No"],

        condicion: {
            variable: "interesPrincipal",
            valor: "Negocios"
        }
    },


    // COMUNICACIÓN
    {
        pregunta: "¿Te gusta hablar en público?",
        variable: "comunicacion",
        tipo: "radio",
        opciones: ["Sí", "No"],

        condicion: {
            variable: "interesPrincipal",
            valor: "Comunicación"
        }
    },

    {
        pregunta: "¿Te gusta escribir?",
        variable: "escritura",
        tipo: "radio",
        opciones: ["Sí", "No"],

        condicion: {
            variable: "interesPrincipal",
            valor: "Comunicación"
        }
    },

    // GENERALES
    {
        pregunta: "¿Prefieres trabajar solo o en equipo?",
        variable: "trabajo",
        tipo: "select",
        opciones: [
            "Solo",
            "Equipo"
        ]
    },

    {
        pregunta: "¿Qué ambiente laboral prefieres?",
        variable: "ambiente",
        tipo: "select",
        opciones: [
            "Creativo",
            "Tecnológico",
            "Empresarial",
            "Social"
        ]
    }

];