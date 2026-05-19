let indiceActual = 0;
let respuestasUsuario = {};

const contenedor = document.getElementById("contenedor-pregunta");

const btnSiguiente = document.getElementById("btnSiguiente");
const btnAnterior = document.getElementById("btnAnterior");

//FUNCION MOSTRAR PREGUNTA
function mostrarPregunta() {
    contenedor.innerHTML = "";

    let preguntaActual = preguntas[indiceActual];

    //VALIDACION DE CONDICIONES
    if (preguntaActual.condicion) {
        let valorUsuario = respuestasUsuario[preguntaActual.condicion.variable];

        if (valorUsuario !== preguntaActual.condicion.valor) {
            indiceActual++;
            mostrarPregunta();
            return;
        }
    }

    //CREAR ELEMENTOS
    let titulo = document.createElement("h2");

    titulo.className = "text-2xl font-semibold mb-6 text-gray-800";
    titulo.textContent = preguntaActual.pregunta;
    contenedor.appendChild(titulo);

    //INPUTS SEGUN EL TIPO DE VARIABLE
    let input;

    switch (preguntaActual.tipo) {
        case "text":
            input = document.createElement("input");
            input.type = "text";
            input.className = "w-full border p-3 rounded-lg";
            break;

        case "number":
            input = document.createElement("input");
            input.type = "number";
            input.className = "w-full border p-3 rounded-lg";
            break;

        case "range":
            input = document.createElement("input");
            input.type = "range";
            input.min = preguntaActual.min;
            input.max = preguntaActual.max;
            input.className = "w-full";
            break;

        case "select":
            input = document.createElement("select");
            input.className = "w-full border p-3 rounded-lg";
            preguntaActual.opciones.forEach(opcionTexto => {
                let option = document.createElement("option");
                option.value = opcionTexto;
                option.textContent = opcionTexto;
                input.appendChild(option);
            });
            break;

        case "radio":
            input = document.createElement("div");
            preguntaActual.opciones.forEach(opcion => {
                let label = document.createElement("label");
                label.className = "block mb-3";
                label.innerHTML =  `
                    <input type="radio"
                        name="radio"
                        value="${opcion}">
                    ${opcion}
                `;
                input.appendChild(label);
            });
        break;
    }
    if (preguntaActual.tipo !== "radio") {
    input.id = "respuesta";
}
        contenedor.appendChild(input);
        actualizarProgreso();
}

//FUNCION GUARDAR RESPUESTAS
function guardarRespuesta() {

    let preguntaActual = preguntas[indiceActual];
    let valor; 

    if (preguntaActual.tipo === "radio"){
        let seleccionado = document.querySelector('input[name="radio"]:checked');
        valor = seleccionado ? seleccionado.value : "";
    } else {
        valor = document.getElementById("respuesta").value;
    }
    respuestasUsuario[preguntaActual.variable] = valor;
}

//BOTON SIGUIENTE
btnSiguiente.addEventListener("click", () => {
    guardarRespuesta();

    if (indiceActual < preguntas.length -1) {
        indiceActual++;
        mostrarPregunta();
    } else{
        finalizarTest();
    }
});

//BOTON ANTERIOR
btnAnterior.addEventListener("click", () => {
    if (indiceActual > 0) {
        indiceActual--;
        mostrarPregunta();
    }
});

//ACTUALIZAR PROGRESO 
function actualizarProgreso(){
    let porcentaje = ((indiceActual + 1)/ preguntas.length)*100;
    document.getElementById("barra-progreso").style.width = porcentaje + "%"; 
}

//FUNCION FINALIZAR 
function finalizarTest(){
    localStorage.setItem("respuestaUsuario", JSON.stringify(respuestasUsuario)
    );
    window.location.href = "resultados.html"; 
}

//INICIALIZADOR
mostrarPregunta(); 