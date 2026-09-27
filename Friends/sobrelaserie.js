/* =========================================
   MENÚ RESPONSIVE
========================================= */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", function () {

        nav.classList.toggle("abierto");

    });

}


/* MODAL "LEER MÁS" */

const leerMas = document.getElementById("leerMas");
const modalInfo = document.getElementById("modalInfo");
const cerrarInfo = document.getElementById("cerrarInfo");

if (leerMas && modalInfo && cerrarInfo) {

    leerMas.addEventListener("click", function () {

        modalInfo.style.display = "flex";
        modalInfo.style.opacity = "1";
        modalInfo.style.visibility = "visible";

    });

    cerrarInfo.addEventListener("click", function () {

        modalInfo.style.display = "none";

    });

    modalInfo.addEventListener("click", function (evento) {

        if (evento.target === modalInfo) {
            modalInfo.style.display = "none";
        }

    });
}


/* =========================================
   INFORMACIÓN DE LAS TEMPORADAS
========================================= */

const temporadas = {

    1: {
        titulo: "Temporada 1",
        texto: "La primera temporada presenta a Rachel, Ross, Monica, Chandler, Joey y Phoebe. Rachel comienza una nueva vida en Nueva York y vuelve a formar parte del grupo de amigos."
    },

    2: {
        titulo: "Temporada 2",
        texto: "La segunda temporada continúa desarrollando las relaciones entre los personajes y profundiza especialmente en la historia de Ross y Rachel."
    },

    3: {
        titulo: "Temporada 3",
        texto: "La tercera temporada presenta nuevos conflictos y cambios en las relaciones del grupo, mientras los seis amigos continúan atravesando situaciones cotidianas."
    },

    4: {
        titulo: "Temporada 4",
        texto: "La cuarta temporada incluye grandes cambios en las relaciones entre los personajes y prepara algunos de los acontecimientos más importantes de la serie."
    },

    5: {
        titulo: "Temporada 5",
        texto: "La quinta temporada desarrolla nuevas relaciones, decisiones y situaciones que modifican la dinámica del grupo."
    },

    6: {
        titulo: "Temporada 6",
        texto: "La sexta temporada continúa las historias personales de los protagonistas y presenta nuevos momentos importantes para sus vidas."
    },

    7: {
        titulo: "Temporada 7",
        texto: "La séptima temporada continúa explorando las relaciones, amistades y cambios personales de los seis protagonistas."
    },

    8: {
        titulo: "Temporada 8",
        texto: "La octava temporada incorpora nuevos acontecimientos y profundiza en la vida de los personajes mientras enfrentan importantes cambios."
    },

    9: {
        titulo: "Temporada 9",
        texto: "La novena temporada acerca a los personajes hacia una nueva etapa de sus vidas y prepara el camino para el final de la serie."
    },

    10: {
        titulo: "Temporada 10",
        texto: "La décima temporada cierra la historia de Friends y muestra cómo cada uno de los protagonistas comienza una nueva etapa."

    }

};


/* MODAL DE TEMPORADAS */

const tarjetasTemporadas = document.querySelectorAll(".temporada");

const modalTemporada = document.getElementById("modalTemporada");

const cerrarTemporada = document.getElementById("cerrarTemporada");

const tituloTemporada = document.getElementById("tituloTemporada");

const textoTemporada = document.getElementById("textoTemporada");


if (
    tarjetasTemporadas.length > 0 &&
    modalTemporada &&
    cerrarTemporada &&
    tituloTemporada &&
    textoTemporada
) {

    tarjetasTemporadas.forEach(function (tarjeta) {

        tarjeta.addEventListener("click", function () {

            const numero = tarjeta.getAttribute("data-temporada");

            const informacion = temporadas[numero];

            if (informacion) {

                tituloTemporada.textContent = informacion.titulo;

                textoTemporada.textContent = informacion.texto;

                modalTemporada.style.display = "flex";
                modalTemporada.style.opacity = "1";
                modalTemporada.style.visibility = "visible";

            }

        });

    });


    cerrarTemporada.addEventListener("click", function () {

        modalTemporada.style.display = "none";

    });


    modalTemporada.addEventListener("click", function (evento) {

        if (evento.target === modalTemporada) {

            modalTemporada.style.display = "none";

        }

    });

}