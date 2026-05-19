const preguntas = [

    // DATOS PERSONALES

    {
        id: 1,
        categoria: "personal",
        pregunta: "¿Cual es tu nombre?",
        tipo: "text",
        variable: "nombre"
    },

    {
        id: 2,
        categoria: "personal",
        pregunta: "¿Cuantos años tienes?",
        tipo: "number",
        variable: "edad"
    },

    {
        id: 3,
        categoria: "personal",
        pregunta: "¿En que ciudad vives?",
        tipo: "text",
        variable: "ciudad"
    },

    {
        id: 4,
        categoria: "personal",
        pregunta: "¿Cual es tu género?",
        tipo: "select",
        variable: "genero",
        opciones: [
            "Femenino",
            "Masculino",
            "No binario"
        ]
    },

    {
        id: 5,
        categoria: "personal",
        pregunta: "¿Cual es el colegio o institución donde estudias?",
        tipo: "text",
        variable: "institucion"
    },

    // ACADEMICO

    {
        id: 6,
        categoria: "academico",
        pregunta: "¿Cual es tu materia favorita?",
        tipo: "select",
        variable: "materiaFavorita",
        opciones: [
            "Matemáticas",
            "Lenguaje",
            "Ciencias",
            "Arte",
            "Tecnología"
        ]
    },

    {
        id: 7,
        categoria: "academico",
        pregunta: "¿Como calificas tu nivel en matemáticas?",
        tipo: "range",
        variable: "matematicas",
        min: 1,
        max: 10
    },

    {
        id: 8,
        categoria: "academico",
        pregunta: "¿Cómo calificas tu nivel de lectura?",
        tipo: "range",
        variable: "lectura",
        min: 1,
        max: 10
    },

    {
        id: 9,
        categoria: "academico",
        pregunta: "¿Te gusta investigar y aprender cosas nuevas?",
        tipo: "radio",
        variable: "investigacion",
        opciones: ["Sí", "No"],
        puntos: {
            software: 2,
            psicologia: 1
        }
    },

    {
        id: 10,
        categoria: "academico",
        pregunta: "¿Te gusta resolver problemas complejos?",
        tipo: "radio",
        variable: "problemas",
        opciones: ["Sí", "No"],
        puntos: {
            software: 3
        }
    },

    // INTERESES

    {
        id: 11,
        categoria: "intereses",
        pregunta: "¿Que area te interesa más?",
        tipo: "select",
        variable: "interesPrincipal",
        opciones: [
            "Tecnología",
            "Arte",
            "Salud",
            "Negocios"
        ]
    },

    {
        id: 12,
        categoria: "intereses",
        pregunta: "¿Te gusta programar?",
        tipo: "radio",
        variable: "programacion",
        opciones: ["Sí", "No"],
        condicion: {
            variable: "interesPrincipal",
            valor: "Tecnología"
        },
        puntos: {
            software: 5
        }
    },

    {
        id: 13,
        categoria: "intereses",
        pregunta: "¿Te gusta diseñar o dibujar?",
        tipo: "radio",
        variable: "diseno",
        opciones: ["Sí", "No"],
        condicion: {
            variable: "interesPrincipal",
            valor: "Arte"
        },
        puntos: {
            diseño: 5
        }
    },

    // PERFIL EMOCIONAL

    {
        id: 14,
        categoria: "emocional",
        pregunta: "¿Como manejas el estrés?",
        tipo: "select",
        variable: "estres",
        opciones: [
            "Muy bien",
            "Regular",
            "Muy mal"
        ]
    },

    {
        id: 15,
        categoria: "emocional",
        pregunta: "¿Prefieres trabajar solo o en equipo?",
        tipo: "select",
        variable: "trabajo",
        opciones: [
            "Solo",
            "Equipo"
        ]
    },

    {
        id: 16,
        categoria: "emocional",
        pregunta: "¿Te consideras una persona empática?",
        tipo: "radio",
        variable: "empatia",
        opciones: ["Sí", "No"],
        puntos: {
            psicologia: 4
        }
    },

    {
        id: 17,
        categoria: "emocional",
        pregunta: "¿Hablar en público te genera ansiedad?",
        tipo: "radio",
        variable: "ansiedadSocial",
        opciones: ["Sí", "No"]
    },

    {
        id: 18,
        categoria: "emocional",
        pregunta: "¿Te sientes motivado con frecuencia?",
        tipo: "range",
        variable: "motivacion",
        min: 1,
        max: 10
    },

    //HABILIDADES
    {
        id: 19,
        categoria: "habilidades",
        pregunta: "¿Qué tan creativo te consideras?",
        tipo: "range",
        variable: "creatividad",
        min: 1,
        max: 10
    },

    {
        id: 20,
        categoria: "habilidades",
        pregunta: "¿Te gusta trabajar con números?",
        tipo: "radio",
        variable: "numeros",
        opciones: ["Sí", "No"]
    },

    {
        id: 21,
        categoria: "habilidades",
        pregunta: "¿Te consideras un líder?",
        tipo: "radio",
        variable: "liderazgo",
        opciones: ["Sí", "No"]
    },

    {
        id: 22,
        categoria: "habilidades",
        pregunta: "¿Te gusta comunicar ideas?",
        tipo: "radio",
        variable: "comunicacion",
        opciones: ["Sí", "No"]
    },

    {
        id: 23,
        categoria: "habilidades",
        pregunta: "¿Te adaptas fácilmente a cambios?",
        tipo: "radio",
        variable: "adaptacion",
        opciones: ["Sí", "No"]
    },

    // OBJETIVOS FUTUROS

    {
        id: 24,
        categoria: "futuro",
        pregunta: "¿Qué modalidad prefieres?",
        tipo: "select",
        variable: "modalidad",
        opciones: [
            "Virtual",
            "Presencial",
            "Híbrida"
        ]
    },

    {
        id: 25,
        categoria: "futuro",
        pregunta: "¿Te gustaría emprender?",
        tipo: "radio",
        variable: "emprender",
        opciones: ["Sí", "No"]
    },

    {
        id: 26,
        categoria: "futuro",
        pregunta: "¿Prefieres estabilidad o innovación?",
        tipo: "select",
        variable: "preferenciaLaboral",
        opciones: [
            "Estabilidad",
            "Innovación"
        ]
    },

    {
        id: 27,
        categoria: "futuro",
        pregunta: "¿Cuál es tu salario ideal?",
        tipo: "select",
        variable: "salario",
        opciones: [
            "1-2 SMMLV",
            "3-5 SMMLV",
            "Más de 5 SMMLV"
        ]
    },

    {
        id: 28,
        categoria: "futuro",
        pregunta: "¿Te gustaría trabajar internacionalmente?",
        tipo: "radio",
        variable: "internacional",
        opciones: ["Sí", "No"]
    },

    {
        id: 29,
        categoria: "futuro",
        pregunta: "¿Qué tan importante es ayudar a otros para ti?",
        tipo: "range",
        variable: "ayudar",
        min: 1,
        max: 10
    },

    {
        id: 30,
        categoria: "futuro",
        pregunta: "¿Qué tipo de ambiente laboral prefieres?",
        tipo: "select",
        variable: "ambiente",
        opciones: [
            "Creativo",
            "Tecnológico",
            "Social",
            "Corporativo"
        ]
    }
];