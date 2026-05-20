// ESTILOS DINÁMICOS SENTIA
document.addEventListener("DOMContentLoaded", ()=>{
    aplicarEstilosInputs();
});

// ESTILOS PARA INPUTS DINÁMICOS
function aplicarEstilosInputs(){
    const contenedor =
        document.getElementById(
            "contenedor-pregunta"
        );
    if(!contenedor) return;
    const observer =
        new MutationObserver(()=>{
        let inputs =
            contenedor.querySelectorAll(
                "input,select"
            );
        inputs.forEach(input=>{

            // evita aplicar dos veces
            if(
                input.classList.contains(
                    "sentia-style"
                )
            ) return;

            input.classList.add(
                "sentia-style"
            );

            // estilos base
            input.classList.add(
                "w-full",
                "p-4",
                "bg-slate-50",
                "rounded-2xl",
                "font-bold",
                "outline-none",
                "transition-all",
                "focus:ring-2",
                "focus:ring-purple-200"
            );


            // radios
            if(input.type==="radio"){
                input.classList.remove(
                    "w-full",
                    "p-4"
                );

                input.classList.add(
                    "w-5",
                    "h-5",
                    "accent-purple-500"
                );
            }
        });
    });

    observer.observe(
        contenedor,
        {
            childList:true,
            subtree:true
        }
    );

}