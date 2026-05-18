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
    }

];