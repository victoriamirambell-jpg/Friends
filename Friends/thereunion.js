/* ================= LEER MÁS ================= */

const botonLeerMas = document.getElementById("botonLeerMas");

const textoExtra = document.getElementById("textoExtra");


botonLeerMas.addEventListener("click", function() {

    textoExtra.classList.toggle("mostrar");


    if (textoExtra.classList.contains("mostrar")) {

        botonLeerMas.textContent = "LEER MENOS";

    } else {

        botonLeerMas.textContent = "LEER MÁS";

    }

});


/* ================= MODAL PERSONAJES ================= */

const protagonistas =
    document.querySelectorAll(".protagonista");

const modal =
    document.getElementById("modalPersonaje");

const cerrarModal =
    document.getElementById("cerrarModal");

const modalNombre =
    document.getElementById("modalNombre");

const modalPersonajeNombre =
    document.getElementById("modalPersonajeNombre");

const modalInfo =
    document.getElementById("modalInfo");


protagonistas.forEach(function(protagonista) {

    protagonista.addEventListener("click", function() {

        const nombre =
            protagonista.getAttribute("data-nombre");

        const personaje =
            protagonista.getAttribute("data-personaje");

        const informacion =
            protagonista.getAttribute("data-info");


        modalNombre.textContent = nombre;

        modalPersonajeNombre.textContent = personaje;

        modalInfo.textContent = informacion;


        modal.classList.add("mostrar");

    });

});


/* CERRAR MODAL */

cerrarModal.addEventListener("click", function() {

    modal.classList.remove("mostrar");

});


/* CERRAR MODAL HACIENDO CLICK AFUERA */

modal.addEventListener("click", function(event) {

    if (event.target === modal) {

        modal.classList.remove("mostrar");

    }

});


/* ================= PREGUNTAS FRECUENTES ================= */

const preguntas =
    document.querySelectorAll(".pregunta");


preguntas.forEach(function(pregunta) {

    const boton =
        pregunta.querySelector(".pregunta-boton");

    const signo =
        boton.querySelector("span");


    boton.addEventListener("click", function() {

        pregunta.classList.toggle("activa");


        if (pregunta.classList.contains("activa")) {

            signo.textContent = "−";

        } else {

            signo.textContent = "+";

        }

    });

});