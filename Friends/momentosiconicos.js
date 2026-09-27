/* ==========================================
   DATOS DE LOS MOMENTOS
========================================== */

const momentos = [

    {
        numero: "01",
        categoria: "lugares",
        categoriaTexto: "LUGARES",
        titulo: "EL SOFÁ NARANJA",
        descripcion: "El lugar donde todo comenzó.",
        descripcionCompleta: "El famoso sofá naranja de Central Perk se convirtió en uno de los elementos más reconocibles de Friends. Allí los seis amigos compartieron conversaciones, cafés, discusiones y algunos de los momentos más recordados de la serie.",
        temporada: "Aparece a lo largo de las 10 temporadas",
        personajes: "Los seis protagonistas",
        imagen: "momentos/sofa.jpg"
    },

    {
        numero: "02",
        categoria: "humor",
        categoriaTexto: "HUMOR",
        titulo: "PIVOT!",
        descripcion: "El icónico momento de la mudanza.",
        descripcionCompleta: "Ross intenta ayudar a Chandler y Rachel a subir un sofá por las escaleras. La situación rápidamente se convierte en una de las escenas más cómicas de la serie.",
        temporada: "Temporada 5",
        personajes: "Ross, Rachel y Chandler",
        imagen: "momentos/pivot.jpg"
    },

    {
        numero: "03",
        categoria: "frases",
        categoriaTexto: "FRASES ICÓNICAS",
        titulo: "¡OH, MI DIOS!",
        descripcion: "La reacción que todos recuerdan.",
        descripcionCompleta: "Una expresión característica que se convirtió en una de las reacciones más reconocibles asociadas a Friends.",
        temporada: "A lo largo de la serie",
        personajes: "Chandler Bing",
        imagen: "momentos/oh-dios-mio.jpg"
    },

    {
        numero: "04",
        categoria: "amor",
        categoriaTexto: "AMOR",
        titulo: "ESTAMOS EN UN BREAK",
        descripcion: "Una de las discusiones más recordadas.",
        descripcionCompleta: "La relación entre Ross y Rachel atraviesa uno de sus momentos más importantes cuando una discusión cambia el rumbo de su historia.",
        temporada: "Temporada 3",
        personajes: "Ross y Rachel",
        imagen: "momentos/break.jpg"
    },

    {
        numero: "05",
        categoria: "amor",
        categoriaTexto: "AMOR",
        titulo: "LA PROPUESTA A MÓNICA",
        descripcion: "Un momento inolvidable.",
        descripcionCompleta: "Después de varios malentendidos y sorpresas, Chandler y Monica finalmente llegan a uno de los momentos más importantes de su relación.",
        temporada: "Temporada 6",
        personajes: "Monica y Chandler",
        imagen: "momentos/propuesta-monica.jpg"
    },

    {
        numero: "06",
        categoria: "humor",
        categoriaTexto: "HUMOR",
        titulo: "EL BAILE DE ROSS",
        descripcion: "Cuando Ross lo da todo en la pista.",
        descripcionCompleta: "Ross intenta demostrar sus habilidades para el baile junto a Monica y termina protagonizando una escena que se convirtió en uno de los momentos más divertidos de la serie.",
        temporada: "Temporada 6",
        personajes: "Ross y Monica",
        imagen: "momentos/baile-ross.jpg"
    },

    {
        numero: "07",
        categoria: "amistad",
        categoriaTexto: "AMISTAD",
        titulo: "LA GRABACIÓN DEL VIDEO",
        descripcion: "Chandler y Joey en su mejor interpretación.",
        descripcionCompleta: "Los amigos intentan crear una grabación que termina revelando recuerdos y situaciones que habían quedado atrás.",
        temporada: "Temporada 4",
        personajes: "Ross, Rachel y los demás",
        imagen: "momentos/grabacion-video.jpg"
    },

    {
        numero: "08",
        categoria: "lugares",
        categoriaTexto: "LUGARES",
        titulo: "LA PUERTA MORADA",
        descripcion: "El departamento que fue testigo de todo.",
        descripcionCompleta: "El departamento de Monica se convirtió en uno de los principales escenarios de la serie y en el punto de encuentro de los seis amigos.",
        temporada: "A lo largo de la serie",
        personajes: "Los seis protagonistas",
        imagen: "momentos/puerta-morada.jpg"
    },

    {
        numero: "09",
        categoria: "celebraciones",
        categoriaTexto: "CELEBRACIONES",
        titulo: "LA BODA DE MÓNICA Y CHANDLER",
        descripcion: "El día en que dijeron que sí.",
        descripcionCompleta: "La boda de Monica y Chandler fue uno de los acontecimientos más importantes de Friends y reunió muchas de las historias que habían recorrido la serie.",
        temporada: "Temporada 7",
        personajes: "Monica y Chandler",
        imagen: "momentos/boda.jpg"
    },

    {
        numero: "10",
        categoria: "amor",
        categoriaTexto: "AMOR",
        titulo: "EL DISCURSO DE RACHEL",
        descripcion: "Cuando Rachel decide contar sus sueños.",
        descripcionCompleta: "Rachel atraviesa un momento importante de crecimiento personal mientras intenta encontrar su lugar y tomar decisiones sobre su futuro.",
        temporada: "Temporada 10",
        personajes: "Rachel Green",
        imagen: "momentos/discurso-rachel.jpg"
    },

    {
        numero: "11",
        categoria: "amistad",
        categoriaTexto: "AMISTAD",
        titulo: "EL FINAL EN EL AEROPUERTO",
        descripcion: "El emotivo adiós.",
        descripcionCompleta: "El final de la serie reúne a los personajes en uno de los momentos más emotivos de Friends, cerrando una historia que había acompañado a los espectadores durante diez temporadas.",
        temporada: "Temporada 10",
        personajes: "Rachel y Ross",
        imagen: "momentos/aeropuerto.jpg"
    },

    {
        numero: "12",
        categoria: "humor",
        categoriaTexto: "HUMOR",
        titulo: "YEMEN",
        descripcion: "Una situación completamente absurda.",
        descripcionCompleta: "Una de las situaciones más absurdas protagonizadas por Chandler termina involucrando a los demás personajes y se convierte en otro de los momentos clásicos de la serie.",
        temporada: "Temporada 4",
        personajes: "Chandler y el grupo",
        imagen: "momentos/yemen.jpg"
    }

];


/* ==========================================
   ELEMENTOS
========================================== */

const momentosGrid = document.getElementById("momentosGrid");

const filtros = document.querySelectorAll(".filtro");

const momentoModal = document.getElementById("momentoModal");

const cerrarMomento = document.getElementById("cerrarMomento");

const modalImagen = document.getElementById("modalImagen");

const modalNumero = document.getElementById("modalNumero");

const modalCategoria = document.getElementById("modalCategoria");

const modalTitulo = document.getElementById("modalTitulo");

const modalDescripcion = document.getElementById("modalDescripcion");

const modalTemporada = document.getElementById("modalTemporada");

const modalPersonajes = document.getElementById("modalPersonajes");


/* ==========================================
   MOSTRAR MOMENTOS
========================================== */

function mostrarMomentos(lista) {

    momentosGrid.innerHTML = "";


    lista.forEach(function(momento) {

        const tarjeta = document.createElement("article");

        tarjeta.classList.add("momento-card");


        tarjeta.innerHTML = `

            <span class="momento-numero">
                ${momento.numero}
            </span>

            <div class="momento-imagen">

                <img
                    src="${momento.imagen}"
                    alt="${momento.titulo}"
                >

            </div>

            <div class="momento-categoria">
                ${momento.categoriaTexto}
            </div>

            <h3>
                ${momento.titulo}
            </h3>

            <p>
                ${momento.descripcion}
            </p>

            <button
                class="ver-mas"
                type="button">

                VER MÁS

            </button>

        `;


        momentosGrid.appendChild(tarjeta);


        /* BOTÓN VER MÁS */

        const boton = tarjeta.querySelector(".ver-mas");

        boton.addEventListener("click", function() {

            abrirModalMomento(momento);

        });


        /* IMAGEN */

        const imagen = tarjeta.querySelector("img");

        imagen.addEventListener("error", function() {

            imagen.style.display = "none";

            imagen.parentElement.classList.add("imagen-faltante");

        });


        /* ANIMACIÓN */

        setTimeout(function() {

            tarjeta.classList.add("visible");

        }, 50);

    });

}


/* ==========================================
   ABRIR MODAL DEL MOMENTO
========================================== */

function abrirModalMomento(momento) {

    modalImagen.src = momento.imagen;

    modalImagen.alt = momento.titulo;

    modalNumero.textContent = momento.numero;

    modalCategoria.textContent = momento.categoriaTexto;

    modalTitulo.textContent = momento.titulo;

    modalDescripcion.textContent = momento.descripcionCompleta;

    modalTemporada.textContent =
        "TEMPORADA: " + momento.temporada;

    modalPersonajes.textContent =
        "PERSONAJES: " + momento.personajes;


    momentoModal.style.display = "flex";

    momentoModal.style.opacity = "1";

    momentoModal.style.visibility = "visible";

    document.body.style.overflow = "hidden";

}


/* ==========================================
   CERRAR MODAL DEL MOMENTO
========================================== */

function cerrarModalMomento() {

    momentoModal.style.display = "none";

    momentoModal.style.opacity = "0";

    momentoModal.style.visibility = "hidden";

    document.body.style.overflow = "";

}


cerrarMomento.addEventListener("click", cerrarModalMomento);


momentoModal.addEventListener("click", function(evento) {

    if (evento.target === momentoModal) {

        cerrarModalMomento();

    }

});


/* ==========================================
   FILTROS
========================================== */

filtros.forEach(function(filtro) {

    filtro.addEventListener("click", function() {

        filtros.forEach(function(item) {

            item.classList.remove("activo");

        });


        filtro.classList.add("activo");


        const categoria =
            filtro.getAttribute("data-categoria");


        if (categoria === "todos") {

            mostrarMomentos(momentos);

            return;

        }


        const filtrados =
            momentos.filter(function(momento) {

                return momento.categoria === categoria;

            });


        mostrarMomentos(filtrados);

    });

});


/* ==========================================
   MODAL COMPARTIR
========================================== */

const compartirModal =
    document.getElementById("compartirModal");

const abrirCompartir =
    document.getElementById("abrirCompartir");

const cerrarCompartir =
    document.getElementById("cerrarCompartir");


abrirCompartir.addEventListener("click", function() {

    compartirModal.style.display = "flex";

    compartirModal.style.opacity = "1";

    compartirModal.style.visibility = "visible";

    document.body.style.overflow = "hidden";

});


cerrarCompartir.addEventListener("click", function() {

    compartirModal.style.display = "none";

    compartirModal.style.opacity = "0";

    compartirModal.style.visibility = "hidden";

    document.body.style.overflow = "";

});


compartirModal.addEventListener("click", function(evento) {

    if (evento.target === compartirModal) {

        cerrarCompartir.click();

    }

});


/* ==========================================
   FORMULARIO COMPARTIR
========================================== */

const compartirForm =
    document.getElementById("compartirForm");

const mensajeCompartido =
    document.getElementById("mensajeCompartido");


compartirForm.addEventListener("submit", function(evento) {

    evento.preventDefault();


    mensajeCompartido.textContent =
        "¡Gracias por compartir tu momento favorito!";


    compartirForm.reset();

});


/* ==========================================
   LOGIN
========================================== */

const loginButton =
    document.getElementById("loginButton");

const loginModal =
    document.getElementById("loginModal");

const cerrarLogin =
    document.getElementById("cerrarLogin");


loginButton.addEventListener("click", function(evento) {

    evento.preventDefault();

    loginModal.style.display = "flex";

    loginModal.style.opacity = "1";

    loginModal.style.visibility = "visible";

    document.body.style.overflow = "hidden";

});


cerrarLogin.addEventListener("click", function() {

    loginModal.style.display = "none";

    loginModal.style.opacity = "0";

    loginModal.style.visibility = "hidden";

    document.body.style.overflow = "";

});


loginModal.addEventListener("click", function(evento) {

    if (evento.target === loginModal) {

        cerrarLogin.click();

    }

});


/* ==========================================
   FORMULARIO LOGIN
========================================== */

const loginForm =
    document.getElementById("loginForm");

const loginMensaje =
    document.getElementById("loginMensaje");


loginForm.addEventListener("submit", function(evento) {

    evento.preventDefault();


    loginMensaje.textContent =
        "Inicio de sesión simulado correctamente.";


    loginForm.reset();

});


/* ==========================================
   MENÚ CELULAR
========================================== */

const menuToggle =
    document.getElementById("menuToggle");

const nav =
    document.getElementById("nav");


menuToggle.addEventListener("click", function() {

    nav.classList.toggle("abierto");

});


/* ==========================================
   CERRAR CON ESC
========================================== */

document.addEventListener("keydown", function(evento) {

    if (evento.key === "Escape") {

        if (momentoModal.style.display === "flex") {

            cerrarModalMomento();

        }

        if (compartirModal.style.display === "flex") {

            cerrarCompartir.click();

        }

        if (loginModal.style.display === "flex") {

            cerrarLogin.click();

        }

    }

});


/* ==========================================
   INICIAR PÁGINA
========================================== */

mostrarMomentos(momentos);