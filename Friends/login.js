/* ==================================================
   CAMBIAR ENTRE LOGIN Y REGISTRO
================================================== */

const botonLogin =
    document.getElementById("botonLogin");

const botonRegistro =
    document.getElementById("botonRegistro");

const formLogin =
    document.getElementById("formLogin");

const formRegistro =
    document.getElementById("formRegistro");


botonLogin.addEventListener("click", function() {

    formLogin.classList.add("activo-form");

    formRegistro.classList.remove("activo-form");

    botonLogin.classList.add("activo");

    botonRegistro.classList.remove("activo");

});


botonRegistro.addEventListener("click", function() {

    formRegistro.classList.add("activo-form");

    formLogin.classList.remove("activo-form");

    botonRegistro.classList.add("activo");

    botonLogin.classList.remove("activo");

});



/* ==================================================
   MOSTRAR CONTRASEÑA LOGIN
================================================== */

const mostrarLogin =
    document.getElementById("mostrarLogin");

const passwordLogin =
    document.getElementById("passwordLogin");


mostrarLogin.addEventListener("click", function() {

    if (passwordLogin.type === "password") {

        passwordLogin.type = "text";

        mostrarLogin.textContent = "🙈";

    } else {

        passwordLogin.type = "password";

        mostrarLogin.textContent = "👁";

    }

});



/* ==================================================
   MOSTRAR CONTRASEÑA REGISTRO
================================================== */

const mostrarRegistro =
    document.getElementById("mostrarRegistro");

const passwordRegistro =
    document.getElementById("passwordRegistro");


mostrarRegistro.addEventListener("click", function() {

    if (passwordRegistro.type === "password") {

        passwordRegistro.type = "text";

        mostrarRegistro.textContent = "🙈";

    } else {

        passwordRegistro.type = "password";

        mostrarRegistro.textContent = "👁";

    }

});



/* ==================================================
   ELEMENTOS DEL PERFIL
================================================== */

const modalPerfil =
    document.getElementById("modalPerfil");

const fotoPerfil =
    document.getElementById("fotoPerfil");

const previewFoto =
    document.getElementById("previewFoto");

const iconoFoto =
    document.getElementById("iconoFoto");

const nombrePerfil =
    document.getElementById("nombrePerfil");

const errorPerfil =
    document.getElementById("errorPerfil");

const guardarPerfil =
    document.getElementById("guardarPerfil");



/* ==================================================
   FUNCIÓN PARA ABRIR EL PERFIL
================================================== */

function abrirPerfil(nombre, email) {

    nombrePerfil.value = nombre;

    errorPerfil.textContent = "";

    modalPerfil.classList.add("mostrar");

    const usuarioGuardado =
        localStorage.getItem("usuarioFriends");


    if (usuarioGuardado) {

        const usuario =
            JSON.parse(usuarioGuardado);


        if (usuario.photo) {

            previewFoto.src = usuario.photo;

            previewFoto.style.display = "block";

            iconoFoto.style.display = "none";

        }

    }

}



/* ==================================================
   ELEGIR FOTO
================================================== */

fotoPerfil.addEventListener("change", function() {

    const archivo = fotoPerfil.files[0];


    if (!archivo) {

        return;

    }


    const lector = new FileReader();


    lector.addEventListener("load", function() {

        previewFoto.src = lector.result;

        previewFoto.style.display = "block";

        iconoFoto.style.display = "none";

    });


    lector.readAsDataURL(archivo);

});



/* ==================================================
   LOGIN
================================================== */

const loginForm =
    document.getElementById("loginForm");


loginForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const email =
        document.getElementById("emailLogin").value.trim();

    const password =
        document.getElementById("passwordLogin").value.trim();


    const errorEmail =
        document.getElementById("errorEmailLogin");

    const errorPassword =
        document.getElementById("errorPasswordLogin");

    const mensaje =
        document.getElementById("mensajeLogin");


    errorEmail.textContent = "";

    errorPassword.textContent = "";

    mensaje.textContent = "";


    let correcto = true;


    if (email === "") {

        errorEmail.textContent =
            "Ingresá tu email.";

        correcto = false;

    }


    if (password === "") {

        errorPassword.textContent =
            "Ingresá tu contraseña.";

        correcto = false;

    }


    if (correcto) {

        /*
        Si ya existe un usuario guardado,
        usamos su nombre.

        Si no existe, usamos la parte
        anterior al @ del email.
        */

        let nombre = email.split("@")[0];


        const usuarioGuardado =
            localStorage.getItem("usuarioFriends");


        if (usuarioGuardado) {

            const usuario =
                JSON.parse(usuarioGuardado);

            nombre = usuario.name;

        }


        /*
        Guardamos temporalmente el email.
        */

        localStorage.setItem(
            "emailTemporal",
            email
        );


        abrirPerfil(nombre, email);

    }

});



/* ==================================================
   REGISTRO
================================================== */

const registroForm =
    document.getElementById("registroForm");


registroForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const nombre =
        document.getElementById("nombre").value.trim();

    const email =
        document.getElementById("emailRegistro").value.trim();

    const password =
        document.getElementById("passwordRegistro").value.trim();

    const terminos =
        document.getElementById("terminos").checked;


    const errorNombre =
        document.getElementById("errorNombre");

    const errorEmail =
        document.getElementById("errorEmailRegistro");

    const errorPassword =
        document.getElementById("errorPasswordRegistro");

    const mensaje =
        document.getElementById("mensajeRegistro");


    errorNombre.textContent = "";

    errorEmail.textContent = "";

    errorPassword.textContent = "";

    mensaje.textContent = "";


    let correcto = true;


    if (nombre === "") {

        errorNombre.textContent =
            "Ingresá tu nombre.";

        correcto = false;

    }


    if (email === "") {

        errorEmail.textContent =
            "Ingresá tu email.";

        correcto = false;

    }


    if (password === "") {

        errorPassword.textContent =
            "Creá una contraseña.";

        correcto = false;

    }


    if (
        password.length > 0 &&
        password.length < 6
    ) {

        errorPassword.textContent =
            "La contraseña debe tener al menos 6 caracteres.";

        correcto = false;

    }


    if (!terminos) {

        mensaje.textContent =
            "Debés aceptar los términos y condiciones.";

        mensaje.style.color =
            "#c85c5c";

        correcto = false;

    }


    if (correcto) {

        /*
        Guardamos el email temporalmente
        para usarlo en el perfil.
        */

        localStorage.setItem(
            "emailTemporal",
            email
        );


        /*
        Abrimos la personalización
        del perfil.
        */

        abrirPerfil(nombre, email);

    }

});



/* ==================================================
   GUARDAR PERFIL
================================================== */

guardarPerfil.addEventListener("click", function() {

    const nombre =
        nombrePerfil.value.trim();


    errorPerfil.textContent = "";


    if (nombre === "") {

        errorPerfil.textContent =
            "Ingresá tu nombre.";

        return;

    }


    let email =
        localStorage.getItem("emailTemporal");


    if (!email) {

        email = "";

    }


    /*
    Obtenemos la foto.

    Si no se eligió una nueva foto,
    buscamos una que ya estuviera guardada.
    */

    let foto = "";


    if (
        previewFoto.style.display === "block" &&
        previewFoto.src !== ""
    ) {

        foto = previewFoto.src;

    }


    /*
    Creamos el objeto del usuario.
    */

    const usuario = {

        name: nombre,

        email: email,

        photo: foto

    };


    /*
    Guardamos los datos en el navegador.
    */

    localStorage.setItem(
        "usuarioFriends",
        JSON.stringify(usuario)
    );


    /*
    Eliminamos el email temporal.
    */

    localStorage.removeItem(
        "emailTemporal"
    );


    /*
    Volvemos a la página principal.
    */

    window.location.href =
        "index.html";

});



/* ==================================================
   RECUPERAR CONTRASEÑA
================================================== */

const olvidastePassword =
    document.getElementById("olvidastePassword");

const modalRecuperar =
    document.getElementById("modalRecuperar");

const cerrarRecuperar =
    document.getElementById("cerrarRecuperar");

const recuperarForm =
    document.getElementById("recuperarForm");


/* ABRIR */

olvidastePassword.addEventListener("click", function() {

    modalRecuperar.classList.add("mostrar");

});



/* CERRAR */

cerrarRecuperar.addEventListener("click", function() {

    modalRecuperar.classList.remove("mostrar");

});



/* CERRAR HACIENDO CLICK AFUERA */

modalRecuperar.addEventListener("click", function(event) {

    if (event.target === modalRecuperar) {

        modalRecuperar.classList.remove("mostrar");

    }

});



/* ENVIAR EMAIL */

recuperarForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const email =
        document.getElementById("emailRecuperar")
        .value
        .trim();


    const error =
        document.getElementById("errorRecuperar");


    const mensaje =
        document.getElementById("mensajeRecuperar");


    error.textContent = "";

    mensaje.textContent = "";


    if (email === "") {

        error.textContent =
            "Ingresá tu email.";

        return;

    }


    mensaje.textContent =
        "¡Listo! Te enviamos las instrucciones para recuperar tu contraseña.";

});