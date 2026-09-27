/* ==================================================
   INFORMACIÓN DE LOS PERSONAJES
================================================== */

const personajesInfo = {

    monica: {
        nombre: "MONICA GELLER",
        actor: "Interpretada por Courteney Cox",
        imagen: "personajes/monicag.jpg",
        descripcion:
            "Monica es organizada, competitiva y perfeccionista. " +
            "Le encanta cocinar, mantener todo bajo control y cuidar " +
            "de sus amigos. A lo largo de la serie, su personalidad " +
            "fuerte se combina con un gran sentido del humor y una " +
            "enorme sensibilidad."
    },

    rachel: {
        nombre: "RACHEL GREEN",
        actor: "Interpretada por Jennifer Aniston",
        imagen: "personajes/rachelg.webp",
        descripcion:
            "Rachel comienza la serie dejando atrás una vida cómoda " +
            "para independizarse y construir su propio camino. " +
            "Es divertida, carismática y apasionada por la moda. " +
            "Su evolución personal y profesional es uno de los " +
            "grandes recorridos de la serie."
    },

    ross: {
        nombre: "ROSS GELLER",
        actor: "Interpretado por David Schwimmer",
        imagen: "personajes/rossg.jpg",
        descripcion:
            "Ross es paleontólogo, inteligente y apasionado por la " +
            "ciencia. También es conocido por su personalidad algo " +
            "insegura y por sus relaciones sentimentales. Es el " +
            "hermano mayor de Monica y uno de los personajes más " +
            "importantes del grupo."
    },

    chandler: {
        nombre: "CHANDLER BING",
        actor: "Interpretado por Matthew Perry",
        imagen: "personajes/chandlerb.jpg",
        descripcion:
            "Chandler utiliza el sarcasmo y el humor como una forma " +
            "de enfrentar situaciones incómodas. Es divertido, " +
            "sensible y muy leal a sus amigos. Su relación con Monica " +
            "se convierte en una de las historias centrales de la serie."
    },

    joey: {
        nombre: "JOEY TRIBBIANI",
        actor: "Interpretado por Matt LeBlanc",
        imagen: "personajes/joeyt.jpg",
        descripcion:
            "Joey es un actor que persigue constantemente su sueño " +
            "de triunfar en la televisión. Es espontáneo, confiado " +
            "y muy divertido. Aunque puede parecer ingenuo, demuestra " +
            "ser un amigo extremadamente leal y afectuoso."
    },

    phoebe: {
        nombre: "PHOEBE BUFFAY",
        actor: "Interpretada por Lisa Kudrow",
        imagen: "personajes/phoebeb.jpg",
        descripcion:
            "Phoebe es probablemente el personaje más particular " +
            "del grupo. Es creativa, independiente y tiene una " +
            "personalidad muy original. Es cantante y compositora, " +
            "y sus experiencias de vida hacen que tenga una mirada " +
            "muy particular sobre el mundo."
    }

};


/* ==================================================
   MODAL DE PERSONAJES
================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const botonesPersonaje =
        document.querySelectorAll(".personaje-boton");

    const personajeModal =
        document.getElementById("personajeModal");

    const cerrarPersonaje =
        document.getElementById("cerrarPersonaje");

    const modalImagen =
        document.getElementById("modalPersonajeImagen");

    const modalNombre =
        document.getElementById("modalPersonajeNombre");

    const modalDescripcion =
        document.getElementById("modalPersonajeDescripcion");


    /* ABRIR MODAL */

    botonesPersonaje.forEach(function (boton) {

        boton.addEventListener("click", function () {

            const personajeSeleccionado =
                boton.dataset.personaje;

            const personaje =
                personajesInfo[personajeSeleccionado];


            if (!personaje) {
                return;
            }


            modalImagen.src =
                personaje.imagen;

            modalImagen.alt =
                personaje.nombre;


            modalNombre.textContent =
                personaje.nombre;


            modalDescripcion.innerHTML =
                "<strong>" +
                personaje.actor +
                "</strong><br><br>" +
                personaje.descripcion;


            personajeModal.classList.add("activo");

            document.body.style.overflow = "hidden";

        });

    });


    /* CERRAR CON X */

    if (cerrarPersonaje) {

        cerrarPersonaje.addEventListener("click", function () {

            personajeModal.classList.remove("activo");

            document.body.style.overflow = "";

        });

    }


    /* CERRAR HACIENDO CLICK AFUERA */

    if (personajeModal) {

        personajeModal.addEventListener("click", function (evento) {

            if (evento.target === personajeModal) {

                personajeModal.classList.remove("activo");

                document.body.style.overflow = "";

            }

        });

    }


    /* ==================================================
       ACTORES INVITADOS
    ================================================== */

    const verActores =
        document.getElementById("verActores");

    const actoresExtra =
        document.getElementById("actoresExtra");


    if (verActores && actoresExtra) {

        verActores.addEventListener("click", function () {

            actoresExtra.classList.toggle("activo");

            if (actoresExtra.classList.contains("activo")) {

                verActores.textContent =
                    "MOSTRAR MENOS";

            } else {

                verActores.textContent =
                    "VER TODOS LOS ACTORES INVITADOS";

            }

        });

    }


    /* ==================================================
       ESC PARA CERRAR
    ================================================== */

    document.addEventListener("keydown", function (evento) {

        if (evento.key === "Escape") {

            if (personajeModal) {

                personajeModal.classList.remove("activo");

                document.body.style.overflow = "";

            }

        }

    });

});