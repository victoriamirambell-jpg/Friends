
/* =========================
   FILTROS DE GALERÍA
========================= */

const botones = document.querySelectorAll(".filtro");
const fotos = document.querySelectorAll(".foto-item");

botones.forEach(function(boton) {

    boton.addEventListener("click", function() {

        // Quitar el estado activo de todos los botones
        botones.forEach(function(boton) {
            boton.classList.remove("activo");
        });

        // Activar el botón seleccionado
        boton.classList.add("activo");

        // Obtener la categoría seleccionada
        const filtro = boton.getAttribute("data-filtro");

        // Mostrar u ocultar las fotos
        fotos.forEach(function(foto) {

            const categoria = foto.getAttribute("data-categoria");

            if (filtro === "todas" || filtro === categoria) {

                foto.style.display = "block";

            } else {

                foto.style.display = "none";

            }

        });

    });

});


/* =========================
   VISOR DE FOTOS
========================= */

const visor = document.getElementById("visor");
const imagenGrande = document.getElementById("imagenGrande");
const cerrar = document.getElementById("cerrar");

fotos.forEach(function(foto) {

    foto.addEventListener("click", function() {

        const imagen = foto.querySelector("img");

        imagenGrande.src = imagen.src;

        imagenGrande.alt = imagen.alt;

        visor.classList.add("mostrar");

    });

});


/* =========================
   CERRAR VISOR
========================= */

cerrar.addEventListener("click", function() {

    visor.classList.remove("mostrar");

});


/* CERRAR HACIENDO CLICK
   FUERA DE LA IMAGEN
*/

visor.addEventListener("click", function(event) {

    if (event.target === visor) {

        visor.classList.remove("mostrar");

    }

});


/* CERRAR CON LA TECLA ESC */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        visor.classList.remove("mostrar");

    }

});