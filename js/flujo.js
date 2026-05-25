let indiceActual = 0;
let respuestasUsuario = {};
let testIniciado = false;
let actualRangeInput = null;

const contenedor = document.getElementById("contenedor-pregunta");

const btnSiguiente = document.getElementById("btnSiguiente");
const btnAnterior = document.getElementById("btnAnterior");
const btnAceptar = document.getElementById("btnAceptar");
const termsScreen = document.getElementById("terms-screen");
const testContent = document.getElementById("test-content");

// ACEPTAR TÉRMINOS
btnAceptar.addEventListener("click", () => {
    termsScreen.classList.add("hidden");
    testContent.classList.remove("hidden");
    testIniciado = true;
    iniciarTest();
});

function iniciarTest() {
    indiceActual = 0;
    mostrarPregunta();
}

//FUNCION MOSTRAR PREGUNTA
function mostrarPregunta() {
    if (!testIniciado) return;
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

    titulo.className = "text-2xl font-black mb-6 text-white";
    titulo.textContent = preguntaActual.pregunta;
    contenedor.appendChild(titulo);

    //INPUTS SEGUN EL TIPO DE VARIABLE
    let input;

    switch (preguntaActual.tipo) {
        case "text":
            input = document.createElement("input");
            input.type = "text";
            input.className = "w-full bg-white border border-slate-200 rounded-2xl p-4 text-slate-900 placeholder-slate-400 font-black focus:ring-2 focus:ring-purple-400/50 outline-none transition-all";
            break;

        case "number":
            input = document.createElement("input");
            input.type = "number";
            input.className = "w-full bg-white border border-slate-200 rounded-2xl p-4 text-slate-900 placeholder-slate-400 font-black focus:ring-2 focus:ring-purple-400/50 outline-none transition-all";
            break;

        case "range":
            let wrapper = document.createElement("div");
            wrapper.className = "space-y-4";
            let valorDisplay = document.createElement("div");
            valorDisplay.className = "text-center text-4xl font-black text-purple-300";
            let medio = Math.round((preguntaActual.min + preguntaActual.max) / 2);
            valorDisplay.textContent = medio;
            let rangeInput = document.createElement("input");
            rangeInput.type = "range";
            rangeInput.min = preguntaActual.min;
            rangeInput.max = preguntaActual.max;
            rangeInput.value = medio;
            rangeInput.className = "w-full accent-purple-400";
            rangeInput.addEventListener("input", function() {
                valorDisplay.textContent = this.value;
            });
            wrapper.appendChild(valorDisplay);
            wrapper.appendChild(rangeInput);
            input = wrapper;
            actualRangeInput = rangeInput;
            break;

        case "select":
            input = document.createElement("select");
            input.className = "w-full bg-white border border-slate-200 rounded-2xl p-4 text-slate-900 font-black appearance-none focus:ring-2 focus:ring-purple-400/50 outline-none transition-all";
            preguntaActual.opciones.forEach(opcionTexto => {
                let option = document.createElement("option");
                option.value = opcionTexto;
                option.textContent = opcionTexto;
                option.className = "bg-white text-slate-900 font-black";
                input.appendChild(option);
            });
            break;

        case "radio":
            input = document.createElement("div");
            input.className = "space-y-3";
            preguntaActual.opciones.forEach(opcion => {
                let label = document.createElement("label");
                label.className = "flex items-center gap-3 bg-white border border-slate-200 rounded-2xl p-4 cursor-pointer hover:bg-purple-50 transition-all";
                label.innerHTML =  `
                    <input type="radio"
                        name="radio"
                        value="${opcion}"
                        class="accent-purple-500 w-5 h-5">
                    <span class="text-slate-900 font-black">${opcion}</span>
                `;
                input.appendChild(label);
            });
        break;
    }
    if (preguntaActual.tipo === "range") {
        actualRangeInput.id = "respuesta";
    } else if (preguntaActual.tipo !== "radio") {
        input.id = "respuesta";
    }
        contenedor.appendChild(input);
        actualRangeInput = null;
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
    let preguntaActual = preguntas[indiceActual];
    let valor;

    if (preguntaActual.tipo === "radio") {
        let seleccionado = document.querySelector('input[name="radio"]:checked');
        valor = seleccionado ? seleccionado.value : "";
    } else {
        let el = document.getElementById("respuesta");
        valor = el ? el.value : "";
    }

    let mensajeError = document.getElementById("error-msg");
    if (!mensajeError) {
        mensajeError = document.createElement("p");
        mensajeError.id = "error-msg";
        mensajeError.className = "text-red-300 text-sm font-bold text-center mt-4";
        document.getElementById("test-content").appendChild(mensajeError);
    }

    if (!valor || valor.trim() === "") {
        mensajeError.textContent = "Por favor responde esta pregunta antes de continuar.";
        return;
    } else {
        mensajeError.textContent = "";
    }

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
    console.log("RESPUESTAS GUARDADAS:");
    console.log(respuestasUsuario);

    localStorage.setItem("respuestasUsuario", JSON.stringify(respuestasUsuario));

    window.location.href="resultados.html";
} 